'use client';
import { useEffect, useState } from 'react';
import './RentoraLogoMascot.css';

const RentoraLogoMascot = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="mascot-wrapper" aria-hidden="true">
      <div className="mascot-cube">
        <div className="face front" />
        <div className="face back" />
        <div className="face right" />
        <div className="face left" />
        <div className="face top" />
        <div className="face bottom" />
      </div>
      <div className="glowing-line" />
    </div>
  );
};

export default RentoraLogoMascot;
