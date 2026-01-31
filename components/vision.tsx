"use client"

import { useLanguage } from "@/lib/language-context"
import { Target, MessageSquareQuote, Trophy } from "lucide-react"

export function Vision() {
  const { t, dir } = useLanguage()

  const goals = {
    ar: [
      "تخريج جيل من الأكاديميين المتعلمين والمثقفين المؤهلين لخلافة الأرض بالعلم والمعرفة.",
      "تسهيل العلوم الشرعية للراغبين فيها ولم يجدوا الفرصة الحقيقية للتعلم الحضوري.",
      "النهوض بالعملية التعليمية عن طريق الندوات والمؤتمرات العلمية.",
    ],
    en: [
      "Graduating a generation of educated academics and intellectuals qualified to succeed the earth with knowledge.",
      "Facilitating Islamic sciences for those who lack access to in-person learning.",
      "Advancing education through seminars and scientific conferences.",
    ],
  }

  return (
    <section className="py-24 lg:py-36 bg-cream islamic-pattern" id="about-the-university">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20" dir={dir}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
            {t("Our Vision", "رؤيتنا")}
          </h2>
          <div className="w-24 h-1.5 bg-gold mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-10 lg:gap-14">
          {/* University Message */}
          <div className="bg-card rounded-3xl p-10 shadow-sm border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mb-8">
              <MessageSquareQuote className="w-8 h-8 text-emerald" />
            </div>
            <h3 className="text-2xl font-bold text-emerald mb-6" dir={dir}>
              {t("University Message", "رسالة الجامعة")}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed font-arabic" dir={dir}>
              {t(
                '"Contributing to building an academically educated individual qualified to be an effective member in their society and environment"',
                '"المساهمة في بناء الإنسان المتعلم تعليماً أكاديمياً يؤهله ليكون إنساناً فعالاً في مجتمعه وبيئته"'
              )}
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mt-4" dir={dir}>
              {t(
                "It is an independent educational academic institution established in 2023 AD in the State of Iraq and in the State of Gambia together.",
                "تأسست عام 2023 معتمدة من وزارة الخارجية الأمريكية"
              )}
            </p>
          </div>

          {/* Our Motto */}
          <div className="bg-card rounded-3xl p-10 shadow-sm border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-8">
              <Trophy className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-2xl font-bold text-emerald mb-6" dir={dir}>
              {t("Our Motto", "شعار الجامعة")}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed font-arabic" dir={dir}>
              {t(
                '"We are not the only ones in e-learning, but we are the best and most distinguished."',
                '"لسنا الوحيدين في التعليم الالكتروني ولكننا الأفضل والمتميزون"'
              )}
            </p>
          </div>

          {/* Our Goals */}
          <div className="bg-card rounded-3xl p-10 shadow-sm border border-border hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-emerald/10 rounded-2xl flex items-center justify-center mb-8">
              <Target className="w-8 h-8 text-emerald" />
            </div>
            <h3 className="text-2xl font-bold text-emerald mb-6" dir={dir}>
              {t("Our Goals", "أهداف الجامعة")}
            </h3>
            <ul className="space-y-4">
              {goals[t("en", "ar") as "en" | "ar"].map((goal, index) => (
                <li key={index} className="flex gap-4 text-base text-muted-foreground leading-relaxed" dir={dir}>
                  <span className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold text-gold">
                    {index + 1}
                  </span>
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
