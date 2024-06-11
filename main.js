// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a basketball court (simple plane)
const courtGeometry = new THREE.PlaneGeometry(10, 20);
const courtMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const court = new THREE.Mesh(courtGeometry, courtMaterial);
court.rotation.x = -Math.PI / 2;
scene.add(court);

// Create a basketball (sphere)
const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const ballMaterial = new THREE.MeshBasicMaterial({ color: 0xff4500 });
const ball = new THREE.Mesh(ballGeometry, ballMaterial);
ball.position.set(0, 0.5, 0);
scene.add(ball);

// Set camera position
camera.position.z = 10;
camera.position.y = 5;
camera.lookAt(0, 0, 0);

// Event listeners for controls
document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'ArrowUp') {
        ball.position.z -= 0.1;
    } else if (keyName === 'ArrowDown') {
        ball.position.z += 0.1;
    } else if (keyName === 'ArrowLeft') {
        ball.position.x -= 0.1;
    } else if (keyName === 'ArrowRight') {
        ball.position.x += 0.1;
    }
});

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
