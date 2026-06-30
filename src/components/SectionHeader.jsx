import { motion } from 'framer-motion';

const SectionHeader = ({ tag, title, subtitle, light = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6 }}
    className="text-center mb-14"
  >
    {tag && (
      <span className={`inline-block text-xs font-bold tracking-[0.2em] uppercase px-4 py-1.5 rounded-full mb-4 ${
        light ? 'bg-white/15 text-blue-200' : 'bg-blue-50 text-blue-600'
      }`}>
        {tag}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? 'text-white' : 'text-gray-900'}`}>
      {title}
    </h2>
    {subtitle && (
      <p className={`text-base md:text-lg max-w-2xl mx-auto ${light ? 'text-gray-300' : 'text-gray-500'}`}>
        {subtitle}
      </p>
    )}
    <div className={`mt-5 flex items-center justify-center gap-2`}>
      <span className="h-1 w-12 rounded-full gradient-bg" />
      <span className="h-1 w-6 rounded-full gradient-bg opacity-60" />
      <span className="h-1 w-3 rounded-full gradient-bg opacity-30" />
    </div>
  </motion.div>
);

export default SectionHeader;
