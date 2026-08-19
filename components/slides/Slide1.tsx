import { BatteryMedium } from "lucide-react";

export default function Slide1() {
  return (
    <div className="absolute inset-0 bg-black text-white flex flex-col items-center justify-center text-center p-12 overflow-hidden">
      
      {/* UI Especial: Visor de Cámara Retro */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-10 left-10 w-16 h-16 border-t-4 border-l-4 border-white/40"></div>
        <div className="absolute top-10 right-10 w-16 h-16 border-t-4 border-r-4 border-white/40"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 border-b-4 border-l-4 border-white/40"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 border-b-4 border-r-4 border-white/40"></div>

        <div className="absolute top-14 left-14 text-red-500 flex items-center gap-3 font-mono font-bold text-xl">
          <div className="w-4 h-4 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.9)]"></div> 
          <span className="tracking-widest">REC</span>
        </div>
        <div className="absolute top-14 right-14 text-green-400 flex items-center gap-2 font-mono text-lg tracking-widest">
          <BatteryMedium className="w-7 h-7" /> 100%
        </div>
        <div className="absolute bottom-14 left-14 text-white/60 font-mono text-lg tracking-widest">
          ISO 400
        </div>
        <div className="absolute bottom-14 right-14 text-white/60 font-mono text-lg tracking-widest flex gap-6">
          <span>F/2.8</span>
          <span>1/60</span>
        </div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 flex items-center justify-center opacity-40">
           <div className="absolute w-6 h-[2px] bg-white"></div>
           <div className="absolute w-[2px] h-6 bg-white"></div>
           <div className="w-full h-full border-2 border-white/30 border-dashed rounded-lg"></div>
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-10"></div>

      {/* Contenido Principal */}
      <div className="z-30 relative flex flex-col items-center">
        <h1 className="text-7xl md:text-8xl font-extrabold text-white tracking-tighter mb-8 drop-shadow-2xl uppercase">
          Evolución de la Fotografía
        </h1>
        <p className="text-2xl md:text-3xl font-light text-gray-300 max-w-4xl leading-relaxed tracking-wide">
          Un viaje visual desde los primeros experimentos ópticos hasta la revolución del sensor digital. Análisis histórico, técnico y estético.
        </p>
      </div>
    </div>
  );
}