"use client";

import { useState } from "react";
import { HelpCircle, ArrowRight, CheckCircle, XCircle, ThumbsUp, ThumbsDown } from "lucide-react";

const myths = [
  {
    statement: 'La palabra "Fotografía" significa literalmente "Capturar el alma".',
    isTrue: false,
    explanation: 'FALSO. Proviene del griego "phos" (luz) y "grafis" (escribir o dibujar). Su significado real y literal es "Escribir con luz".'
  },
  {
    statement: "En el siglo XIX, la gente no sonreía en las fotos porque el tiempo de exposición era tan largo que era imposible mantener la sonrisa.",
    isTrue: true,
    explanation: 'VERDADERO. Además de que sonreír era considerado un gesto exclusivo de las clases bajas en la pintura clásica, mantener una sonrisa natural y quieta por 5 o 10 minutos era físicamente doloroso.'
  },
  {
    statement: "La primera cámara digital fue inventada por la empresa Apple en el año 2001.",
    isTrue: false,
    explanation: 'FALSO. Fue inventada por Steven Sasson, un ingeniero de Kodak, en 1975. Era del tamaño de una tostadora y guardaba la foto en un cassette de audio.'
  },
  {
    statement: "El filósofo Aristóteles ya conocía el principio de la cámara oscura en la antigua Grecia.",
    isTrue: true,
    explanation: 'VERDADERO. Alrededor del año 300 a.C., Aristóteles describió cómo la luz pasaba a través de un pequeño agujero en una habitación oscura y proyectaba una imagen invertida durante un eclipse solar.'
  },
  {
    statement: "Las cámaras de los smartphones actuales toman una sola foto cada vez que presionas el botón.",
    isTrue: false,
    explanation: 'FALSO. Gracias a la Fotografía Computacional, el teléfono captura docenas de fotos invisibles antes y después de presionar el botón, y una Inteligencia Artificial las fusiona en milisegundos para crear la imagen perfecta.'
  }
];

export default function Slide13() {
  const [currentMyth, setCurrentMyth] = useState(0);
  const [selectedAns, setSelectedAns] = useState<boolean | null>(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleAnswer = (answer: boolean) => {
    if (selectedAns !== null) return;
    setSelectedAns(answer);
  };

  const nextMyth = () => {
    if (currentMyth < myths.length - 1) {
      setCurrentMyth(currentMyth + 1);
      setSelectedAns(null);
    } else {
      setIsGameOver(true);
    }
  };

  const resetGame = () => {
    setCurrentMyth(0);
    setSelectedAns(null);
    setIsGameOver(false);
  };

  return (
    <div className="w-full h-full flex flex-col bg-zinc-950 text-white overflow-hidden relative">
      
      {/* Encabezado */}
      <div className="w-full p-6 border-b border-zinc-800 flex justify-between items-center bg-zinc-900/80 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-6 h-6 text-rose-500" />
          <h2 className="text-xl font-bold tracking-widest uppercase text-rose-100">Mito o Realidad</h2>
        </div>
        {!isGameOver && (
          <div className="text-sm font-mono bg-rose-950/50 text-rose-200 px-4 py-1.5 rounded-full border border-rose-500/30">
            Ronda {currentMyth + 1} de {myths.length}
          </div>
        )}
      </div>

      {isGameOver ? (
        <div className="flex-1 flex flex-col items-center justify-center p-8 z-10 text-center animate-in fade-in duration-500">
          <CheckCircle className="w-24 h-24 text-rose-500 mb-6" />
          <h2 className="text-5xl font-black mb-4">¡Debate Terminado!</h2>
          <p className="text-xl text-zinc-400 mb-10 max-w-2xl">
            La historia de la fotografía está llena de leyendas. Conocer la diferencia entre el mito y la realidad nos ayuda a comprender mejor cómo llegamos a la era digital.
          </p>
          <button 
            onClick={resetGame}
            className="px-8 py-3 bg-rose-600 hover:bg-rose-500 rounded-full font-bold transition-colors text-lg"
          >
            Reiniciar Dinámica
          </button>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16 z-10 relative">
          
          {/* Tarjeta de Pregunta */}
          <div className="w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl p-10 md:p-14 shadow-2xl relative overflow-hidden">
            
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-center leading-tight mb-12">
              "{myths[currentMyth].statement}"
            </h3>
            
            {/* Botones de Votación */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <button
                onClick={() => handleAnswer(true)}
                disabled={selectedAns !== null}
                className={`p-6 rounded-2xl border-2 text-2xl font-black flex flex-col items-center gap-3 transition-all duration-300 ${
                  selectedAns !== null 
                    ? myths[currentMyth].isTrue 
                      ? "bg-green-600 border-green-500 text-white" 
                      : selectedAns === true ? "bg-red-600 border-red-500 text-white opacity-50" : "bg-zinc-800 border-zinc-700 opacity-50"
                    : "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600"
                }`}
              >
                <ThumbsUp className="w-10 h-10" />
                VERDADERO
              </button>

              <button
                onClick={() => handleAnswer(false)}
                disabled={selectedAns !== null}
                className={`p-6 rounded-2xl border-2 text-2xl font-black flex flex-col items-center gap-3 transition-all duration-300 ${
                  selectedAns !== null 
                    ? !myths[currentMyth].isTrue 
                      ? "bg-green-600 border-green-500 text-white" 
                      : selectedAns === false ? "bg-red-600 border-red-500 text-white opacity-50" : "bg-zinc-800 border-zinc-700 opacity-50"
                    : "bg-zinc-800 border-zinc-700 hover:bg-zinc-700 hover:border-zinc-600"
                }`}
              >
                <ThumbsDown className="w-10 h-10" />
                FALSO
              </button>
            </div>

            {/* Explicación Histórica */}
            {selectedAns !== null && (
              <div className="animate-in slide-in-from-bottom-8 fade-in duration-500 mt-8 bg-zinc-950 p-6 rounded-2xl border border-zinc-800">
                <div className="flex items-start gap-4">
                  {myths[currentMyth].isTrue ? (
                    <CheckCircle className="w-8 h-8 text-green-500 shrink-0" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-500 shrink-0" />
                  )}
                  <p className="text-zinc-300 text-lg leading-relaxed">
                    {myths[currentMyth].explanation}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button 
                    onClick={nextMyth}
                    className="px-6 py-3 bg-white text-black hover:bg-zinc-200 rounded-xl font-bold flex items-center gap-2 transition-colors"
                  >
                    Siguiente Mito <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
