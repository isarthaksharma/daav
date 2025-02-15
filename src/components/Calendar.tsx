import React from 'react';
import { Calendar as CalendarIcon, Clock } from 'lucide-react';

const Calendar: React.FC = () => {
  const events = [
    {
      month: 'March 2024',
      events: [
        { date: '15', event: 'Admission Process Begins', type: 'academic' },
        { date: '20-22', event: 'Annual Sports Meet', type: 'sports' },
        { date: '25', event: 'Campus Placement Drive', type: 'placement' }
      ]
    },
    {
      month: 'April 2024',
      events: [
        { date: '5', event: 'Cultural Fest', type: 'cultural' },
        { date: '15', event: 'Mid-Semester Exams Begin', type: 'academic' },
        { date: '30', event: 'Last Date for UG Applications', type: 'academic' }
      ]
    },
    {
      month: 'May 2024',
      events: [
        { date: '1', event: 'College Foundation Day', type: 'celebration' },
        { date: '10', event: 'Research Symposium', type: 'academic' },
        { date: '20', event: 'End Semester Exams Begin', type: 'academic' }
      ]
    }
  ];

  const getEventTypeColor = (type: string) => {
    const colors = {
      academic: 'bg-blue-100 text-blue-800',
      sports: 'bg-green-100 text-green-800',
      cultural: 'bg-purple-100 text-purple-800',
      placement: 'bg-yellow-100 text-yellow-800',
      celebration: 'bg-red-100 text-red-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="flex items-center mb-8">
        <CalendarIcon className="h-8 w-8 text-blue-600 mr-2" />
        <h2 className="text-3xl font-bold">Academic Calendar</h2>
      </div>

      <div className="grid gap-8">
        {events.map((monthData, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-blue-600 text-white p-4">
              <h3 className="text-xl font-semibold">{monthData.month}</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                {monthData.events.map((event, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-16 text-center">
                      <div className="font-semibold">{event.date}</div>
                      <Clock className="h-4 w-4 mx-auto text-gray-400" />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center space-x-2">
                        <span className={`px-2 py-1 rounded-full text-sm ${getEventTypeColor(event.type)}`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </span>
                        <span className="font-medium">{event.event}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;