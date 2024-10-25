import React from 'react';

interface PromptInputProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  onGenerate: () => void;
  loading: boolean;
}

const PromptInput: React.FC<PromptInputProps> = ({ prompt, setPrompt, onGenerate, loading }) => {
  return (
    <div>
      <textarea
        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 mb-4"
        rows={4}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Describe the image you want to generate..."
      />
      <button
        onClick={onGenerate}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 disabled:bg-blue-300 transition-colors"
      >
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
    </div>
  );
};

export default PromptInput;