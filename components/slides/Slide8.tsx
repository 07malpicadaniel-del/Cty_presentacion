import { Film, Play, Clapperboard } from "lucide-react";

export default function Slide8() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-[#0a0a0a] text-[#ededed] overflow-hidden relative">
      
      {/* Textura de celuloide antiguo (rayones horizontales y verticales sutiles) */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-20 mix-blend-screen"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '4px 100%, 100% 4px' }}
      ></div>

      {/* Columna de Texto */}
      <div className="flex flex-col justify-center p-8 lg:p-14 z-10 h-full overflow-y-auto relative">
        <div className="mb-8">
          <span className="text-[#a3a3a3] font-mono tracking-widest text-xs uppercase mb-3 block">
            Francia / EE.UU., 1878 - 1895
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tight leading-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            La Ilusión del Movimiento
          </h2>
          <div className="h-1 w-24 bg-white rounded"></div>
        </div>

        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <Play className="w-7 h-7 text-white shrink-0 mt-1" />
            <div className="text-base text-[#d4d4d4] leading-relaxed font-light">
              <strong className="font-bold text-white block mb-1">El Caballo de Muybridge (1878)</strong>
              Eadweard Muybridge utiliza múltiples cámaras alineadas para capturar el galope de un caballo. Demostró que hay un instante en el que ninguna pata toca el suelo, uniendo por primera vez la fotografía con el estudio científico del movimiento.
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Film className="w-7 h-7 text-white shrink-0 mt-1" />
            <div className="text-base text-[#d4d4d4] leading-relaxed font-light">
              <strong className="font-bold text-white block mb-1">El Cinematógrafo (1895)</strong>
              Los hermanos Lumière inventan un aparato portátil capaz de grabar y proyectar a 16 cuadros por segundo. Descubrieron que al pasar fotos rápidamente frente a una luz, el cerebro humano fusiona las imágenes creando la ilusión de vida continuada.
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Clapperboard className="w-7 h-7 text-white shrink-0 mt-1" />
            <div className="text-base text-[#d4d4d4] leading-relaxed font-light">
              <strong className="font-bold text-white block mb-1">El Impacto Cultural</strong>
              La fotografía deja de ser un recuerdo estático para convertirse en una máquina de contar historias. Nace la industria del entretenimiento más poderosa del siglo XX.
            </div>
          </div>
        </div>
      </div>

      {/* Columna de Imagen (Arte SVG: Proyector de Cine Clásico) */}
      <div className="relative h-full w-full flex items-center justify-center p-8 lg:p-12 z-10 border-l border-[#333]">
        
        {/* Haz de luz de proyección de fondo */}
        <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-full h-64 bg-gradient-to-r from-white/40 to-transparent blur-[30px] transform -translate-x-10 pointer-events-none animate-pulse"></div>

        <div className="relative w-full max-w-sm aspect-square drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
          
          <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            
            {/* Lente y Haz de Luz */}
            <path d="M 80,110 L 190,40 L 190,180 Z" fill="#ffffff" opacity="0.15" className="animate-pulse" />
            <rect x="70" y="95" width="15" height="30" fill="#444" rx="2" />
            <rect x="85" y="100" width="10" height="20" fill="#888" rx="2" />

            {/* Base del proyector */}
            <path d="M 30,170 L 70,170 L 60,130 L 40,130 Z" fill="#222" />
            <rect x="20" y="170" width="60" height="10" fill="#444" rx="2" />

            {/* Cuerpo del proyector */}
            <rect x="35" y="80" width="40" height="50" fill="#333" rx="4" />
            
            {/* Carrete Superior (Animado) */}
            <g className="origin-[55px_50px] animate-[spin_3s_linear_infinite]">
              <circle cx="55" cy="50" r="30" fill="none" stroke="#666" strokeWidth="4" />
              <circle cx="55" cy="50" r="5" fill="#888" />
              {/* Radios del carrete */}
              <line x1="55" y1="20" x2="55" y2="80" stroke="#666" strokeWidth="3" />
              <line x1="25" y1="50" x2="85" y2="50" stroke="#666" strokeWidth="3" />
              <line x1="34" y1="29" x2="76" y2="71" stroke="#666" strokeWidth="3" />
              <line x1="34" y1="71" x2="76" y2="29" stroke="#666" strokeWidth="3" />
            </g>

            {/* Carrete Inferior (Animado) */}
            <g className="origin-[10px_130px] animate-[spin_3s_linear_infinite]">
              <circle cx="10" cy="130" r="25" fill="none" stroke="#666" strokeWidth="4" />
              <circle cx="10" cy="130" r="4" fill="#888" />
              <line x1="10" y1="105" x2="10" y2="155" stroke="#666" strokeWidth="3" />
              <line x1="-15" y1="130" x2="35" y2="130" stroke="#666" strokeWidth="3" />
              <line x1="-7" y1="113" x2="27" y2="147" stroke="#666" strokeWidth="3" />
              <line x1="-7" y1="147" x2="27" y2="113" stroke="#666" strokeWidth="3" />
            </g>

            {/* Cinta conectando los carretes */}
            <path d="M 85,50 C 95,50 95,95 70,95 L 70,115 C 30,115 20,105 35,130" fill="none" stroke="#111" strokeWidth="4" strokeDasharray="2 1" />
            
          </svg>

        </div>

        {/* Textos descriptivos retro */}
        <div className="absolute bottom-6 right-8 text-[#888] text-xs text-right font-serif italic space-y-1">
          <p>La persistencia retiniana en acción.</p>
          <p>16 cuadros por segundo.</p>
        </div>
      </div>

    </div>
  );
}