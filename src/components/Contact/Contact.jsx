
import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setSubmitted(false);
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.subject.trim()) nextErrors.subject = "Please add a subject.";
    if (!form.message.trim()) nextErrors.message = "Please write a short message.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const body = `
Name: ${form.name}
Email: ${form.email}

${form.message}
`;

    window.location.href = `mailto:mohinisahoo395@gmail.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section">
      <div className="relative z-10 max-w-6xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-kicker">Let’s connect</p>
          <h2 className="mt-3 text-4xl font-extrabold theme-heading sm:text-5xl">Contact Me</h2>
          <p className="theme-muted mt-5">
            Have a project or opportunity? Let's connect.
          </p>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid overflow-hidden rounded-[1.5rem] border border-cyan-400/20 bg-[var(--color-surface)] shadow-[var(--shadow-card-soft)] backdrop-blur-xl lg:grid-cols-5"
        >

          <div className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-cyan-700 to-emerald-700 p-8 sm:p-10 lg:col-span-2">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.16)_1px,transparent_1px)] bg-[size:26px_26px] opacity-20" />
            <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">
              Contact Information
            </h3>

            <p className="text-cyan-100 mb-10">
              Feel free to contact me anytime.
            </p>

            <div className="space-y-6 text-white">

              <div className="flex gap-4 items-center">
                <Phone size={18} />
                <span>+91 9692292596</span>
              </div>

              <div className="flex gap-4 items-center">
                <Mail size={18} />
                <span>mohinisahoo395@gmail.com</span>
              </div>

              <div className="flex gap-4 items-center">
                <MapPin size={18} />
                <span>Bhubaneswar, Odisha</span>
              </div>

            </div>

            <div className="flex gap-5 mt-12 text-2xl">
              <a className="transition hover:-translate-y-1" aria-label="GitHub" href="https://github.com/Mohini969" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a className="transition hover:-translate-y-1" aria-label="LinkedIn" href="https://www.linkedin.com/in/mohini-sahoo-64924933b" target="_blank" rel="noreferrer"><FaLinkedin /></a>
              <a className="transition hover:-translate-y-1" aria-label="Instagram" href="https://www.instagram.com/khu_si__khusi/" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>
            </div>
          </div>

          <div className="lg:col-span-3 p-6 sm:p-10">
            <form onSubmit={handleSubmit} noValidate className="space-y-6">

              <div className="grid md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="theme-text mb-2 block text-sm font-semibold">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    placeholder="Your name"
                    onChange={handleChange}
                    className={`theme-input ${errors.name ? "border-red-400" : ""}`}
                  />
                  {errors.name && <span className="mt-2 block text-sm text-red-400">{errors.name}</span>}
                </label>

                <label className="block">
                  <span className="theme-text mb-2 block text-sm font-semibold">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    placeholder="you@example.com"
                    onChange={handleChange}
                    className={`theme-input ${errors.email ? "border-red-400" : ""}`}
                  />
                  {errors.email && <span className="mt-2 block text-sm text-red-400">{errors.email}</span>}
                </label>
              </div>

              <label className="block">
                <span className="theme-text mb-2 block text-sm font-semibold">Subject</span>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  placeholder="Project opportunity"
                  onChange={handleChange}
                  className={`theme-input ${errors.subject ? "border-red-400" : ""}`}
                />
                {errors.subject && <span className="mt-2 block text-sm text-red-400">{errors.subject}</span>}
              </label>

              <label className="block">
                <span className="theme-text mb-2 block text-sm font-semibold">Message</span>
                <textarea
                  rows="6"
                  name="message"
                  value={form.message}
                  placeholder="Write your message..."
                  onChange={handleChange}
                  className={`theme-input resize-none ${errors.message ? "border-red-400" : ""}`}
                />
                {errors.message && <span className="mt-2 block text-sm text-red-400">{errors.message}</span>}
              </label>

              {submitted && (
                <p className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-300">
                  Opening your email app with the message ready to send.
                </p>
              )}

              <Motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="primary-btn w-full sm:w-auto"
              >
                <Send size={18} />
                Send Message
              </Motion.button>

            </form>
          </div>

        </Motion.div>

      </div>
    </section>
  );
};

export default Contact;
