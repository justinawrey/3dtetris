import { observeStore } from './redux'
import { pieceTypes } from './pieces'

const initObservers = () => {
    return {
        unObserveRotation: observeStore(
            ({ activeRotation }) => activeRotation,
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
        unObserveTranslation: observeStore(
            ({ activeTranslation }) => activeTranslation,
            ({ x, y, z }, { scene }) => {
                const activePiece = scene.getObjectByProperty(
                    'pieceType',
                    pieceTypes.ACTIVE
                )
                if (activePiece) {
                    activePiece.position.x = x
                    activePiece.position.y = y
                    activePiece.position.z = z
                }
            }
        ),
    }
}

export { initObservers }
