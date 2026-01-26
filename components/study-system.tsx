"use client"

import { useLanguage } from "@/lib/language-context"
import { Monitor, Users, MessageCircle, Shield } from "lucide-react"

export function StudySystem() {
  const { t, dir, language } = useLanguage()

  const features = [
    {
      icon: Monitor,
      titleEn: "Direct On-Campus Education",
      titleAr: "التعليم الحضوري المباشر",
      descEn: "Traditional classroom-based learning with qualified instructors for students who prefer face-to-face interaction.",
      descAr: "التعلم التقليدي في الفصول الدراسية مع مدربين مؤهلين للطلاب الذين يفضلون التفاعل وجهاً لوجه.",
    },
    {
      icon: Users,
      titleEn: "Online ZOOM-Based Education",
      titleAr: "التعليم عبر الإنترنت عبر زووم",
      descEn: "Live interactive sessions via Zoom platform enabling students worldwide to participate in real-time lectures.",
      descAr: "جلسات تفاعلية مباشرة عبر منصة زووم تمكن الطلاب في جميع أنحاء العالم من المشاركة في المحاضرات المباشرة.",
    },
    {
      icon: MessageCircle,
      titleEn: "Telegram Group Learning",
      titleAr: "التعلم عبر مجموعات تيليجرام",
      descEn: "Dedicated Telegram groups for course materials, discussions, and continuous interaction with teachers.",
      descAr: "مجموعات تيليجرام مخصصة للمواد الدراسية والنقاشات والتفاعل المستمر مع المعلمين.",
    },
    {
      icon: Shield,
      titleEn: "Remote Exam Monitoring",
      titleAr: "مراقبة الامتحانات عن بعد",
      descEn: "Secure and proctored online examination system ensuring academic integrity for distance learners.",
      descAr: "نظام امتحانات إلكتروني آمن ومراقب يضمن النزاهة الأكاديمية للمتعلمين عن بعد.",
    },
  ]

  return (
    <section className="py-24 lg:py-36 bg-emerald islamic-pattern-dark" id="campus-life">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20" dir={dir}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            {t("Study System", "نظام الدراسة")}
          </h2>
          <div className="w-24 h-1.5 bg-gold mx-auto mb-8" />
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            {t(
              "Flexible learning methods designed to accommodate students from all around the world",
              "طرق تعلم مرنة مصممة لاستيعاب الطلاب من جميع أنحاء العالم"
            )}
          </p>
        </div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto mb-20" dir={dir}>
          <h3 className="text-2xl font-bold text-gold mb-8">
            {t("University Education System", "نظام التعليم في الجامعة")}
          </h3>
          <div className="space-y-6">
            <div className="bg-emerald-light/30 rounded-3xl p-8 backdrop-blur-sm border border-primary-foreground/10">
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                {t(
                  "The university adopts an integrated educational system combining direct on-campus education and e-learning. Lectures are delivered via Zoom platform with direct interaction with professors. The university also provides Telegram groups for continuous communication and sharing of study materials.",
                  "تعتمد الجامعة على نظام تعليمي متكامل يجمع بين التعليم الحضوري والتعليم الإلكتروني. يتم تقديم المحاضرات عبر منصة زووم مع إمكانية التفاعل المباشر مع الأساتذة. كما توفر الجامعة مجموعات تيليجرام للتواصل المستمر ومشاركة المواد الدراسية."
                )}
              </p>
            </div>
            <div className="bg-emerald-light/30 rounded-3xl p-8 backdrop-blur-sm border border-primary-foreground/10">
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                {t(
                  "Remote exam monitoring ensures academic integrity, with technical support available to students throughout their study period.",
                  "يتم مراقبة الامتحانات عن بعد لضمان النزاهة الأكاديمية، مع توفير الدعم الفني للطلاب طوال فترة دراستهم."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.titleEn}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-gold" />
              </div>
              <h4 className="font-bold text-lg text-primary-foreground mb-3" dir={dir}>
                {t(feature.titleEn, feature.titleAr)}
              </h4>
              <p className="text-base text-primary-foreground/70 leading-relaxed" dir={dir}>
                {t(feature.descEn, feature.descAr)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
