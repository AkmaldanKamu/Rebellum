import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const canvas = document.getElementById('canvas')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});

const width = 300;
const height = 300;
renderer.setSize(width, height);

const scene = new THREE.Scene();
renderer.setClearColor(0x000000, 0);
// scene.background = new THREE.Color(0x5562AD);

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(0, 0, 30); // Posisi kamera diperbarui untuk menghadap objek dari jarak 100 unit
camera.lookAt(0, 0, 0); // Kamera menghadap ke titik tengah (0, 0, 0) di scene

const gridHelper = new THREE.GridHelper(30);
// scene.add(gridHelper);

const axesHelper = new THREE.AxesHelper(30);
// scene.add(axesHelper);

const ambientLight = new THREE.AmbientLight()
ambientLight.intensity = 15;
scene.add(ambientLight)

const loader = new GLTFLoader();
loader.load('../assets/3D/celurit/celurit.gltf', (gltf) => {
    gltf.scene.scale.set(10, 10, 10)
    gltf.scene.rotation.z = Math.PI / 8
    scene.add(gltf.scene)
})
console.log(loader);

const orbit = new OrbitControls(camera, canvas);
orbit.enablePan = false
orbit.update();

function animate() {
    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
