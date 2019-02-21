import { Vector3 } from 'three'
import { scene, camera, renderer, theme } from './scene'
import { TPiece, pieceTypes } from './pieces'
import { initObservers } from './observers'
import './index.css'
import { dispatch, actions } from './redux'

const tPiece = new TPiece(theme.purple, new Vector3(0, 0, 0))
tPiece.pieceType = pieceTypes.ACTIVE
scene.add(tPiece)

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keyup', e => {
        switch (e.key) {
            case 'w':
                dispatch(actions.active.translate())
                break
            case 'a':
                dispatch(actions.active.translate())
                break
            case 's':
                dispatch(actions.active.translate())
                break
            case 'd':
                dispatch(actions.active.translate())
                break
            case ' ':
                dispatch(actions.active.translate())
                break
            case 'ArrowUp':
                dispatch(actions.active.rotate())
                break
            case 'ArrowDown':
                dispatch(actions.active.rotate())
                break
            case 'ArrowLeft':
                dispatch(actions.active.rotate())
                break
            case 'ArrowRight':
                dispatch(actions.active.rotate())
                break
            default:
        }
    })
})

// eslint-disable-next-line
const { unObserveRotation, unObserveTranslation } = initObservers()

const animate = function() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()
