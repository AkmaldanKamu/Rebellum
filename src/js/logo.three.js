import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { ScrollTrigger, gsap } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const canvas = document.getElementById('logoCanvas')
const hdrTextureUrl = new URL('/texture.hdr', import.meta.url)

const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas,
  alpha: true
});

const width = canvas.clientWidth;
const height = canvas.clientHeight;
renderer.setSize(width, height, true);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const scene = new THREE.Scene();
renderer.setClearColor(0x000000, 0);
// scene.background = new THREE.Color(0x5562AD);

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(0, 0, 37); // Posisi kamera diperbarui untuk menghadap objek dari jarak 100 unit
camera.lookAt(0, 0, 0); // Kamera menghadap ke titik tengah (0, 0, 0) di scene

if (window.innerWidth < 500) {
  camera.position.set(0, 0, 45);
}

const gridHelper = new THREE.GridHelper(30);
// scene.add(gridHelper);

const axesHelper = new THREE.AxesHelper(30);
// scene.add(axesHelper);

const ambientLight = new THREE.AmbientLight()
ambientLight.intensity = 1;
scene.add(ambientLight)

const directionalLight = new THREE.DirectionalLight(0xffffff, 8)
directionalLight.position.set(10, 50, 30)
scene.add(directionalLight)

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 8)
directionalLight2.position.set(-10, 50, -30)
scene.add(directionalLight2)

const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 5)
// scene.add(directionalLightHelper)

const directionalLightHelper2 = new THREE.DirectionalLightHelper(directionalLight2, 5)
// scene.add(directionalLightHelper2)



const loader = new GLTFLoader();

const logo = new Promise((resolve, reject) => {
  loader.load('/logo.glb', (gltf) => {
    const model = gltf.scene
    model.scale.set(10, 10, 10)
    model.position.setY(-5)

    scene.add(model)
    resolve(model);
  })
})

// renderer.outputColorSpace = THREE.SRGBColorSpace;
// renderer.toneMapping = THREE.ACESFilmicToneMapping
// renderer.toneMappingExposure = 1

const textureLoader = new RGBELoader()
textureLoader.load(hdrTextureUrl, (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping
  scene.environment = texture
})

const loading = document.getElementById('loading2');
loading.style.display = 'flex';
logo.then((logo) => {
  loading.style.display = 'none';

  mutar(logo)
});

const orbit = new OrbitControls(camera, canvas);
orbit.enablePan = false
orbit.enableZoom = false
orbit.update()

function animateRotation(object, speed = 1000) {
  const initialY = object.position.y;
  function animate() {
    requestAnimationFrame(animate);
    // object.rotation.y += Math.PI / 270;
    object.position.y = initialY + Math.sin(performance.now() / speed) * 5;
    renderer.render(scene, camera);
  }
  animate();
}
function mutar(object) {
  function animate() {
    requestAnimationFrame(animate);
    object.rotation.y += Math.PI / 270;
    object.position
    renderer.render(scene, camera);
  }
  animate();
}
