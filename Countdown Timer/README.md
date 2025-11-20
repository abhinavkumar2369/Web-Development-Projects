# Countdown Timer & Stopwatch

A modern, feature-rich countdown timer and stopwatch application built with HTML, CSS, and JavaScript. This web application provides both countdown timer and stopwatch functionality in a beautiful, responsive interface.

## Features

### 🕐 Countdown Timer
- **Custom Time Setting**: Set hours, minutes, and seconds manually
- **Quick Timer Buttons**: One-click presets for 1, 5, 10, 15, 30 minutes, and 1 hour
- **Visual Progress Ring**: Circular progress indicator showing remaining time
- **Audio Notification**: Sound alert when timer completes
- **Browser Notification**: Desktop notification when timer finishes
- **Visual Alerts**: Screen flashing when less than 10 seconds remain

### ⏱️ Stopwatch
- **Precise Timing**: Accurate to 10-millisecond intervals
- **Lap Functionality**: Record multiple lap times with split intervals
- **Lap Management**: View, track, and clear recorded laps
- **Continuous Progress**: Visual progress ring that completes every minute

### 🎨 User Interface
- **Modern Design**: Clean, gradient-based interface with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Mode Switching**: Easy toggle between timer and stopwatch modes
- **Intuitive Controls**: Large, clearly labeled buttons with icons
- **Real-time Display**: Large time display with millisecond precision

### ⌨️ Keyboard Shortcuts
- **Space**: Start/Pause timer or stopwatch
- **R**: Reset current timer or stopwatch
- **L**: Add lap (stopwatch mode only)
- **T**: Switch to timer mode
- **S**: Switch to stopwatch mode

### 📱 Additional Features
- **Progressive Web App (PWA)**: Can be installed as an app
- **Cross-browser Compatibility**: Works in all modern browsers
- **Offline Functionality**: Works without internet connection
- **Status Messages**: Clear feedback for user actions
- **Input Validation**: Prevents invalid time entries

## How to Use

### Countdown Timer
1. Click "Countdown Timer" mode button
2. Set your desired time using the hour, minute, and second inputs
3. Or click one of the quick timer buttons for preset times
4. Click "Start" to begin the countdown
5. Use "Pause" to temporarily stop, "Reset" to clear

### Stopwatch
1. Click "Stopwatch" mode button
2. Click "Start" to begin timing
3. Click "Lap" to record lap times while running
4. Click "Pause" to stop timing
5. Click "Reset" to clear all times and laps
6. Use "Clear Laps" to remove recorded lap times

## Technical Details

### Technologies Used
- **HTML5**: Semantic markup with audio elements
- **CSS3**: Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)**: Object-oriented programming with modern features
- **Web APIs**: Notification API, Web Audio API, Service Worker

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- **Optimized Animations**: Smooth 60fps animations using CSS transforms
- **Efficient Timers**: 10ms interval updates for precise timing
- **Memory Management**: Proper cleanup of intervals and event listeners
- **Minimal Bundle**: No external dependencies, pure vanilla JavaScript

## File Structure

```
Countdown Timer/
├── index.html          # Main HTML structure
├── index.css           # Styling and responsive design
├── index.js            # Core functionality and logic
└── README.md           # Project documentation
```

## Installation & Setup

1. Download or clone the project files
2. Open `index.html` in a web browser
3. No build process or dependencies required!

### For Development
- Use a local server for best experience (like Live Server extension in VS Code)
- Enable notifications in browser settings for full functionality

## Customization

### Colors
Edit the CSS variables in `index.css` to change the color scheme:
- Primary gradient: `#667eea` to `#764ba2`
- Success color: `#4CAF50`
- Warning color: `#ff9800`
- Error color: `#f44336`

### Sounds
Replace the Web Audio API implementation in `playNotificationSound()` method to use custom sound files.

### Quick Timer Presets
Modify the quick timer buttons in HTML and their corresponding data-time attributes to add custom preset times.

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you encounter any issues or have questions, please open an issue in the project repository.

---

**Enjoy timing with precision! ⏰**
