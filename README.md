# AI Image Generator

A modern React application that generates images using the Stability AI API. This project uses React, TypeScript, Tailwind CSS, and Vite for a fast and responsive development experience.

## 🌟 Features

- Text-to-image generation using Stability AI's powerful API
- Real-time image generation with loading states
- Error handling and validation
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Modern component architecture

## 🛠️ Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **API Integration**: Axios
- **Image Generation**: Stability AI API

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Stability AI API key ([Get it here](https://platform.stability.ai/))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-image-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Stability AI API key:
```env
VITE_STABILITY_API_KEY=your-api-key-here
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── ImageGenerator.tsx    # Main component for image generation
│   ├── PromptInput.tsx      # Text input component
│   ├── ErrorMessage.tsx     # Error display component
│   └── GeneratedImage.tsx   # Image display component
├── services/            # API services
│   └── imageApi.ts     # Stability AI API integration
├── App.tsx             # Root component
└── main.tsx           # Application entry point
```

## 💡 How It Works

1. **User Input**: Users enter a text prompt describing the image they want to generate.

2. **API Integration**: The application sends the prompt to Stability AI's API:
   - Uses the SDXL 1.0 model
   - Configures image parameters (1024x1024 resolution)
   - Handles authentication via API key
   - Processes the response as base64 image data

3. **Image Generation Process**:
   ```typescript
   // The API call is made with these parameters
   {
     text_prompts: [{ text: prompt }],
     cfg_scale: 7,
     height: 1024,
     width: 1024,
     steps: 30,
     samples: 1
   }
   ```

4. **Response Handling**: 
   - Converts base64 response to displayable image
   - Handles various error cases
   - Updates UI with loading states

## 🔒 Security

- API key is stored in environment variables
- Client-side validation prevents empty requests
- Error handling for API failures and rate limits

## 📝 Usage

1. Enter a descriptive prompt in the text area
2. Click "Generate Image"
3. Wait for the image generation process
4. View your generated image below the input
5. If any errors occur, they will be displayed clearly

## ⚙️ Configuration

The application can be configured through environment variables:
- `VITE_STABILITY_API_KEY`: Your Stability AI API key

## 🚀 Deployment

To build for production:

```bash
npm run build
```

This will create a `dist` directory with optimized production files.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
