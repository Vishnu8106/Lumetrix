import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FiMail, FiPhone, FiMapPin, FiSend, FiCheck,
  FiLinkedin, FiFacebook, FiInstagram, FiTwitter
} from 'react-icons/fi';
import PageBanner from '../components/PageBanner';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => (
  <motion.div
    className={className}
    initial={{
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    }}
    whileInView={{ opacity: 1, y: 0, x: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 text-gray-800 text-sm bg-white placeholder:text-gray-400';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div>
      <PageBanner page="contact" title="Contact Us" subtitle="We'd love to hear from you. Let's build something great together." />

      {/* Main contact section */}
      <section className="py-24 bg-soft px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact info */}
            <div className="lg:col-span-2">
              <FadeIn direction="right">
                <div>
                  <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 mb-5">
                    Get In Touch
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Let's Start a Conversation</h2>
                  <p className="text-gray-500 leading-relaxed mb-8">
                    Whether you have a project in mind, a technical question, or just want to say hello —
                    we're here and happy to help. Reach out through any of the channels below.
                  </p>

                  <div className="space-y-6 mb-8">
                    {[
                      {
                        icon: FiMail,
                        label: 'Email Us',
                        value: 'vishnu123@mail',
                        sub: 'We respond within 2 hours',
                        color: 'from-blue-500 to-blue-700',
                      },
                      {
                        icon: FiPhone,
                        label: 'Call Us',
                        value: '+91 8106658662',
                        sub: 'Mon–Sat, 9am–7pm IST',
                        color: 'from-purple-500 to-purple-700',
                      },
                      {
                        icon: FiMapPin,
                        label: 'Visit Us',
                        value: 'KPHB, Hyderabad',
                        sub: 'Telangana, 500083',
                        color: 'from-green-500 to-green-700',
                      },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0 float-anim`}>
                          <item.icon className="text-white" size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</p>
                          <p className="font-semibold text-gray-900">{item.value}</p>
                          <p className="text-sm text-gray-500">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social */}
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">Follow Us</p>
                    <div className="flex gap-3">
                      {[
                        { icon: FiLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
                        { icon: FiFacebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-500' },
                        { icon: FiInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
                        { icon: FiTwitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
                      ].map(({ icon: Icon, href, label, color }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          className={`w-10 h-10 rounded-xl bg-gray-100 ${color} hover:text-white flex items-center justify-center text-gray-600 transition-all duration-300 hover:scale-110`}
                        >
                          <Icon size={16} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <FadeIn direction="left" delay={0.1}>
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center mb-6">
                        <FiCheck className="text-white" size={36} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                      <p className="text-gray-500 max-w-sm">
                        Thank you for reaching out. We'll get back to you within 2 business hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                        className="mt-8 px-6 py-3 rounded-xl text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all"
                      >
                        Send Another Message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <h3 className="text-xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            required
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                            Subject *
                          </label>
                          <select
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            className={inputClass}
                          >
                            <option value="">Select a service...</option>
                            <option>Mobile App Development</option>
                            <option>Web Application Development</option>
                            <option>Cloud Infrastructure</option>
                            <option>Business Analytics</option>
                            <option>UI/UX Design</option>
                            <option>Technical Consulting</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project, goals, and timeline..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-xl font-semibold text-white gradient-bg hover:opacity-90 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 disabled:opacity-70"
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiSend size={16} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="bg-soft-alt px-4 pb-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 h-80 relative">
              <div className="absolute inset-0 gradient-bg opacity-10" />
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 float-anim">
                    <FiMapPin className="text-white" size={28} />
                  </div>
                  <p className="font-bold text-gray-700 text-lg">KPHB, Hyderabad</p>
                  <p className="text-gray-500">Telangana, 500083, India</p>
                  <a
                    href="https://maps.google.com/?q=KPHB+Hyderabad+Telangana+500083"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Contact;
