import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import {
  FiSmartphone, FiCode, FiDatabase, FiCloud, FiServer, FiBarChart2,
  FiPieChart, FiCpu, FiLayout, FiLink, FiHardDrive, FiHeadphones,
  FiArrowRight, FiChevronDown, FiStar, FiShield, FiZap, FiUsers,
  FiClock, FiTrendingUp, FiCheck
} from 'react-icons/fi';
import {
  SiReact, SiNodedotjs, SiPython, SiMysql, SiMongodb,
  SiKubernetes, SiDigitalocean, SiDocker, SiFirebase, SiTerraform
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import SectionHeader from '../components/SectionHeader';

// ─── DATA ────────────────────────────────────────────────────────────────────

const heroSlides = [
  {
    url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80',
    alt: 'Digital technology network',
  },
  {
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
    alt: 'Circuit board technology',
  },
  {
    url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80',
    alt: 'Modern office workspace',
  },
  {
    url: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80',
    alt: 'Data analytics dashboard',
  },
];

const services = [
  { icon: FiSmartphone, title: 'Mobile App Development', desc: 'Native & cross-platform apps for iOS and Android with stunning UX.' },
  { icon: FiCode, title: 'Web Application Development', desc: 'Scalable, high-performance web apps using modern frameworks.' },
  { icon: FiDatabase, title: 'Customer Data Management', desc: 'Centralized CRM systems that unlock valuable customer insights.' },
  { icon: FiCloud, title: 'Cloud Data Backup', desc: 'Automated, encrypted cloud backups ensuring data safety.' },
  { icon: FiServer, title: 'Cloud Infrastructure', desc: 'Robust cloud architecture on AWS, Azure, and GCP.' },
  { icon: FiBarChart2, title: 'Business Analytics', desc: 'Turn raw data into actionable intelligence for smarter decisions.' },
  { icon: FiPieChart, title: 'Data Visualization', desc: 'Beautiful, interactive dashboards that tell your data story.' },
  { icon: FiCpu, title: 'Software Development', desc: 'Custom enterprise software tailored to your unique business needs.' },
  { icon: FiLayout, title: 'UI/UX Design', desc: 'Pixel-perfect designs that delight users and drive conversions.' },
  { icon: FiLink, title: 'API Development', desc: 'Secure, well-documented RESTful and GraphQL APIs.' },
  { icon: FiHardDrive, title: 'Database Solutions', desc: 'Optimized SQL and NoSQL database design and management.' },
  { icon: FiHeadphones, title: 'Technical Consulting', desc: 'Expert guidance to align technology with your business goals.' },
];

const whyUs = [
  { icon: FiUsers, title: 'Experienced Professionals', desc: 'Our team of seasoned developers and architects brings decades of collective expertise.' },
  { icon: FiShield, title: 'Secure Cloud Solutions', desc: 'Enterprise-grade security with end-to-end encryption and compliance standards.' },
  { icon: FiZap, title: 'Scalable Applications', desc: 'Built to grow with your business from startup to enterprise scale.' },
  { icon: FiTrendingUp, title: 'Fast Delivery', desc: 'Agile methodology ensures rapid, iterative delivery without compromising quality.' },
  { icon: FiClock, title: '24/7 Support', desc: 'Round-the-clock technical support and monitoring for mission-critical systems.' },
  { icon: FiCpu, title: 'Modern Technologies', desc: 'We stay ahead with the latest tools, frameworks, and best practices.' },
];

const stats = [
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 50, suffix: '+', label: 'Happy Clients' },
  { value: 8, suffix: '+', label: 'Services' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
];

const technologies = [
  { icon: SiReact, name: 'React', color: '#61DAFB' },
  { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
  { icon: FaJava, name: 'Java', color: '#007396' },
  { icon: SiPython, name: 'Python', color: '#3776AB' },
  { icon: SiMysql, name: 'MySQL', color: '#4479A1' },
  { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
  { icon: SiDigitalocean, name: 'Cloud', color: '#0080FF' },
  { icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
  { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
];

const testimonials = [
  {
    name: 'Arjun Sharma',
    role: 'CTO, FinTech Innovations',
    avatar: 'https://i.pravatar.cc/80?img=11',
    rating: 5,
    text: 'Lumetrix delivered our mobile banking app ahead of schedule. Their attention to security and performance exceeded our expectations. Truly a world-class team.',
  },
  {
    name: 'Priya Reddy',
    role: 'Founder, HealthConnect',
    avatar: 'https://i.pravatar.cc/80?img=21',
    rating: 5,
    text: 'The cloud infrastructure they designed reduced our operational costs by 40%. Their expertise in AWS and scalable architecture is unmatched.',
  },
  {
    name: 'Rahul Verma',
    role: 'Head of IT, RetailMax',
    avatar: 'https://i.pravatar.cc/80?img=33',
    rating: 5,
    text: 'Outstanding UI/UX design work. Our customer engagement improved by 65% after the redesign. The team understood our brand vision perfectly.',
  },
  {
    name: 'Sneha Patel',
    role: 'Director, EduTech Solutions',
    avatar: 'https://i.pravatar.cc/80?img=45',
    rating: 5,
    text: 'Their data analytics platform transformed how we understand student performance. Clean code, excellent documentation, and superb after-sales support.',
  },
];

// ─── ANIMATED COUNTER ────────────────────────────────────────────────────────

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = 30;
    const increment = value / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold gradient-text">
      {count}{suffix}
    </span>
  );
};

// ─── FADE IN WRAPPER ─────────────────────────────────────────────────────────

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      {/* ── Hero ── */}
      <section className="relative" style={{ height: '100vh', minHeight: 560 }}>
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full w-full"
        >
          {heroSlides.map((slide, i) => (
            <SwiperSlide key={i}>
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.url})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-blue-950/85 via-purple-950/70 to-gray-950/75" />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
           
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight text-shadow mb-6"
            >
              Empowering Businesses
              <span className="block mt-2 gradient-text">
                Through Smart Digital Solutions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              We build scalable software, secure cloud infrastructure, intelligent analytics,
              and innovative digital products that accelerate business growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button
                onClick={() => navigate('/services')}
                className="px-8 py-4 rounded-full font-semibold text-white gradient-bg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-900/40 btn-ripple"
              >
                Explore Services
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full font-semibold text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                Contact Us
              </button>
            </motion.div>
          </div>
        </div>

       
      </section>

      {/* ── Services ── */}
      <section className="py-24 bg-soft px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="What We Do"
            title="Our Core Services"
            subtitle="Comprehensive technology solutions designed to accelerate your digital transformation journey."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.05} direction="up">
                <div className="group bg-white rounded-2xl p-6 border border-gray-100 card-shadow hover:card-shadow-hover transition-all duration-400 hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <svc.icon className="text-white" size={22} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{svc.desc}</p>
                  <button
                    onClick={() => navigate('/services')}
                    className="mt-4 flex items-center gap-1.5 text-blue-600 text-sm font-semibold hover:gap-3 transition-all duration-300"
                  >
                    Learn More <FiArrowRight size={14} />
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-soft-alt px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Why Lumetrix"
            title="Why Choose Us"
            subtitle="We combine technical excellence with business acumen to deliver solutions that truly matter."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1} direction={i % 2 === 0 ? 'left' : 'right'}>
                <div className="flex gap-5 items-start p-6 bg-white rounded-2xl border border-gray-100 card-shadow hover:-translate-y-1 hover:card-shadow-hover transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center shrink-0">
                    <item.icon className="text-blue-600" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 gradient-bg px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1} direction="up">
                <div className="text-center">
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-blue-100 text-sm mt-2 font-medium">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technologies ── */}
      <section className="py-24 bg-soft px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Tech Stack"
            title="Technologies We Use"
            subtitle="We work with the best modern technologies to build robust, scalable solutions."
          />
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-6">
            {technologies.map((tech, i) => (
              <FadeIn key={tech.name} delay={i * 0.04} direction="up">
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                    <tech.icon size={30} style={{ color: tech.color }} />
                  </div>
                  <span className="text-xs text-gray-500 font-medium text-center">{tech.name}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-gray-950 px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Testimonials"
            title="What Our Clients Say"
            subtitle="Real stories from the businesses we've helped transform."
            light
          />
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={24}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            loop
            className="pb-10"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 h-full">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <FiStar key={j} className="text-yellow-400 fill-current" size={14} />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-gray-500 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-900 px-4 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="relative max-w-3xl mx-auto text-center">
          <FadeIn direction="up">
            <p className="text-blue-200 text-xs font-bold tracking-[0.2em] uppercase mb-4">Ready to Transform?</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
              Let's discuss how Lumetrix can build the digital solutions your business needs to thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full font-bold text-blue-900 bg-white hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl btn-ripple"
              >
                Contact Us
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 rounded-full font-bold text-white border-2 border-white/40 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </button>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-blue-200 text-sm">
              {['No setup fees', 'Free consultation', '30-day satisfaction guarantee'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <FiCheck className="text-green-400" size={14} />
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Home;
