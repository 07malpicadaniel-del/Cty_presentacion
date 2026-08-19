import { BookOpen } from "lucide-react";
import { references } from "@/data/references";

export default function FuentesPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Encabezado */}
        <div className="flex items-center gap-4 mb-12 border-b-4 border-black pb-6 inline-flex">
          <BookOpen className="w-10 h-10 text-black" />
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Fuentes Bibliográficas
          </h1>
        </div>
        
        {/* Lista de Referencias */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-10 md:p-14">
          <ul className="space-y-8">
            {references.map((ref) => (
              <li 
                key={ref.id} 
                className="text-lg text-gray-700 leading-relaxed pl-8 relative before:absolute before:left-0 before:top-3 before:w-2 before:h-2 before:bg-black before:rounded-full hover:text-black transition-colors"
              >
                {ref.text}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}