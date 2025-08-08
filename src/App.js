import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {
  const [modal, setModal] = useState({ open: false, content: null });
  const openModal = (content) => setModal({ open: true, content });
  const closeModal = () => setModal({ open: false, content: null });
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Loading time is now 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && (
        <div className="bg-white text-gray-900">
          <Header />
          <main className="pt-28">
            <Hero />
            <About />
            <Experience />
            <Projects openModal={openModal} />
            <Skills />
            <Contact />
            <Footer />
          </main>

          <div
            id="modal-root"
            className={`fixed inset-0 items-center justify-center modal-bg z-50 ${modal.open ? "flex" : "hidden"}`}
          >
            <div className="bg-white rounded-2xl max-w-3xl w-full p-6 shadow-lg relative mx-4">
              <button onClick={closeModal} className="absolute right-4 top-4 text-gray-500">✕</button>
              <div>{modal.content}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}