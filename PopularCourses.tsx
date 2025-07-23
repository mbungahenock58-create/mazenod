import React from 'react';
import { Star, Clock, Users, Award } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Développement Web Complet - React & Node.js",
    instructor: "Marie Dubois",
    rating: 4.9,
    students: 12459,
    duration: "42h 30min",
    price: "89€",
    originalPrice: "129€",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
    level: "Intermédiaire",
    bestseller: true
  },
  {
    id: 2,
    title: "Intelligence Artificielle et Machine Learning",
    instructor: "Dr. Jean Martin",
    rating: 4.8,
    students: 8932,
    duration: "38h 15min",
    price: "99€",
    originalPrice: "149€",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    level: "Avancé",
    bestseller: false
  },
  {
    id: 3,
    title: "Design UX/UI : De Débutant à Expert",
    instructor: "Sophie Laurent",
    rating: 4.7,
    students: 15673,
    duration: "35h 45min",
    price: "79€",
    originalPrice: "119€",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
    level: "Débutant",
    bestseller: true
  },
  {
    id: 4,
    title: "Marketing Digital et Réseaux Sociaux",
    instructor: "Pierre Rousseau",
    rating: 4.6,
    students: 9876,
    duration: "28h 20min",
    price: "69€",
    originalPrice: "99€",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
    level: "Débutant",
    bestseller: false
  }
];

const PopularCourses = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Cours les plus populaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos formations les plus appréciées par nos étudiants et commencez votre parcours d'apprentissage dès aujourd'hui.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {course.bestseller && (
                  <div className="absolute top-4 left-4 bg-orange-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Bestseller
                  </div>
                )}
                <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                  {course.level}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 mb-3">{course.instructor}</p>

                <div className="flex items-center mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center mb-4 text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span className="text-sm">{course.duration}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                    <span className="text-sm text-gray-500 line-through">{course.originalPrice}</span>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
            Voir tous les cours
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;