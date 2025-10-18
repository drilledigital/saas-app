"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-4">
        {navItems.map(({ label, href }) => (
          <Link 
            href={href} 
            key={label} 
            className={cn(pathname === href && 'text-primary font-semibold')}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1"
      >
        <span className={cn("w-6 h-0.5 bg-black transition-all", isOpen && "rotate-45 translate-y-2")}></span>
        <span className={cn("w-6 h-0.5 bg-black transition-all", isOpen && "opacity-0")}></span>
        <span className={cn("w-6 h-0.5 bg-black transition-all", isOpen && "-rotate-45 -translate-y-1.5")}></span>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b flex flex-col gap-4 p-4 rounded-4xl border-gray-800">
          {navItems.map(({ label, href }) => (
            <Link 
              href={href} 
              key={label}
              onClick={() => setIsOpen(false)}
              className={cn(pathname === href && 'text-primary font-semibold')}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default NavItems;