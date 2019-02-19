import { observeStore } from './redux'
import { pieceTypes } from './pieces'

const initObservers = () => {
    return {
        unObserveRotation: observeStore(
            ({ rotation }) => rotation,
            ({ x, y, z }, { scene }) => {
                const activePiece = scene.getObjectByProperty(
                    'pieceType',
                    pieceTypes.ACTIVE
                )
                if (activePiece) {
                    activePiece.rotation.x = x
                    activePiece.rotation.y = y
                    activePiece.rotation.z = z
                }
            }
        ),
    }
}

export { initObservers }
