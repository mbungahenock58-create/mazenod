import React, { useState } from 'react';
import { Search, Menu, X, User, ShoppingCart, Bell } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Groupe Mazenod</h1>
              <p className="text-xs text-gray-500">Académie en ligne</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Cours</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Catégories</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Instructeurs</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Rechercher des cours..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <User className="w-4 h-4" />
              <span>Connexion</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Accueil</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Cours</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Catégories</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">Instructeurs</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">À propos</a>
              <div className="pt-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Connexion
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;