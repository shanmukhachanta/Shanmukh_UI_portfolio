"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Camera, Mail, Phone, Instagram} from 'lucide-react';
import { motion, useInView } from "framer-motion";
import SlidingCategoryCards from "./sliding-category-cards";
import logo from "./assets/Optimized/logo2.png";

// Import existing images from correct folders
import cover from "./assets/Optimized/Concerts/Credits@baricci_MP-7985.webp";
import dvlm from "./assets/Optimized/Concerts/MAP05446.webp";
import kailash from "./assets/Optimized/Concerts/ka.webp";
import Jasleen from "./assets/Optimized/Concerts/credits@baricci_mp--7.webp";
import CP1 from "./assets/Optimized/Concerts/Credits@baricci_SA13.webp";
import CP2 from "./assets/Optimized/Concerts/Credits@baricci_SA17.webp";
import CP3 from "./assets/Optimized/Concerts/credits_barrici@SA-04.webp";
import CP4 from "./assets/Optimized/Concerts/Credits@baricci_MP-07367.webp";

// Import videos
import concertVideo1 from "./assets/videos/Ani-Quake.mov";
import corporateVideo1 from "./assets/videos/ArMaan.mov";

// Import Nightlife Images
import RAP2488 from "./assets/Optimized/Nightlife/_RAP2488.webp";
import M9A0152 from "./assets/Optimized/Concerts/AMS04090-2.webp";
import M9A0442 from "./assets/Optimized/Concerts/MAP05555.webp";
import M9A1488 from "./assets/Optimized/Concerts/MAP08126.webp";
import M9A1565 from "./assets/Optimized/Nightlife/0M9A1565.webp";
import M9A1607 from "./assets/Optimized/Nightlife/0M9A1607.webp";
import BismilQuakeVideo from "./assets/videos/BismilLive.mp4";
import CreditsIG00995 from "./assets/Optimized/Nightlife/Credits- IG @echofilmerss-00995.webp";
import CreditsIG3356 from "./assets/Optimized/Nightlife/Credits- IG @echofilmerss-3356.webp";
import EchoFilmers04888 from "./assets/Optimized/Nightlife/echo filmers_-04888.webp";
import EchoFilmers05010 from "./assets/Optimized/Nightlife/echo filmers_-05010.webp";
import IGEcho0172 from "./assets/Optimized/Nightlife/IG- @Echofilmers-0172.webp";
import IGEcho02292 from "./assets/Optimized/Nightlife/IG- @Echofilmers-02292.webp";
import IGEcho3140 from "./assets/Optimized/Nightlife/IG- @Echofilmers-3140.webp";
import IGEcho04435 from "./assets/Optimized/Nightlife/IG- @Echofilmers-04435.webp";
import IGEcho04894 from "./assets/Optimized/Nightlife/IG- @Echofilmers-04894.webp";
import IGEcho8052 from "./assets/Optimized/Nightlife/IG- @Echofilmers-8052.webp";
import IGMapurohit01437 from "./assets/Optimized/Nightlife/IG- @mapurohit-01437.webp";
import MAP00594 from "./assets/Optimized/Nightlife/MAP00594.webp";
import MAP00832 from "./assets/Optimized/Nightlife/MAP00832.webp";
import MAP00908 from "./assets/Optimized/Nightlife/MAP00908.webp";
import MAP02863Enhanced from "./assets/Optimized/Nightlife/MAP02863-Enhanced-NR.webp";
import MAP03238 from "./assets/Optimized/Nightlife/MAP03238.webp";
import MAP05128Enhanced from "./assets/Optimized/Nightlife/MAP05128-Enhanced-NR.webp";
import MAP07877 from "./assets/Optimized/Nightlife/MAP07877.webp";
import MAP08667 from "./assets/Optimized/Concerts/untitled-1.webp";
import MAP09570 from "./assets/Optimized/Nightlife/MAP09570.webp";
import MAP09790 from "./assets/Optimized/Nightlife/MAP09790.webp";
import MAP09858 from "./assets/Optimized/Nightlife/MAP09858.webp";
import PrateekKuhadVideo from "./assets/videos/PrateekKuhadVideo.mp4";
import TimmyTrumpetVideo from "./assets/videos/Timmy.mp4"

// Import Concert Images
import Concert2 from "./assets/Optimized/Concerts/2.webp";
import Concert1721741656315 from "./assets/Optimized/Concerts/1721741656315.webp";
import ConcertCreditsMP8229 from "./assets/Optimized/Concerts/Credits@baricci_MP-8229.webp";
import ConcertCreditsSALOW from "./assets/Optimized/Concerts/credits@baricci_SA_LOW_RES-017.webp";
import ConcertCreditsSA44 from "./assets/Optimized/Concerts/credits@Baricci_SA-44.webp";
import ConcertCreditsSA48 from "./assets/Optimized/Concerts/credits@Baricci_SA-48.webp";
import ConcertCreditsMP08100 from "./assets/Optimized/Concerts/credits@baricci-MP-08100.webp";
import ConcertCreditsBarrici47 from "./assets/Optimized/Concerts/credits@barrici_SA-47.webp";
import ConcertDSC04569 from "./assets/Optimized/Concerts/DSC04569-3.webp";
import ConcertDSC06328 from "./assets/Optimized/Concerts/DSC06328-3.webp";
import ConcertIMG0345 from "./assets/Optimized/Concerts/IMG_0345.webp";
import ConcertIMG0583 from "./assets/Optimized/Concerts/IMG_0583 (1).webp";
import ConcertJasleenRoyal from "./assets/Optimized/Concerts/Jasleen royal.webp";
import ConcertVIN00330 from "./assets/Optimized/Concerts/0M9A2855.webp";

const App = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Featured images that should get special treatment (larger size)
  const featuredImages = [
    "Credits@baricci_SA13.webp", // CP1
    "Credits@baricci_SA17.webp", // CP2  
    "Credits@baricci_MP-07367.webp", // CP4
    "Credits@baricci_MP-7985.webp",
    "0M9A2855.webp",
    "MAP05555.webp",
    "AMS04090-2.webp",
    "credits@baricci_mp--7.webp",
    "Jasleen royal.webp",
    "MAP05446.webp"
  ];

  // Full-width images that should span entire row like landscape videos
  const fullWidthImages = [
    "Credits@baricci_MP-8229.webp", // ConcertCreditsMP8229 only
  ];

  // Function to check if an image should be full width
  const isFullWidthImage = (imageSrc:any) => {
    if (!imageSrc || typeof imageSrc !== 'string') return false;
    return fullWidthImages.some(fullImg => 
      imageSrc.includes(fullImg) || 
      imageSrc.split('/').pop() === fullImg ||
      imageSrc.split('\\').pop() === fullImg
    );
  };

  // Function to check if an image is featured
  const isFeaturedImage = (imageSrc:any) => {
    if (!imageSrc || typeof imageSrc !== 'string') return false;
    return featuredImages.some(featuredImg => 
      imageSrc.includes(featuredImg) || 
      imageSrc.split('/').pop() === featuredImg ||
      imageSrc.split('\\').pop() === featuredImg
    );
  };

  // Cleaned up portfolio items - removed duplicates and repetitive images
  const portfolioItems = [
    // Start with Coldplay Images - FEATURED
    { id: 1, category: "Concerts", type: "image", src: CP1, title: "Coldplay Concert - Mumbai" },
    { id: 2, category: "Concerts", type: "image", src: CP2, title: "Coldplay Live Performance" },
    { id: 3, category: "Concerts", type: "image", src: CP3, title: "Coldplay Stage Show" },
    { id: 4, category: "Concerts", type: "image", src: CP4, title: "Coldplay Concert Photography" },

    // Concert images
    { id: 5, category: "Concerts", type: "image", src: Concert2, title: "Stage Lighting" },
    { id: 6, category: "Concerts", type: "image", src: Concert1721741656315, title: "Crowd Energy" },
    { id: 7, category: "Concerts", type: "image", src: ConcertCreditsMP8229, title: "Live Performance" },
    { id: 8, category: "Concerts", type: "image", src: ConcertCreditsSALOW, title: "Concert Capture" },

    // First Video - Timmy Trumpet (Reel) - after some images
    { id: 9, category: "Concerts", type: "video", src: TimmyTrumpetVideo, title: "Timmy Trumpet Performance", format: "reel" },

    { id: 10, category: "Concerts", type: "image", src: ConcertCreditsSA44, title: "Music Performance" },
    { id: 11, category: "Concerts", type: "image", src: ConcertCreditsSA48, title: "Live Music" },
    { id: 12, category: "Concerts", type: "image", src: ConcertCreditsMP08100, title: "Performance Art" },
    { id: 13, category: "Concerts", type: "image", src: ConcertCreditsBarrici47, title: "Stage Performance" },
    { id: 14, category: "Nightlife", type: "image", src: RAP2488, title: "Nightlife Photography" },
    { id: 15, category: "Nightlife", type: "image", src: M9A1565, title: "After Dark" },
    { id: 16, category: "Nightlife", type: "image", src: M9A1607, title: "Night Party" },

    // Second Video - Bismil (Reel) - distributed between images
    { id: 17, category: "Nightlife", type: "video", src: BismilQuakeVideo, title: "Bismil x Quake Performance", format: "reel" },

    { id: 18, category: "Nightlife", type: "image", src: CreditsIG00995, title: "Club Photography" },
    { id: 19, category: "Nightlife", type: "image", src: CreditsIG3356, title: "Nightlife Event" },
    { id: 20, category: "Concerts", type: "image", src: ConcertDSC04569, title: "Live Event" },
    { id: 21, category: "Concerts", type: "image", src: ConcertDSC06328, title: "Concert Photography" },
    { id: 22, category: "Concerts", type: "image", src: ConcertIMG0345, title: "Music Event" },
    { id: 23, category: "Nightlife", type: "image", src: EchoFilmers04888, title: "Night Photography" },
    { id: 24, category: "Nightlife", type: "image", src: EchoFilmers05010, title: "Club Event" },

    // Third Video - Prateek Kuhad (Landscape) - more spread out
    { id: 25, category: "live-events", type: "video", src: PrateekKuhadVideo, title: "Prateek Kuhad Live", format: "landscape" },

    { id: 26, category: "Nightlife", type: "image", src: IGEcho0172, title: "Nightlife Capture" },
    { id: 27, category: "Nightlife", type: "image", src: IGEcho02292, title: "After Hours" },
    { id: 28, category: "Concerts", type: "image", src: ConcertIMG0583, title: "Live Performance" },
    { id: 29, category: "Concerts", type: "image", src: ConcertJasleenRoyal, title: "Jasleen Royal Concert" },
    { id: 30, category: "Concerts", type: "image", src: dvlm, title: "Music Performance" },
    { id: 31, category: "Nightlife", type: "image", src: IGEcho3140, title: "Night Photography" },
    { id: 32, category: "Nightlife", type: "image", src: IGEcho04435, title: "Club Photography" },
    { id: 33, category: "Nightlife", type: "image", src: IGEcho04894, title: "Nightlife Event" },

    // Add duplicate images to fill gaps before Armaan's video
    { id: 34, category: "Nightlife", type: "image", src: MAP00594, title: "Nightclub" },
    { id: 35, category: "Concerts", type: "image", src: CP1, title: "Coldplay Live Energy" },
    { id: 36, category: "Nightlife", type: "image", src: MAP00832, title: "After Dark Event" },

    // Fourth Video - Armaan (Landscape) - well distributed
    { id: 37, category: "live-events", type: "video", src: corporateVideo1, title: "Armaan Corporate Event", format: "landscape" },

    { id: 38, category: "Concerts", type: "image", src: ConcertVIN00330, title: "Concert Event" },
    { id: 39, category: "Concerts", type: "image", src: kailash, title: "Kailash Kher Concert" },
    { id: 40, category: "Nightlife", type: "image", src: IGEcho8052, title: "Night Party" },
    { id: 41, category: "Nightlife", type: "image", src: IGMapurohit01437, title: "Night Event" },
    { id: 42, category: "Nightlife", type: "image", src: MAP00908, title: "Night Photography" },

    // Fifth Video - Anirudh (Reel) - at the end section
    { id: 43, category: "Nightlife", type: "video", src: concertVideo1, title: "Anirudh Live Performance", format: "reel" },

    { id: 44, category: "Nightlife", type: "image", src: MAP02863Enhanced, title: "Club Event" },
    { id: 45, category: "Nightlife", type: "image", src: MAP03238, title: "Nightlife Photography" },
    { id: 46, category: "Nightlife", type: "image", src: MAP05128Enhanced, title: "Night life" },
    { id: 47, category: "Nightlife", type: "image", src: MAP07877, title: "Club Photography" },
    { id: 48, category: "Nightlife", type: "image", src: MAP08667, title: "Nightlife Event" },
    { id: 49, category: "Nightlife", type: "image", src: MAP09570, title: "After Hours" },
    { id: 50, category: "Nightlife", type: "image", src: MAP09790, title: "Night Party" },
    { id: 51, category: "Nightlife", type: "image", src: MAP09858, title: "Club party" },

    // Live Events images
    { id: 52, category: "live-events", type: "image", src: M9A0152, title: "Live Event" },
    { id: 53, category: "live-events", type: "image", src: M9A0442, title: "Event Photography" },
    { id: 54, category: "live-events", type: "image", src: M9A1488, title: "Live Performance" },
    { id: 55, category: "live-events", type: "image", src: Jasleen, title: "Artist Performance" },
];

  // Show all items regardless of filter selection
  const filteredItems = useMemo(() => portfolioItems, []);

  // New Masonry Layout Component with Video Format Handling
type PortfolioItem = {
  id: number;
  category: string;
  type: string;
  src: string;
  title: string;
  format?: string;
};

const MasonryGrid = ({ items }: { items: PortfolioItem[] }) => {
  return (
    <div className="w-full">
      <style>{`
        .masonry-container {
          column-count: 1;
          column-gap: 1.5rem;
        }
        
        @media (min-width: 768px) {
          .masonry-container {
            column-count: 2;
          }
        }
        
        @media (min-width: 1024px) {
          .masonry-container {
            column-count: 3;
          }
        }
        
        .landscape-video {
          column-span: all;
          width: 100%;
          margin-bottom: 0;
        }

        .landscape-video-container {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          max-width: none;
        }

        @media (min-width: 1024px) {
          .landscape-video-container {
            width: calc(100% + 3rem);
            margin-left: -1.5rem;
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <div className="masonry-container space-y-6">
        {items.map((item:any) => {
          const isFeatured = isFeaturedImage(item.src);
          const isVideo = item.type === "video";
          const isLandscapeVideo = isVideo && (item.format === "landscape");
          const isReelVideo = isVideo && (item.format === "reel");
          
          // Check if current item is a full-width image
          const isFullWidth = isFullWidthImage(item.src);

          // Full-width images should break out of columns like landscape videos
          if (isFullWidth) {
            return (
              <div key={item.id} className="break-inside-avoid mb-6 w-full" style={{columnSpan: 'all'}}>
                <div className="w-full landscape-video-container group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl">
                  <div className="relative aspect-video">
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={item.title || `Portfolio ${item.category}`}
                      className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Image overlay */}
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-all duration-300" />
                    
                    {/* Featured badge */}
                    <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="px-6 py-3 text-white text-base font-medium rounded-full backdrop-blur-sm bg-blue-600/80">
                        ★ FEATURED IMAGE
                      </span>
                    </div>
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-white text-2xl font-medium">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          
          // Landscape videos should break out of columns and take full width
          if (isLandscapeVideo) {
            return (
              <div key={item.id} className="break-inside-avoid mb-6 w-full" style={{columnSpan: 'all'}}>
                <div className="w-full landscape-video-container group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl">
                  <div className="relative aspect-video">
                    <video
                      src={item.src}
                      className="w-full h-full object-cover"
                      preload="metadata"
                      loop
                      muted
                      autoPlay
                      playsInline
                      aria-label={item.title || `Video from ${item.category}`}
                    />
                    
                    {/* Video overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300" />
                    
                    {/* Large play button for landscape videos */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-24 h-24 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-black/70 transition-all duration-300">
                        <div className="w-0 h-0 border-l-12 border-l-white border-t-10 border-t-transparent border-b-10 border-b-transparent ml-3"></div>
                      </div>
                    </div>
                    
                    {/* Video badge */}
                    <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="px-6 py-3 text-white text-base font-medium rounded-full backdrop-blur-sm bg-red-600/80">
                        ▶ FEATURED VIDEO
                      </span>
                    </div>
                    
                    {/* Title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-white text-2xl font-medium">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
          
          return (
            <div
              key={item.id}
              className="break-inside-avoid mb-6 group relative overflow-hidden rounded-xl transition-all duration-300 hover:shadow-2xl"
            >
              {isReelVideo ? (
                <div className="relative aspect-[9/16]"> {/* Reel aspect ratio */}
                  <video
                    src={item.src}
                    className="w-full h-full object-cover"
                    preload="metadata"
                    loop
                    muted
                    autoPlay
                    playsInline
                    aria-label={item.title || `Video from ${item.category}`}
                  />
                  
                  {/* Video overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-300" />
                  
                  {/* Play button for reel videos */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:bg-black/70 transition-all duration-300">
                      <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Reel badge */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="px-3 py-1 text-white text-xs font-medium rounded-full backdrop-blur-sm bg-red-600/80">
                      ▶ REEL
                    </span>
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white text-sm font-medium">{item.title}</h3>
                  </div>
                </div>
              ) : (
                <div className="relative">
                  <img
                    src={item.src || "/placeholder.svg"}
                    alt={item.title || `Portfolio ${item.category}`}
                    className="w-full h-auto object-cover transition-all duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Image overlay */}
                  <div className={`absolute inset-0 transition-all duration-300 ${
                    isFeatured 
                      ? 'bg-black/5 group-hover:bg-black/15' 
                      : 'bg-black/0 group-hover:bg-black/20'
                  }`} />
                  
                  {/* Category badge */}
                  <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className={`px-3 py-1 text-white text-xs font-medium rounded-full backdrop-blur-sm ${
                      isFeatured ? 'bg-blue-600/80' : 'bg-black/70'
                    }`}>
                      {isFeatured ? '★ FEATURED' : 
                       item.category === 'Concerts' ? 'CONCERT' :
                       item.category === 'Nightlife' ? 'Nightlife' :
                       item.category === 'live-events' ? 'LIVE EVENT' :
                       item.category.toUpperCase()}
                    </span>
                  </div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white text-sm font-medium">{item.title}</h3>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-gray-600 border-t-white rounded-full animate-spin mx-auto mb-4" />
          <h1 className="text-2xl font-semibold text-white">ECHO FILMERS</h1>
        </div>
      </div>
    );
  }

  const Navigation = () => (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img src={logo || "/placeholder.svg"} alt="Echo Filmers Logo" className="w-20 h-20" />
            <div>
              <span className="text-2xl font-bold text-white">ECHO</span>
              <span className="text-2xl font-light text-gray-300">FILMERS</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {["Home", "Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-base font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-white p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`bg-white block h-0.5 w-6 transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
                  }`}
                />
                <span
                  className={`bg-white block h-0.5 w-6 transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`bg-white block h-0.5 w-6 transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            {["Home", "Work", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block text-white hover:text-gray-300 transition-colors duration-300 text-lg font-medium py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const HomeSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
      <div ref={sectionRef} id="home" className="relative h-screen overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: `url(${cover})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 flex items-center justify-center h-full px-4 pt-32 md:pt-40">
          <div className="text-center max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Capturing <span className="text-gray-200 font-light">Live Moments</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              Professional event & concert photography and videography that captures the essence of every moment
            </motion.p>
          </div>
        </div>
      </div>
    );
  };

  const WorkSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
      <div ref={sectionRef} id="work" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">Our Work</h2>
            <p className="text-lg text-gray-400">
              Showcasing our portfolio across all categories
            </p>
          </motion.div>

          {/* Auto-Sliding Category Cards */}
          <SlidingCategoryCards 
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            isInView={isInView}
          />

          {/* Show All Button */}
          <div className="text-center mb-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === "all"
                  ? "bg-white text-black shadow-lg"
                  : "border border-gray-400 text-white hover:bg-white/10 hover:border-white/60"
              }`}
            >
              <Camera className="w-4 h-4 inline mr-2" />
              Show All Work
            </button>
          </div>

          {/* New Masonry Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MasonryGrid items={filteredItems} />
          </motion.div>
        </div>
      </div>
    );
  };

  const AboutSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
      <div ref={sectionRef} id="about" className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <img
                src={MAP09570|| "/placeholder.svg"}
                alt="About Echo Filmers"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-semibold text-white">About ECHO FILMERS</h2>
              <p className="text-gray-400 text-base leading-relaxed mb-6">
                We specialize in capturing the energy and emotion of live events, from Concerts to corporate gatherings. Using state-of-the-art equipment, we create visual stories that resonate with audiences long after the moment passes.
              </p>

              <div className="flex flex-wrap gap-2">
                {["Concerts", "Live Events", "Nightlife", "Brand Campaigns"].map((service) => (
                  <span
                    key={service}
                    className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  const ContactSection = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true });

    return (
      <div ref={sectionRef} id="contact" className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-semibold text-white mb-4">Let's Create Together</h2>
            <p className="text-base text-gray-400">Ready to capture your next moment?</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/15 transition-colors duration-300">
                <Phone className="w-6 h-6 text-white mb-3" />
                <p className="text-gray-400 text-sm mb-1">Call us</p>
                <p className="text-white text-base font-medium">+91 8121021037</p>
              </div>

              <div className="p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/15 transition-colors duration-300">
                <Mail className="w-6 h-6 text-white mb-3" />
                <p className="text-gray-400 text-sm mb-1">Email us</p>
                <p className="text-white text-base font-medium">manishpurohit4321@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://www.instagram.com/echofilmerss/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 bg-white/10 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 h-full"
              >
                <Instagram className="w-6 h-6 text-white mb-3" />
                <p className="text-white text-base font-medium mb-1">@echofilmerss</p>
                <p className="text-gray-400 text-sm">Follow for behind-the-scenes content and latest work</p>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navigation />
      <main>
        <HomeSection />
        <WorkSection />
        <AboutSection />
        <ContactSection />
      </main>
      <footer className="py-8 bg-black border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-3 mb-2">
            <img src={logo || "/placeholder.svg"} alt="Echo Filmers Logo" className="w-8 h-8" />
            <span className="text-lg font-medium text-gray-400">ECHO FILMERS</span>
          </div>
          <p className="text-gray-500 text-sm">&copy; 2025 ECHO FILMERS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;