import { memo } from 'react';
import { Target, TrendingUp, BarChart3, Megaphone, Search, Share2, Monitor } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback.tsx';

const services = [
  {
    icon: Target,
    title: 'Paid Search (PPC)',
    description: 'High-intent traffic that converts',
  },
  {
    icon: Megaphone,
    title: 'Paid Social Media',
    description: 'Targeted campaigns across all platforms',
  },
  {
    icon: Monitor,
    title: 'Programmatic Display & Video',
    description: 'CTV, OLV, and display at scale',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Data-driven insights & optimization',
  },
  {
    icon: Search,
    title: 'SEO Strategy',
    description: 'Organic visibility that lasts',
  },
  {
    icon: Share2,
    title: 'Funnel Optimization',
    description: 'More value from every click',
  },
  {
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Maximum ROI, sustainable growth',
  },
];

export const Services = memo(function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Decorative palm leaf images - optimized sizes */}
      <div className="absolute top-4 -left-16 w-80 h-80 opacity-20 -rotate-12">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1635265191732-ed470d961760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwZnJvbmQlMjBsZWFmfGVufDF8fHx8MTc2Mjk3OTI2MHww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
          style={{ mixBlendMode: 'multiply' }}
          loading="lazy"
        />
      </div>

      <div className="absolute top-4 -right-16 w-80 h-80 opacity-20 rotate-45">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1597603601003-5a6f7c15b561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMHBhbG0lMjBsZWFmfGVufDF8fHx8MTc2Mjk3OTI2MXww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
          style={{ mixBlendMode: 'multiply' }}
          loading="lazy"
        />
      </div>

      <div className="absolute bottom-10 -left-16 w-96 h-96 opacity-20 rotate-12">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1695232574601-0a6ea1f0320e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHBhbG0lMjBicmFuY2h8ZW58MXx8fHwxNzYyOTc5MjYxfDA&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
          style={{ mixBlendMode: 'multiply' }}
          loading="lazy"
        />
      </div>

      <div className="absolute bottom-10 -right-16 w-80 h-80 opacity-20 rotate-12">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1635265191732-ed470d961760?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxtJTIwZnJvbmQlMjBsZWFmfGVufDF8fHx8MTc2Mjk3OTI2MHww&ixlib=rb-4.1.0&q=80&w=400&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
          style={{ mixBlendMode: 'multiply' }}
          loading="lazy"
        />
      </div>

      <div className="container mx-auto relative z-10 max-w-[1600px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Full-service digital marketing solutions designed to accelerate your growth and maximize your marketing investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="border-2 hover:border-emerald-300 transition-all duration-300 hover:shadow-lg aspect-square flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg w-full h-full min-h-[200px]"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-slate-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="text-emerald-700" size={32} />
                </div>
                <h3 className="text-sm leading-tight mb-2 bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent font-bold">{service.title}</h3>
                <p className="text-xs leading-tight text-gray-600">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});
