// src/pages/FacultyList.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { subjects, facultyData } from '../data/facultyData';

const FacultyList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [experienceFilter, setExperienceFilter] = useState('all');

  // Get all faculty members
  const allFaculty = Object.values(facultyData).flat();

  // Filter faculty based on search and filters
  const filteredFaculty = allFaculty.filter(faculty => {
    const matchesSearch = 
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesSubject = 
      selectedSubject === 'all' || 
      faculty.subject.toLowerCase().includes(selectedSubject.toLowerCase());
    
    const matchesExperience = () => {
      if (experienceFilter === 'all') return true;
      if (experienceFilter === 'junior') return parseInt(faculty.experience) <= 5;
      if (experienceFilter === 'mid') return parseInt(faculty.experience) > 5 && parseInt(faculty.experience) <= 10;
      if (experienceFilter === 'senior') return parseInt(faculty.experience) > 10;
      return true;
    };

    return matchesSearch && matchesSubject && matchesExperience();
  });

  // Get unique subjects
  const uniqueSubjects = [...new Set(allFaculty.map(f => f.subject))];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Faculty</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of dedicated and experienced educators committed to student success
          </p>
        </div>

        {/* Filters */}
        <div className="card p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <input
                type="text"
                placeholder="Search faculty by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input-field"
              />
            </div>

            {/* Subject Filter */}
            <div>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="input-field"
              >
                <option value="all">All Subjects</option>
                {uniqueSubjects.map((subject, index) => (
                  <option key={index} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            {/* Experience Filter */}
            <div>
              <select
                value={experienceFilter}
                onChange={(e) => setExperienceFilter(e.target.value)}
                className="input-field"
              >
                <option value="all">All Experience Levels</option>
                <option value="junior">Junior (0-5 years)</option>
                <option value="mid">Mid (6-10 years)</option>
                <option value="senior">Senior (10+ years)</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {filteredFaculty.length} of {allFaculty.length} faculty members
          </div>
        </div>

        {/* Quick Subject Navigation */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Browse by Department</h3>
          <div className="flex flex-wrap gap-2">
            {subjects.map((subject) => (
              <Link
                key={subject.id}
                to={`/faculty/${subject.path}`}
                className="px-4 py-2 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-600 rounded-full transition duration-300"
              >
                {subject.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Faculty Grid */}
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFaculty.map((faculty) => (
              <Link 
                key={faculty.id} 
                to={`/faculty/${faculty.subject.toLowerCase().replace(/\s+/g, '-')}`}
                className="card p-4 hover:shadow-xl transition duration-300 group"
              >
                <div className="flex items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <img
                      src={faculty.image}
                      alt={faculty.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 group-hover:text-primary-600 transition">
                      {faculty.name}
                    </h3>
                    <p className="text-sm text-primary-600">{faculty.subject}</p>
                    <p className="text-xs text-gray-500">{faculty.experience} experience</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">No Faculty Found</h3>
            <p className="text-gray-600">Try adjusting your search criteria.</p>
          </div>
        )}

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="card p-6">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {allFaculty.length}
            </div>
            <div className="text-gray-700">Total Faculty</div>
          </div>
          
          <div className="card p-6">
            <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-gray-700">Average Experience</div>
          </div>
          
          <div className="card p-6">
            <div className="text-3xl font-bold text-primary-600 mb-2">7</div>
            <div className="text-gray-700">Departments</div>
          </div>
          
          <div className="card p-6">
            <div className="text-3xl font-bold text-primary-600 mb-2">25</div>
            <div className="text-gray-700">Ph.D. Holders</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyList;