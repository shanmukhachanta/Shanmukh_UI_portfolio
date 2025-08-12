"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Music, Zap, Star } from 'lucide-react';

// Import images
import kailash from "./assets/optimized/Concerts/credits_barrici@SA-04.webp";
import RAP2488 from "./assets/optimized/Concerts/untitled-1.webp";
import MAP00594 from "./assets/optimized/Nightlife/MAP00594.webp";

interface CategoryCard {
  key: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  image: string;
}

interface SlidingCategoryCardsProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  isInView: boolean;
}

const SlidingCategoryCards = ({ onFilterChange, isInView }: SlidingCategoryCardsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const categoryCards: CategoryCard[] = [
    {
      key: "Concerts",
      title: "Concerts",
      subtitle: "Music Events",
      icon: <Music className="w-6 h-6" />,
      image: kailash,
    },
    {
      key: "live-events", 
      title: "Live Events",
      subtitle: "After Dark Events",
      icon: <Zap className="w-6 h-6" />,
      image: RAP2488,
    },
    {
      key: "Nightlife",
      title: "Nightlife", 
      subtitle: "Commercial Work",
      icon: <Star className="w-6 h-6" />,
      image: MAP00594,
    },
  ];

  // Auto-slide effect for category cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % categoryCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [categoryCards.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mb-12 overflow-hidden"
    >
      <div className="relative flex justify-center items-center h-96">
        {categoryCards.map((category, index) => {
          const isCenter = index === currentSlide;
          const isLeft = index === (currentSlide - 1 + categoryCards.length) % categoryCards.length;
          const isRight = index === (currentSlide + 1) % categoryCards.length;
          
          let transform = 'translateX(0) scale(0.7)';
          let opacity = 0.3;
          let zIndex = 1;
          
          if (isCenter) {
            transform = 'translateX(0) scale(1)';
            opacity = 1;
            zIndex = 3;
          } else if (isLeft) {
            transform = 'translateX(-120%) scale(0.8)';
            opacity = 0.6;
            zIndex = 2;
          } else if (isRight) {
            transform = 'translateX(120%) scale(0.8)';
            opacity = 0.6;
            zIndex = 2;
          }

          return (
            <motion.div
              key={category.key}
              onClick={() => onFilterChange(category.key)}
              className={`absolute w-96 h-80 rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out hover:shadow-xl`}
              style={{
                transform,
                opacity,
                zIndex,
              }}
            >
              <img
                src={category.image || "/placeholder.svg"}
                alt={category.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-3 rounded-full bg-black/40 text-gray-300 backdrop-blur-sm transition-all duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-gray-300 text-sm">{category.subtitle}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Slide indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {categoryCards.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default SlidingCategoryCards;