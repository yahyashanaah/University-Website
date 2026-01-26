"use client"

import { useLanguage } from "@/lib/language-context"
import { FileText, UserCheck, CreditCard, BookOpen, GraduationCap, CheckCircle } from "lucide-react"

export function Registration() {
  const { t, dir } = useLanguage()

  const steps = [
    {
      icon: FileText,
      titleEn: "Submit Application",
      titleAr: "تقديم الطلب",
      descEn: "Fill out the online application form with your personal and academic information",
      descAr: "املأ نموذج الطلب الإلكتروني بمعلوماتك الشخصية والأكاديمية",
    },
    {
      icon: UserCheck,
      titleEn: "Document Review",
      titleAr: "مراجعة الوثائق",
      descEn: "Submit required documents including certificates and identification",
      descAr: "تقديم المستندات المطلوبة بما في ذلك الشهادات والهوية",
    },
    {
      icon: CreditCard,
      titleEn: "Fee Payment",
      titleAr: "دفع الرسوم",
      descEn: "Complete the registration fee payment through our secure payment system",
      descAr: "أكمل دفع رسوم التسجيل من خلال نظام الدفع الآمن لدينا",
    },
    {
      icon: BookOpen,
      titleEn: "Course Selection",
      titleAr: "اختيار المقررات",
      descEn: "Choose your courses and academic track with guidance from advisors",
      descAr: "اختر مقرراتك ومسارك الأكاديمي بتوجيه من المرشدين",
    },
    {
      icon: GraduationCap,
      titleEn: "Begin Studies",
      titleAr: "بدء الدراسة",
      descEn: "Access the learning platform and start your academic journey",
      descAr: "الوصول إلى منصة التعلم وبدء رحلتك الأكاديمية",
    },
    {
      icon: CheckCircle,
      titleEn: "Graduation",
      titleAr: "التخرج",
      descEn: "Complete your program and receive your internationally recognized certificate",
      descAr: "أكمل برنامجك واحصل على شهادتك المعترف بها دوليًا",
    },
  ]

  return (
    <section className="py-24 lg:py-36 bg-secondary" id="admissions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20" dir={dir}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
            {t("Registration & Acceptance Process", "عملية التسجيل والقبول")}
          </h2>
          <div className="w-24 h-1.5 bg-gold mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Your journey to academic excellence starts with these simple steps",
              "رحلتك نحو التميز الأكاديمي تبدأ بهذه الخطوات البسيطة"
            )}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-emerald/20 -translate-y-1/2" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, index) => (
              <div key={step.titleEn} className="relative">
                {/* Step Card */}
                <div className="bg-card rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-gold/30 transition-all h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-gold text-charcoal w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  
                  <div className="pt-6">
                    <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mb-6">
                      <step.icon className="w-7 h-7 text-emerald" />
                    </div>
                    
                    <h3 className="font-bold text-xl text-foreground mb-3" dir={dir}>
                      {t(step.titleEn, step.titleAr)}
                    </h3>
                    
                    <p className="text-base text-muted-foreground leading-relaxed" dir={dir}>
                      {t(step.descEn, step.descAr)}
                    </p>
                  </div>
                </div>

                {/* Connector for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-1 h-10 bg-emerald/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
