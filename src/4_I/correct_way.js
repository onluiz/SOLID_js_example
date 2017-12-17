const manageShapeInterface = (fn) => ({
    type: 'manageShapeInterface',
    calculate: () => fn()
})

const shapeInterface = (state) => ({
    type: 'shapeInterface',
    area: () => state.area(state)
})

const solidShapeInterface = (state) => ({
    type: 'solidShapeInterface',
    volume: () => state.volume(state)
})

const cubo = (length) => {
    const proto = {
        length,
        type   : 'Cubo',
        area   : (args) => Math.pow(args.length, 2),
        volume : (args) => Math.pow(args.length, 3)
    }
    const basics  = shapeInterface(proto)
    const complex = solidShapeInterface(proto)
    const abstraccion = manageShapeInterface(
        () => basics.area() + complex.volume()
    )
    const composite = Object.assign({}, basics, abstraccion)
    return Object.assign(Object.create(composite), {length})
}

//circle shape factory function
const circle = (radius) => {
    const proto = {
        radius,
        type: 'Circle',
        area: (args) => Math.PI * Math.pow(args.radius, 2)
    }
    const basics = shapeInterface(proto)
    const abstraccion = manageShapeInterface(() => basics.area())
    const composite = Object.assign({}, basics, abstraccion)
    return Object.assign(Object.create(composite), {radius})
}

//square shape factory function
const square = (length) => {
    const proto = {
        type: 'Square',
        area () {
            return Math.pow(this.length, 2)
        }
    }
    return Object.assign(Object.create(proto), {length})
}

const areaCalculator = (s) => {
    const proto = {
        sum() {
            const area = []
            for(shape of shapes) {
                area.push(shape.area())
            }
            return area.reduce((v, c) => c += v, 0)
        }
    }
    return Object.assign(Object.create(proto), {shapes: s})
}

const volumeCalculator = (s) => {
    const proto = {
        type: 'volumeCalculator'
    }
    const areaCalProto = Object.getPrototypeOf(areaCalculator())
    const inherit = Object.assign({}, areaCalProto, proto)
    return Object.assign(Object.create(inherit), {shapes: s})
}

const sumCalculatorOutputter = (a) => {
    const proto = {
        JSON() {
        },
        HTML() {
        }
        //etc
    }
}

const shapes = [
    circle(2),
    square(5),
    square(6)
]

const areas = areaCalculator(shapes)
const output = sumCalculatorOutputter(areas)
console.log(output.JSON())
console.log(output.HTML())