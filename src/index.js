import { scene, camera, renderer, initKeyboard } from './scene'
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
initKeyboard()

// set up scene to watch changes from redux state tree
initObservers()

const animate = function() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()
