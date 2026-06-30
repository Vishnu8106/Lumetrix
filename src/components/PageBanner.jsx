import { motion } from 'framer-motion';

const BANNERS = {
  about: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80',
  services: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80',
  contact: 'https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80',
};

const PageBanner = ({ page, title, subtitle }) => (
  <section
    className="relative flex items-center justify-center"
    style={{ height: '50vh', minHeight: 280 }}
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${BANNERS[page] || BANNERS.about})` }}
    />
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-purple-900/75 to-gray-900/80" />
    <div className="relative z-10 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="text-blue-300 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
          LUMETRIX SOLUTIONS LTD
        </p>
        <h1 className="text-4xl md:text-6xl font-bold text-white text-shadow mb-4">{title}</h1>
        {subtitle && (
          <p className="text-gray-300 text-lg max-w-xl mx-auto">{subtitle}</p>
        )}
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm text-gray-400">
          <span className="hover:text-blue-300 cursor-pointer transition-colors">Home</span>
          <span>/</span>
          <span className="text-white">{title}</span>
        </div>
      </motion.div>
    </div>
    {/* Wave bottom */}
    <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
      <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-10 fill-white">
        <path d="M0,60 C480,0 960,60 1440,0 L1440,60 Z" />
      </svg>
    </div>
  </section>
);

export default PageBanner;
