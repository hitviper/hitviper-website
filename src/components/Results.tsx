import { ImageWithFallback } from './figma/ImageWithFallback';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';
import bgImage from 'figma:asset/bcbd5a930d728d2556263b08e01937b44b165c30.png';

const stats = [
  {
    icon: TrendingUp,
    value: '387%',
    label: 'Average Revenue Growth',
    description: 'for clients in first year',
  },
  {
    icon: DollarSign,
    value: '5.2x',
    label: 'Average ROAS',
    description: 'across all campaigns',
  },
  {
    icon: Users,
    value: '2M+',
    label: 'Leads Generated',
    description: 'for our clients',
  },
  {
    icon: Target,
    value: '94%',
    label: 'Client Retention',
    description: 'year-over-year',
  },
];

export function Results() {
  return (
    <section id="results" className="py-20 px-4 relative text-white overflow-hidden" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-3xl blur-3xl opacity-30"></div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2MjkyOTIxNnww&ixlib=rb-4.1.0&q=80&w=600&utm_source=figma&utm_medium=referral"
              alt="Business growth analytics"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* Right Side - Stats */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl mb-6">
              Results That Speak for Themselves
            </h2>
            <p className="text-xl text-emerald-100 mb-12">
              We don't just run ads—we drive real, measurable business growth. Here's what our clients have achieved working with Hitviper.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <Icon className="text-emerald-300 mb-4" size={32} />
                    <div className="text-4xl mb-2">{stat.value}</div>
                    <div className="text-lg mb-1">{stat.label}</div>
                    <div className="text-sm text-slate-200">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
