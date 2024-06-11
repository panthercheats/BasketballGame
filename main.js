// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load textures
const courtTexture = new THREE.TextureLoader().load('court-texture.jpg');
const ballTexture = new THREE.TextureLoader().load('basketball-texture.jpg'); // Add a texture for the basketball

// Create a basketball court (simple plane with texture)
const courtGeometry = new THREE.PlaneGeometry(20, 10);
const courtMaterial = new THREE.MeshBasicMaterial({ map: courtTexture });
const court = new THREE.Mesh(courtGeometry, courtMaterial);
court.rotation.x = -Math.PI / 2;
scene.add(court);

// Create a basketball (sphere with texture)
const ballGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const ballMaterial = new THREE.MeshBasicMaterial({ map: ballTexture });
const ball = new THREE.Mesh(ballGeometry, ballMaterial);
ball.position.set(0, 0.5, 0);
scene.add(ball);

// Create a basketball hoop (simplified version)
const hoopGeometry = new THREE.TorusGeometry(1, 0.1, 16, 100);
const hoopMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const hoop = new THREE.Mesh(hoopGeometry, hoopMaterial);
hoop.position.set(0, 3, -8);
scene.add(hoop);

const backboardGeometry = new THREE.BoxGeometry(3, 1.5, 0.1);
const backboardMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const backboard = new THREE.Mesh(backboardGeometry, backboardMaterial);
backboard.position.set(0, 3, -7.95);
scene.add(backboard);

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
