// src/pages/SubjectFaculty.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import FacultyCard from '../components/FacultyCard';
import { facultyData, subjects } from '../data/facultyData';

const SubjectFaculty = () => {
  const { subject } = useParams();
  const subjectData = facultyData[subject] || [];
  const subjectName = subjects.find(s => s.path === subject)?.name || subject;

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 capitalize">{subjectName} Faculty</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our experienced {subjectName.toLowerCase()} department faculty members
          </p>
        </div>

        {/* Faculty Count */}
        <div className="mb-8 text-center">
          <div className="inline-block bg-primary-100 text-primary-700 px-6 py-2 rounded-full font-semibold">
            {subjectData.length} Faculty Members
          </div>
        </div>

        {/* Faculty Grid */}
        {subjectData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subjectData.map((faculty) => (
              <FacultyCard key={faculty.id} faculty={faculty} />
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
            <p className="text-gray-600">No faculty members listed for this subject yet.</p>
          </div>
        )}

        {/* Department Info */}
        <div className="mt-16 card p-8">
          <h2 className="text-2xl font-bold mb-6">About {subjectName} Department</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Facilities</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  Modern Laboratory
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  Research Library
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  Digital Classroom
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Achievements</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  95% Board Exam Success
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  Research Publications
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  Olympiad Winners
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Courses Offered</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  Regular Curriculum
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  Advanced Placement
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 mr-2">•</span>
                  Extracurricular Clubs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectFaculty;