import React from 'react';

// Define tool data with logo URLs
const TOOLS = [
  {
    id: 'pr',
    name: 'Premiere Pro',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg'
  },
  {
    id: 'ae',
    name: 'After Effects',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg'
  },
  {
    id: 'ps',
    name: 'Photoshop',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg'
  },
  {
    id: 'ai',
    name: 'Illustrator',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg'
  },
  {
    id: 'lr',
    name: 'Lightroom',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfGsNzhTiuBNUcVd1xRP0dRuSgCfQE92BYg&s'
  },
  {
    id: 'davinci',
    name: 'DaVinci Resolve',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png'
  },
  {
    id: 'capcut',
    name: 'CapCut',
    logo: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxtHdRB6xk71KqOPxE23.XPiCdYh93Eoi.AcF3m2d1hwUV5BFbxbFKWoKMoaSW8ikKAVeKREQ1Q78CpiLfycKgd0-&format=source'
  },
  {
    id: 'blender',
    name: 'Blender',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Blender_logo_no_text.svg'
  },
  {
    id: 'figma',
    name: 'Figma',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
  },
  {
    id: 'id',
    name: 'InDesign',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Adobe_InDesign_CC_icon.svg'
  },
];

const ToolsCarousel: React.FC = () => {
  // Duplicate array to create seamless loop
  const seamlessTools = [...TOOLS, ...TOOLS];

  return (
    <section className="bg-neutral-950 py-12 overflow-hidden border-b border-neutral-900">
      <div className="container mx-auto px-6 mb-8 text-center">
        <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">Powered By Industry Standard Tools</p>
      </div>

      <div className="relative w-full pause-on-hover group">
        <div className="flex w-max animate-scroll gap-4 md:gap-6 mask-gradient">
          {seamlessTools.map((tool, index) => (
            <div
              key={`${tool.id}-${index}`}
              className="w-20 h-20 md:w-28 md:h-28 xl:w-36 xl:h-36 bg-neutral-900 rounded-2xl border border-neutral-800 flex items-center justify-center shrink-0 relative group/card overflow-hidden transition-colors hover:border-neutral-700"
            >
              {/* Tooltip */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-neutral-950 text-xs font-bold py-1 px-2 rounded opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none z-20">
                {tool.name}
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>

              {/* Logo */}
              <div className="relative z-10 w-10 h-10 md:w-14 md:h-14 xl:w-18 xl:h-18 flex items-center justify-center">
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="w-full h-full object-contain drop-shadow-lg filter brightness-90 group-hover/card:brightness-110 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsCarousel;