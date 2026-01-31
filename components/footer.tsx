"use client"

import { useLanguage } from "@/lib/language-context"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { t, dir } = useLanguage()

  const quickLinks = [
    { en: "Home", ar: "الرئيسية" },
    { en: "About Us", ar: "عن الجامعة" },
    { en: "Programs", ar: "البرامج" },
    { en: "Admissions", ar: "القبول" },
    { en: "Contact", ar: "اتصل بنا" },
  ]

  const programs = [
    { en: "Faculty of Qur'an", ar: "كلية القرآن" },
    { en: "Faculty of Sunnah", ar: "كلية السنة" },
    { en: "Faculty of Fiqh", ar: "كلية الفقه" },
    { en: "Faculty of Arabic", ar: "كلية اللغة العربية" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <footer className="bg-emerald islamic-pattern-dark" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20 lg:py-24">
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10"
            dir={dir}
          >
            {/* University Info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 flex items-center justify-center">
                  <img
                    src="/logo.svg"
                    alt="University Logo"
                    className={`w-30 h-30 object-contain transition-all duration-300`}
                  />
                </div>

                <div>
                  <p className="font-bold text-lg text-primary-foreground">
                    {t(
                      "International Islamic University",
                      "الجامعة الإسلامية الدولية",
                    )}
                  </p>
                </div>
              </div>
              <p className="text-base text-primary-foreground/70 leading-relaxed mb-8">
                {t(
                  "An independent educational academic institution established in 2023 AD in the State of Iraq and in the State of Gambia together.",
                  "مؤسسة تعليمية أكاديمية مستقلة تأسست عام 2023 في دولة العراق.",
                )}
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-primary-foreground/80" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg text-primary-foreground mb-8">
                {t("Quick Links", "روابط سريعة")}
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link) => (
                  <li key={link.en}>
                    <a
                      href="#"
                      className="text-base text-primary-foreground/70 hover:text-gold transition-colors"
                    >
                      {t(link.en, link.ar)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="font-bold text-lg text-primary-foreground mb-8">
                {t("Programs", "البرامج")}
              </h4>
              <ul className="space-y-4">
                {programs.map((program) => (
                  <li key={program.en}>
                    <a
                      href="#"
                      className="text-base text-primary-foreground/70 hover:text-gold transition-colors"
                    >
                      {t(program.en, program.ar)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-bold text-lg text-primary-foreground mb-8">
                {t("Contact Us", "اتصل بنا")}
              </h4>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-base text-primary-foreground/70">
                    {t("Iraq", "العراق")}
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-gold flex-shrink-0" />
                  <span className="text-base text-primary-foreground/70">
                    info@academicaiu.com
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-gold flex-shrink-0" />
                  <span
                    dir="ltr"
                    className="text-base text-primary-foreground/70"
                  >
                    +964 770 297 9755
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-8 border-t border-primary-foreground/10">
          <div
            className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
            dir={dir}
          >
            <p className="text-base text-primary-foreground/60">
              © 2026{" "}
              {t(
                "International Islamic University",
                "الجامعة الإسلامية الدولية",
              )}
              . {t("All rights reserved.", "جميع الحقوق محفوظة.")}
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-base text-primary-foreground/60 hover:text-gold transition-colors"
              >
                {t("Privacy Policy", "سياسة الخصوصية")}
              </a>
              <a
                href="#"
                className="text-base text-primary-foreground/60 hover:text-gold transition-colors"
              >
                {t("Terms of Service", "شروط الخدمة")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
