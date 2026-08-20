"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Presentation, Clock, BookOpen } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-zinc-950/60 backdrop-blur-md border-b border-zinc-800/50">
      <div className="flex items-center gap-2">
        <span className="font-serif font-bold tracking-wider text-white text-lg">Evolución Fotográfica</span>
      </div>

      <nav className="flex items-center gap-2 md:gap-4">
        <Link
          href="/"
          className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
            pathname === "/" ? "bg-indigo-600 text-white" : "text-zinc-400 hover:text-white hover:bg-zinc-900"
          }`}
        >
          <Presentation className="w-4 h-4" /> Exposición
        </Link>

        <Link
          href="/timeline"
          className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
            pathname === "/timeline" ? "bg-indigo-600 text-white" : "text-zinc-400 hover:text-white hover:bg-zinc-900"
          }`}
        >
          <Clock className="w-4 h-4" /> Línea del Tiempo
        </Link>

        <Link
          href="/fuentes"
          className={`px-3 py-1.5 rounded-lg text-sm font-medium flex items-center gap-1.5 transition-colors ${
            pathname === "/fuentes" ? "bg-indigo-600 text-white" : "text-zinc-400 hover:text-white hover:bg-zinc-900"
          }`}
        >
          <BookOpen className="w-4 h-4" /> Fuentes APA
        </Link>
      </nav>
    </header>
  );
}
