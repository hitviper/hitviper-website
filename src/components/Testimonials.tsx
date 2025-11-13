import { useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import hgregoireLogo from 'figma:asset/121e0138146ba0008c9f4941603c85a2de4ab68e.png';
import csledLogo from 'figma:asset/dc72ed1923a94fc1119d6fa4bcc99c6ad28a4f84.png';
import martinDoaneLogo from 'figma:asset/3dc11d5b6830aed438527cd279bd75cd607f946e.png';
import redBullLogo from 'figma:asset/48f677941b33e30bb411602e0d8894c2f9cd94e2.png';
import indigoLogo from 'figma:asset/04d19fadd81b0359d38b68e172d57486935c5252.png';
import johnDeereLogo from 'figma:asset/74fff067f2702a3d5485b5eba5e40ffa72f73ce6.png';
import koonetaLogo from 'figma:asset/2a42e5366ebbc6babb127a0b931bda0c9bb09f71.png';
import unileverLogo from 'figma:asset/3db7961e97f9c5afc2654ef04a260de331a24b63.png';
import kimberlyClarkLogo from 'figma:asset/48efe254058de88969d2b247296bb231430a4647.png';
import shoupLogo from 'figma:asset/963a6de9a0d4b1a22eb216898e41b88a3574ecca.png';
import compassLogo from 'figma:asset/7576c4e553558c05d4065b9c025fb32bcd79b51f.png';
import furnishingKnowledgeLogo from 'figma:asset/9cd65235196973e768aa2633b016906f35e48cc1.png';
import umbracoLogo from 'figma:asset/821fa0028a076c73e5337f544e996bb49f0ba235.png';
import westernUnionLogo from 'figma:asset/9ac45ab32c12dce9c54d6a265447107871f1dac9.png';

const brandLogos = [
  { src: hgregoireLogo, alt: 'H Gregoire' },
  { src: csledLogo, alt: 'CSLED Contractor Source LED' },
  { src: martinDoaneLogo, alt: 'Martin Doane Barrister Solicitor' },
  { src: redBullLogo, alt: 'Red Bull' },
  { src: indigoLogo, alt: 'Indigo' },
  { src: johnDeereLogo, alt: 'John Deere' },
  { src: koonetaLogo, alt: 'Kooneta' },
  { src: unileverLogo, alt: 'Unilever' },
  { src: kimberlyClarkLogo, alt: 'Kimberly-Clark' },
  { src: shoupLogo, alt: 'SHOUP - Keeping Farms Running' },
  { src: compassLogo, alt: 'Compass' },
  { src: furnishingKnowledgeLogo, alt: 'Furnishing Knowledge' },
  { src: umbracoLogo, alt: 'Umbraco' },
  { src: westernUnionLogo, alt: 'Western Union' },
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
