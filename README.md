# EverFit Calendar Gym App

A modern React-based gym workout calendar application with drag-and-drop functionality for managing workouts and exercises across different days of the week.

## 🚀 Deployment

**Live Application:** [https://everfit-calendar-gym-app.vercel.app/](https://everfit-calendar-gym-app.vercel.app/)

## 📁 Folder Structure

```
src/
├── components/         # Reusable UI components
├── context/            # React Context providers
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
├── constants/          # Application constants
├── utils/              # Utility functions
├── assets/             # Static assets
├── App.tsx             # Main application component
├── App.css             # Application styles
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd gym-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

The application will be available at `http://localhost:3000` in development mode.

## 🧪 Test Cases

### Drag and Drop Workouts

- **Test Case 1:** Drag a workout from one day to another

  - Expected: Workout moves to the new day's column
  - Expected: Original day no longer contains the workout
  - Expected: Workout maintains all exercises and data

- **Test Case 2:** Drag workout to invalid drop zone
  - Expected: Workout returns to original position
  - Expected: No data corruption occurs

### Drag and Drop Exercises

- **Test Case 1:** Drag exercise between workouts on the same day

  - Expected: Exercise moves to target workout
  - Expected: Exercise maintains all set data (weight, reps)
  - Expected: Original workout no longer contains the exercise

- **Test Case 2:** Drag exercise between workouts on different days

  - Expected: Exercise moves to target workout on different day
  - Expected: Exercise data is preserved

- **Test Case 3:** Drag exercise to invalid drop zone
  - Expected: Exercise returns to original workout
  - Expected: No data loss occurs

## 🛠️ Technology Stack

### Frontend Framework

- **React 19.1.1** - Modern React with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript development

### Build Tools

- **Vite 7.1.6** - Fast build tool and development server
- **ESLint 9.35.0** - Code linting and quality assurance

### Drag and Drop

- **@dnd-kit/core 6.3.1** - Modern drag and drop library
- **@dnd-kit/modifiers 9.0.0** - Drag modifiers (window edge restrictions)

### Development Dependencies

- **@vitejs/plugin-react 5.0.2** - React plugin for Vite
- **@types/react 19.1.13** - TypeScript definitions for React
- **@types/react-dom 19.1.9** - TypeScript definitions for React DOM
- **eslint-plugin-react-hooks 5.2.0** - React Hooks linting rules
- **eslint-plugin-react-refresh 0.4.20** - React refresh linting
- **typescript-eslint 8.43.0** - TypeScript ESLint integration

### Code Quality

- **ESLint** with React and TypeScript configurations
- **TypeScript** strict type checking
- **React Hooks** linting rules

## 🔧 Future Improvements

- **Immerjs** - For handling complex nested state updates with immutable patterns
- **Redux** - For centralized state management if the application grows in complexity
- **Dayjs** - For better date object handling and manipulation
- **Clsx** - For improved className composition and conditional styling
