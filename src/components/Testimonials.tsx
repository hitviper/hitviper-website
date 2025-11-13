import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

const brandLogos = [
  { src: 'https://logo.clearbit.com/hgregoire.ca', alt: 'H Gregoire' },
  { src: 'https://via.placeholder.com/150x60/1e293b/10b981?text=CSLED', alt: 'CSLED Contractor Source LED' },
  { src: 'https://via.placeholder.com/150x60/1e293b/10b981?text=Martin+Doane', alt: 'Martin Doane Barrister Solicitor' },
  { src: 'https://logo.clearbit.com/redbull.com', alt: 'Red Bull' },
  { src: 'https://logo.clearbit.com/chapters.indigo.ca', alt: 'Indigo' },
  { src: 'https://logo.clearbit.com/deere.com', alt: 'John Deere' },
  { src: 'https://via.placeholder.com/150x60/1e293b/10b981?text=Kooneta', alt: 'Kooneta' },
  { src: 'https://logo.clearbit.com/unilever.com', alt: 'Unilever' },
  { src: 'https://logo.clearbit.com/kimberly-clark.com', alt: 'Kimberly-Clark' },
  { src: 'https://via.placeholder.com/150x60/1e293b/10b981?text=SHOUP', alt: 'SHOUP - Keeping Farms Running' },
  { src: 'https://logo.clearbit.com/compass.com', alt: 'Compass' },
  { src: 'https://via.placeholder.com/150x60/1e293b/10b981?text=Furnishing+Knowledge', alt: 'Furnishing Knowledge' },
  { src: 'https://logo.clearbit.com/umbraco.com', alt: 'Umbraco' },
  { src: 'https://logo.clearbit.com/westernunion.com', alt: 'Western Union' },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    company: 'TechStart Solutions',
    role: 'CEO',
    content: 'Hitviper completely transformed our digital marketing strategy. In just 6 months, we saw a 450% increase in qualified leads and our CAC dropped by 40%. Their expertise in paid media is unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    company: 'GrowthBox',
    role: 'Marketing Director',
    content: 'The team at Hitviper doesn\'t just execute campaigns—they become true partners in your growth. Their data-driven approach and constant optimization have consistently delivered 6x+ ROAS for us.',
    rating: 5,
  },
  {
    name: 'Emily Watson',
    company: 'Luxe Commerce',
    role: 'Founder',
    content: 'After working with three other agencies, Hitviper was the first to actually deliver on their promises. They scaled our monthly revenue from $50k to $300k in under a year. Absolutely game-changing.',
    rating: 5,
  },
];

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Trusted by Growth-Focused Brands
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Hitviper.
          </p>
        </div>

        {/* Brand Logos */}
        <div className="mb-12">
          {/* Mobile: Grid layout with 3 columns */}
          <div className="grid grid-cols-3 gap-3 md:hidden">
            {brandLogos.map((logo, index) => (
              <div 
                key={index}
