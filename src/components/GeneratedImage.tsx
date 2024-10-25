import React from 'react';

interface GeneratedImageProps {
  imageUrl: string;
}

const GeneratedImage: React.FC<GeneratedImageProps> = ({ imageUrl }) => {
  if (!imageUrl) return null;

  return (
    <div className="mt-8">
      <img
        src={imageUrl}
        alt="AI Generated"
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  );
};

export default GeneratedImage;