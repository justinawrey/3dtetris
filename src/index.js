import { Vector3 } from 'three'
import { scene, camera, renderer } from './scene'
import { LPiece } from './pieces'
import './index.css'

const l = new LPiece(0x0000ff, new Vector3(0, 0, 0))
scene.add(l)

const animate = function() {
    requestAnimationFrame(animate)

    l.rotateX(0.01)
    l.rotateY(0.01)

    renderer.render(scene, camera)
}

animate()
