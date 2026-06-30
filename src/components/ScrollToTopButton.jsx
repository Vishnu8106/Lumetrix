import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollUp}
      aria-label="Back to top"
      style={{
        position: 'fixed',
        bottom: 28,
        right: 28,
        zIndex: 999,
        width: 48,
        height: 48,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(59,130,246,0.45)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(12px)',
        transition: 'opacity 0.25s ease, transform 0.25s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.12) translateY(0)')}
      onMouseLeave={e => (e.currentTarget.style.transform = visible ? 'scale(1) translateY(0)' : 'scale(0.7) translateY(12px)')}
    >
      <FiArrowUp color="#fff" size={20} strokeWidth={2.5} />
    </button>
  );
};

export default ScrollToTopButton;
