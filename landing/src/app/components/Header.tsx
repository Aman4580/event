"use client"; // Add this directive at the top of the file

import { useState } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="" alt="Company Logo" className="h-8 w-auto" />
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link>
          <Link href="#projects" className="text-gray-600 hover:text-gray-900">Projects</Link>
          <Link href="#team" className="text-gray-600 hover:text-gray-900">Team</Link>
          <Link href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Input type="tel" placeholder="Phone number" className="w-40" />
          <Button variant="outline">Request a call</Button>
        </div>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Add hamburger icon here */}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          {/* Mobile menu items */}
        </div>
      )}
    </header>
  );
}
