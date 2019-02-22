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

const pieceTypes = {
    ACTIVE: 'ACTIVE',
}

const to3D = (shape, color) => {
    const geom = new ExtrudeGeometry(shape, {
        depth: 1,
        bevelEnabled: false,
    })
    const mesh = new Mesh(geom, new MeshPhongMaterial({ color, shininess: 50 }))
    const lines = new LineSegments(
        new EdgesGeometry(geom),
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

class JPiece extends Piece {
    constructor(color = 0xffffff, pos = new Vector3(0, 0, 0)) {
        const j = new Shape()
        j.moveTo(-1, 0)
        j.lineTo(2, 0)
        j.lineTo(2, 1)
        j.lineTo(0, 1)
        j.lineTo(0, 2)
        j.lineTo(-1, 2)
        j.lineTo(-1, 0)
        super(pos, ...to3D(j, color))
    }
}

class TPiece extends Piece {
    constructor(color = 0xffffff, pos = new Vector3(0, 0, 0)) {
        const t = new Shape()
        t.moveTo(-1, 0)
        t.lineTo(2, 0)
        t.lineTo(2, 1)
        t.lineTo(1, 1)
        t.lineTo(1, 2)
        t.lineTo(0, 2)
        t.lineTo(0, 1)
        t.lineTo(-1, 1)
        t.lineTo(-1, 0)
        super(pos, ...to3D(t, color))
    }
}

class SPiece extends Piece {
    constructor(color = 0xffffff, pos = new Vector3(0, 0, 0)) {
        const s = new Shape()
        s.lineTo(-1, 0)
        s.lineTo(-1, -1)
        s.lineTo(1, -1)
        s.lineTo(1, 0)
        s.lineTo(2, 0)
        s.lineTo(2, 1)
        s.lineTo(0, 1)
        s.lineTo(0, 0)
        super(pos, ...to3D(s, color))
    }
}

class ZPiece extends Piece {
    constructor(color = 0xffffff, pos = new Vector3(0, 0, 0)) {
        const z = new Shape()
        z.lineTo(0, -1)
        z.lineTo(2, -1)
        z.lineTo(2, 0)
        z.lineTo(1, 0)
        z.lineTo(1, 1)
        z.lineTo(-1, 1)
        z.lineTo(-1, 0)
        z.lineTo(0, 0)
        super(pos, ...to3D(z, color))
    }
}

class IPiece extends Piece {
    constructor(color = 0xffffff, pos = new Vector3(0, 0, 0)) {
        const i = new Shape()
        i.moveTo(-1, 0)
        i.lineTo(3, 0)
        i.lineTo(3, 1)
        i.lineTo(-1, 1)
        i.lineTo(-1, 0)
        super(pos, ...to3D(i, color))
    }
}

class OPiece extends Piece {
    constructor(color = 0xffffff, pos = new Vector3(0, 0, 0)) {
        const o = new Shape()
        o.moveTo(-1, -1)
        o.lineTo(1, -1)
        o.lineTo(1, 1)
        o.lineTo(-1, 1)
        o.lineTo(-1, -1)
        super(pos, ...to3D(o, color))
    }
}

const pieceMappings = {
    l: LPiece,
    j: JPiece,
    t: TPiece,
    s: SPiece,
    z: ZPiece,
    i: IPiece,
    o: OPiece,
}

const uniformPieceGenerator = () => {
    const pieces = ['l', 'j', 't', 's', 'z', 'i', 'o']
    let piecesLeft = pieces.slice()

    return () => {
        if (piecesLeft.length === 0) {
            piecesLeft = pieces.slice()
        }
        return piecesLeft.splice(
            Math.floor(Math.random() * piecesLeft.length),
            1
        )[0]
    }
}

export {
    LPiece,
    JPiece,
    TPiece,
    SPiece,
    ZPiece,
    IPiece,
    OPiece,
    pieceTypes,
    pieceMappings,
    uniformPieceGenerator,
}
