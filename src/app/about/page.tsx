import Navbar from "@/components/Navbar";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { BsShieldCheck, BsGraphUp, BsPeopleFill } from "react-icons/bs";
import { FiTarget, FiGlobe, FiAward } from "react-icons/fi";

const VALUES = [
  { Icon:BsShieldCheck, color:"text-blue-600 bg-blue-50",   title:"Quality First",      desc:"ISO 9001:2015 certified — every program, every delivery, every interaction." },
  { Icon:FiTarget,      color:"text-green-600 bg-green-50", title:"Purpose-Driven",     desc:"We exist to close the gap between education and employment for every student." },
  { Icon:BsGraphUp,     color:"text-amber-600 bg-amber-50", title:"Continuous Growth",  desc:"We evolve our curriculum every quarter to stay ahead of industry demands." },
  { Icon:BsPeopleFill,  color:"text-purple-600 bg-purple-50",title:"People-Centric",    desc:"Students and clients are not transactions — they are long-term partners." },
  { Icon:FiGlobe,       color:"text-cyan-600 bg-cyan-50",   title:"Global Mindset",     desc:"Training professionals for opportunities in India and across the globe." },
  { Icon:FiAward,       color:"text-rose-600 bg-rose-50",   title:"Proven Excellence",  desc:"Hundreds of successful placements and a 98% client satisfaction rate." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-gray-50 py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <span className="inline-block text-xs font-bold text-brand uppercase tracking-widest mb-4">About Us</span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Empowering Careers<br/><span className="gradient-text">Since 2021</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Pixelwind Technologies is an ISO 9001:2015 certified organization specializing in IT training, corporate skill development, staffing solutions, and technology services — bridging the gap between academic learning and industry expectations.
            </p>
            <div className="flex justify-center gap-12 flex-wrap">
              {[{ n:"3+",l:"Years of Excellence" },{ n:"5000+",l:"Students Trained" },{ n:"50+",l:"Corporate Partners" },{ n:"98%",l:"Satisfaction Rate" }].map(s => (
                <div key={s.l} className="text-center">
                  <p className="text-4xl font-extrabold text-brand">{s.n}</p>
                  <p className="text-sm text-gray-500 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-brand rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5"/>
              <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-6">Our Mission</span>
              <h2 className="text-3xl font-extrabold text-white mb-4">Bridge the Gap Between Learning and Earning</h2>
              <p className="text-white/75 leading-relaxed">To deliver world-class IT training and technology solutions that create real-world impact — empowering individuals to build meaningful careers and enabling businesses to operate at peak performance.</p>
            </div>
            <div className="bg-gray-950 rounded-3xl p-10 relative overflow-hidden">
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5"/>
              <span className="inline-block bg-white/10 text-white text-xs font-bold uppercase tracking-widest rounded-full px-3 py-1 mb-6">Our Vision</span>
              <h2 className="text-3xl font-extrabold text-white mb-4">Become India&apos;s Most Trusted Career Partner</h2>
              <p className="text-gray-400 leading-relaxed">To be the go-to institution for IT education and enterprise technology in South India — recognized for outcomes, not just programs — with a presence in every major city by 2027.</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold text-brand uppercase tracking-widest mb-4">Our Values</span>
              <h2 className="text-4xl font-extrabold text-gray-900">What We Stand For</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VALUES.map(({ Icon, color, title, desc }, i) => (
                <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color}`}><Icon size={22}/></div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
