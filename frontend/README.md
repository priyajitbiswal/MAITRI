# MAITRI - AI Assistant Frontend

A cutting-edge React-based frontend for MAITRI (AI Assistant for Psychological & Physical Well-Being), featuring an immersive 3D interface with real-time video integration and animated AI assistant.

## 🌟 Overview

MAITRI Frontend is a sophisticated web application that provides a futuristic interface for psychological support through AI assistance. It combines modern web technologies with 3D graphics to create an engaging user experience.

## 🚀 Tech Stack

- **React 19.1.1** - Modern UI library with latest features
- **Vite 7.1.7** - Lightning-fast build tool and dev server
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **CSS3** - Modern styling with CSS variables and grid layout
- **HTML5** - Semantic markup with modern APIs

## 🏗️ Architecture

### Component Structure
```
src/
├── components/
│   ├── AIAssistant.jsx    # 3D AI robot with thought bubbles
│   ├── Header.jsx         # Application header with branding
│   ├── Starfield.jsx      # Animated background with stars
│   └── Webcam.jsx         # Live video feed component
├── App.jsx                # Main application component
├── App.css                # Global styles and layout
├── index.css              # CSS variables and base styles
└── main.jsx               # Application entry point
```

### Public Assets
```
public/
├── models/
│   └── futuristic_flying_animated_robot_-_low_poly.glb
├── maitri-logo.svg        # Application favicon
└── index.html             # HTML template
```

## 🎨 Features

### 🤖 3D AI Assistant
- **Animated 3D Robot**: Futuristic flying robot with built-in animations
- **Hover Interactions**: Robot responds to mouse interactions with scaling
- **Floating Animation**: Gentle hover effect with smooth movements
- **Thought Bubbles**: Interactive speech bubbles for AI responses
- **Auto-Rotation**: Optional orbital camera movement

### 📹 Live Video Feed
- **WebRTC Integration**: Real-time webcam access
- **Error Handling**: Graceful fallback for camera access issues
- **Status Indicators**: Live recording indicator with pulsing animation
- **Responsive Design**: Adapts to different screen sizes

### ✨ Starfield Background
- **1200 Animated Stars**: Twinkling and floating star particles
- **Performance Optimized**: Canvas-based rendering with efficient animations
- **Responsive Canvas**: Adapts to window resize events
- **Device Pixel Ratio**: High-DPI display support

### 🎯 User Interface
- **Modern Design**: Cyberpunk-inspired UI with neon accents
- **Clean Layout**: Grid-based responsive layout
- **Typography**: Custom fonts (Orbitron, Space Mono)
- **Smooth Animations**: CSS transitions and 3D transforms

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts
```bash
npm run dev      # Start development server (localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint checks
```

## 🎮 Component Details

### AIAssistant Component
**Purpose**: Main 3D interface with animated robot and thought bubbles

**Key Features**:
- 3D robot model loading with GLTFLoader
- Built-in animation system using useAnimations
- Interactive thought bubbles with HTML overlay
- Professional lighting setup with multiple light sources
- Orbit controls for user interaction

**Props**: 
- `isThinking` - Controls thinking state animations
- `hovered` - Manages hover interactions
- `setHovered` - Updates hover state

### Webcam Component
**Purpose**: Live video feed with recording indicators

**Key Features**:
- getUserMedia API integration
- Automatic cleanup of video streams
- Error state management
- Recording status display

**State Management**:
- `error` - Tracks camera access errors
- `videoRef` - Direct video element reference

### Starfield Component
**Purpose**: Animated space background

**Key Features**:
- Canvas-based star rendering
- Twinkling and drift animations
- Window resize handling
- Performance optimized rendering loop

**Animation Properties**:
- 1200 stars with individual properties
- Opacity-based twinkling effects
- Upward drift with position reset

### Header Component
**Purpose**: Application branding and navigation

**Key Features**:
- Fixed positioning for persistent visibility
- Responsive typography
- MAITRI branding with glowing effects
- Subtitle with application description

## 🎨 Styling Architecture

### CSS Variables
```css
:root {
  --bg: #0a0a0f;           /* Primary background */
  --accent: #00d4ff;       /* Primary accent (cyan) */
  --text: #fff;            /* Primary text color */
  --text2: #b3c5d1;        /* Secondary text color */
  --border: rgba(0, 212, 255, 0.3); /* Border color */
}
```

### Layout System
- **CSS Grid**: Main content layout (400px + 1fr)
- **Flexbox**: Component internal layouts
- **Fixed Header**: 80px height with proper spacing
- **Responsive Breakpoints**: Mobile optimization at 768px

### Design Principles
- **Transparency**: Glass-morphism effects throughout
- **Neon Accents**: Cyan (#00d4ff) primary color
- **Space Theme**: Dark backgrounds with glowing elements
- **Smooth Animations**: CSS transitions and transforms

## 🔧 Configuration

### Vite Configuration
- React plugin with Fast Refresh
- ESLint integration
- Development server on port 5173
- Hot Module Replacement (HMR)

### Browser Support
- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+
- **WebGL Required**: For 3D graphics rendering
- **WebRTC Support**: For camera functionality

## 📱 Responsive Design

### Desktop (1400px+)
- Full grid layout with sidebar
- Large robot model (scale 1.7)
- Optimal typography sizing

### Tablet (768px - 1400px)
- Maintained grid layout
- Scaled components
- Adjusted spacing

### Mobile (< 768px)
- Single column layout
- Reduced font sizes
- Compact spacing
- Touch-optimized interactions

## 🚀 Performance Optimizations

### 3D Rendering
- Efficient animation loops with requestAnimationFrame
- Optimized material properties
- LOD (Level of Detail) for distant objects
- Culling for off-screen elements

### React Optimizations
- Functional components with hooks
- Proper dependency arrays in useEffect
- Ref-based DOM manipulation for performance
- Lazy loading with Suspense

### Asset Management
- Optimized GLTF models
- Compressed textures
- Efficient loading strategies
- Proper cleanup of resources

## 🔮 Future Enhancements

### Planned Features
- Real-time AI chat integration
- Voice interaction capabilities
- Advanced 3D animations
- Customizable themes
- Multi-language support

### Technical Improvements
- TypeScript migration
- Progressive Web App (PWA) features
- Advanced error boundaries
- Performance monitoring
- Automated testing suite

## 🤝 Contributing

### Development Guidelines
1. Follow React best practices
2. Maintain consistent code formatting
3. Write self-documenting code
4. Test on multiple browsers
5. Optimize for performance

### Code Style
- Use functional components
- Prefer hooks over class components
- Consistent naming conventions
- Proper file organization

## 📄 License

This project is part of the MAITRI AI Assistant application.

---

**Built with ❤️ using React + Vite + Three.js**
