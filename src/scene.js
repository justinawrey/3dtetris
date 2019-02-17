import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    DirectionalLight,
    AxesHelper,
} from 'three'

// Set up camera
const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
camera.position.set(6, 4, 6)
camera.lookAt(0, 0, 0)

// Set up Renderer
const canvas = document.createElement('canvas')
const context = canvas.getContext('webgl2')
const renderer = new WebGLRenderer({ canvas, context })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000, 1.0)
document.body.appendChild(renderer.domElement)

// Set up scene with directional lighting and axes
const scene = new Scene()
const directionalLight = new DirectionalLight(0xffffff, 0.7)
const axesHelper = new AxesHelper(5)
directionalLight.position.set(8, 10, 8)
scene.add(directionalLight)
scene.add(axesHelper)

export { scene, camera, renderer }
