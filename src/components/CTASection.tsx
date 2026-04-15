import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";

export default function CTASection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-br from-brand to-brand-dark rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-white/5" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 text-white/70 text-sm mb-6">
              <BsShieldCheck size={16}/><span>ISO 9001:2015 Certified</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
              Ready to Transform<br/>Your Career?
            </h2>
            <p className="text-white/70 text-base max-w-lg mx-auto mb-8">
              Join 5000+ professionals who have already accelerated their growth with Pixelwind Technologies.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="flex items-center gap-2 bg-white text-brand font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-all shadow-xl hover:scale-[1.02]">
                Start Your Journey <FiArrowUpRight size={16}/>
              </Link>
              <Link href="/it-training" className="flex items-center gap-2 border-2 border-white/30 text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition-all">
                View All Programs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
