import { memo } from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';
import logo from 'figma:asset/31160b505b4d44116a2444dd7da50065610cdc0b.png';

export const Footer = memo(function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src={logo} alt="Hitviper Inc." className="h-8 w-auto mb-4 brightness-0 invert" loading="lazy" />
            <p className="text-gray-400 mb-4 max-w-md">
              Performance-driven digital marketing and paid media consulting that delivers measurable growth for ambitious brands.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Paid Search</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Paid Social</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Performance Marketing</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Analytics</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#results" className="hover:text-emerald-400 transition-colors">Results</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Hitviper Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
});
