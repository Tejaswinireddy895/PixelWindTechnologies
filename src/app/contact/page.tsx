"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FiMail, FiPhone, FiMapPin, FiClock, FiArrowRight, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";

const SERVICES_LIST = [
  "IT Training & Skill Development","Corporate Training Programs",
  "Technical & Non-Technical Staffing","Placement Assistance",
  "Web Development","App Development","UI/UX Design",
  "Digital Marketing","Cloud & DevOps","IT Consulting",
  "Blockchain Development","Generative AI",
  "Machine Learning","Data Science & Analytics","Business Intelligence",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", message:"" });
  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const validate = () => {
    const e: Record<string,string> = {};
    if (!form.name.trim())    e.name    = "Full name is required.";
    if (!form.email.trim())   e.email   = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.message.trim()) e.message = "Message is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        cache: "no-store",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrMsg(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const Field = ({ k, label, placeholder, type = "text" }: { k:keyof typeof form; label:string; placeholder:string; type?:string }) => (
    <div>
      <label className="block text-xs font-semibold text-gray-700 mb-1.5">{label} <span className="text-red-500">*</span></label>
      <input type={type} value={form[k]} onChange={e => { setForm({...form,[k]:e.target.value}); setErrors({...errors,[k]:""}); }}
        placeholder={placeholder}
        className={`w-full border rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${errors[k] ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-brand focus:ring-brand/10"}`}/>
      {errors[k] && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11}/>{errors[k]}</p>}
    </div>
  );

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-gray-50 min-h-screen">
        {/* Header */}
        <section className="py-20 text-center bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-6">
            <span className="inline-block text-xs font-bold text-brand uppercase tracking-widest mb-4">Get in Touch</span>
            <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Let&apos;s Start a Conversation</h1>
            <p className="text-gray-500 text-lg">Ready to transform your career or business? Drop us a message and we&apos;ll reply within 24 hours.</p>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-brand to-brand-dark rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5"/>
                <div className="flex items-center gap-2 mb-2"><BsShieldCheck size={16} className="text-white/70"/><span className="text-white/70 text-sm">ISO 9001:2015 Certified · Est. 2021</span></div>
                <h2 className="text-2xl font-extrabold mb-8">Contact Information</h2>
                {[
                  { Icon:FiMail,   label:"Email",    val:"info@pixelwind.in" },
                  { Icon:FiPhone,  label:"Phone",    val:"+91 93989 29970" },
                  { Icon:FiMapPin, label:"Location", val:"Andhra Pradesh, India" },
                  { Icon:FiClock,  label:"Hours",    val:"Mon–Sat, 9am–7pm IST" },
                ].map(({ Icon, label, val }) => (
                  <div key={label} className="flex gap-4 mb-5">
                    <Icon size={18} className="text-white/60 mt-0.5 flex-shrink-0"/>
                    <div>
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-0.5">{label}</p>
                      <p className="text-white font-medium text-sm">{val}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[{ n:"5000+",l:"Students Trained" },{ n:"98%",l:"Placement Rate" },{ n:"50+",l:"Corporate Partners" }].map(s => (
                  <div key={s.l} className="bg-white rounded-2xl p-5 border border-gray-100 text-center hover:border-brand hover:shadow-md transition-all">
                    <p className="text-2xl font-extrabold text-brand">{s.n}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-gray-100">
              {status === "success" ? (
                <div className="text-center py-16">
                  <FiCheckCircle size={64} className="text-green-500 mx-auto mb-6"/>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-500 mb-8">Our team will reach out within 24 hours. We can&apos;t wait to work with you!</p>
                  <button onClick={() => { setStatus("idle"); setForm({ name:"",email:"",phone:"",service:"",message:"" }); }}
                    className="text-brand font-semibold text-sm flex items-center gap-1 mx-auto hover:gap-2 transition-all">
                    Send another message <FiArrowRight size={14}/>
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-8">Send Us a Message</h3>

                  {status === "error" && (
                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-2 text-red-600 text-sm">
                      <FiAlertCircle size={16} className="flex-shrink-0 mt-0.5"/>{errMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <Field k="name"  label="Full Name"      placeholder="Your full name" />
                    <Field k="email" label="Email Address"  placeholder="your@email.com" type="email" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                    <input type="tel" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} placeholder="+91 XXXXX XXXXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"/>
                  </div>
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Service Interested In</label>
                    <select value={form.service} onChange={e => setForm({...form,service:e.target.value})}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all bg-white">
                      <option value="">Select a service</option>
                      {SERVICES_LIST.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea value={form.message} onChange={e => { setForm({...form,message:e.target.value}); setErrors({...errors,message:""}); }}
                      placeholder="Tell us about your requirements..." rows={4}
                      className={`w-full border rounded-xl px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 transition-all resize-none ${errors.message ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-brand focus:ring-brand/10"}`}/>
                    {errors.message && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><FiAlertCircle size={11}/>{errors.message}</p>}
                  </div>
                  <button onClick={handleSubmit} disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 bg-brand text-white font-bold py-4 rounded-xl hover:bg-brand-dark transition-all shadow-lg shadow-brand/20 disabled:opacity-60 disabled:cursor-not-allowed">
                    {status === "loading" ? (
                      <><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"/>Sending...</>
                    ) : (<>Send Message <FiArrowRight size={16}/></>)}
                  </button>
                  <p className="text-center text-xs text-gray-400 mt-3">Fields marked <span className="text-red-500">*</span> are required</p>
                </>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
