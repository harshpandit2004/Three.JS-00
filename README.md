# Three.js Component in Vanilla JS Project

This project is a basic implementation of a Three.js component in a vanilla JavaScript project. The component allows you to render a 3D object on a canvas element in your web page. The tutorial followed for this project was by developedbyed on YouTube, and you can find the video [here](https://youtu.be/_OwJV2xL8M8).

## Getting Started

Follow the steps below to set up the Three.js component in your own project:

### Step 1 - Install Dependencies

Ensure you have Node.js and npm (Node Package Manager) installed on your machine.

For this project, we used the following dependencies:

- **vite@4.4.5:** Vite is used to create a vanilla JavaScript project with modern build tools and development server.
- **three@0.155.0:** Three.js provides primitive 3D methods to render 3D objects.
- **gsap:** The tutorial used gsap for adding animations, but this project skipped that part.

To install the dependencies, run the following command in your project directory:

```bash
npm install vite@4.4.5 three@0.155.0
```

### Step 2 - Building the Prerequisites

Now, let's build the necessary components for the Three.js scene.

#### 2.1 - Build the Scene

Create a THREE.Scene() instance to represent the 3D scene. The scene will hold all the objects and lights.

#### 2.2.1 - Build the Geometry

Choose a primitive geometry for the object you want to render. In this project, we used THREE.SphereGeometry, but you can explore other options available in the Three.js documentation.

#### 2.2.2 - Build the Material

Create a material that wraps around your chosen geometry. This will define how the object appears visually.

#### 2.2 - Build a Mesh (Object)

Create a mesh (object) by passing the geometry and material as parameters. This will create a 3D object. Add this object to the scene using the `.add()` method.

#### 2.3 - Build a Light Source and a Camera

Position the light source and camera in a way that they don't overlap the object. Lighting and camera perspective are essential for a realistic 3D scene.

### Step 3 - Create a Canvas Element

In your HTML file, add a canvas tag. This canvas will act as the renderer for your Three.js scene.

```html
<canvas id="canvas"></canvas>
```

### Step 4 - Initialize WebGLRenderer

In your JavaScript code, initialize the WebGLRenderer by passing the canvas element as an object. Save it in a variable called `renderer`. This renderer will render the 3D scene on the canvas.

### Step 5 - Optional Enhancements

Optionally, you can add an event listener on the `window` object to update the height and width of the scene after resizing the screen. Additionally, you can use the `orbitcontrols` method to add basic animations to your scene, enabling users to interact with the 3D object.

## Acknowledgments

This project was built by following the tutorial provided by developedbyed on YouTube. You can find the tutorial [here](https://youtu.be/_OwJV2xL8M8). It serves as a great starting point for learning Three.js and implementing 3D components in your vanilla JavaScript projects.

Feel free to explore more features and advanced concepts in Three.js to create stunning 3D experiences for your web applications! Happy coding!
