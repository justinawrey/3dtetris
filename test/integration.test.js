import {scene, initKeyboard} from '../src/scene'
import {dispatch, actions} from '../src/redux'
import {initObservers} from '../src/observers'
import {uniformPieceGenerator, pieceTypes} from '../src/pieces'

let pieceGenerator
beforeAll(() => {
    pieceGenerator = uniformPieceGenerator()
    initObservers()
    initKeyboard()
})

test('dispatching actions.active.create adds piece to scene', () => {
    expect(piece).not.toBeDefined()
    dispatch(actions.active.create(pieceGenerator()))
    const piece = scene.getObjectByProperty('pieceType', pieceTypes.ACTIVE)
    expect(piece).toBeDefined()
})