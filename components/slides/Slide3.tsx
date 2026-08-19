import { Eye, Sun, History } from "lucide-react";

export default function Slide3() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-[#ece6d5] text-[#3e2723] overflow-hidden relative">
      
      {/* Textura de pergamino y bordes desgastados */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(62,39,35,0.3)] z-20"></div>

      {/* Columna de Texto */}
      <div className="flex flex-col justify-center p-8 lg:p-14 z-10 h-full overflow-y-auto">
        
        <div className="mb-6">
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tight leading-tight">
            El Deseo de Congelar el Tiempo
          </h2>
          <div className="h-1 w-24 bg-[#795548] rounded"></div>
        </div>

        <div className="space-y-6">
          
          <div className="flex gap-4 items-start">
            <History className="w-6 h-6 text-[#5d4037] shrink-0 mt-1" />
            <p className="text-lg text-[#4e342e] leading-relaxed font-serif">
              Más que un avance técnico, la evolución de la fotografía nace de la profunda necesidad humana de trascender el olvido y documentar nuestra propia existencia.
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <Eye className="w-6 h-6 text-[#5d4037] shrink-0 mt-1" />
            <p className="text-lg text-[#4e342e] leading-relaxed font-serif">
              Antes de que existiera la emulsión química, filósofos como Aristóteles y Alhacén ya observaban el comportamiento de la luz.[cite: 1] Artistas del Renacimiento utilizaban una caja o habitación totalmente oscura con un pequeño orificio en uno de sus muros para proyectar la realidad sobre paredes con gran precisión geométrica.[cite: 1]
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <Sun className="w-6 h-6 text-[#5d4037] shrink-0 mt-1" />
            <p className="text-lg text-[#4e342e] leading-relaxed font-serif">
              La luz exterior penetra por el orificio y proyecta una imagen real pero invertida en la pared opuesta.[cite: 1] Aunque no fijaba la imagen de forma permanente, sentó las bases ópticas y geométricas ineludibles para la fotografía moderna.[cite: 1]
            </p>
          </div>

        </div>
      </div>

      {/* Columna del Diagrama (Generado 100% con SVG y Tailwind) */}
      <div className="relative h-full w-full flex items-center justify-center p-8 lg:p-12 bg-[#dfd6c2] border-l border-[#c7bca1] z-10">
        <div className="relative w-full md:h-[70%] md:w-auto aspect-[3/4] border-8 border-[#3e2723] p-8 bg-[#ece6d5] shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 flex flex-col justify-center">
          
          {/* Diagrama SVG de la Cámara Oscura */}
          <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
            
            {/* Pared de la habitación (con el orificio en el centro) */}
            <rect x="48" y="0" width="4" height="47" fill="#5d4037" rx="1" />
            <rect x="48" y="53" width="4" height="47" fill="#5d4037" rx="1" />
            
            {/* Rayos de luz cruzando (Naranja / Ámbar) */}
            <line x1="10" y1="20" x2="90" y2="80" stroke="#d97706" strokeWidth="0.6" strokeDasharray="2 2" className="animate-pulse" />
            <line x1="10" y1="80" x2="90" y2="20" stroke="#d97706" strokeWidth="0.6" strokeDasharray="2 2" className="animate-pulse" />
            
            {/* Objeto exterior (Flecha hacia arriba representando un objeto) */}
            <g stroke="#3e2723" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <line x1="10" y1="80" x2="10" y2="20" />
              <polyline points="4,28 10,20 16,28" />
              {/* Base del objeto */}
              <line x1="6" y1="80" x2="14" y2="80" strokeWidth="2.5" />
            </g>
            
            {/* Proyección interior invertida (Flecha hacia abajo) */}
            <g stroke="#3e2723" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
              <line x1="90" y1="20" x2="90" y2="80" />
              <polyline points="84,72 90,80 96,72" />
              {/* Base del objeto invertido */}
              <line x1="86" y1="20" x2="94" y2="20" strokeWidth="2.5" />
            </g>
            
            {/* Textos explicativos dentro del diagrama */}
            <text x="10" y="92" fontSize="4" fill="#5d4037" fontStyle="italic" fontFamily="serif" textAnchor="middle">Objeto Exterior</text>
            <text x="46" y="49" fontSize="3" fill="#5d4037" fontStyle="italic" fontFamily="serif" textAnchor="end">Orificio</text>
            <text x="90" y="12" fontSize="4" fill="#5d4037" fontStyle="italic" fontFamily="serif" textAnchor="middle">Proyección Invertida</text>
            <text x="75" y="92" fontSize="4" fill="#5d4037" fontStyle="italic" fontFamily="serif" fontWeight="bold">Cámara Oscura</text>
          </svg>

          {/* Sutil ruido/textura sobre el canvas */}
          <div className="absolute inset-0 bg-yellow-900/10 mix-blend-overlay pointer-events-none"></div>
        </div>
        
        {/* Pie de foto */}
        <p className="absolute bottom-6 right-8 font-serif italic text-[#5d4037] text-md">
          Diagrama del principio óptico original.
        </p>
      </div>

    </div>
  );
}