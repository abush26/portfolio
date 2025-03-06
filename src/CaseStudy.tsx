import React from 'react';

const CaseStudy = ({
  title = '',
  duration = '',
  impact = '',
  description = '',
  image = '',
  imageAlt = '',
  challenges = [],
  solutions = [],
  results = []
}) => {
  // Helper function to safely render lists
  const renderList = (items = [], type) => {
    if (!Array.isArray(items) || items.length === 0) {
      return null;
    }

    const getIconColor = () => {
      switch(type) {
        case 'challenges': return 'bg-red-500';
        case 'solutions': return 'bg-blue-500';
        case 'results': return 'bg-green-500';
        default: return 'bg-purple-600';
      }
    };

    const getCardStyle = () => {
      switch(type) {
        case 'challenges': 
          return 'border-l-4 border-red-500 bg-gray-900';
        case 'solutions': 
          return 'border-l-4 border-blue-500 bg-gray-900';
        case 'results': 
          return 'border-l-4 border-green-500 bg-gray-900';
        default: 
          return '';
      }
    };

    const getTitleStyle = () => {
      switch(type) {
        case 'challenges': return 'text-red-400';
        case 'solutions': return 'text-blue-400';
        case 'results': return 'text-green-400';
        default: return 'text-purple-400';
      }
    };

    return (
      <div className={`p-4 rounded-lg transition-all duration-300 ${getCardStyle()}`}>
        <h4 className={`text-lg font-semibold mb-4 ${getTitleStyle()}`}>
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </h4>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} 
                className="flex items-start p-2 rounded-md transition-all duration-300 hover:translate-x-1">
              <span className={`h-2 w-2 rounded-full ${getIconColor()} mt-2 mr-3 flex-shrink-0`}></span>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="mb-16 bg-gray-900 rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={image} 
          alt={imageAlt}
          className="w-full h-full object-cover transform transition-all duration-500 hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
          <div className="flex items-center mt-2 text-gray-200 space-x-4">
            {duration && (
              <div className="flex items-center">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Duration: {duration}
                </span>
              </div>
            )}
            {impact && (
              <div className="flex items-center">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  Impact: {impact}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {description && (
          <p className="text-gray-400 mb-8 text-lg leading-relaxed">
            {description}
          </p>
        )}
        
        <div className="grid md:grid-cols-3 gap-6">
          {challenges?.length > 0 && renderList(challenges, 'challenges')}
          {solutions?.length > 0 && renderList(solutions, 'solutions')}
          {results?.length > 0 && renderList(results, 'results')}
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;