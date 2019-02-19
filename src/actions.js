const rotationActions = {
    ROTATE: 'ROTATE',
}

const rotate = (x, y, z) => ({ type: rotationActions.ROTATE, by: { x, y, z } })

export { rotationActions, rotate }
