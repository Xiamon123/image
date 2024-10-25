import axios from 'axios';

const API_URL = 'https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image';

interface GenerateImageParams {
  prompt: string;
  apiKey: string;
}

export const generateImage = async ({ prompt, apiKey }: GenerateImageParams): Promise<string> => {
  const response = await axios.post(
    API_URL,
    {
      text_prompts: [{ text: prompt }],
      cfg_scale: 7,
      height: 1024,
      width: 1024,
      steps: 30,
      samples: 1,
    },
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
    }
  );

  if (!response.data.artifacts?.[0]?.base64) {
    throw new Error('No image data received from the API');
  }

  return `data:image/png;base64,${response.data.artifacts[0].base64}`;
};