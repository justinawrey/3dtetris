import {
    Shape,
    ExtrudeGeometry,
    Mesh,
    MeshPhongMaterial,
    LineBasicMaterial,
    LineSegments,
    Group,
    EdgesGeometry,
    Vector3,
} from 'three'

const to3D = (shape, color) => {
    const geom = new ExtrudeGeometry(shape, {
        depth: 1,
        bevelEnabled: false,
    })
    const mesh = new Mesh(geom, new MeshPhongMaterial({ color, shininess: 50 }))
    const edges = new EdgesGeometry(geom)
    const lines = new LineSegments(
        edges,
        new LineBasicMaterial({ color: 0x000000 })
    )
    return [mesh, lines]
}

class Piece extends Group {
    constructor(pos, ...objects) {
        super()
        this.add(...objects)
        this.position.x = pos.x
        this.position.y = pos.y
        this.position.z = pos.z
    }

    rotate() {}
    move() {}
}

class LPiece extends Piece {
    constructor(color = 0xffffff, pos = new Vector3(0, 0, 0)) {
        const l = new Shape()
        l.moveTo(-1, 0)
        l.lineTo(2, 0)
        l.lineTo(2, 2)
        l.lineTo(1, 2)
        l.lineTo(1, 1)
        l.lineTo(-1, 1)
        l.lineTo(-1, 0)
        super(pos, ...to3D(l, color))
    }
}

export { LPiece }
