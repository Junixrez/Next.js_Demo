"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/contact", title: "Contact" },
    { href: "/login", title: "Login" },
    { href: "/products", title: "Products" },
    { href: "/csr", title: "CSR" },
    { href: "/ssr", title: "SSR" },
    { href: "/ssg", title: "SSG" },
    { href: "/isr", title: "ISR" },
    { href: "/users", title: "Users" },
  ];

  const pathname = usePathname();

  return (
    <nav className="bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0">
            <Link href="/">
              <span className="text-xl sm:text-2xl font-semibold text-indigo-600">
                Logo
              </span>
            </Link>
          </div>

          <div className="hidden md:flex md:space-x-2 lg:space-x-4">
            {links.map(({ href, title }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    "px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors " +
                    (active
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:bg-gray-100")
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {title}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map(({ href, title }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={
                    "block px-3 py-2 rounded-md text-base font-medium transition-colors " +
                    (active
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 hover:bg-gray-100")
                  }
                  aria-current={active ? "page" : undefined}
                >
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
