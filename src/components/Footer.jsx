import { Link } from 'react-router-dom';
import { FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import Logo from './Logo';

const Footer = () => {
  const year = 2025;

  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size={38} textClass="text-white" />
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Empowering businesses through smart digital solutions. We build scalable software,
              secure cloud infrastructure, and innovative digital products.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FiFacebook, href: '#', label: 'Facebook' },
                { icon: FiInstagram, href: '#', label: 'Instagram' },
                { icon: FiTwitter, href: '#', label: 'Twitter' },
                { icon: FiGithub, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-blue-400 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                'App Development',
                'Web Applications',
                'Customer Data Mgmt',
                'Cloud Backup',
                'Business Analytics',
                'Technical Consulting',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-blue-400 transition-all duration-300" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiMail className="text-blue-400 mt-0.5 shrink-0" size={15} />
                <span className="text-sm text-gray-400"> keerthireddy.aekkati@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-blue-400 mt-0.5 shrink-0" size={15} />
                <span className="text-sm text-gray-400">+44 7443751597</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-blue-400 mt-0.5 shrink-0" size={15} />
                <span className="text-sm text-gray-400">3 Cadogan Place,Preston<br />PR1 3TB,England, United Kingdom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {year} LUMETRIX SOLUTIONS LTD. All Rights Reserved.
          </p>
          <p className="text-xs text-gray-600">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
