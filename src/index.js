import {
    Scene,
    PerspectiveCamera,
    WebGLRenderer,
    DirectionalLight,
    BoxGeometry,
    MeshPhongMaterial,
    EdgesGeometry,
    LineSegments,
    LineBasicMaterial,
    Mesh,
    Group,
    AxesHelper,
} from 'three'
import './index.css'

const scene = new Scene()
const camera = new PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
)
const canvas = document.createElement('canvas')
const context = canvas.getContext('webgl2')
const renderer = new WebGLRenderer({ canvas, context })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000, 1.0)
document.body.appendChild(renderer.domElement)

const directionalLight = new DirectionalLight(0xffffff, 0.7)
directionalLight.position.set(8, 10, 8)
scene.add(directionalLight)

var axesHelper = new AxesHelper(5)
scene.add(axesHelper)

const geometry = new BoxGeometry(1, 1, 1)
const material = new MeshPhongMaterial({ color: 0x0000ff, shininess: 50 })
const edges = new EdgesGeometry(geometry)
const lines = new LineSegments(
    edges,
    new LineBasicMaterial({ color: 0x000000 })
)
const cube = new Mesh(geometry, material)
const group = new Group()
group.add(cube)
group.add(lines)
scene.add(group)

camera.position.set(6, 4, 6)
camera.lookAt(0, 0, 0)

const animate = function() {
    requestAnimationFrame(animate)

    group.rotation.x += 0.01
    group.rotation.y += 0.01

    renderer.render(scene, camera)
}

animate()
