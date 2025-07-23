import React from 'react';
import { Star, Users, Award, PlayCircle } from 'lucide-react';

const instructors = [
  {
    id: 1,
    name: "Marie Dubois",
    title: "Développeuse Full-Stack Senior",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    students: 25643,
    courses: 12,
    specialties: ["React", "Node.js", "JavaScript"]
  },
  {
    id: 2,
    name: "Dr. Jean Martin",
    title: "Expert en Intelligence Artificielle",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    students: 18932,
    courses: 8,
    specialties: ["IA", "Machine Learning", "Python"]
  },
  {
    id: 3,
    name: "Sophie Laurent",
    title: "Designer UX/UI Certifiée",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    students: 32156,
    courses: 15,
    specialties: ["Figma", "Adobe XD", "Design Thinking"]
  },
  {
    id: 4,
    name: "Pierre Rousseau",
    title: "Stratège Marketing Digital",
    image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    students: 21987,
    courses: 10,
    specialties: ["SEO", "Google Ads", "Analytics"]
  }
];

const Instructors = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos instructeurs experts
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Apprenez directement auprès de professionnels reconnus dans leur domaine, avec une expérience pratique et une pédagogie éprouvée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <PlayCircle className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-1">{instructor.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{instructor.title}</p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="font-semibold">{instructor.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500">
                      <Award className="w-4 h-4" />
                      <span>{instructor.courses} cours</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1 text-gray-500 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{instructor.students.toLocaleString()} étudiants</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Spécialités :</p>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Voir les cours
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
            Tous nos instructeurs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Instructors;