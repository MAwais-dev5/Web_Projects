import { Routes, Route } from 'react-router-dom'
// import Layout from './components/Layout'
import Home from './pages/Home'
// import About from './pages/About'
// import Gallery from './pages/Gallery'
// import Registration from './pages/Registration'
// import Contact from './pages/Contact'
// import FacultyList from './pages/FacultyList'
// import SubjectFaculty from './pages/SubjectFaculty'

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="registration" element={<Registration />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faculty" element={<FacultyList />} />
        <Route path="faculty/:subject" element={<SubjectFaculty />} />
      </Route> */}
    </Routes>
  )
}

export default App
