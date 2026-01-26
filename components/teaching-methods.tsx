"use client"

import { useLanguage } from "@/lib/language-context"
import { BookText, Laptop, Video, Share2, FileSearch, Award, CheckCircle } from "lucide-react"

export function TeachingMethods() {
  const { t, dir } = useLanguage()

  const methods = [
    {
      icon: BookText,
      titleEn: "Theoretical & Research-Based Teaching",
      titleAr: "التعليم النظري والبحثي",
      descEn: "Comprehensive theoretical foundations combined with practical research methodologies",
      descAr: "أسس نظرية شاملة مدمجة مع منهجيات البحث العملي",
    },
    {
      icon: Laptop,
      titleEn: "Modern Technology Integration",
      titleAr: "تكامل التكنولوجيا الحديثة",
      descEn: "Leveraging cutting-edge educational technology for enhanced learning experiences",
      descAr: "الاستفادة من أحدث التقنيات التعليمية لتعزيز تجارب التعلم",
    },
    {
      icon: Video,
      titleEn: "Live Zoom Lectures",
      titleAr: "محاضرات زووم المباشرة",
      descEn: "Interactive live sessions with real-time Q&A and discussion opportunities",
      descAr: "جلسات مباشرة تفاعلية مع فرص الأسئلة والأجوبة والنقاش في الوقت الفعلي",
    },
    {
      icon: Share2,
      titleEn: "Screen Sharing Sessions",
      titleAr: "جلسات مشاركة الشاشة",
      descEn: "Visual demonstrations and presentations for complex topics and materials",
      descAr: "عروض توضيحية مرئية للموضوعات والمواد المعقدة",
    },
    {
      icon: FileSearch,
      titleEn: "Scientific Research Preparation",
      titleAr: "إعداد البحث العلمي",
      descEn: "Guidance and training in academic research writing and methodology",
      descAr: "التوجيه والتدريب على كتابة البحوث الأكاديمية ومنهجيتها",
    },
  ]

  const accreditationFeatures = [
    { en: "Internationally Recognized Certificates", ar: "شهادات معترف بها دولياً" },
    { en: "Quality Assurance Standards", ar: "معايير ضمان الجودة" },
    { en: "Global Academic Network", ar: "شبكة أكاديمية عالمية" },
  ]

  return (
    <section className="py-24 lg:py-36 bg-cream islamic-pattern" id="islamic-identity-&-values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20" dir={dir}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
            {t("Teaching Methods", "أساليب التعليم")}
          </h2>
          <div className="w-24 h-1.5 bg-gold mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Our innovative teaching approaches combine traditional Islamic scholarship with modern educational techniques",
              "تجمع أساليبنا التعليمية المبتكرة بين المنح الدراسية الإسلامية التقليدية والتقنيات التعليمية الحديثة"
            )}
          </p>
        </div>

        {/* Methods Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {methods.map((method, index) => (
            <div
              key={method.titleEn}
              className={`bg-card rounded-3xl p-10 shadow-sm border border-border hover:shadow-xl hover:border-emerald/30 transition-all ${
                index === 4 ? "lg:col-span-1 sm:col-span-2 lg:col-start-2" : ""
              }`}
            >
              <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mb-8">
                <method.icon className="w-8 h-8 text-emerald" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4" dir={dir}>
                {t(method.titleEn, method.titleAr)}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed" dir={dir}>
                {t(method.descEn, method.descAr)}
              </p>
            </div>
          ))}
        </div>

        {/* Accreditation Banner - Redesigned */}
        <div className="relative overflow-hidden rounded-3xl" dir={dir}>
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald via-emerald to-emerald-light" />
          <div className="absolute inset-0 islamic-pattern-dark opacity-30" />
          
          <div className="relative z-10 p-12 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Content */}
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-gold/20 rounded-2xl flex items-center justify-center">
                    <Award className="w-10 h-10 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-primary-foreground">
                      {t("Internationally Accredited", "معتمدة دولياً")}
                    </h3>
                  </div>
                </div>
                <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
                  {t(
                    "Accredited by the International Accreditation Organization (IAO) - United States of America",
                    "معتمدة من منظمة الاعتماد الدولية (IAO) - الولايات المتحدة الأمريكية"
                  )}
                </p>
              </div>

              {/* Right Content - Features */}
              <div className="space-y-4">
                {accreditationFeatures.map((feature) => (
                  <div 
                    key={feature.en}
                    className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10"
                  >
                    <div className="w-10 h-10 bg-gold/30 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-gold" />
                    </div>
                    <span className="text-lg text-primary-foreground font-medium">
                      {t(feature.en, feature.ar)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
