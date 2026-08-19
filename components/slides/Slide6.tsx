import { Copy, Film, Camera } from "lucide-react";

export default function Slide6() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-[#f4f1eb] text-gray-900 overflow-hidden relative">
      
      {/* Textura sutil de papel antiguo */}
      <div className="absolute inset-0 pointer-events-none opacity-50 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(#d4cec4 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      {/* Columna de Texto - Ajustada con menor padding y texto más compacto */}
      <div className="flex flex-col justify-center p-6 lg:p-10 z-10 h-full overflow-y-auto">
        <div className="mb-6">
          <span className="text-gray-500 font-bold tracking-widest text-xs uppercase mb-2 block">
            Inglaterra (1841) / EE.UU. (1888)
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-3 tracking-tight leading-tight text-gray-900">
            La Revolución de los Materiales
          </h2>
          <div className="h-1 w-16 bg-red-700 rounded"></div>
        </div>

        <div className="space-y-5">
          <div className="flex gap-4 items-start">
            <Copy className="w-6 h-6 text-red-700 shrink-0 mt-1" />
            <div className="text-base text-gray-700 leading-relaxed font-light">
              <strong className="font-bold text-gray-900 block mb-1">El Calotipo (1841)</strong>
              Inventado por William Henry Fox Talbot en Inglaterra.[cite: 1] Fue el primer proceso que utilizó el sistema negativo-positivo sobre papel.[cite: 1] Solucionó la reproductibilidad: por primera vez se podían obtener múltiples copias idénticas a partir de un solo negativo original.[cite: 1] La foto dejaba de ser un objeto único.
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Film className="w-6 h-6 text-red-700 shrink-0 mt-1" />
            <div className="text-base text-gray-700 leading-relaxed font-light">
              <strong className="font-bold text-gray-900 block mb-1">El Rollo Fotográfico (1888)</strong>
              George Eastman cambia el paradigma global al reemplazar las pesadas y frágiles placas de cristal por película de celuloide flexible en formato de rollo continuo.[cite: 1]
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Camera className="w-6 h-6 text-red-700 shrink-0 mt-1" />
            <div className="text-base text-gray-700 leading-relaxed font-light">
              <strong className="font-bold text-gray-900 block mb-1">La Masificación</strong>
              Con su revolucionario lema comercial: "Usted presiona el botón, nosotros hacemos el resto", elimina la necesidad de conocimientos químicos, dando nacimiento a la figura del fotógrafo aficionado.[cite: 1]
            </div>
          </div>
        </div>
      </div>

      {/* Columna de Imagen (Película de Celuloide dibujada en SVG) */}
      <div className="relative h-full w-full flex items-center justify-center p-6 lg:p-12 z-10 bg-[#e3ddd1] border-l border-gray-300">
        
        {/* Contenedor animado de la tira de película - Escalado ligeramente */}
        <div className="relative w-full max-w-[16rem] transform -rotate-2 hover:rotate-0 transition-transform duration-700 drop-shadow-2xl">
          
          <svg viewBox="0 0 160 400" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            {/* Fondo negro de la tira de celuloide */}
            <rect x="10" y="10" width="140" height="380" fill="#111" rx="4" />

            {/* Generación de los agujeros laterales (sprockets) */}
            <g fill="#e3ddd1">
              {[...Array(24)].map((_, i) => (
                <g key={i}>
                  <rect x="16" y={20 + i * 15} width="8" height="10" rx="2" />
                  <rect x="136" y={20 + i * 15} width="8" height="10" rx="2" />
                </g>
              ))}
            </g>

            {/* Marco 1: El Negativo (Calotipo) */}
            <rect x="35" y="30" width="90" height="110" fill="#2c2c2c" rx="2" />
            <g transform="translate(35, 30)">
              <rect x="0" y="0" width="90" height="110" fill="#222" rx="2" />
              <circle cx="25" cy="30" r="12" fill="#ddd" />
              <path d="M -10,110 L 40,50 L 70,80 L 100,60 L 100,110 Z" fill="#eee" />
              <path d="M 50,110 L 80,70 L 110,100 L 110,110 Z" fill="#bbb" />
            </g>
            <text x="80" y="152" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="2">NEGATIVE 01</text>

            {/* Marco 2: El Positivo */}
            <rect x="35" y="170" width="90" height="110" fill="#eee" rx="2" />
            <g transform="translate(35, 170)">
              <rect x="0" y="0" width="90" height="110" fill="#f8f8f8" rx="2" />
              <circle cx="25" cy="30" r="12" fill="#444" />
              <path d="M -10,110 L 40,50 L 70,80 L 100,60 L 100,110 Z" fill="#222" />
              <path d="M 50,110 L 80,70 L 110,100 L 110,110 Z" fill="#555" />
            </g>
            <text x="80" y="292" fill="#fff" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="2">POSITIVE 02</text>
            
            {/* Líneas de corte de la película */}
            <line x1="30" y1="330" x2="130" y2="330" stroke="#444" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M 60,320 L 70,340 L 80,320 L 90,340 L 100,320" fill="none" stroke="#666" strokeWidth="2" />
          </svg>

        </div>
      </div>
    </div>
  );
}