import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import "./style.css";

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
//create a scene
const scene = new THREE.Scene();

//create the shape parameters
const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
  color: "#ffffff",
  roughness: 0.2,
});

//create the shape through those parameters
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//so that stuff's visible
const light = new THREE.PointLight(0xffffff, 1, 100, 0.25);
light.position.set(0, 10, 10);
scene.add(light);

//so you can percive the stuff
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height);
camera.position.z = 20;
scene.add(camera);

//draw it onto the html screen
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGL1Renderer({ canvas });
renderer.setPixelRatio(2);
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//so you can rotate around the object
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 5;

//resize every time window changes size
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
});
const loop = () => {
  controls.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(loop);
};
loop();
