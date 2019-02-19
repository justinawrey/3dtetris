const rotationActions = {
    ROTATE: 'ROTATE',
}

const translationActions = {
    TRANSLATE: 'TRANSLATE',
}

const rotate = (x, y, z) => ({ type: rotationActions.ROTATE, by: { x, y, z } })
const translate = (x, y, z) => ({
    type: translationActions.TRANSLATE,
    by: { x, y, z },
})

export { rotationActions, translationActions, rotate, translate }
