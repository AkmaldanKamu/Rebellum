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
        gltf.scene.position.set(-25, 0, -5)
        gltf.scene.rotation.z = Math.PI / 8
        scene.add(gltf.scene)
        resolve(gltf.scene);
    })
})
const botol2 = new Promise((resolve, reject) => {
    loader.load('/botol.glb', (gltf) => {
        gltf.scene.scale.set(30, 30, 30)
        gltf.scene.position.set(45, 10, 10)
        gltf.scene.rotation.z = Math.PI / -6
        scene.add(gltf.scene)
        resolve(gltf.scene);
    })
})
const obat = new Promise((resolve, reject) => {
    loader.load('/obat.glb', (gltf) => {
        gltf.scene.scale.set(10, 10, 10)
        gltf.scene.position.set(40, -30, -5)
        gltf.scene.rotation.y = Math.PI / 2
        gltf.scene.rotation.z = Math.PI / 4
        scene.add(gltf.scene)
        resolve(gltf.scene);
    })
})
const kapsul = new Promise((resolve, reject) => {
    loader.load('/kapsul.glb', (gltf) => {
        gltf.scene.scale.set(5, 5, 5)
        gltf.scene.position.set(20, 0, -10)
        gltf.scene.rotation.z = Math.PI / 8
        scene.add(gltf.scene)
        resolve(gltf.scene);
    })
})
const kapsul2 = new Promise((resolve, reject) => {
    loader.load('/kapsul.glb', (gltf) => {
        gltf.scene.scale.set(5, 5, 5)
        gltf.scene.position.set(-35, -25, 10)
        gltf.scene.rotation.z = Math.PI / -4
        scene.add(gltf.scene)
        resolve(gltf.scene);
    })
})

Promise.all([celurit1, celurit2, botol, botol2, obat, kapsul, kapsul2]).then(([celurit1, celurit2, botol, botol2, obat, kapsul, kapsul2]) => {
    // Kedua model telah dimuat
    // Mulai animasi rotasi untuk kedua model di sini
    mutar(celurit1)
    mutar(celurit2)
    animateRotation(botol, 500);
    animateRotation(botol2, 700);
    animateRotation(obat);
    animateRotation(kapsul);
    animateRotation(kapsul2, 1100);
});

const orbit = new OrbitControls(camera, canvas);
orbit.enablePan = false
orbit.enableZoom = false
orbit.update();

function animateRotation(object, speed = 1000) {
    const initialY = object.position.y;
    function animate() {
        requestAnimationFrame(animate);
        // object.rotation.y += Math.PI / 270;
        object.position.y = initialY + Math.sin(performance.now() / speed) * 5;
        object.position
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
