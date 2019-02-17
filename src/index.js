import { Vector3 } from 'three'
import { scene, camera, renderer, theme } from './scene'
import {
    LPiece,
    JPiece,
    OPiece,
    IPiece,
    SPiece,
    ZPiece,
    TPiece,
} from './pieces'
import './index.css'

const l = new LPiece(theme.orange, new Vector3(-6, 3, 0))
const j = new JPiece(theme.beige, new Vector3(0, 3, 0))
const o = new OPiece(theme.teal, new Vector3(6, 3, 0))
const i = new IPiece(theme.purple, new Vector3(-7, -2, 0))
const s = new SPiece(theme.deepPurple, new Vector3(-2, -2, 0))
const z = new ZPiece(theme.orange, new Vector3(3, -2, 0))
const t = new TPiece(theme.beige, new Vector3(8, -2, 0))

const pieces = [l, j, o, i, s, z, t]
scene.add(...pieces)

const animate = function() {
    requestAnimationFrame(animate)

    for (const [i, piece] of pieces.entries()) {
        if (i % 2 === 0) {
            piece.rotateX(0.01)
            piece.rotateY(-0.01)
        } else {
            piece.rotateX(-0.01)
            piece.rotateY(0.01)
        }
    }

    renderer.render(scene, camera)
}

animate()
