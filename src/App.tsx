import React, { useState } from 'react';
import { Menu, X, Search, MessageCircle, GraduationCap, Building2, Phone, Mail, MapPin } from 'lucide-react';
import ChatBot from './components/ChatBot';
import Updates from './components/Updates';
import Admissions from './components/Admissions';
import Calendar from './components/Calendar';
import Faculty from './components/Faculty';
import StudentPortal from './components/StudentPortal';
import Results from './components/Results';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showChatBot, setShowChatBot] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'calendar', label: 'Calendar' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'results', label: 'Results' },
    { id: 'portal', label: 'Portal' },
    { id: 'contact', label: 'Contact' }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div className="space-y-8">
            <div className="relative h-[60vh] bg-cover bg-center" 
                 style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")' }}>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-5xl font-bold mb-4">DAV College Amritsar</h1>
                  <p className="text-xl">Excellence in Education Since 1955</p>
                </div>
              </div>
            </div>
            <Updates />
          </div>
        );
      case 'about':
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-8">About DAV College</h2>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Our Legacy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Founded in 1955, DAV College Amritsar has been a beacon of educational excellence in Punjab. 
                  With a rich heritage spanning over six decades, we have consistently maintained high academic 
                  standards while adapting to the evolving needs of education in the modern world.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be a leading institution of higher education, fostering academic excellence, 
                    research innovation, and holistic development of students while upholding moral 
                    and ethical values.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To provide quality education that empowers students with knowledge, skills, and 
                    values necessary for their professional success and personal growth in a rapidly 
                    changing global environment.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Our Achievements</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                    <div className="text-gray-700">Students</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                    <div className="text-gray-700">Faculty Members</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                    <div className="text-gray-700">Placement Rate</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Infrastructure</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <img 
                    src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="College Library"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1598620617137-2ab990aadd37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="College Campus"
                    className="rounded-lg w-full h-48 object-cover"
                  />
                </div>
                <div className="mt-4 text-gray-700 leading-relaxed">
                  Our campus features state-of-the-art facilities including modern laboratories, 
                  a well-stocked library, smart classrooms, sports facilities, and dedicated 
                  research centers to support academic excellence and student development.
                </div>
              </div>
            </div>
          </div>
        );
      case 'admissions':
        return <Admissions />;
      case 'calendar':
        return <Calendar />;
      case 'faculty':
        return <Faculty />;
      case 'results':
        return <Results />;
      case 'portal':
        return <StudentPortal />;
      case 'contact':
        return (
          <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Name</label>
                    <input type="text" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Email</label>
                    <input type="email" className="w-full p-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea className="w-full p-2 border rounded-md h-32"></textarea>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Send Message
                  </button>
                </form>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-gray-600">+91 123-456-7890</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">info@davcollege.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-medium">Address</p>
                        <p className="text-gray-600">DAV College, Amritsar, Punjab</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">Location</h3>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0444123543636!2d74.8659!3d31.6344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzA0LjQiTiA3NMKwNTEnNTcuMiJF!5e0!3m2!1sen!2sin!4v1625641824576!5m2!1sen!2sin"
                    className="w-full h-48 rounded-md"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 font-semibold text-xl">DAV College</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-10 border rounded-md"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {renderSection()}
      </main>

      {/* ChatBot Button */}
      <button
        onClick={() => setShowChatBot(!showChatBot)}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      {/* ChatBot Dialog */}
      {showChatBot && <ChatBot onClose={() => setShowChatBot(false)} />}

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-12">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center"><Phone className="h-5 w-5 mr-2" /> +91 123-456-7890</p>
                <p className="flex items-center"><Mail className="h-5 w-5 mr-2" /> info@davcollege.com</p>
                <p className="flex items-center"><MapPin className="h-5 w-5 mr-2" /> Amritsar, Punjab</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Admissions</a></li>
                <li><a href="#" className="hover:text-blue-400">Academic Calendar</a></li>
                <li><a href="#" className="hover:text-blue-400">Events</a></li>
                <li><a href="#" className="hover:text-blue-400">Student Portal</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Location</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0444123543636!2d74.8659!3d31.6344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM4JzA0LjQiTiA3NMKwNTEnNTcuMiJF!5e0!3m2!1sen!2sin!4v1625641824576!5m2!1sen!2sin"
                className="w-full h-48 rounded-md"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; 2024 DAV College Amritsar. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;