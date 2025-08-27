"use client";
import "../global.css";
import Header from "../Header";
import Footer from "../Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <div>
      <Header />
      {navLinks.map((link) => {
        const isActive =
          pathName === link.href ||
          (pathName.startsWith(link.href) && link.href !== "/");
        return (
          <Link
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
      <main>{children}</main>
      <Footer />
    </div>
  );
}
