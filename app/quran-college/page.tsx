"use client"

import { Header } from "@/components/header"
import { useLanguage } from "@/lib/language-context"
import { Footer } from "@/components/footer"


export default function QuranCollegePage() {
  const { language } = useLanguage()

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
              {[
                "/images/image1.png",
                "/images/image2.png",
                "/images/image3.png",
                "/images/image4.png",
                "/images/image5.png",
                "/images/image6.png",
                "/images/image7.png",
                "/images/image8.png",
                "/images/image9.png",
                "/images/image10.png",
                "/images/image11.png",
              ].map((src, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl shadow-md border border-gray-100"
                >
                  <img
                    src={src}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
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
