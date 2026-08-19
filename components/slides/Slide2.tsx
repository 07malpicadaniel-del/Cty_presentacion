import { PenTool, Code, Palette } from "lucide-react";

export default function Slide2() {
  return (
    // Fondo color papel antiguo/crema
    <div className="relative w-full h-full flex flex-col justify-center p-16 lg:p-24 bg-[#Fdfcf8] text-gray-800 overflow-hidden">
      
      {/* Cuadrícula de papel de boceto arquitectónico/técnico */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'linear-gradient(#e5e1d8 1px, transparent 1px), linear-gradient(90deg, #e5e1d8 1px, transparent 1px)',
          backgroundSize: '2rem 2rem'
        }}
      ></div>
      
      {/* Margen rojo estilo libreta de investigación clásica */}
      <div className="absolute left-16 top-0 bottom-0 w-[2px] bg-red-400/40 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl pl-12">
        
        {/* Título con efecto de trazado a lápiz */}
        <div className="relative inline-block mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-2 tracking-tight">
            Metodología de Trabajo[cite: 1]
          </h2>
          {/* Subrayado irregular simulando un trazo manual */}
          <div className="h-[3px] w-[102%] bg-gray-800 rounded-[50%] opacity-80" style={{ transform: 'rotate(-1deg)' }}></div>
          <div className="h-[2px] w-[95%] bg-gray-600 rounded-[50%] opacity-50 mt-1" style={{ transform: 'rotate(0.5deg)' }}></div>
        </div>
        
        <div className="space-y-12">
          {/* Item 1: Investigación */}
          <div className="relative group">
            <div className="flex items-center gap-4 mb-3">
              <PenTool className="w-7 h-7 text-gray-500 group-hover:text-black transition-colors" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 tracking-wide">
                Investigación
              </h3>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light pl-11">
              Análisis riguroso de la historia visual, consultando más de 5 fuentes bibliográficas académicas y verificadas (formato APA).[cite: 1]
            </p>
          </div>
          
          {/* Item 2: Desarrollo Técnico */}
          <div className="relative group">
            <div className="flex items-center gap-4 mb-3">
              <Code className="w-7 h-7 text-gray-500 group-hover:text-black transition-colors" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 tracking-wide">
                Desarrollo Técnico
              </h3>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light pl-11">
              Implementación de una arquitectura moderna en formato web (React/SPA) para ofrecer una experiencia fluida e interactiva.[cite: 1]
            </p>
          </div>

          {/* Item 3: Diseño Gráfico */}
          <div className="relative group">
            <div className="flex items-center gap-4 mb-3">
              <Palette className="w-7 h-7 text-gray-500 group-hover:text-black transition-colors" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 tracking-wide">
                Diseño Gráfico
              </h3>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light pl-11">
              Creación de una identidad visual de alto contraste, limpia y asertiva para evitar saturación y facilitar la retención del conocimiento.[cite: 1]
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}