'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#why-choose-us', label: 'Why Choose Us?' },
    { href: '#menu', label: 'Explore Menu' },
    { href: '#delivery', label: 'Delivery & Payment' },
    { href: '#follow-us', label: 'Follow Us' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/food-munch-logo.png"
            alt="Food Munch Logo"
            width={80}
            height={70}
            priority
          />
        </Link>
        <div className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-yellow-500 hover:underline transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars"></i>
        </button>
      </div>
      <motion.div
        className={`md:hidden px-4 py-2 ${isOpen ? 'block' : 'hidden'}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block py-2 text-gray-700 hover:text-yellow-500"
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </motion.div>
    </nav>
  );
};
