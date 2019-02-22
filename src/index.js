import { scene, camera, renderer } from './scene'
import { initObservers } from './observers'
import { dispatch, actions } from './redux'
import './index.css'

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

// eslint-disable-next-line
const { unObserveRotation, unObserveTranslation } = initObservers()

const animate = function() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()
