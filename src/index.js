import { Vector3 } from 'three'
import { scene, camera, renderer } from './scene'
import { TPiece } from './pieces'
import { observeStore, dispatch } from './redux'
import { rotate } from './actions'
import theme from './theme'
import './index.css'

const tPiece = new TPiece(theme.purple, new Vector3(0, 0, 0))
scene.add(tPiece)
setInterval(() => {
    dispatch(rotate(0.01, 0, 0))
}, 20)

// eslint-disable-next-line
const unObserveRotation = observeStore(
    ({ rotation }) => rotation,
    ({ x, y, z }) => {
        tPiece.rotation.x = x
        tPiece.rotation.y = y
        tPiece.rotation.z = z
    }
)

const animate = function() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()
