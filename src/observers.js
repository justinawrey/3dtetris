import { observeStore } from './redux'
import { theme } from './scene'
import { pieceTypes, pieceMappings } from './pieces'

const initObservers = () => {
    return {
        unObserveCreation: observeStore(
            ({ active: { piece } }) => piece,
            (piece, { scene }) => {
                // Delete active piece if it already exists
                const activePiece = scene.getObjectByProperty(
                    'pieceType',
                    pieceTypes.ACTIVE
                )
                if (activePiece) {
                    scene.remove(activePiece)
                }

                // Prevent default state from triggering piece creation
                if (piece in pieceMappings) {
                    // Create new active piece
                    const newPiece = new pieceMappings[piece](theme.purple)
                    newPiece.pieceType = pieceTypes.ACTIVE
                    scene.add(newPiece)
                }
            }
        ),

        unObserveRotation: observeStore(
            ({ active: { rotation } }) => rotation,
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
            ({ active: { translation } }) => translation,
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
        /* eslint-disable */
        unObserveNextCreation: observeStore(
            ({ next }) => next,
            (next, { scene }) => {}
        ),
        unObserveScore: observeStore(({ score }) => score, score => {}),
        unObserveLocked: observeStore(
            ({ locked }) => locked,
            (locked, { scene }) => {}
        ),
        /* eslint-enable */
    }
}

export { initObservers }
