// client/src/pages/Gallery.jsx
import React, { useEffect, useMemo, useState } from "react";
import "../styles/gallery.css";
import {
  Image as ImageIcon,
  Video,
  Calendar,
  Filter,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Download,
  Share2,
  Heart,
  Eye,
  Grid,
  List,
  MapPin,
  PlusCircle,
  UploadCloud,
  Folder
} from "lucide-react";

// ====== DYNAMIC IMAGE IMPORTS (VITE) ======
const importGalleryImages = () => {
  const modules = import.meta.glob("../images/gallery/sports-day-*.jpg", { eager: true });
  return Object.values(modules).map((m, idx) => ({
    id: `m${idx + 1}`,
    type: "image",
    src: m.default,
    thumbnail: m.default
  }));
};

const sportsImages = importGalleryImages();

// ====== INITIAL ALBUMS ======
const initialAlbums = [
  {
    id: "alb-202403-sports",
    title: "Annual Sports Day 2024",
    category: "Sports",
    date: "2024-03-15",
    location: "School Sports Ground",
    description: "Students participating in various athletic events during our annual sports day celebration.",
    media: sportsImages,
    views: 1250,
    likes: 348
  },
  {
    id: "alb-202402-cultural",
    title: "Cultural Festival Highlights",
    category: "Cultural",
    date: "2024-02-20",
    location: "Main Auditorium",
    description: "A glimpse into our cultural festival featuring traditional dances and performances.",
    media: [
      { id: "v1", type: "video", src: "/videos/cultural-festival.mp4", thumbnail: "/images/gallery/thumbs/cultural-fest.jpg" }
    ],
    views: 2100,
    likes: 567
  }
];

const categoryList = [
  { id: "all", label: "All" },
  { id: "Sports", label: "Sports" },
  { id: "Cultural", label: "Cultural" },
  { id: "Academic", label: "Academic" },
  { id: "Ceremony", label: "Ceremony" },
  { id: "Annual Day", label: "Annual Day" },
  { id: "Trip", label: "Trips" }
];

const Gallery = () => {
  const [albums, setAlbums] = useState(initialAlbums);
  const [category, setCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");
  const [query, setQuery] = useState("");
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [lightbox, setLightbox] = useState({ open: false, albumId: null, index: 0 });
  const [uploadOpen, setUploadOpen] = useState(false);
  const [uploadTargetAlbumId, setUploadTargetAlbumId] = useState("new");
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadCategory, setUploadCategory] = useState("Sports");
  const [uploadFiles, setUploadFiles] = useState([]);
  const [likesMap, setLikesMap] = useState({});
  const [resultsCount, setResultsCount] = useState(0);

  // ===== FILTER & SEARCH =====
  const filtered = useMemo(() => {
    let list = albums;
    if (category !== "all") list = list.filter(a => a.category === category);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(a =>
        a.title.toLowerCase().includes(q) ||
        a.description?.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q) ||
        a.location?.toLowerCase().includes(q)
      );
    }
    setResultsCount(list.length);
    return list;
  }, [albums, category, query]);

  // ===== LIGHTBOX =====
  const openLightbox = (albumId, index = 0) => {
    setLightbox({ open: true, albumId, index });
    document.body.style.overflow = "hidden";
  };
  const closeLightbox = () => {
    setLightbox({ open: false, albumId: null, index: 0 });
    document.body.style.overflow = "auto";
  };
  const navigateLightbox = (dir) => {
    const album = albums.find(a => a.id === lightbox.albumId);
    if (!album) return;
    const len = album.media.length;
    let next = lightbox.index;
    next = dir === "next" ? (next + 1) % len : (next - 1 + len) % len;
    setLightbox(s => ({ ...s, index: next }));
  };

  // ===== ALBUM DETAIL =====
  const openAlbum = (albumId) => setActiveAlbum(albums.find(a => a.id === albumId) || null);
  const closeAlbum = () => setActiveAlbum(null);

  // ===== LIKE =====
  const toggleLike = (albumId) => {
    setAlbums(prev =>
      prev.map(a => a.id === albumId ? { ...a, likes: (a.likes || 0) + (likesMap[albumId] ? -1 : 1) } : a)
    );
    setLikesMap(m => ({ ...m, [albumId]: !m[albumId] }));
  };

  // ===== UPLOAD HANDLER =====
  const handleFilesSelected = (e) => {
    const files = Array.from(e.target.files || []);
    const accepted = files.filter(f => (f.type.startsWith("image/") || f.type.startsWith("video/")) && f.size <= 50 * 1024 * 1024)
      .map(f => ({
        file: f,
        src: URL.createObjectURL(f),
        type: f.type.startsWith("video/") ? "video" : "image",
        id: `tmp-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
      }));
    setUploadFiles(accepted);
  };
  const resetUploadModal = () => {
    uploadFiles.forEach(f => URL.revokeObjectURL(f.src));
    setUploadFiles([]);
    setUploadTitle("");
    setUploadCategory("Sports");
    setUploadTargetAlbumId("new");
  };
  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!uploadFiles.length) return alert("Please select media files.");
    const albumId = uploadTargetAlbumId === "new" ? `alb-${Date.now()}` : uploadTargetAlbumId;
    const newMedia = uploadFiles.map(f => ({
      id: f.id,
      type: f.type,
      src: f.src,
      thumbnail: f.type === "image" ? f.src : f.src
    }));
    setAlbums(prev => uploadTargetAlbumId === "new" ? [
      {
        id: albumId,
        title: uploadTitle || "Untitled Album",
        category: uploadCategory,
        date: new Date().toISOString().slice(0, 10),
        location: "",
        description: `${newMedia.length} item(s) uploaded.`,
        media: newMedia,
        views: 0,
        likes: 0
      }, ...prev
    ] : prev.map(a => a.id === albumId ? { ...a, media: [...newMedia, ...a.media] } : a));
    resetUploadModal();
    setUploadOpen(false);
  };

  useEffect(() => () => uploadFiles.forEach(f => URL.revokeObjectURL(f.src)), [uploadFiles]);

  const formatDate = (d) => d ? new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }) : "";

  return (
    <div className="school-gallery-page">
      {/* HERO */}
      <header className="gallery-hero">
        <div className="hero-inner container">
          <div className="hero-left">
            <h1>School Gallery</h1>
            <p>Memories from events, sports, trips, and academic highlights — captured and celebrated.</p>
            <div className="hero-actions">
              <button className="btn primary" onClick={() => setUploadOpen(true)}><UploadCloud size={18}/> Upload Media</button>
              <button className="btn outline" onClick={() => { setUploadTargetAlbumId("new"); setUploadOpen(true); }}><PlusCircle size={18}/> New Album</button>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-stats">
              <div><strong>{albums.length}</strong><span>Albums</span></div>
              <div><strong>{albums.reduce((s,a)=>s+(a.media?.length||0),0)}</strong><span>Items</span></div>
              <div><strong>{albums.reduce((s,a)=>s+(a.views||0),0)}</strong><span>Views</span></div>
            </div>
          </div>
        </div>
      </header>

      {/* FILTER BAR */}
      <section className="filter-bar container">
        <div className="category-tabs">
          {categoryList.map(c => (
            <button key={c.id} className={`tab ${category===c.id?"active":""}`} onClick={()=>setCategory(c.id)}>
              {c.id==="all"?<Folder size={14}/>:null}<span>{c.label}</span>
            </button>
          ))}
        </div>
        <div className="filter-right">
          <div className="search"><Search size={16}/><input placeholder="Search..." value={query} onChange={e=>setQuery(e.target.value)}/></div>
          <div className="view-toggle">
            <button className={`view-btn ${viewMode==="grid"?"active":""}`} onClick={()=>setViewMode("grid")} title="Grid"><Grid size={16}/></button>
            <button className={`view-btn ${viewMode==="list"?"active":""}`} onClick={()=>setViewMode("list")} title="List"><List size={16}/></button>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <main className="gallery-container container">
        {filtered.length===0 ? (
          <div className="no-results"><Search size={64}/><h3>No albums found</h3></div>
        ) : (
          <div className={`albums ${viewMode}`}>
            {filtered.map(alb => (
              <article key={alb.id} className="album-card">
                <div className="album-media" onClick={()=>openAlbum(alb.id)}>
                  <div className="thumb-collage">
                    {alb.media.slice(0,3).map((m,i)=>(
                      <div key={m.id} className={`thumb thumb-${i}`}>
                        {m.type==="video"?<><img src={m.thumbnail||m.src} alt={alb.title+" video"} /><div className="video-overlay"><Play size={36}/></div></>:<img src={m.thumbnail||m.src} alt={alb.title+` photo ${i+1}`}/>}
                      </div>
                    ))}
                    {alb.media.length===0 && <div className="thumb placeholder"><ImageIcon size={48}/></div>}
                  </div>
                </div>
                <div className="album-body">
                  <h3>{alb.title}</h3>
                  <div className="album-meta">
                    <span className="category-pill">{alb.category}</span>
                    <span>{formatDate(alb.date)}</span>
                    <span><MapPin size={12}/>{alb.location||"—"}</span>
                  </div>
                  <div className="stats">
                    <button className={`icon-btn like ${likesMap[alb.id]?"liked":""}`} onClick={()=>toggleLike(alb.id)}><Heart size={16}/>{alb.likes}</button>
                    <button className="icon-btn" onClick={()=>openLightbox(alb.id,0)}><Play size={16}/> Preview</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="gallery-footer container">
        <div>Showing <strong>{resultsCount}</strong> {resultsCount===1?"album":"albums"}</div>
        <div className="credits">School Gallery • Built for school's website</div>
      </footer>
    </div>
  );
};

export default Gallery;
