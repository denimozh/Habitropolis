"use client"

import React, { useEffect, useState } from 'react'

const HeroGridSection = ({ content }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (content) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 500); // Animation duration
      return () => clearTimeout(timer);
    }
  }, [content]);

  return (
    <div className="h-16 w-16 border border-slate-400 border-dashed flex items-center justify-center ">
      <span className={`text-3xl ${isAnimating ? "animate-popup" : ""}`}>{content}</span>
    </div>
  );
};

export default HeroGridSection;