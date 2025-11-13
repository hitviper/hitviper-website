import { lazy, Suspense } from 'react';
import { Toaster } from '../components/ui/sonner';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Footer } from '../components/Footer';
import { LoadingSection } from '../components/LoadingSection';
import { PerformanceOptimizer } from '../components/PerformanceOptimizer';

// Lazy load below-the-fold components
const Results = lazy(() => import('../components/Results').then(module => ({ default: module.Results })));
const Testimonials = lazy(() => import('../components/Testimonials').then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import('../components/Contact').then(module => ({ default: module.Contact })));

export default function App() {
  return (
    <div className="min-h-screen">
      <PerformanceOptimizer />
      <Header />
      <main>
        <Hero />
        <Services />
        <Suspense fallback={<LoadingSection />}>
          <Results />
          <Testimonials />
          <Contact />
        </Suspense>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
