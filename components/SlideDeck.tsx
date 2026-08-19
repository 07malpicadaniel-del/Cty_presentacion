"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Importamos TODAS nuestras diapositivas modulares
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";
import Slide3 from "./slides/Slide3";
import Slide4 from "./slides/Slide4";
import Slide5 from "./slides/Slide5";
import Slide6 from "./slides/Slide6";
import Slide7 from "./slides/Slide7";
import Slide8 from "./slides/Slide8";
import Slide9 from "./slides/Slide9";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import Slide12 from "./slides/Slide12";

// Arreglo maestro actualizado con las 6 diapositivas
const slides = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide11, Slide12, Slide10];
export default function SlideDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? prev : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // El componente actual a renderizar
  const CurrentSlide = slides[currentIndex];
  
  // Cálculo del efecto de revelado fotográfico (100% a 0% de escala de grises)
  const grayscalePercent = 100 - (currentIndex / (slides.length - 1)) * 100;

  return (
    <div className="relative w-full h-[calc(100vh-4rem)] bg-black overflow-hidden flex flex-col items-center justify-center">
      
      <div className="relative w-full max-w-6xl h-full flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95, filter: `blur(8px) grayscale(${grayscalePercent}%)` }}
            animate={{ opacity: 1, scale: 1, filter: `blur(0px) grayscale(${grayscalePercent}%) sepia(${grayscalePercent * 0.2}%)` }}
            exit={{ opacity: 0, scale: 1.05, filter: `blur(8px) grayscale(${grayscalePercent}%)` }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden relative"
          >
            {/* Aquí se inyecta la diapositiva correspondiente */}
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Barra de Progreso */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gray-800">
        <div 
          className="h-full bg-white transition-all duration-500"
          style={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
        />
      </div>
      
      {/* Controles */}
      <div className="absolute bottom-8 flex gap-6 z-50">
        <button 
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md disabled:opacity-30 transition-all cursor-pointer"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          disabled={currentIndex === slides.length - 1}
          className="p-4 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md disabled:opacity-30 transition-all cursor-pointer"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
