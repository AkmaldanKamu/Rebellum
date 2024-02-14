import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
const canvas = document.getElementById('canvas')

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
});

console.dir(canvas);

const width = canvas.clientWidth;
const height = canvas.clientHeight;
renderer.setSize(width, height, true);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const composer = new EffectComposer(renderer);

const scene = new THREE.Scene();
renderer.setClearColor(0x000000, 0);
// scene.background = new THREE.Color(0x5562AD);

const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(0, 0, 95); // Posisi kamera diperbarui untuk menghadap objek dari jarak 100 unit
camera.lookAt(0, 0, 0); // Kamera menghadap ke titik tengah (0, 0, 0) di scene

const gridHelper = new THREE.GridHelper(30);
// scene.add(gridHelper);

const axesHelper = new THREE.AxesHelper(30);
// scene.add(axesHelper);

const ambientLight = new THREE.AmbientLight()
ambientLight.intensity = 15;
scene.add(ambientLight)

const loader = new GLTFLoader();

const celurit1 = new Promise((resolve, reject) => {
    loader.load('/celurit.gltf', (gltf) => {
        gltf.scene.scale.set(25, 25, 25)
        gltf.scene.rotation.z = Math.PI / 6
        scene.add(gltf.scene)
        resolve(gltf.scene);
    })
})
const celurit2 = new Promise((resolve, reject) => {
    loader.load('/celurit.gltf', (gltf) => {
        gltf.scene.scale.set(25, 25, 25)
        gltf.scene.rotation.z = Math.PI / 6
        gltf.scene.rotation.y = Math.PI
        scene.add(gltf.scene)
        resolve(gltf.scene);
    })
})
const botol = new Promise((resolve, reject) => {
    loader.load('/botol.glb', (gltf) => {
        gltf.scene.scale.set(30, 30, 30)
        gltf.scene.rotation.z = Math.PI / 6
        gltf.scene.rotation.y = Math.PI
        scene.add(gltf.scene)
        resolve(gltf.scene);
    })
})

Promise.all([celurit1, celurit2, botol]).then(([celurit1, celurit2, botol]) => {
    // Kedua model telah dimuat
    // Mulai animasi rotasi untuk kedua model di sini
    animateRotation(celurit1);
    animateRotation(celurit2);
    animateRotation(botol);
});

const orbit = new OrbitControls(camera, canvas);
orbit.enablePan = false
orbit.enableZoom = false
orbit.update();

function animateRotation(object) {
    function animate() {
        requestAnimationFrame(animate);
        object.rotation.y += Math.PI / 270;
        renderer.render(scene, camera);
    }
    animate();
}
