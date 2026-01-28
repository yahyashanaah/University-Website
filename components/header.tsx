"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

const navItems = [
  { en: "Home", ar: "الرئيسية", path: "/" },
  { en: "About", ar: "عن الجامعة", path: "/#about" },
  { en: "Programs", ar: "البرامج", path: "/#programs" },
  { en: "Admissions", ar: "القبول", path: "#registration" },
  { en: "Qur’an College", ar: "كلية القرآن وعلومه", path: "/quran-college" },
  { en: "News", ar: "الأخبار" },
  { en: "Contact", ar: "اتصل بنا", path: "/#contact" },
]


export function Header() {
  const { language, setLanguage, t, dir } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isHome = typeof window !== "undefined" && window.location.pathname === "/"


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center justify-between h-18 lg:h-24"
          dir={dir}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">
            {" "}
            <img
              src="/logo.svg"
              alt="University Logo"
              className={`w-12 lg:w-20 transition-all duration-300 ${scrolled ? "text-emerald" : "text-white"}`}
            />{" "}
            <div className="hidden sm:block">
              {" "}
              <p
                className={`font-bold text-base lg:text-lg transition-colors duration-300 ${scrolled ? "text-emerald" : "text-white"}`}
              >
                {" "}
                {t(
                  "International Islamic University",
                  "الجامعة الإسلامية العلمية",
                )}{" "}
              </p>{" "}
            </div>{" "}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.en}
                href={item.path}
                className={`px-4 py-2 text-base font-semibold transition-colors duration-300 whitespace-nowrap ${
                  scrolled
                    ? "text-charcoal hover:text-emerald"
                    : "text-white hover:text-gold"
                }`}
              >
                {t(item.en, item.ar)}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className={`font-bold text-base min-w-[60px] h-11 transition-all duration-300 ${
                scrolled
                  ? "border-emerald text-emerald hover:bg-emerald hover:text-white"
                  : "border-gold bg-gold text-emerald hover:bg-gold-light"
              }`}
            >
              {language === "ar" ? "EN" : "AR"}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className={`xl:hidden h-11 w-11 transition-colors duration-300 ${
                scrolled
                  ? "text-emerald hover:bg-emerald/10"
                  : "text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav
            className={`xl:hidden py-6 border-t transition-colors duration-300 ${
              scrolled
                ? "border-border bg-white"
                : "border-gold/20 bg-black/80 backdrop-blur-sm"
            }`}
            dir={dir}
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.en}
                  href={item.path}
                  className={`px-5 py-4 rounded-lg transition-colors text-lg font-semibold ${
                    scrolled
                      ? "text-charcoal hover:text-emerald hover:bg-muted"
                      : "text-white hover:text-gold hover:bg-white/10"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t(item.en, item.ar)}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
