import React from 'react';
import { Users, Mail, Phone, BookOpen } from 'lucide-react';

const Faculty: React.FC = () => {
  const departments = [
    {
      name: 'Computer Science',
      faculty: [
        {
          name: 'Dr. Sarah Johnson',
          designation: 'Head of Department',
          qualification: 'Ph.D. in Computer Science',
          specialization: 'Artificial Intelligence',
          email: 'sarah.johnson@dav.edu',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Prof. Michael Chen',
          designation: 'Associate Professor',
          qualification: 'Ph.D. in Data Science',
          specialization: 'Machine Learning',
          email: 'michael.chen@dav.edu',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
      ]
    },
    {
      name: 'Physics',
      faculty: [
        {
          name: 'Dr. Robert Wilson',
          designation: 'Professor',
          qualification: 'Ph.D. in Theoretical Physics',
          specialization: 'Quantum Mechanics',
          email: 'robert.wilson@dav.edu',
          image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        },
        {
          name: 'Dr. Emily Brown',
          designation: 'Assistant Professor',
          qualification: 'Ph.D. in Applied Physics',
          specialization: 'Solid State Physics',
          email: 'emily.brown@dav.edu',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex items-center mb-8">
        <Users className="h-8 w-8 text-blue-600 mr-2" />
        <h2 className="text-3xl font-bold">Faculty Directory</h2>
      </div>

      <div className="space-y-12">
        {departments.map((dept, index) => (
          <div key={index}>
            <h3 className="text-2xl font-semibold mb-6 pb-2 border-b">
              Department of {dept.name}
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {dept.faculty.map((member, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full md:w-48 object-cover"
                        src={member.image}
                        alt={member.name}
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-2">
                        <h4 className="text-xl font-semibold">{member.name}</h4>
                        <p className="text-blue-600">{member.designation}</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                          <span>{member.qualification}</span>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-4 w-4 text-gray-500 mr-2" />
                          <span>{member.email}</span>
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="h-4 w-4 text-gray-500 mr-2" />
                          <span>Specialization: {member.specialization}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;