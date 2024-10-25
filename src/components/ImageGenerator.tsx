import React, { useState } from 'react';
import { AxiosError } from 'axios';
import PromptInput from './PromptInput';
import ErrorMessage from './ErrorMessage';
import GeneratedImage from './GeneratedImage';
import { generateImage } from '../services/imageApi';

const ImageGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateImage = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setLoading(true);
    setError(null);
    setImage(null);

    try {
      const apiKey = import.meta.env.VITE_STABILITY_API_KEY;
      
      if (!apiKey) {
        throw new Error('API key is not configured');
      }

      const imageUrl = await generateImage({ prompt: prompt.trim(), apiKey });
      setImage(imageUrl);
    } catch (err) {
      let errorMessage = 'An unexpected error occurred. Please try again.';
      
      if (err instanceof AxiosError) {
        if (err.response?.status === 401) {
          errorMessage = 'Invalid API key. Please check your configuration.';
        } else if (err.response?.status === 429) {
          errorMessage = 'Rate limit exceeded. Please try again later.';
        } else if (err.response?.data?.message) {
          errorMessage = err.response.data.message;
        }
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      setImage(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">AI Image Generator</h1>
      
      <PromptInput
        prompt={prompt}
        setPrompt={setPrompt}
        onGenerate={handleGenerateImage}
        loading={loading}
      />

      <ErrorMessage message={error || ''} />
      
      {image && <GeneratedImage imageUrl={image} />}
    </div>
  );
};

export default ImageGenerator;