import React, { useState } from 'react';
import { Waves, Sun, Moon, Fish, Wind, Droplets } from 'lucide-react';

const OceanPhenomenaGuide = () => {
  const [selectedPhenomenon, setSelectedPhenomenon] = useState(null);

  const phenomena = [
    {
      id: 'tides',
      name: 'Tides',
      icon: Moon,
      color: 'bg-blue-100',
      description: 'The rise and fall of ocean water levels that happen twice a day.',
      howItWorks: 'The Moon\'s gravity pulls on Earth\'s oceans, creating bulges of water. As Earth rotates, different areas experience high and low tides.',
      whyItMatters: 'Tides create unique habitats for creatures like crabs, starfish, and sea anemones. Many animals depend on tides for feeding and reproduction.',
      respectTip: 'When visiting tide pools, walk carefully and never remove creatures from their homes. They need the ocean to survive!'
    },
    {
      id: 'waves',
      name: 'Waves',
      icon: Waves,
      color: 'bg-cyan-100',
      description: 'Moving ridges of water created by wind blowing across the ocean surface.',
      howItWorks: 'Wind transfers energy to the water, creating ripples that grow into waves. The bigger the wind and the longer it blows, the larger the waves.',
      whyItMatters: 'Waves bring nutrients from deep water to the surface, feeding ocean life. They also shape coastlines and create beaches.',
      respectTip: 'Never turn your back on the ocean. Waves can be unpredictable and powerful. Always respect the ocean\'s strength!'
    },
    {
      id: 'currents',
      name: 'Ocean Currents',
      icon: Wind,
      color: 'bg-teal-100',
      description: 'Rivers of water flowing through the ocean, like highways for marine life.',
      howItWorks: 'Wind, temperature differences, and Earth\'s rotation create currents that can travel thousands of miles across oceans.',
      whyItMatters: 'Currents distribute heat around the planet, affecting weather and climate. Many animals like sea turtles use currents to travel long distances.',
      respectTip: 'Ocean trash travels on currents too. Always dispose of waste properly so it doesn\'t harm sea creatures far away!'
    },
    {
      id: 'bioluminescence',
      name: 'Bioluminescence',
      icon: Sun,
      color: 'bg-indigo-100',
      description: 'The magical glow created by tiny ocean creatures producing their own light.',
      howItWorks: 'Special chemicals in creatures like plankton, jellyfish, and some fish react to create light without heat.',
      whyItMatters: 'This light helps creatures communicate, attract prey, or scare predators. It creates stunning natural light shows in the ocean.',
      respectTip: 'If you\'re lucky enough to see bioluminescence, observe quietly without disturbing the water too much. These creatures are delicate!'
    },
    {
      id: 'coral-reefs',
      name: 'Coral Reefs',
      icon: Fish,
      color: 'bg-orange-100',
      description: 'Underwater cities built by tiny animals called coral polyps over thousands of years.',
      howItWorks: 'Coral polyps create hard skeletons that build up over time. They live with algae that provide them food through photosynthesis.',
      whyItMatters: 'Reefs are home to 25% of all ocean species! They protect coastlines from storms and provide food for millions of people.',
      respectTip: 'Never touch or stand on coral. Even a small touch can damage growth that took decades to form. Look with your eyes, not your hands!'
    },
    {
      id: 'water-cycle',
      name: 'The Water Cycle',
      icon: Droplets,
      color: 'bg-sky-100',
      description: 'The endless journey of water from ocean to sky to land and back again.',
      howItWorks: 'Sun heats ocean water, turning it into vapor that rises, forms clouds, falls as rain, and flows back to the sea.',
      whyItMatters: 'This cycle provides all living things with fresh water. The ocean is the starting point for rain that waters plants and fills rivers.',
      respectTip: 'Keep oceans clean because that water becomes the rain we drink! What goes in the ocean affects all life on Earth.'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-b from-blue-50 to-cyan-50 min-h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">🌊 Ocean Phenomena Explorer</h1>
        <p className="text-gray-700 text-lg">Discover the amazing ways our oceans work</p>
      </div>

      {!selectedPhenomenon ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {phenomena.map((phenomenon) => {
            const Icon = phenomenon.icon;
            return (
              <button
                key={phenomenon.id}
                onClick={() => setSelectedPhenomenon(phenomenon)}
                className={`${phenomenon.color} p-6 rounded-lg shadow-md hover:shadow-xl transition-all transform hover:scale-105 text-left`}
              >
                <Icon className="w-12 h-12 mb-3 text-blue-700" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{phenomenon.name}</h3>
                <p className="text-gray-700 text-sm">{phenomenon.description}</p>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-xl p-8">
          <button
            onClick={() => setSelectedPhenomenon(null)}
            className="text-blue-600 hover:text-blue-800 mb-4 font-medium"
          >
            ← Back to all phenomena
          </button>
          
          <div className={`${selectedPhenomenon.color} p-6 rounded-lg mb-6`}>
            {React.createElement(selectedPhenomenon.icon, { className: "w-16 h-16 mb-4 text-blue-700" })}
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedPhenomenon.name}</h2>
            <p className="text-gray-700 text-lg">{selectedPhenomenon.description}</p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">🔍 How It Works</h3>
              <p className="text-gray-700 leading-relaxed">{selectedPhenomenon.howItWorks}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-900 mb-2">🌍 Why It Matters</h3>
              <p className="text-gray-700 leading-relaxed">{selectedPhenomenon.whyItMatters}</p>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
              <h3 className="text-xl font-bold text-green-900 mb-2">💚 How to Show Respect</h3>
              <p className="text-gray-800 leading-relaxed">{selectedPhenomenon.respectTip}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-8 bg-blue-100 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-blue-900 mb-2">🌟 Remember</h3>
        <p className="text-gray-800">
          Every ocean phenomenon is connected to others, and all of them are vital to life on Earth. 
          When we respect and protect the ocean, we're helping every living thing on our planet, including ourselves!
        </p>
      </div>
    </div>
  );
};

export default OceanPhenomenaGuide;