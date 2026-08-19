import { Zap, Globe, Rocket } from "lucide-react";

export default function Slide9() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-slate-950 text-slate-100 overflow-hidden relative">
      
      {/* Fondo espacial profundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-950 to-slate-950 pointer-events-none z-0"></div>

      {/* Columna de Texto - Optimizada para no hacer scroll */}
      <div className="flex flex-col justify-center p-6 lg:p-10 z-10 h-full relative">
        <div className="mb-6">
          <span className="text-blue-400 font-mono tracking-widest text-xs uppercase mb-2 block">
            1947 — Era Moderna
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-3 tracking-tight leading-tight text-white">
            Más Allá de Nuestra Visión
          </h2>
          <div className="h-1 w-16 bg-blue-500 rounded"></div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <Zap className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div className="text-base text-slate-300 leading-relaxed font-light">
              <strong className="font-bold text-white block mb-1">La Magia Instantánea (1947)</strong>
              Edwin Land presenta la cámara Polaroid. Revelar una fotografía dejó de ser un proceso de laboratorio exclusivo para convertirse en una experiencia química que ocurría en la palma de la mano en 60 segundos.
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Rocket className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div className="text-base text-slate-300 leading-relaxed font-light">
              <strong className="font-bold text-white block mb-1">La Mirada Orbital (1946)</strong>
              Un cohete V-2 modificado captura la primera fotografía de la Tierra desde el espacio exterior (105 km de altura). Por primera vez, la humanidad pudo observar la curvatura de su propio planeta.
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Globe className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div className="text-base text-slate-300 leading-relaxed font-light">
              <strong className="font-bold text-white block mb-1">El Mapeo Global Satelital</strong>
              Hoy, constelaciones de satélites fotografían cada centímetro de la Tierra a diario. Tecnologías de cartografía e imágenes multiespectrales han revolucionado la ecología, el urbanismo y nuestra conexión global.
            </div>
          </div>
        </div>
      </div>

      {/* Columna de Imagen (Arte SVG: Satélite y la Tierra) */}
      <div className="relative h-full w-full flex items-center justify-center p-6 lg:p-12 z-10 border-l border-blue-900/30">
        
        {/* Contenedor del Arte Espacial */}
        <div className="relative w-full max-w-sm aspect-square drop-shadow-[0_0_40px_rgba(59,130,246,0.15)]">
          
          <svg viewBox="0 0 200 200" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            
            {/* Estrellas de fondo */}
            <g fill="#fff" opacity="0.6">
              <circle cx="20" cy="30" r="0.5" />
              <circle cx="160" cy="20" r="1" className="animate-pulse" />
              <circle cx="80" cy="160" r="0.5" />
              <circle cx="180" cy="100" r="0.8" />
              <circle cx="40" cy="120" r="1.2" className="animate-pulse" />
            </g>

            {/* Planeta Tierra (Esquina inferior derecha) */}
            <g transform="translate(160, 160)">
              {/* Resplandor atmosférico */}
              <circle cx="0" cy="0" r="75" fill="none" stroke="#3b82f6" strokeWidth="4" opacity="0.3" filter="blur(4px)" />
              {/* Océano y Continentes abstractos */}
              <circle cx="0" cy="0" r="70" fill="#1e3a8a" />
              <path d="M -40,-50 C -20,-60 10,-30 30,-50 C 50,-20 60,10 40,30 C 10,50 -20,20 -50,10 C -60,-20 -50,-40 -40,-50 Z" fill="#0f766e" opacity="0.8" />
              {/* Malla de latitud/longitud */}
              <circle cx="0" cy="0" r="70" fill="none" stroke="#60a5fa" strokeWidth="0.5" opacity="0.4" />
              <path d="M -70,0 A 70,70 0 0,0 70,0" fill="none" stroke="#60a5fa" strokeWidth="0.5" opacity="0.4" />
              <path d="M 0,-70 A 70,70 0 0,0 0,70" fill="none" stroke="#60a5fa" strokeWidth="0.5" opacity="0.4" />
            </g>

            {/* Haz de escaneo del Satélite (Efecto de Radar) */}
            <polygon points="60,60 130,130 90,160" fill="url(#scanBeam)" opacity="0.3" className="animate-pulse" />
            
            <defs>
              <linearGradient id="scanBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Satélite */}
            <g transform="translate(50, 50) rotate(45)">
              {/* Paneles Solares */}
              <rect x="-30" y="-8" width="25" height="16" fill="#0284c7" stroke="#bae6fd" strokeWidth="0.5" />
              <line x1="-20" y1="-8" x2="-20" y2="8" stroke="#bae6fd" strokeWidth="0.5" />
              <line x1="-10" y1="-8" x2="-10" y2="8" stroke="#bae6fd" strokeWidth="0.5" />
              
              <rect x="25" y="-8" width="25" height="16" fill="#0284c7" stroke="#bae6fd" strokeWidth="0.5" />
              <line x1="35" y1="-8" x2="35" y2="8" stroke="#bae6fd" strokeWidth="0.5" />
              <line x1="45" y1="-8" x2="45" y2="8" stroke="#bae6fd" strokeWidth="0.5" />

              {/* Cuerpo del Satélite */}
              <rect x="-5" y="-12" width="30" height="24" fill="#94a3b8" rx="2" />
              <rect x="0" y="-10" width="20" height="20" fill="#e2e8f0" rx="1" />
              
              {/* Lente de la cámara apuntando a la Tierra */}
              <circle cx="10" cy="0" r="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="10" cy="0" r="2" fill="#38bdf8" className="animate-ping" />
            </g>

          </svg>

        </div>

        {/* Textos descriptivos de telemetría */}
        <div className="absolute top-6 right-8 text-[#60a5fa] text-[10px] text-right font-mono opacity-60 space-y-1">
          <p>ORBIT: LEO (Low Earth Orbit)</p>
          <p>SENSOR: MULTISPECTRAL</p>
          <p>STATUS: ACTIVE MAPPING</p>
        </div>
      </div>

    </div>
  );
}