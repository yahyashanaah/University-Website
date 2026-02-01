"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { Footer } from "@/components/footer"


export default function QuranCollegePage() {
  const { language } = useLanguage()

  const gallery = [
    {
      src: "/images/image_1.jpg",
      name: {
        ar: "دكتور أحمد ذنون",
        en: "Dr. Ahmed Thanoon",
      },
      position: {
        ar: "أ. مساعد كلية القرآن وعلومه",
        en: "Assistant Professor, College of Qur’an & its Sciences",
      },
    },
    {
      src: "/images/image_2.jpg",
      name: {
        ar: "دكتور عبدالله جدوع",
        en: "Dr. Abdullah Jadoa",
      },
      position: {
        ar: "أ. مساعد كلية القرآن وعلومه",
        en: "Assistant Professor, College of Qur’an & its Sciences",
      },
    },
    {
      src: "/images/image_3.jpg",
      name: {
        ar: "دكتور محمد بن أحمد البدور",
        en: "Dr. Mohammed bin Ahmed Al‑Badour",
      },
      position: {
        ar: "عميد كلية القرآن وعلومه",
        en: "Dean, College of Qur’an & its Sciences",
      },
    },
    {
      src: "/images/image_4.jpg",
      name: {
        ar: "دكتور محمود الفاعوري",
        en: "Dr. Mahmoud Al‑Faouri",
      },
      position: {
        ar: "رئيس قسم التفسير كلية القرآن وعلومه",
        en: "Head of Tafsir Department",
      },
    },
    {
      src: "/images/image_5.jpg",
      name: {
        ar: "دكتور حازم أبو عليا",
        en: "Dr. Hazem Abu Alia",
      },
      position: {
        ar: "نائب عميد كلية القرآن وعلومه",
        en: "Vice Dean, College of Qur’an & its Sciences",
      },
    },
    {
      src: "/images/image_6.jpg",
      name: {
        ar: "دكتور عاطف رفاعي",
        en: "Dr. Atef Rifai",
      },
      position: {
        ar: "أ. مساعد كلية القرآن وعلومه",
        en: "Assistant Professor, College of Qur’an & its Sciences",
      },
    },
    {
      src: "/images/image_7.jpg",
      name: {
        ar: "دكتور عماد الزقيلي",
        en: "Dr. Imad Al‑Zuqaili",
      },
      position: {
        ar: "أ. مساعد كلية القرآن وعلومه",
        en: "Assistant Professor, College of Qur’an & its Sciences",
      },
    },
    {
      src: "/images/image_8.jpg",
      name: {
        ar: "دكتور محمد فتحي",
        en: "Dr. Mohammed Fathi",
      },
      position: {
        ar: "أ. مساعد كلية القرآن وعلومه",
        en: "Assistant Professor, College of Qur’an & its Sciences",
      },
    },
    {
      src: "/images/image_9.jpg",
      name: {
        ar: "دكتور عماد الصمادي",
        en: "Dr. Imad Al‑Samadi",
      },
      position: {
        ar: "أ. مساعد كلية القرآن وعلومه",
        en: "Assistant Professor, College of Qur’an & its Sciences",
      },
    },
    {
      src: "/images/image_10.jpg",
      name: {
        ar: "دكتور عامر القيسي",
        en: "Dr. Amer Al‑Qaisi",
      },
      position: {
        ar: "أ. مساعد كلية القرآن وعلومه",
        en: "Assistant Professor, College of Qur’an & its Sciences",
      },
    },
    {
      src: "/images/image_11.jpg",
      name: {
        ar: "دكتور عامر القضاة",
        en: "Dr. Amer Al‑Qudah",
      },
      position: {
        ar: "أ. مساعد كلية القرآن وعلومه",
        en: "Assistant Professor, College of Qur’an & its Sciences",
      },
    },
    {
      src: "/images/image_12.jpg",
      name: {
        ar: "الدكتور عبدالرحيم بوقته",
        en: "Dr. Abdulrahim Bouqta",
      },
      position: {
        ar: "أ. مساعد كلية القرآن وعلومه",
        en: "Assistant Professor, College of Qur’an & its Sciences",
      },
    },
    {
      src: "/images/image_13.jpg",
      name: {
        ar: "الدكتور عبدالله شلنفح",
        en: "Dr. Abdullah Shalanfah",
      },
      position: {
        ar: "أ. مساعد تفسير وعلوم القرآن",
        en: "Assistant Professor of Tafsir & Qur’anic Sciences",
      },
    },
  ];

  return (
    <>
      <Header />

      {/* Page Wrapper */}
      <div className="min-h-screen bg-emerald-50">
        {/* Hero Section */}
        <section className="bg-emerald-700 text-white pt-40 pb-24 text-center">
          <h1 className="text-4xl font-bold">
            {language === "ar" ? "كلية القرآن وعلومه" : "Qur’an College"}
          </h1>
        </section>
        {/* Content Section */}
        <div className="max-w-4xl mx-auto px-6 space-y-10">
          {/* Intro Horizontal Card */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-xl font-semibold text-emerald-700">
                {language === "ar" ? "نبذة عن الكلية" : "About the College"}
              </h2>
            </div>

            <div className="hidden md:block w-px bg-gray-200" />

            <div
              className="md:w-2/3 text-lg leading-relaxed text-charcoal"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {language === "ar" ? (
                <p>
                  من أبرز وأميز كليات الجامعة:
                  <strong> كلية القرآن وعلومه </strong>
                  ممثلة بعميدها فضيلة الدكتور
                  <strong> محمد بن أحمد البدور </strong>
                  صاحب الاختصاص والرسالة، ويؤازره جمع من أصحاب العلم والفضل.
                </p>
              ) : (
                <p>
                  Among the most distinguished colleges of the university is the
                  <strong> College of Qur’an and its Sciences</strong>, led by
                  its dean, Dr. <strong>Mohammad bin Ahmad Al-Baddour</strong>,
                  supported by esteemed academics.
                </p>
              )}
            </div>
          </div>

          {/* Features Horizontal Card */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-xl font-semibold text-emerald-700">
                {language === "ar" ? "مميزات الكلية" : "College Features"}
              </h2>
            </div>

            <div className="hidden md:block w-px bg-gray-200" />

            <div
              className="md:w-2/3 text-lg leading-relaxed text-charcoal"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {language === "ar" ? (
                <>
                  <p>
                    وقد امتازت هذه الكلية المباركة بمدخلاتها ومخرجاتها، ومن أبرز
                    سماتها:
                  </p>
                  <ul className="list-disc pr-6 space-y-1 inline-block text-right">
                    <li>خطط دراسية رصينة</li>
                    <li>تعليم تفاعلي</li>
                    <li>تخرج ١٤ طالبًا وطالبة من حملة الماجستير</li>
                  </ul>
                </>
              ) : (
                <>
                  <p>
                    This blessed college stands out for its quality, marked by:
                  </p>
                  <ul className="list-disc pl-6 space-y-1 inline-block text-left">
                    <li>Well‑structured academic programs</li>
                    <li>Interactive learning</li>
                    <li>Graduation of 14 master’s students</li>
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Programs Horizontal Card */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex flex-col justify-center text-center md:text-left">
              <h2 className="text-xl font-semibold text-emerald-700">
                {language === "ar" ? "البرامج الأكاديمية" : "Academic Programs"}
              </h2>
            </div>

            <div className="hidden md:block w-px bg-gray-200" />

            <div
              className="md:w-2/3 text-lg leading-relaxed text-charcoal"
              dir={language === "ar" ? "rtl" : "ltr"}
            >
              {language === "ar" ? (
                <>
                  <p>
                    <strong>برنامج الدكتوراه:</strong> ١٥ طالبًا يعدّون بحوث
                    التخرج.
                  </p>
                  <p>
                    <strong>برنامج الماجستير:</strong> ١١ طالبًا وطالبة
                  </p>
                  <ul className="list-disc pr-6 space-y-1 inline-block text-right">
                    <li>٨ منهم يتلقون المواد المقررة</li>
                    <li>٣ يعدّون بحوث التخرج بعد إنهاء المواد</li>
                  </ul>
                  <p>
                    <strong>برنامج البكالوريوس:</strong> ٤٠ طالبًا وطالبة
                    <br /> نصفهم تقريبًا يتخرجون في الفصل القادم.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>PhD Program:</strong> 15 students preparing
                    dissertations.
                  </p>
                  <p>
                    <strong>Master’s Program:</strong> 11 students
                  </p>
                  <ul className="list-disc pl-6 space-y-1 inline-block text-left">
                    <li>8 completing coursework</li>
                    <li>3 preparing dissertations</li>
                  </ul>
                  <p>
                    <strong>Bachelor’s Program:</strong> 40 students
                    <br /> Nearly half graduate next semester.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>{" "}
        {/* close max-w-4xl */}
        {/* Full-width carousel section */}
        {/* Full-width images grid section */}
        <section className="w-full py-12 bg-emerald-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {gallery.map((item, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl shadow-md border border-gray-100 group"
                >
                  <img
                    src={item.src}
                    alt={item.name[language]}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg leading-tight">
                      {item.name[language]}
                    </h3>
                    <p className="text-emerald-200 text-sm">{item.position[language]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto px-6 space-y-10"></div>
      </div>
      <Footer />
    </>
  );
}
