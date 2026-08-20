"use client";

import Link from "next/link";
import { ArrowLeft, Network, Camera, Cpu, Eye, Sun } from "lucide-react";

export default function MapaConceptualPage() {
  return (
    <main className="w-full min-h-screen bg-zinc-950 text-white p-6 md:p-12 pt-28 md:pt-32 flex flex-col justify-between">
      
      {/* Encabezado con Botón de Regreso */}
      <div>
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-10 pb-6 border-b border-zinc-800">
          <Link 
            href="/"
            className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl font-medium flex items-center gap-2 transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" /> Volver a la Presentación
          </Link>
          <div className="flex items-center gap-2 text-indigo-400 font-mono text-sm">
            <Network className="w-5 h-5" /> Esquema General de Conocimiento
          </div>
        </div>

        {/* Título Principal */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-black tracking-tight mb-4">
            Mapa Conceptual: <span className="text-indigo-400">Evolución Fotográfica</span>
          </h1>
          <p className="text-zinc-400 text-lg">
            Estructura sintética de las eras, tecnologías y conceptos clave que definen la historia de la imagen.
          </p>
        </div>

        {/* Contenedor del Mapa / Grid Conceptual */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Nodo 1: Fundamentos */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-indigo-500/50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-indigo-950/80 border border-indigo-500/30 rounded-xl flex items-center justify-center text-indigo-400 mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-indigo-200">1. Fundamentos Ópticos</h3>
              <p className="text-zinc-400 text-sm mb-4">La física de la luz antes de la química.</p>
              <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                <li className="bg-zinc-950 p-2 rounded border border-zinc-800">• Cámara Oscura (Aristóteles / Alhacén)</li>
                <li className="bg-zinc-950 p-2 rounded border border-zinc-800">• Principio de proyección de luz invertida</li>
              </ul>
            </div>
          </div>

          {/* Nodo 2: Química y Precursores */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-indigo-500/50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-purple-950/80 border border-purple-500/30 rounded-xl flex items-center justify-center text-purple-400 mb-4">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-purple-200">2. Era Química (S. XIX)</h3>
              <p className="text-zinc-400 text-sm mb-4">La fijación permanente de la imagen.</p>
              <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                <li className="bg-zinc-950 p-2 rounded border border-zinc-800">• Heliografía (Niépce, 1826)</li>
                <li className="bg-zinc-950 p-2 rounded border border-zinc-800">• Daguerrotipo (Daguerre, 1839)</li>
                <li className="bg-zinc-950 p-2 rounded border border-zinc-800">• Calotipo / Negativo (Fox Talbot)</li>
              </ul>
            </div>
          </div>

          {/* Nodo 3: Masificación y Cine */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-indigo-500/50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-blue-950/80 border border-blue-500/30 rounded-xl flex items-center justify-center text-blue-400 mb-4">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-200">3. Masificación y Movimiento</h3>
              <p className="text-zinc-400 text-sm mb-4">La fotografía accesible para las masas.</p>
              <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                <li className="bg-zinc-950 p-2 rounded border border-zinc-800">• Kodak y el rollo (Eastman, 1888)</li>
                <li className="bg-zinc-950 p-2 rounded border border-zinc-800">• Cronofotografía (Muybridge)</li>
                <li className="bg-zinc-950 p-2 rounded border border-zinc-800">• Invención del Cine (Hnos. Lumière)</li>
              </ul>
            </div>
          </div>

          {/* Nodo 4: Era Digital e IA */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-indigo-500/50 transition-colors">
            <div>
              <div className="w-12 h-12 bg-emerald-950/80 border border-emerald-500/30 rounded-xl flex items-center justify-center text-emerald-400 mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-emerald-200">4. Era Digital e IA</h3>
              <p className="text-zinc-400 text-sm mb-4">De los sensores electrónicos a los algoritmos.</p>
              <ul className="space-y-2 text-xs text-zinc-300 font-mono">
                <li className="bg-zinc-950 p-2 rounded border border-zinc-800">• Primera cámara digital (Kodak, 1975)</li>
                <li className="bg-zinc-950 p-2 rounded border border-zinc-800">• Smartphones y conectividad</li>
                <li className="bg-zinc-950 p-2 rounded border border-zinc-800">• Fotografía Computacional e IA</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Pie de página decorativo */}
      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-zinc-900 text-center text-zinc-600 text-xs font-mono">
        Proyecto Académico CTY • Historia de la Fotografía
      </div>
    </main>
  );
}
