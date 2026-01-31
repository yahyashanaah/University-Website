"use client"

import { useLanguage } from "@/lib/language-context"
import Image from "next/image"

export function Hero() {
  const { t, dir } = useLanguage()

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/image.jpg"
        alt="Islamic Architecture"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-36">
        <div className="w-full mx-auto text-center" dir={dir}>
          {/* Quranic Verse */}
          <div className="mb-12 flex flex-col items-center text-center">
            <p
              className="text-gold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
               font-arabic drop-shadow-lg max-w-5xl leading-relaxed"
              dir="rtl"
            >
              يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا
              الْعِلْمَ دَرَجَاتٍ
            </p>

            <div className="w-24 sm:w-40 h-1 bg-gold mt-6 mb-10" />
          </div>

          {/* Hadith */}
          <blockquote className="mb-16 flex justify-center text-center">
            <p
              className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl 
               font-arabic drop-shadow-lg max-w-5xl leading-relaxed"
              dir="rtl"
            >
              "من سلك طريقًا يلتمس فيه علمًا سهّل الله له به طريقًا إلى الجنة."
            </p>
          </blockquote>

          {/* University Name */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white tracking-tight drop-shadow-2xl text-center leading-tight">
            {t(
              "The International Islamic University",
              "الجامعة الإسلامية العلمية",
            )}
          </h1>
        </div>
      </div>

      {/* Scroll Indicator - Centered at bottom */}
      <div className="relative z-10 flex justify-center pb-12">
        <div className="animate-bounce">
          <div className="w-10 h-16 border-2 border-white/50 rounded-full flex justify-center pt-3">
            <div className="w-2.5 h-5 bg-gold rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
