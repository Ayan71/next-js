"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
import { useState } from "react";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-passport" },

];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname=usePathname()
const [input,setInput]=useState('')
  return (
    <div>
      <div>
        <input type="text"  value={input} onChange={(e)=>setInput(e.target.value)}/>
      </div>
      {navLinks.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.name}
        </Link>
      ))}
      {children}
    </div>
  );
}


