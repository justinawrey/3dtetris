import { Vector3 } from 'three'
import { scene, camera, renderer } from './scene'
import { TPiece, pieceTypes } from './pieces'
import { dispatch } from './redux'
import { rotate } from './actions'
import { initObservers } from './observers'
import theme from './theme'
import './index.css'

const tPiece = new TPiece(theme.purple, new Vector3(0, 0, 0))
tPiece.pieceType = pieceTypes.ACTIVE
scene.add(tPiece)

// eslint-disable-next-line
const { unObserveRotation } = initObservers()
setInterval(() => {
    dispatch(rotate(0.01, 0, 0))
}, 20)

const animate = function() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}

animate()
