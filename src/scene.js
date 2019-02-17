import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    DirectionalLight,
    AmbientLight,
} from 'three'

// Set up camera
const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.set(0, 0, 9)
camera.lookAt(0, 0, 0)

// Set up Renderer
const canvas = document.createElement('canvas')
const context = canvas.getContext('webgl2')
const renderer = new WebGLRenderer({ canvas, context })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000, 1.0)
document.body.appendChild(renderer.domElement)

// Set up scene with directional lighting, ambient lighting, and axes
const scene = new Scene()
const directionalLight = new DirectionalLight(0xffffff, 0.7)
const ambientLight = new AmbientLight(0x202020) // soft white light
directionalLight.position.set(8, 10, 8)
scene.add(ambientLight)
scene.add(directionalLight)

const theme = {
    orange: 0xef946c,
    beige: 0xc4a77d,
    teal: 0x70877f,
    purple: 0x454372,
    deepPurple: 0x2f2963,
}

export { scene, camera, renderer, theme }
