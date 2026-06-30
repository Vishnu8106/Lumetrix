import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  FiSmartphone, FiCode, FiDatabase, FiCloud, FiServer, FiBarChart2,
  FiPieChart, FiCpu, FiLayout, FiLink, FiHardDrive, FiHeadphones,
  FiCheck, FiArrowRight
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

const services = [
  {
    icon: FiSmartphone,
    title: 'Mobile App Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=700&q=80',
    desc: 'We craft beautiful, high-performance mobile applications for iOS and Android that your users will love. From concept to App Store, we handle it all.',
    features: ['Native iOS & Android', 'Cross-platform with React Native', 'Flutter development', 'App Store Optimization'],
    benefits: ['Wider audience reach', 'Offline functionality', 'Push notifications', 'Better user engagement'],
    techs: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    icon: FiCode,
    title: 'Web Application Development',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=700&q=80',
    desc: 'Modern, scalable web applications built with cutting-edge frameworks. From SPAs to enterprise-grade platforms, we build for performance and scale.',
    features: ['Single Page Applications', 'Progressive Web Apps', 'Micro-frontend Architecture', 'Server-side Rendering'],
    benefits: ['SEO-friendly structure', 'Fast load times', 'Cross-browser compatibility', 'Accessible design'],
    techs: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  },
  {
    icon: FiDatabase,
    title: 'Customer Data Management',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80',
    desc: 'Centralize, organize, and leverage your customer data with our robust CRM and data management systems tailored to your business workflows.',
    features: ['Custom CRM development', 'Data pipeline automation', 'Customer segmentation', 'GDPR compliance'],
    benefits: ['360° customer view', 'Improved retention', 'Data-driven decisions', 'Automated workflows'],
    techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  },
  {
    icon: FiCloud,
    title: 'Cloud Data Backup',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80',
    desc: 'Never lose critical business data again. Our automated cloud backup solutions ensure your data is safe, encrypted, and always recoverable.',
    features: ['Automated scheduled backups', 'End-to-end encryption', 'Incremental & full backups', 'Disaster recovery planning'],
    benefits: ['Data loss prevention', 'Fast recovery times', 'Cost-efficient storage', 'Compliance readiness'],
    techs: ['AWS S3', 'Azure Blob', 'Google Cloud', 'Glacier'],
  },
  {
    icon: FiServer,
    title: 'Cloud Infrastructure',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80',
    desc: 'Design, deploy, and manage enterprise-grade cloud infrastructure. We architect systems that scale effortlessly and stay resilient under load.',
    features: ['Multi-cloud architecture', 'Kubernetes orchestration', 'CI/CD pipeline setup', 'Infrastructure as Code'],
    benefits: ['99.9% uptime', 'Auto-scaling', 'Cost optimization', 'Security compliance'],
    techs: ['AWS', 'Azure', 'Docker', 'Terraform'],
  },
  {
    icon: FiBarChart2,
    title: 'Business Analytics',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
    desc: 'Transform raw data into strategic intelligence. Our analytics solutions uncover trends, predict outcomes, and guide your most important business decisions.',
    features: ['KPI dashboards', 'Predictive analytics', 'Real-time reporting', 'Custom data models'],
    benefits: ['Informed decision-making', 'Revenue growth', 'Operational efficiency', 'Competitive insights'],
    techs: ['Python', 'Power BI', 'Tableau', 'Apache Spark'],
  },
  {
    icon: FiPieChart,
    title: 'Data Visualization',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=700&q=80',
    desc: 'Bring your data to life with stunning, interactive visualizations. We create dashboards and reports that make complex data immediately understandable.',
    features: ['Interactive charts & graphs', 'Geospatial mapping', 'Real-time dashboards', 'Embedded analytics'],
    benefits: ['Faster insights', 'Executive-ready reports', 'Cross-team alignment', 'Custom branding'],
    techs: ['D3.js', 'Chart.js', 'Recharts', 'Grafana'],
  },
  {
    icon: FiCpu,
    title: 'Software Development',
    image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=700&q=80',
    desc: 'Custom enterprise software engineered to solve your unique business challenges. Scalable, maintainable, and built to evolve with your organization.',
    features: ['Enterprise applications', 'ERP & CRM systems', 'Integration middleware', 'Legacy modernization'],
    benefits: ['Process automation', 'Reduced operational cost', 'Seamless integrations', 'Long-term maintainability'],
    techs: ['Java', 'Python', '.NET', 'Spring Boot'],
  },
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=700&q=80',
    desc: 'Design experiences that delight users and drive conversions. We blend aesthetics with usability to create interfaces that are both beautiful and intuitive.',
    features: ['User research & personas', 'Wireframing & prototyping', 'Design systems', 'Usability testing'],
    benefits: ['Higher conversion rates', 'Reduced bounce rates', 'Brand consistency', 'Accessible for all users'],
    techs: ['Figma', 'Adobe XD', 'Zeplin', 'Storybook'],
  },
  {
    icon: FiLink,
    title: 'API Development',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=700&q=80',
    desc: 'Robust, secure, and well-documented APIs that power seamless integrations. Whether RESTful or GraphQL, we build APIs that developers love to use.',
    features: ['RESTful & GraphQL APIs', 'OAuth 2.0 & JWT auth', 'Rate limiting & throttling', 'API documentation (Swagger)'],
    benefits: ['Easy third-party integration', 'Scalable architecture', 'Secure data exchange', 'Developer-friendly'],
    techs: ['Node.js', 'FastAPI', 'GraphQL', 'Postman'],
  },
  {
    icon: FiHardDrive,
    title: 'Database Solutions',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=700&q=80',
    desc: 'Optimized, reliable database design and management. We architect data storage solutions that perform at scale and ensure data integrity.',
    features: ['Schema design & optimization', 'Query performance tuning', 'Database migration', 'Replication & clustering'],
    benefits: ['Faster query performance', 'Data reliability', 'Horizontal scalability', 'Zero-downtime migrations'],
    techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    icon: FiHeadphones,
    title: 'Technical Consulting',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80',
    desc: 'Expert technology strategy and architecture guidance to align your IT investments with business goals. We help you make confident, informed technology decisions.',
    features: ['Technology roadmap planning', 'Architecture review', 'Code & security audits', 'Digital transformation strategy'],
    benefits: ['Reduced technical risk', 'Informed investments', 'Optimized tech stack', 'Faster time-to-market'],
    techs: ['Agile', 'DevOps', 'TOGAF', 'ITIL'],
  },
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageBanner page="services" title="Our Services" subtitle="Comprehensive technology solutions for every business need." />

      {/* Intro */}
      <section className="py-16 bg-soft px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <p className="text-gray-500 text-lg leading-relaxed">
              At Lumetrix Solutions LTD, we offer a comprehensive suite of IT services designed to address every
              aspect of your digital journey. From building your first mobile app to architecting enterprise cloud
              infrastructure — we've got you covered.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Service Cards — alternating layout */}
      <section className="bg-soft-alt px-4 pb-24">
        <div className="max-w-7xl mx-auto space-y-20 pt-10">
          {services.map((svc, i) => (
            <FadeIn key={svc.title} delay={0.05} direction={i % 2 === 0 ? 'right' : 'left'}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Image */}
                <div className="relative">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-72 object-cover rounded-2xl shadow-xl"
                  />
                  <div className="absolute -bottom-4 -right-4 w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center shadow-lg">
                    <svc.icon className="text-white" size={30} />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 mb-4">
                    Service {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{svc.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{svc.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">Features</h4>
                      <ul className="space-y-2">
                        {svc.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                            <FiCheck className="text-blue-500 mt-0.5 shrink-0" size={13} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {svc.benefits.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                            <FiCheck className="text-purple-500 mt-0.5 shrink-0" size={13} />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm uppercase tracking-wide mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {svc.techs.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all duration-300 hover:scale-105"
                  >
                    Get a Quote <FiArrowRight size={14} />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-bg px-4">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Not sure which service fits your needs? Let's talk and find the perfect solution together.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="px-8 py-4 rounded-full font-bold text-blue-900 bg-white hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Schedule a Free Consultation
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default Services;
