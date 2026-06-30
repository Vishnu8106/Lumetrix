import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiMenu, HiX, HiSun, HiMoon } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';
import { useTheme } from '../context/ThemeContext';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navBg = scrolled
    ? dark
      ? 'bg-gray-900/97 backdrop-blur-md shadow-lg shadow-blue-900/20'
      : 'bg-white/95 backdrop-blur-md shadow-lg'
    : 'bg-transparent';

  const linkClass = scrolled
    ? dark
      ? 'text-gray-200 hover:text-blue-400'
      : 'text-gray-700 hover:text-blue-600'
    : 'text-white/90 hover:text-white';

  const activeClass = scrolled
    ? dark ? '!text-blue-400 font-semibold' : '!text-blue-600 font-semibold'
    : '!text-blue-300 font-semibold';

  const logoTextClass = scrolled
    ? dark ? 'text-white' : 'text-gray-800'
    : 'text-white';

  const themeToggleClass = !scrolled
    ? 'bg-white/10 text-white hover:bg-white/25 ring-1 ring-white/20'
    : dark
      ? 'bg-amber-400/15 text-amber-400 hover:bg-amber-400/25 ring-1 ring-amber-400/30'
      : 'bg-indigo-500/10 text-indigo-600 hover:bg-indigo-500/20 ring-1 ring-indigo-300/40';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <NavLink to="/" onClick={() => setOpen(false)}>
            <Logo size={54} textClass={logoTextClass} />
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors duration-200 relative group ${linkClass} ${isActive ? activeClass : ''}`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    <span
                      className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* CTA + Theme toggle + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate('/contact')}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white gradient-bg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-md btn-ripple"
            >
              Get Started
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              className={`p-2 rounded-full transition-all duration-300 ${themeToggleClass}`}
              aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={dark ? 'sun' : 'moon'}
                  initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 90, opacity: 0, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  {dark ? <HiSun size={15} /> : <HiMoon size={15} />}
                </motion.div>
              </AnimatePresence>
            </button>

            <button
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? dark ? 'text-gray-200' : 'text-gray-700'
                  : 'text-white'
              }`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden backdrop-blur-xl border-t shadow-xl overflow-hidden ${
              dark
                ? 'bg-gray-900/98 border-gray-700/40'
                : 'bg-white/98 border-gray-100'
            }`}
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? dark
                          ? 'bg-blue-900/35 text-blue-400 font-semibold'
                          : 'bg-blue-50 text-blue-600 font-semibold'
                        : dark
                          ? 'text-gray-300 hover:bg-gray-800/50 hover:text-blue-400'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
              <button
                onClick={() => { navigate('/contact'); setOpen(false); }}
                className="mt-2 w-full py-3 rounded-xl text-sm font-semibold text-white gradient-bg hover:opacity-90"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
