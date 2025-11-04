# Portfolio Prototype Project
A modern, interactive 3D static portfolio website built with TypeScript, Tailwind CSS, and Babylon.js. This project represents my learning journey into these technologies and showcases my skills in a visually engaging way.

---

## Features
### Visual Design
+ Dynamic gradient background with animated color transitions
    + All the blobs in the background, along with the background gradient, are custom css with animations
+ Interactive 3D computer model rendered with Babylon.js
+ Dark/light mode toggle with smooth transition

### Interactive Terminal
+ Functional command-line interface within the 3D computer screen all designed from scratch
+ Navigation through simulated file system
+ File viewing capabilities for text and images
+ Custom sorting algorithm implementation (Ford-Johnson)

---

## Project Structure

```
├── src/
│   ├── main.ts                 # Entry point
│   ├── SceneManager.ts         # Main scene management
│   ├── ComputerLoader.ts       # 3D model loading
│   ├── CameraControls.ts       # Camera interaction handling
│   ├── RotationAnimations.ts   # Animation controllers
│   ├── ScreenManager.ts        # Terminal emulation
│   ├── style.css               # Custom styles and animations
│   ├── CustomLoadingScreen.ts  # Loading UI
│   └── FordJohnsonSorter.ts    # Sorting algorithm implementation
├── public/                     # All required assets
└── index.html                  # Main HTML structure

```
---

## Installation
### Prerequisites
+ Node.js (v22 recommended)
+ npm or yarn
### Clone and build
```bash
git clone https://github.com/ngaurama/portfolio_prototype.git
cd portfolio_prototype
npm install
npm run dev  # For development
npm run build  # For production build
```
### Deployment
+ The project is configured for GitHub Pages deployment:
```
npm run predeploy  # Builds the project
npm run deploy     # Deploys to GitHub Pages
```

## Usage
Visit the live site at: https://ngaurama.github.io/portfolio_prototype/

### Terminal Commands
+ help - Show available commands
+ ls - List files in current directory
+ cd [dir] - Change directory
+ cat [file.txt] - View text files
+ view [image.jpg] - View images
+ run fordjohnson [numbers] - Run sorting algorithm
+ clear - Clear terminal

### 3D Interaction
+ Scroll to zoom in/out on the computer model
+ The model automatically rotates when not interacting
+ Click the toggle in the bottom-right for dark mode

---

## Learning Outcomes
Through this project, I gained experience with:
+ TypeScript development and type systems
+ Babylon.js for 3D rendering in the browser
+ Tailwind CSS for modern, utility-first styling
+ Vite as a build tool and development server
+ 3D model loading and animation techniques
+ Creating interactive user interfaces
+ GitHub Pages deployment for static sites

---
## Limitations
+ Performance may vary on lower-end systems due to 3D rendering
+ Not optimized for mobile devices
+ Some browser compatibility issues may exist

---

## Related Projects
This project served as preparation for my 42 School final project:
+ Transcendence: A full-stack web application
    + Repository: https://github.com/ngaurama/transcendence
---

## Author
+ Nitai Gauramani
  - 42 Paris – Common Core project <br>

![Nitai's GitHub stats](https://github-readme-stats.vercel.app/api?username=ngaurama&show_icons=true&theme=transparent)
