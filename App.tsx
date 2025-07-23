import React from 'react';
import Header from '.Header';
import Hero from '.Hero';
import PopularCourses from '.PopularCourses';
import Categories from '.Categories';
import Instructors from '.Instructors';
import Testimonials from '.Testimonials';
import Stats from '.Stats';
import Footer from '.Footer';

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
