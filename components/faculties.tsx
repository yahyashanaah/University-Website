"use client"

import { useLanguage } from "@/lib/language-context"
import { BookOpen, Scroll, Scale, Languages, Shield, Landmark, History, Briefcase, Globe, Gavel, Megaphone } from "lucide-react"

const faculties = [
  {
    icon: BookOpen,
    nameEn: "Faculty of the Qur'an and its Sciences",
    nameAr: "كلية القرآن وعلومه",
    departmentsEn: ["Quranic Studies", "Tajweed & Qira'at", "Tafsir"],
    departmentsAr: ["الدراسات القرآنية", "التجويد والقراءات", "التفسير"],
  },
  {
    icon: Scroll,
    nameEn: "Faculty of the Prophet's Sunnah",
    nameAr: "كلية السنة النبوية",
    departmentsEn: ["Hadith Sciences", "Prophetic Biography", "Hadith Authentication"],
    departmentsAr: ["علوم الحديث", "السيرة النبوية", "تخريج الأحاديث"],
  },
  {
    icon: Scale,
    nameEn: "Faculty of Jurisprudence",
    nameAr: "كلية الفقه",
    departmentsEn: ["Comparative Fiqh", "Usul al-Fiqh", "Contemporary Issues"],
    departmentsAr: ["الفقه المقارن", "أصول الفقه", "القضايا المعاصرة"],
  },
  {
    icon: Languages,
    nameEn: "Faculty of Arabic Language",
    nameAr: "كلية اللغة العربية",
    departmentsEn: ["Arabic Grammar", "Arabic Literature", "Rhetoric"],
    departmentsAr: ["النحو العربي", "الأدب العربي", "البلاغة"],
  },
  {
    icon: Shield,
    nameEn: "Faculty of Creed",
    nameAr: "كلية العقيدة",
    departmentsEn: ["Islamic Theology", "Comparative Religion", "Philosophy of Religion"],
    departmentsAr: ["علم الكلام", "مقارنة الأديان", "فلسفة الدين"],
  },
  {
    icon: Landmark,
    nameEn: "Faculty of Economics & Islamic Banking",
    nameAr: "كلية الاقتصاد والمصارف الإسلامية",
    departmentsEn: ["Islamic Finance", "Banking Systems", "Economic Theory"],
    departmentsAr: ["التمويل الإسلامي", "النظم المصرفية", "النظرية الاقتصادية"],
  },
  {
    icon: History,
    nameEn: "Faculty of Islamic History",
    nameAr: "كلية التاريخ الإسلامي",
    departmentsEn: ["Early Islamic History", "Islamic Civilization", "Historical Research"],
    departmentsAr: ["التاريخ الإسلامي المبكر", "الحضارة الإسلامية", "البحث التاريخي"],
  },
  {
    icon: Briefcase,
    nameEn: "Faculty of Economics & Business",
    nameAr: "كلية الاقتصاد والأعمال",
    departmentsEn: ["Business Administration", "Marketing", "Management"],
    departmentsAr: ["إدارة الأعمال", "التسويق", "الإدارة"],
  },
  {
    icon: Globe,
    nameEn: "Faculty of Languages",
    nameAr: "كلية اللغات",
    departmentsEn: ["English Language", "Translation Studies", "Linguistics"],
    departmentsAr: ["اللغة الإنجليزية", "دراسات الترجمة", "اللغويات"],
  },
  {
    icon: Gavel,
    nameEn: "Faculty of Politics & Islamic Judiciary",
    nameAr: "كلية السياسة والقضاء الإسلامي",
    departmentsEn: ["Political Science", "Islamic Law", "International Relations"],
    departmentsAr: ["العلوم السياسية", "الشريعة الإسلامية", "العلاقات الدولية"],
  },
  {
    icon: Megaphone,
    nameEn: "Faculty of Media",
    nameAr: "كلية الإعلام",
    departmentsEn: ["Digital Media", "Journalism", "Public Relations"],
    departmentsAr: ["الإعلام الرقمي", "الصحافة", "العلاقات العامة"],
  },
]

export function Faculties() {
  const { t, dir, language } = useLanguage()

  return (
    <section className="py-24 lg:py-36 bg-secondary" id="academic-programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-20" dir={dir}>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-emerald mb-6">
            {t("University Faculties", "كليات الجامعة")}
          </h2>
          <div className="w-24 h-1.5 bg-gold mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              "Explore our diverse range of academic programs designed to nurture scholars and leaders",
              "استكشف مجموعتنا المتنوعة من البرامج الأكاديمية المصممة لتنشئة العلماء والقادة"
            )}
          </p>
        </div>

        {/* Faculty Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {faculties.map((faculty) => (
            <div
              key={faculty.nameEn}
              className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-gold/30 transition-all group"
            >
              <div className="w-14 h-14 bg-emerald/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald group-hover:scale-110 transition-all">
                <faculty.icon className="w-7 h-7 text-emerald group-hover:text-primary-foreground transition-colors" />
              </div>
              
              <h3 className="font-bold text-foreground mb-4 text-lg leading-tight" dir={dir}>
                {language === "en" ? faculty.nameEn : faculty.nameAr}
              </h3>
              
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold text-emerald mb-3">{t("Departments:", "الأقسام:")}</p>
                <ul className="space-y-2" dir={dir}>
                  {(language === "en" ? faculty.departmentsEn : faculty.departmentsAr).map((dept) => (
                    <li key={dept} className="text-base text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                      {dept}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
