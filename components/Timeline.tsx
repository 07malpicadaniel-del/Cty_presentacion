"use client";

import { motion } from "framer-motion";
import historyData from "@/data/history.json";

export default function Timeline() {
  const totalItems = historyData.length;

  return (
    <div className="relative max-w-6xl mx-auto py-24 px-4 sm:px-6">
      
      {/* Línea central vertical con degradado */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-400 via-amber-400 to-blue-600 transform md:-translate-x-1/2 rounded-full opacity-60"></div>

      <div className="space-y-16 md:space-y-24">
        {historyData.map((item, index) => {
          // Determina en qué lado de la pantalla va la tarjeta
          const isRightSide = index % 2 !== 0;
          
          // Cálculo de color progresivo
          const progress = totalItems > 1 ? index / (totalItems - 1) : 0;
          const grayscaleValue = 100 - (progress * 100);
          const dynamicColor = `hsl(${progress * 220}, 70%, 50%)`;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
              className="relative w-full flex items-center"
            >
              {/* Punto en la línea de tiempo */}
              <div
                className="absolute left-6 md:left-1/2 w-5 h-5 rounded-full border-4 border-white shadow-md transform -translate-x-1/2 z-10 transition-colors duration-500"
                style={{
                  backgroundColor: dynamicColor,
                  filter: `grayscale(${grayscaleValue}%)`
                }}
              />

              {/* Estructura Anti-Bug: Separación explícita de las dos mitades */}
              {isRightSide ? (
                <>
                  {/* Mitad Izquierda: Vacía (solo visible en Desktop) */}
                  <div className="hidden md:block md:w-1/2"></div>
                  {/* Mitad Derecha: Tarjeta */}
                  <div className="w-full pl-16 md:pl-12 md:w-1/2">
                    <TimelineCard item={item} dynamicColor={dynamicColor} grayscaleValue={grayscaleValue} alignRight={false} />
                  </div>
                </>
              ) : (
                <>
                  {/* Mitad Izquierda: Tarjeta */}
                  <div className="w-full pl-16 md:pl-0 md:pr-12 md:w-1/2">
                    <TimelineCard item={item} dynamicColor={dynamicColor} grayscaleValue={grayscaleValue} alignRight={true} />
                  </div>
                  {/* Mitad Derecha: Vacía (solo visible en Desktop) */}
                  <div className="hidden md:block md:w-1/2"></div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
      
    </div>
  );
}

// Subcomponente para limpiar el código principal
function TimelineCard({ item, dynamicColor, grayscaleValue, alignRight }: any) {
  return (
    <div
      className={`bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 ${
        alignRight ? "md:text-right" : "md:text-left"
      }`}
      style={{
        filter: `grayscale(${grayscaleValue}%) sepia(${grayscaleValue * 0.1}%)`,
      }}
    >
      <span
        className="inline-block px-4 py-1.5 mb-5 text-xs font-black tracking-widest text-white uppercase rounded-full shadow-sm"
        style={{ backgroundColor: dynamicColor }}
      >
        {item.year}
      </span>
      
      <h3 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">
        {item.title}
      </h3>
      
      <p 
        className="text-xs font-bold uppercase tracking-widest mb-4"
        style={{ color: dynamicColor }}
      >
        {item.technique}
      </p>
      
      <p className="text-gray-600 leading-relaxed text-base font-light">
        {item.description}
      </p>
    </div>
  );
}