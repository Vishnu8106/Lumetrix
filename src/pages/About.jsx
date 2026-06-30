import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiCode,
  FiShield, FiTrendingUp, FiCheck, FiArrowRight
} from 'react-icons/fi';
import PageBanner from '../components/PageBanner';
import SectionHeader from '../components/SectionHeader';

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

const coreValues = [
  { icon: FiAward, title: 'Excellence', desc: 'We pursue the highest standards in every line of code and every client interaction.' },
  { icon: FiShield, title: 'Integrity', desc: 'Transparent communication and ethical practices are the cornerstone of our culture.' },
  { icon: FiTrendingUp, title: 'Innovation', desc: 'We continuously explore new technologies to deliver cutting-edge solutions.' },
  { icon: FiHeart, title: 'Client Focus', desc: 'Your success is our success. We build long-term partnerships, not just projects.' },
  { icon: FiUsers, title: 'Collaboration', desc: 'We work as an extension of your team, bringing synergy and shared vision.' },
  { icon: FiCode, title: 'Quality Code', desc: 'Clean, maintainable, and well-documented code is our professional standard.' },
];

const milestones = [
  { year: '2018', title: 'Company Founded', desc: 'Lumetrix Solutions LTD was established with a vision to empower businesses through technology.' },
  { year: '2019', title: 'First 10 Clients', desc: 'Delivered mobile and web applications for clients across FinTech and HealthTech sectors.' },
  { year: '2020', title: 'Cloud Division Launch', desc: 'Expanded into cloud infrastructure and data backup solutions, growing our team to 20.' },
  { year: '2021', title: 'Analytics Platform', desc: 'Launched our proprietary business analytics platform adopted by 15+ enterprise clients.' },
  { year: '2022', title: '50+ Projects Milestone', desc: 'Celebrated completion of 50+ successful projects with a 99% client satisfaction rate.' },
  { year: '2024', title: '100+ Projects & Growing', desc: 'Now serving 50+ happy clients across multiple industries and geographies.' },
];

const team = [
  {
    name: 'Vishnu Reddy',
    role: 'CEO & Founder',
    avatar: 'https://i.pravatar.cc/120?img=8',
    bio: 'Visionary leader with 10+ years in enterprise software and cloud solutions.',
  },
  {
    name: 'Ananya Krishnan',
    role: 'CTO',
    avatar: 'https://i.pravatar.cc/120?img=25',
    bio: 'Full-stack architect specializing in scalable microservices and cloud-native design.',
  },
  {
    name: 'Rohan Mehta',
    role: 'Head of Design',
    avatar: 'https://i.pravatar.cc/120?img=12',
    bio: 'Award-winning UI/UX designer with a passion for intuitive, accessible interfaces.',
  },
  {
    name: 'Kavitha Nair',
    role: 'Lead Data Engineer',
    avatar: 'https://i.pravatar.cc/120?img=47',
    bio: 'Expert in big data pipelines, analytics platforms, and business intelligence.',
  },
];

const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageBanner page="about" title="About Us" subtitle="Driven by innovation, defined by excellence." />

      {/* Company Introduction */}
      <section className="py-24 bg-soft px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80"
                  alt="Lumetrix team working"
                  className="rounded-2xl shadow-2xl w-full object-cover"
                  style={{ height: 420 }}
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center">
                      <FiAward className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-xl">99%</p>
                      <p className="text-gray-500 text-xs">Client Satisfaction</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-5 shadow-xl">
                  <p className="text-white font-bold text-2xl">6+</p>
                  <p className="text-blue-100 text-xs">Years Experience</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.1}>
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 mb-5">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                  Building the Digital Future, One Solution at a Time
                </h2>
                <p className="text-gray-500 leading-relaxed mb-5">
                  Founded in 2018, Lumetrix Solutions LTD was born from a simple belief: that every business deserves
                  access to world-class technology. What started as a small team of passionate engineers has grown into
                  a full-service digital solutions company trusted by 50+ clients across India and beyond.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  We specialize in mobile and web application development, cloud infrastructure, business analytics,
                  and data management — delivering technology that doesn't just work, but transforms.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    'End-to-end digital transformation partner',
                    'Agile delivery with transparent communication',
                    'Proven track record across 12+ service verticals',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full gradient-bg flex items-center justify-center shrink-0">
                        <FiCheck className="text-white" size={10} />
                      </div>
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => navigate('/services')}
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all duration-300 hover:scale-105"
                >
                  View Our Services <FiArrowRight size={14} />
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission, Vision */}
      <section className="py-24 bg-soft-alt px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: FiTarget,
                color: 'from-blue-500 to-blue-700',
                title: 'Our Mission',
                text: `To empower businesses of all sizes with cutting-edge digital solutions that are scalable, secure,
                  and strategically aligned. We commit to delivering technology that drives measurable outcomes and
                  creates lasting competitive advantage for our clients.`,
              },
              {
                icon: FiEye,
                color: 'from-purple-500 to-purple-700',
                title: 'Our Vision',
                text: `To become the most trusted and innovative technology partner for businesses across South Asia and
                  beyond. We envision a world where every organization, regardless of size, can harness the power of
                  modern technology to achieve its fullest potential.`,
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15} direction={i === 0 ? 'right' : 'left'}>
                <div className="bg-white rounded-2xl p-8 card-shadow h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6`}>
                    <item.icon className="text-white" size={26} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-soft px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            tag="Our Values"
            title="Core Values"
            subtitle="The principles that guide every decision we make and every solution we build."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val, i) => (
              <FadeIn key={val.title} delay={i * 0.08}>
                <div className="group p-6 rounded-2xl border border-gray-100 card-shadow hover:-translate-y-1 hover:card-shadow-hover transition-all duration-300">
                  <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <val.icon className="text-white" size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{val.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-gray-950 px-4">
        <div className="max-w-4xl mx-auto">
          <SectionHeader tag="Our Journey" title="Milestones" subtitle="A timeline of growth, innovation, and impact." light />
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-purple-500" />
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 0.1} direction={i % 2 === 0 ? 'right' : 'left'}>
                <div className={`flex items-center gap-6 mb-10 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 inline-block">
                      <span className="gradient-text font-bold text-lg">{m.year}</span>
                      <h4 className="text-white font-bold mt-1 mb-2">{m.title}</h4>
                      <p className="text-gray-400 text-sm">{m.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full gradient-bg shrink-0 z-10 ring-4 ring-gray-950 pulse-ring" />
                  <div className="flex-1" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-soft px-4">
        <div className="max-w-7xl mx-auto">
          <SectionHeader tag="Our People" title="Meet the Team" subtitle="The talented professionals behind every great solution we deliver." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="group text-center">
                  <div className="relative inline-block mb-5">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-28 h-28 rounded-2xl object-cover mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
