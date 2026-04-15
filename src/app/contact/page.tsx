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

/* ✅ FIX: move outside (THIS FIXES CURSOR ISSUE) */
const Field = ({ k, label, placeholder, type = "text", form, errors, setForm, setErrors }: any) => (
  <div>
    <label className="block text-xs font-semibold text-gray-700 mb-1.5">
      {label} <span className="text-red-500">*</span>
    </label>

    <input
      type={type}
      value={form[k]}
      onChange={e => {
  let value = e.target.value;

  // ✅ ONLY for name field
  if (k === "name") {
    value = value.replace(/[^a-zA-Z\s]/g, "");
  }

  setForm((prev:any) => ({ ...prev, [k]: value }));
  setErrors((prev:any) => ({ ...prev, [k]: "" }));
}}
      placeholder={placeholder}
      className={`w-full border rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
        errors[k] ? "border-red-400 focus:ring-red-100" : "border-gray-200 focus:border-brand focus:ring-brand/10"
      }`}
    />

    {errors[k] && (
      <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
        <FiAlertCircle size={11}/>{errors[k]}
      </p>
    )}
  </div>
);

export default function ContactPage() {

  const [form, setForm] = useState({
    name:"",
    email:"",
    phone:"+91", // ✅ DEFAULT
    service:"",
    message:""
  });

  const [errors, setErrors] = useState<Record<string,string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errMsg, setErrMsg] = useState("");

  const validate = () => {
    const e: Record<string,string> = {};

    if (!form.name.trim()) e.name = "Full name is required.";

    if (!form.email.trim()) e.email = "Email address is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      e.email = "Enter a valid email address.";

    if (!/^(\+91)\d{10}$/.test(form.phone))
      e.phone = "Enter valid phone number";

    if (!form.service) e.service = "Please select a service.";

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
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

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

            {/* LEFT SIDE (UNCHANGED) */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-brand to-brand-dark rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5"/>
                <div className="flex items-center gap-2 mb-2"><BsShieldCheck size={16} className="text-white/70"/><span className="text-white/70 text-sm">ISO 9001:2015 Certified · Est. 2021</span></div>
                <h2 className="text-2xl font-extrabold mb-8">Contact Information</h2>

                {[
                  { Icon:FiMail, label:"Email", val:"info@pixelwind.in" },
                  { Icon:FiPhone, label:"Phone", val:"+91 93989 29970" },
                  { Icon:FiMapPin, label:"Location", val:"Andhra Pradesh, India" },
                  { Icon:FiClock, label:"Hours", val:"Mon–Sat, 9am–7pm IST" },
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

              {/* ✅ HOVER BLOCK UNTOUCHED */}
              <div className="grid grid-cols-3 gap-4">
                {[{ n:"5000+",l:"Students Trained" },{ n:"98%",l:"Placement Rate" },{ n:"50+",l:"Corporate Partners" }].map(s => (
                  <div key={s.l} className="bg-white rounded-2xl p-5 border border-gray-100 text-center hover:border-brand hover:shadow-md transition-all">
                    <p className="text-2xl font-extrabold text-brand">{s.n}</p>
                    <p className="text-xs text-gray-500 mt-1">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FORM */}
            <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-xl shadow-gray-100">

              {/* ✅ HEADING RESTORED */}
              <h3 className="text-xl font-extrabold text-gray-900 mb-8">Send Us a Message</h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <Field k="name" label="Full Name" placeholder="Your full name" form={form} errors={errors} setForm={setForm} setErrors={setErrors}/>
                <Field k="email" label="Email Address" placeholder="your@email.com" type="email" form={form} errors={errors} setForm={setForm} setErrors={setErrors}/>
              </div>

              {/* PHONE */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => {
                    let value = e.target.value;
                    if (!value.startsWith("+91")) value = "+91";
                    value = "+91" + value.slice(3).replace(/\D/g, "").slice(0, 10);
                    setForm(prev => ({ ...prev, phone: value }));
                  }}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm"
                />
              </div>

              {/* SERVICE */}
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Service Interested In <span className="text-red-500">*</span>
                </label>
                <select value={form.service} onChange={(e)=>setForm(prev => ({...prev, service:e.target.value}))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm">
                  <option value="">Select a service</option>
                  {SERVICES_LIST.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>

              {/* MESSAGE */}
              <div className="mb-6">
                <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea value={form.message} onChange={(e)=>setForm(prev => ({...prev, message:e.target.value}))}
                  className="w-full border rounded-xl p-3"/>
              </div>

              <button onClick={handleSubmit}
                className="w-full bg-brand text-white py-4 rounded-xl">
                Send Message
              </button>

            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}