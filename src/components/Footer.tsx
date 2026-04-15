import Image from "next/image";
import Link from "next/link";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { BsLinkedin, BsInstagram, BsTwitterX } from "react-icons/bs";
import { CORE_SERVICES, TECH_SERVICES, AI_SERVICES } from "@/data/servicesData";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-gray-800">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-2xl overflow-hidden bg-white border border-gray-700 flex items-center justify-center">
                <Image src="/images/logo.ico" alt="Pixelwind logo" width={44} height={44} />
              </div>
              <span className="font-bold text-white text-base">Pixelwind<span className="text-brand"> Technologies</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-5">ISO 9001:2015 certified IT training, staffing, and technology solutions from Andhra Pradesh.</p>
            <div className="flex gap-3">
  {[
    { icon: BsLinkedin, link: "https://www.linkedin.com/company/pixelwind-technologies" },
    { icon: BsInstagram, link: "https://www.instagram.com/yourpage" },
    { icon: BsTwitterX, link: "https://twitter.com/yourpage" },
  ].map((item, i) => {
    const Icon = item.icon;
    return (
      <a
        key={i}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="w-9 h-9 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-brand hover:text-white transition-all text-gray-400"
      >
        <Icon size={15} />
      </a>
    );
  })}
</div>
          </div>

          {/* Training */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest">Training & Staffing</h4>
            <ul className="space-y-2">
              {CORE_SERVICES.map((s) => (
                <li key={s.id}><Link href={s.href} className="text-sm hover:text-brand transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* Technology */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest">Technology</h4>
            <ul className="space-y-2">
              {TECH_SERVICES.map((s) => (
                <li key={s.id}><Link href={s.href} className="text-sm hover:text-brand transition-colors">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          {/* AI & Data */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest">AI & Data</h4>
            <ul className="space-y-2">
              {AI_SERVICES.map((s) => (
                <li key={s.id}><Link href={s.href} className="text-sm hover:text-brand transition-colors">{s.title}</Link></li>
              ))}
            </ul>
            <h4 className="text-white font-bold text-xs mb-4 mt-6 uppercase tracking-widest">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about"              className="text-sm hover:text-brand transition-colors">About Us</Link></li>
              <li><Link href="/contact"             className="text-sm hover:text-brand transition-colors">Contact</Link></li>
              <li><Link href="/privacy-policy"      className="text-sm hover:text-brand transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-sm hover:text-brand transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm"><FiMail size={15} className="text-brand mt-0.5 flex-shrink-0" /> info@pixelwind.in</li>
              <li className="flex items-start gap-2.5 text-sm"><FiPhone size={15} className="text-brand mt-0.5 flex-shrink-0" /> +91 93989 29970</li>
              <li className="flex items-start gap-2.5 text-sm"><FiMapPin size={15} className="text-brand mt-0.5 flex-shrink-0" /> Andhra Pradesh, India</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-8 text-xs">
          <p>© {new Date().getFullYear()} Pixelwind Technologies. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy"      className="hover:text-brand transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-brand transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
