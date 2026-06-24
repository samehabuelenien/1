$ cat /home/user/1/LandingPage.jsx

import { useState, useRef } from "react";
import {
  Zap,
  Headphones,
  Lock,
  Tv,
  Check,
  X,
  Star,
  ChevronDown,
  MessageCircle,
} from "lucide-react";

// ─── بيانات ثابتة ──────────────────────────────────────────────────────────

const SERVERS = [
  {
    name: "فولتشر",
    price: 35,
    url: "https://wr1one.com/category/اشتراك-فولتشر/",
    features: [
      "تفعيل طلقة بدون حوسة",
      "سيرفرات قوية للمباريات",
      "شغال على كل أجهزتك",
    ],
    badge: false,
  },
  {
    name: "فالكون",
    price: 59,
    url: "https://wr1one.com/category/اشتراك-فالكون/",
    features: [
      "الأكثر طلباً بين العملاء",
      "جودة تفتح النفس",
      "دعم فني 24/7",
    ],
    badge: true,
  },
  {
    name: "سمارترز",
    price: 19,
    url: "https://wr1one.com/category/اشتراك-سمارترز/",
    features: [
      "أقل سعر في المتجر",
      "تشغيل سريع وثابت",
      "مناسب للاستخدام اليومي",
    ],
    badge: false,
  },
  {
    name: "هولك",
    price: 99,
    url: "https://wr1one.com/category/اشتراك-هولك/",
    features: [
      "أقوى أداء وقت الذروة",
      "ثبات تام في المباريات",
      "دعم فني يساعدك 24/7",
    ],
    badge: false,
  },
];

const REVIEWS = [
  {
    name: "نواف الحربي",
    text: "جربت أكثر من خدمة، والفرق هنا كان في سرعة الرد وثبات المشاهدة وقت المباريات.",
  },
  {
    name: "فيصل الدوسري",
    text: "الباقات واضحة والتفعيل سريع، والأهم إن الخدمة مستقرة ومافي انتظار طويل.",
  },
  {
    name: "عبدالرحمن السبيعي",
    text: "الاشتراك اتفعل بسرعة، والدعم كان واضح ومحترم.",
  },
  {
    name: "ريم المطيري",
    text: "أعجبني التنظيم وسهولة الطلب. تجربة ممتازة للمباريات والأفلام.",
  },
];

const FAQS = [
  {
    q: "متى توصلني بيانات الاشتراك بعد الطلب؟",
    a: "غالباً توصلك بيانات التفعيل خلال وقت قصير جداً بعد إتمام الطلب.",
  },
  {
    q: "هل اشتراكات wr1one تعمل على الجوال والشاشات الذكية؟",
    a: "نعم، يمكن تشغيل الاشتراك على أغلب الأجهزة مثل الجوالات والشاشات الذكية وAndroid TV.",
  },
  {
    q: "هل الدفع داخل الموقع آمن؟",
    a: "نعم، عمليات الدفع تتم عبر وسائل دفع موثوقة وآمنة.",
  },
  {
    q: "هل يوجد دعم فني بعد الاشتراك؟",
    a: "بالتأكيد، فريق الدعم متواجد لمساعدتك في التفعيل وحل أي استفسار.",
  },
];

// ─── المكوّنات ──────────────────────────────────────────────────────────────

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <span className="text-2xl font-bold" style={{ color: "#16C098" }}>
          wr1one
        </span>
        <a
          href="https://wa.me/966580469714"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle size={18} />
          <span className="hidden sm:inline">واتساب</span>
        </a>
      </div>
    </header>
  );
}

function Hero({ pricingRef }) {
  const handleScroll = () => {
    pricingRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden py-20 px-4 text-center text-white"
      style={{
        background:
          "linear-gradient(135deg, #0a3d2e 0%, #16C098 50%, #0d2b20 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4">
          شاهد المونديال 2026 بلا أي انقطاع
        </h1>
        <p className="text-lg sm:text-xl text-green-100 mb-8">
          اشترك الآن وابدأ المشاهدة في دقائق
        </p>

        {/* TODO: أضف Countdown هنا بتاريخ المباراة القادمة */}

        <button
          onClick={handleScroll}
          className="inline-block text-lg font-bold px-10 py-4 rounded-full shadow-lg transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: "#16C098", color: "#fff" }}
        >
          اشترك الآن
        </button>
      </div>

      {/* ديكور خلفية */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, #fff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #fff 0%, transparent 50%)",
        }}
      />
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: <Zap size={22} />, text: "تفعيل طلقة بدون حوسة" },
    { icon: <Headphones size={22} />, text: "دعم فني 24/7" },
    { icon: <Lock size={22} />, text: "دفع آمن ومضمون" },
    { icon: <Tv size={22} />, text: "شغال على كل أجهزتك" },
  ];

  return (
    <section
      className="py-6 px-4"
      style={{ backgroundColor: "#e6faf4" }}
    >
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:flex md:flex-row md:justify-around gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 justify-center text-sm sm:text-base font-medium"
            style={{ color: "#0a3d2e" }}
          >
            <span style={{ color: "#16C098" }}>{item.icon}</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function PricingCards({ pricingRef }) {
  return (
    <section id="pricing" ref={pricingRef} className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
          اختر الباقة المناسبة لك
        </h2>

        {/* موبايل: slider أفقي */}
        <div className="flex gap-4 overflow-x-auto pb-4 md:hidden snap-x snap-mandatory">
          {SERVERS.map((server) => (
            <PricingCard key={server.name} server={server} />
          ))}
        </div>

        {/* ديسكتوب: grid 4 أعمدة */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {SERVERS.map((server) => (
            <PricingCard key={server.name} server={server} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ server }) {
  const finalUrl = `${server.url}?sort=price_low`; // عدّل القيمة الفعلية حسب نظام WordPress/WooCommerce عند الإطلاق

  return (
    <div
      className={`relative flex-shrink-0 w-64 md:w-auto snap-start rounded-2xl p-6 flex flex-col border-2 transition-shadow ${
        server.badge
          ? "border-[#16C098] shadow-xl"
          : "border-gray-200 shadow-md hover:shadow-lg"
      }`}
    >
      {server.badge && (
        <div
          className="absolute -top-3 right-1/2 translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap"
          style={{ backgroundColor: "#16C098" }}
        >
          الأكثر طلباً
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-800 mb-2">{server.name}</h3>

      <p className="text-3xl font-extrabold mb-4" style={{ color: "#16C098" }}>
        يبدأ من {server.price} ريال
      </p>

      <ul className="flex-1 space-y-2 mb-6">
        {server.features.map((feat, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <Check size={16} className="flex-shrink-0" style={{ color: "#16C098" }} />
            {feat}
          </li>
        ))}
      </ul>

      <a
        href={finalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center text-white font-bold py-3 rounded-xl transition-opacity hover:opacity-90"
        style={{ backgroundColor: "#16C098" }}
      >
        اشترك الآن
      </a>
    </div>
  );
}

function ProblemSection() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
          تعبت من روابط تنقطع في أهم لحظة؟
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          في wr1one نقدم سيرفرات مختلفة تماماً — تفعيل فوري، ثبات حقيقي، ودعم
          يرد عليك وقت ما تحتاجه. مش وعود فاضية.
        </p>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const rows = [
    {
      feature: "السعر",
      wr1one: "يبدأ من 19 ريال",
      other: "غير محدد وغير واضح",
    },
    {
      feature: "الانقطاع",
      wr1one: "بلا انقطاع",
      other: "متكرر في المباريات",
    },
    {
      feature: "الدعم الفني",
      wr1one: "متاح 24/7",
      other: "غير مضمون",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          ليش wr1one مختلف؟
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-white text-base" style={{ backgroundColor: "#16C098" }}>
                <th className="py-4 px-5 text-right font-bold">المقارنة</th>
                <th className="py-4 px-5 text-center font-bold">wr1one</th>
                <th className="py-4 px-5 text-center font-bold">الطريقة التقليدية</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-4 px-5 font-medium text-gray-700">
                    {row.feature}
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className="flex items-center justify-center gap-1 text-green-600 font-medium">
                      <Check size={16} />
                      {row.wr1one}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-center">
                    <span className="flex items-center justify-center gap-1 text-red-400 font-medium">
                      <X size={16} />
                      {row.other}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          آراء العملاء
        </h2>
        <div className="grid gap-5 md:grid-cols-2">
          {REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ backgroundColor: "#16C098" }}
                >
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-400">موثّق</p>
                </div>
              </div>
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    fill="#FBBF24"
                    className="text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-8">
          أسئلة شائعة
        </h2>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between gap-3 px-5 py-4 text-right font-medium text-gray-800 hover:bg-gray-50 transition-colors"
                onClick={() => toggle(i)}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{
                    transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                    color: "#16C098",
                  }}
                />
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === i ? "200px" : "0px",
                  opacity: openIndex === i ? 1 : 0,
                }}
              >
                <p className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ pricingRef }) {
  const handleScroll = () => {
    pricingRef?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="py-20 px-4 text-center text-white"
      style={{ backgroundColor: "#16C098" }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold mb-6">
          المونديال لا يتكرر إلا كل 4 سنوات
        </h2>
        <button
          onClick={handleScroll}
          className="inline-block bg-white font-bold text-lg px-10 py-4 rounded-full shadow-md transition-transform hover:scale-105 active:scale-95"
          style={{ color: "#16C098" }}
        >
          اشترك الآن
        </button>
        <p className="mt-4 text-green-50 text-sm">
          تفعيل فوري · دعم متواصل
        </p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-6 px-4 bg-gray-900 text-gray-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>جميع الحقوق محفوظة © 2026 wr1one</p>
        <a
          href="https://wa.me/966580469714"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <MessageCircle size={16} />
          <span>الدعم عبر واتساب</span>
        </a>
      </div>
    </footer>
  );
}

// ─── المكوّن الرئيسي ────────────────────────────────────────────────────────

export default function LandingPage() {
  const pricingRef = useRef(null);

  return (
    <div
      dir="rtl"
      className="min-h-screen font-sans text-gray-900"
      style={{ fontFamily: "'IBM Plex Sans Arabic', 'Tajawal', sans-serif" }}
    >
      <Header />
      <Hero pricingRef={pricingRef} />
      <TrustBar />
      <PricingCards pricingRef={pricingRef} />
      <ProblemSection />
      <ComparisonTable />
      <Testimonials />
      <FAQ />
      <FinalCTA pricingRef={pricingRef} />
      <Footer />
    </div>
  );
}
