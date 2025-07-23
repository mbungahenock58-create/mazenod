import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularCourses from './components/PopularCourses';
import Categories from './components/Categories';
import Instructors from './components/Instructors';
import Testimonials from './components/Testimonials';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <PopularCourses />
      <Categories />
      <Instructors />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;