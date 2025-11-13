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
                className="w-full h-16 bg-white rounded-lg flex items-center justify-center p-2"
              >
                <ImageWithFallback 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="w-full h-full object-contain grayscale"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Desktop: Two rows */}
          <div className="hidden md:flex flex-col gap-4 items-center">
            {/* First Row */}
            <div className="flex justify-center items-center gap-4">
              {brandLogos.slice(0, 7).map((logo, index) => (
                <div 
                  key={index}
                  className="w-28 h-14 bg-white rounded-lg flex items-center justify-center p-2 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <ImageWithFallback 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={`w-full h-full object-contain transition-all duration-500 ${
                      hoveredIndex === index ? 'grayscale-0' : 'grayscale'
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Second Row */}
            <div className="flex justify-center items-center gap-4">
              {brandLogos.slice(7).map((logo, index) => (
                <div 
                  key={index + 7}
                  className="w-28 h-14 bg-white rounded-lg flex items-center justify-center p-2 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(index + 7)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <ImageWithFallback 
                    src={logo.src} 
                    alt={logo.alt} 
                    className={`w-full h-full object-contain transition-all duration-500 ${
                      hoveredIndex === index + 7 ? 'grayscale-0' : 'grayscale'
                    }`}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-emerald-300 transition-all duration-300 hover:shadow-xl">
              <CardContent className="pt-6">
                <Quote className="text-emerald-300 mb-4" size={32} />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>

                <p className="text-gray-700 mb-6">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-gray-200 pt-4">
                  <div className="text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
