import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Home Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const Homefour = React.lazy(() => import("./components/pages/Homefour"));
const Homefive = React.lazy(() => import("./components/pages/Homefive"));
// Blog
const Bloggrid = React.lazy(() => import("./components/pages/Bloggrid"));
const Bloglist = React.lazy(() => import("./components/pages/Bloglist"));
const Blogsingle = React.lazy(() => import("./components/pages/Blogsingle"));
// Pages
const About = React.lazy(() => import("./components/pages/About"));
const Services = React.lazy(() => import("./components/pages/Services"));
const Faq = React.lazy(() => import("./components/pages/Faq"));
const Pricing = React.lazy(() => import("./components/pages/Pricing"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Comingsoon = React.lazy(() => import("./components/pages/Comingsoon"));
const Error = React.lazy(() => import("./components/pages/Error"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Legal = React.lazy(() => import("./components/pages/Legal"));
// Listings
const Listinggrid = React.lazy(() => import("./components/pages/Listinggrid"));
const Listinglist = React.lazy(() => import("./components/pages/Listinglist"));
const Listingmap = React.lazy(() => import("./components/pages/Listingmap"));
const Listingdetailsone = React.lazy(() => import("./components/pages/Listingdetailsone"));
const Listingdetailstwo = React.lazy(() => import("./components/pages/Listingdetailstwo"));
const Listingdetailsthree = React.lazy(() => import("./components/pages/Listingdetailsthree"));
const Submitlisting = React.lazy(() => import("./components/pages/Submitlisting"));
const Comparelistings = React.lazy(() => import("./components/pages/Comparelistings"));
// Agents
const Agentarchive = React.lazy(() => import("./components/pages/Agentarchive"));
const Agentdetails = React.lazy(() => import("./components/pages/Agentdetails"));
const Profile = React.lazy(() => import("./components/pages/Profile"));
const Profilelistings = React.lazy(() => import("./components/pages/Profilelistings"));
const Profilesavedlistings = React.lazy(() => import("./components/pages/Profilesavedlistings"));
// Agency
const Agencyarchive = React.lazy(() => import("./components/pages/Agencyarchive"));
const Agencydetails = React.lazy(() => import("./components/pages/Agencydetails"));


function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <Preloader />
        <Routes>
          {/* Homepages */}
          <Route path="/" element={<Home />} />
          <Route path="/home-v2" element={<Hometwo />} />
          <Route path="/home-v3" element={<Homethree />} />
          <Route path="/home-v4" element={<Homefour />} />
          <Route path="/home-v5" element={<Homefive />} />
          {/* Blog */}
          <Route path="/blog-grid" element={<Bloggrid />} />
          <Route path="/blog-list" element={<Bloglist />} />
          <Route path="/blog-single" element={<Blogsingle />} />
          {/* Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coming-soon" element={<Comingsoon />} />
          <Route path="/error-404" element={<Error />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/legal" element={<Legal />} />
          {/* Listings */}
          <Route path="/listing-grid" element={<Listinggrid />} />
          <Route path="/listing-list" element={<Listinglist />} />
          <Route path="/listing-map" element={<Listingmap />} />
          <Route path="/listing-details-v1" element={<Listingdetailsone />} />
          <Route path="/listing-details-v2" element={<Listingdetailstwo />} />
          <Route path="/listing-details-v3" element={<Listingdetailsthree />} />
          <Route path="/submit-listing" element={<Submitlisting />} />
          <Route path="/compare-listings" element={<Comparelistings />} />
          {/* Agents */}
          <Route path="/agent-archive" element={<Agentarchive />} />
          <Route path="/agent-details" element={<Agentdetails />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile-listings" element={<Profilelistings />} />
          <Route path="/profile-saved-listings" element={<Profilesavedlistings />} />
          {/* Agency */}
          <Route path="/agency-archive" element={<Agencyarchive />} />
          <Route path="/agency-details" element={<Agencydetails />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
