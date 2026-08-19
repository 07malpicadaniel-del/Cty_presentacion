"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Camera, Clock, BookOpen, Presentation } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Exposición", href: "/", icon: Presentation },
    { name: "Línea del Tiempo", href: "/timeline", icon: Clock },
    { name: "Fuentes APA", href: "/fuentes", icon: BookOpen },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          <div className="flex items-center gap-2">
            <Camera className="w-6 h-6 text-black" />
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Evolución Fotográfica
            </span>
          </div>

          <div className="flex space-x-8 h-full">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              
              return (
                <Link 
                  key={link.name}
                  href={link.href} 
                  className={`flex items-center gap-2 text-sm font-medium transition-colors h-full border-b-2 ${
                    isActive 
                      ? "text-black border-black" 
                      : "text-gray-500 border-transparent hover:text-black hover:border-gray-300"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {link.name}
                </Link>
              );
            })}
          </div>
          
        </div>
      </div>
    </nav>
  );
}