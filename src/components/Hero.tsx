import { ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { InteractiveSnake } from './InteractiveSnake';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-24 pb-20 px-4 bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl mb-6 pb-2 bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
              Your Trusted Growth Partner in the Digital Jungle
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              We help ambitious brands achieve explosive growth through data-driven digital marketing and paid media strategies that deliver measurable ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-emerald-700 to-emerald-900 text-lg"
              >
                Start Growing Today
                <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                size="lg"
                variant="outline"
                className="text-lg border-emerald-700 text-emerald-700 hover:bg-emerald-50"
              >
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-12 pt-12 border-t border-gray-200">
              <div>
                <div className="text-lg md:text-3xl pb-1 bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
                  500%+
                </div>
                <div className="text-sm text-gray-600 mt-1">Avg. ROAS</div>
              </div>
              <div>
                <div className="text-lg md:text-3xl pb-1 bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
                  $360M+
                </div>
                <div className="text-sm text-gray-600 mt-1">Ad Spend Managed</div>
              </div>
              <div>
                <div className="text-lg md:text-3xl pb-1 bg-gradient-to-r from-emerald-700 to-emerald-900 bg-clip-text text-transparent">
                  100+
                </div>
                <div className="text-sm text-gray-600 mt-1">Clients Scaled</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <InteractiveSnake />
        </div>
      </div>
    </section>
  );
}
