"use client"

import { useLanguage } from "@/lib/language-context"
import { GraduationCap, BookMarked, Calendar, FileText } from "lucide-react"

export function StudentOffers() {
  const { t, dir } = useLanguage()

  const offers = [
    {
      icon: GraduationCap,
      titleEn: "Academic Advancement & Degrees",
      titleAr: "مواصلة الدراسة الأكاديمية والحصول على أعلى الشهادات",
      descEn: "Continue your academic journey and obtain the highest certifications recognized internationally",
      descAr: "مواصلة رحلتك الأكاديمية والحصول على أعلى الشهادات المعترف بها دولياً",
    },
    {
      icon: BookMarked,
      titleEn: "Islamic Studies with Certified Scholars",
      titleAr: "دراسة كتب شرعية والحصول على الإجازات",
      descEn: "Study Islamic books and obtain Ijazat (certifications) from qualified scholars",
      descAr: "دراسة الكتب الإسلامية والحصول على الإجازات من العلماء المؤهلين",
    },
    {
      icon: Calendar,
      titleEn: "Free Seminars & Courses",
      titleAr: "ندوات ودورات غالباً مجانية",
      descEn: "Access to free or low-cost seminars and specialized courses throughout the year",
      descAr: "الوصول إلى ندوات ودورات متخصصة مجانية أو منخفضة التكلفة على مدار العام",
    },
    {
      icon: FileText,
      titleEn: "Free Research Publication",
      titleAr: "نشر بحوث الطلبة والأساتذة مجاناً",
      descEn: "Free publication opportunities for students and faculty research papers",
      descAr: "فرص نشر مجانية للأوراق البحثية للطلاب وأعضاء هيئة التدريس",
    },
  ]

  return (
    <section className="py-24 lg:py-36 bg-card" id="news-&-events">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20" dir={dir}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
            {t("What We Offer Students", "ما نقدمه للطلاب")}
          </h2>
          <div className="w-24 h-1.5 bg-gold mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Comprehensive benefits and opportunities for all our students",
              "مزايا وفرص شاملة لجميع طلابنا"
            )}
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid sm:grid-cols-2 gap-10">
          {offers.map((offer, index) => (
            <div
              key={offer.titleEn}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald to-emerald-light p-10 lg:p-12"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 islamic-pattern-dark opacity-50" />
              
              <div className="relative z-10">
                <div className="w-18 h-18 bg-gold/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <offer.icon className="w-10 h-10 text-gold" />
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-6" dir={dir}>
                  {t(offer.titleEn, offer.titleAr)}
                </h3>
                
                <p className="text-lg text-primary-foreground/80 leading-relaxed" dir={dir}>
                  {t(offer.descEn, offer.descAr)}
                </p>

                {/* Number Badge */}
                <div className="absolute top-8 right-8 w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-gold/50">0{index + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
