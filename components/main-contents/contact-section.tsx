"use client";

import React, { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  ShieldAlert, 
  Clock, 
  CheckCircle2, 
  Lock,
  MessageSquare
} from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    serviceCategory: "01 · COMPLY",
    message: "",
  });

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault();
    
  await fetch("/api/sending-message" , {
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(formData)
  })
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative w-full bg-black text-white py-24 px-4 sm:px-8 overflow-hidden">
      {/* Soft Ambient Green Background Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#16f97d]/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[350px] bg-[#16f97d]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-[#16f97d]/30 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(22,249,125,0.1)]">
            <span className="w-2 h-2 rounded-full bg-[#16f97d] animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest text-gray-200">
              Confidential Consultation
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-4">
            Initiate Security Engagement
          </h2>

          <p className="max-w-2xl text-gray-400 text-base sm:text-lg font-light leading-relaxed">
            Connect with our certified security team for audit readiness, threat assessment, or urgent incident response.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact & Operational Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Emergency Incident Response Box */}
              <div className="p-6 rounded-2xl bg-white/[0.03] border border-[#16f97d]/30 backdrop-blur-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <ShieldAlert className="w-24 h-24 text-[#16f97d]" />
                </div>
                <div className="flex items-center gap-2 text-[#16f97d] text-xs font-mono uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4" /> 24/7 Incident Hotline
                </div>
                <h3 className="text-xl font-extrabold text-white mb-1">Under Active Attack?</h3>
                <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                  Bypass the intake queue for urgent containment, CERT reporting, or ransomware recovery support.
                </p>
                <a
                  href="tel:+251953537820"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#16f97d] text-black font-bold text-sm shadow-[0_0_20px_rgba(22,249,125,0.3)] hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-4 h-4" /> Call Us Now
                </a>
              </div>

              {/* Direct Info Cards */}
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-[#16f97d]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase">Support Email</span>
                    <p className="text-sm font-bold text-white mt-0.5">support@geezsecurity.com</p>
                    <span className="text-[10px] text-gray-500 font-mono">PGP Key Available On Request</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-white/[0.06]">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-[#16f97d]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase">Headquarters</span>
                    <p className="text-sm font-bold text-white mt-0.5">Addis Ababa, Ethiopia</p>
                    <span className="text-[10px] text-gray-500 font-mono">Secure On-Site Operations Center</span>
                  </div>
                </div>

                 <div className="flex items-start gap-4 pt-4 border-t border-white/[0.06]">
                  <div className="p-3 rounded-xl bg-white/[0.05] border border-white/10 text-[#16f97d]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase">Contact Number</span>
                    <p className="text-sm font-bold text-white mt-0.5">+251 953 537 820</p>
                    <p className="text-sm font-bold text-white mt-0.5">+251 963 301 530</p>
                    <span className="text-[10px] text-gray-500 font-mono">Secure On-Site Operations Center</span>
                  </div>
                </div>
              </div>``
            </div>

            {/* Compliance Guarantee Badges */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs font-mono text-gray-400">
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-[#16f97d]" />
                <span>NDA Protected</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16f97d]" />
                <span>INSA Aligned</span>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-2xl shadow-2xl relative">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#16f97d]/10 border border-[#16f97d]/40 flex items-center justify-center mx-auto text-[#16f97d]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Transmission Received</h3>
                  <p className="text-sm text-gray-400 max-w-md mx-auto">
                    Your inquiry has been assigned to a security engineer. We will establish secure communications within 4 business hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-xs font-mono text-gray-300 hover:text-white hover:bg-white/[0.1] transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-300">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Abebe Kebede"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#16f97d] transition-colors"
                      />
                    </div>

                    {/* Work Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-300">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="name@organization.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#16f97d] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Organization */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-300">
                        Organization / Enterprise *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Company Name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#16f97d] transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase tracking-wider text-gray-300">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+251 ..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#16f97d] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Primary Service Pillar Select */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-gray-300">
                      Primary Area of Inquiry
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-[#16f97d] transition-colors cursor-pointer"
                    >
                      <option value="01 · COMPLY" className="bg-black text-white">01 · COMPLY (Governance & Audit)</option>
                      <option value="02 · ASSESS" className="bg-black text-white">02 · ASSESS (Penetration Testing)</option>
                      <option value="03 · DEFEND" className="bg-black text-white">03 · DEFEND (24/7 Managed SOC)</option>
                      <option value="04 · RESPOND" className="bg-black text-white">04 · RESPOND (Incident Retainer)</option>
                      <option value="05 · EMPOWER" className="bg-black text-white">05 · EMPOWER (Academy & Staffing)</option>
                    </select>
                  </div>

                  {/* Scope / Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-wider text-gray-300">
                      Project Scope or Operational Context
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Outline your legal deadlines, system requirements, or specific security needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#16f97d] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#16f97d] text-black font-extrabold text-sm shadow-[0_0_25px_rgba(22,249,125,0.3)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" /> Send Encrypted Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}