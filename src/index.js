import { scene, camera, renderer } from './scene'
import { initObservers } from './observers'
import { dispatch, actions } from './redux'
import { uniformPieceGenerator } from './pieces'
import './index.css'

// Create a uniformly random piece at every 5 seconds
const pieceGenerator = uniformPieceGenerator()
dispatch(actions.active.create(pieceGenerator()))
dispatch(actions.active.create(pieceGenerator()))
setInterval(() => {
    dispatch(actions.active.create(pieceGenerator()))
    dispatch(actions.active.setPosition(0, 0, 0))
    dispatch(actions.active.setRotation(0, 0, 0))
}, 5000)

// Set up translation on wasd and rotation on arrow keys
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keyup', e => {
        switch (e.key) {
            case 'w':
                dispatch(actions.active.translate(1, 1, 1))
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
                dispatch(actions.active.rotate(1, 1, 1))
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

/* eslint-disable */
const {
    unObserveCreation,
    unObserveRotation,
    unObserveTranslation,
    unObserveScore,
    unObserveLocked
} = initObservers()
/* eslint-enable */

const animate = function() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()
