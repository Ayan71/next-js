"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import path from "path";
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

  return (
    <div>
      {navLinks.map((link) => (

     
        <Link key={link.href} href={link.href}>
          {link.name}
        </Link>
      ))}
      {children}
    </div>
  );
}


