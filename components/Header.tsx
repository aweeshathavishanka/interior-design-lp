"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // For mobile hamburger menu
import { Container } from "./craft";
import Image from "next/image";
import logo from "@/public/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}>
      <Container className="flex items-center justify-between ">
        {/* Logo Section */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image src={logo} alt="Logo" width={50} height={50} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-primary transition-colors">
            Services
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary transition-colors">
            Contact
          </Link>
          <Button>Get Started</Button>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="block md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
          <div className="flex flex-col items-center gap-4 p-4">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
            <Button>Get Started</Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
