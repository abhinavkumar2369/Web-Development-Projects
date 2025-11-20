# Gemini Chat Bot

A beautiful, modern chat interface powered by Google's Gemini AI API, built with Vite and Tailwind CSS.

![Gemini Chat Bot](https://img.shields.io/badge/AI-Gemini-blue) ![Vite](https://img.shields.io/badge/Vite-5.x-646CFF) ![Tailwind](https://img.shields.io/badge/Tailwind-3.x-38B2AC)

## ✨ Features

- 🤖 **Powered by Gemini AI** - Advanced conversational AI capabilities
- 🎨 **Beautiful UI** - Modern, responsive design with smooth animations
- 💬 **Real-time Chat** - Instant responses with typing indicators
- 📱 **Mobile Responsive** - Works perfectly on all devices
- 💾 **Chat History** - Automatic saving and restoration of conversations
- ⚙️ **Settings Panel** - Easy API key management
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development
- 🎯 **Suggestion Prompts** - Quick-start conversation starters
- ⌨️ **Keyboard Shortcuts** - Enter to send, Shift+Enter for new lines
- 🎭 **Message Formatting** - Support for basic markdown formatting

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- A Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

### Installation

1. **Clone or download this project**
   ```bash
   cd "Gemini Chat Bot"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - The application will open automatically

### Setting up your API Key

1. Get your free Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click the settings icon (⚙️) in the top right corner
3. Enter your API key in the settings modal
4. Click "Save" - your key will be stored securely in your browser

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
Gemini Chat Bot/
├── index.html          # Main HTML file
├── main.js             # Main JavaScript application
├── style.css           # Tailwind CSS with custom styles
├── package.json        # Dependencies and scripts
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
├── postcss.config.js   # PostCSS configuration
└── README.md           # This file
```

## 🎨 Customization

### Themes & Colors

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      'gemini-blue': '#4285f4',
      'gemini-dark': '#1a1a1a',
      'chat-bg': '#f8fafc',
      'user-msg': '#e3f2fd',
      'bot-msg': '#f3e5f5'
    }
  }
}
```

### Animation Speed

Modify animation durations in `style.css`:

```css
@keyframes slideUp {
  /* Custom animation timing */
}
```

## 🔧 Configuration

### Gemini Model Settings

You can modify the AI model configuration in `main.js`:

```javascript
this.model = this.genAI.getGenerativeModel({ 
  model: "gemini-1.5-flash",   // Current model (was gemini-pro)
  generationConfig: {
    temperature: 0.7,        // Creativity (0-1)
    topK: 40,               // Diversity
    topP: 0.95,             // Nucleus sampling
    maxOutputTokens: 1024,   // Response length
  }
});
```

### Message Formatting

The app supports basic markdown formatting:
- `**bold text**` → **bold text**
- `*italic text*` → *italic text*
- `` `code` `` → `code`

## 📱 Browser Support

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers

## 🔒 Privacy & Security

- API keys are stored locally in your browser
- Chat history is saved locally (not sent to any server)
- No user data is collected or transmitted
- All communication is directly with Google's Gemini API

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy to GitHub Pages

1. Build the project: `npm run build`
2. Copy contents of `dist` folder to your GitHub Pages repository
3. Your chat bot is now live!

### Deploy to Netlify/Vercel

1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 License

This project is open source and available under the MIT License.

## 🆘 Support

If you encounter any issues:

1. **API Key Issues**: Make sure your Gemini API key is valid and has sufficient quota
2. **Build Issues**: Ensure you have Node.js v16+ installed
3. **Network Issues**: Check your internet connection for API calls

## 🎯 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Voice input/output
- [ ] File upload support
- [ ] Multiple conversation threads
- [ ] Export chat history
- [ ] Custom system prompts
- [ ] Response regeneration
- [ ] Message reactions

---

**Made with ❤️ using Vite, Tailwind CSS, and Google's Gemini AI**
