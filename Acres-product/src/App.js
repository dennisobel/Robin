import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Scrolltotop from './components/layouts/Scrolltotop';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Core journey: land on the map -> search -> open a home -> shortlist it
const Home = React.lazy(() => import("./components/pages/Home"));
const Search = React.lazy(() => import("./components/pages/Search"));
const Listing = React.lazy(() => import("./components/pages/Listing"));
const Shortlist = React.lazy(() => import("./components/pages/Shortlist"));
// Supporting
const Relocation = React.lazy(() => import("./components/pages/Relocation"));
const Consultants = React.lazy(() => import("./components/pages/Consultants"));
const About = React.lazy(() => import("./components/pages/About"));
const Faq = React.lazy(() => import("./components/pages/Faq"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
// Account
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Error = React.lazy(() => import("./components/pages/Error"));

function App() {
  return (
    <Router>
      <Scrolltotop />
      <Suspense fallback={<div></div>}>
        <Preloader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/listing/:id" element={<Listing />} />
          <Route path="/shortlist" element={<Shortlist />} />
          <Route path="/relocation" element={<Relocation />} />
          <Route path="/consultants" element={<Consultants />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
