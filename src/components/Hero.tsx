import { Truck } from 'lucide-react';
const Hero = () => {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
        <Truck className="w-4 h-4" />
        <span>Step 3 of 6</span>
      </div>
      <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-6">
        Choose Your Skip
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
        Find the perfect skip size for your project. From small home clearances
        to large construction sites, we have the right solution for you.
      </p>
    </div>
  );
}

export default Hero
