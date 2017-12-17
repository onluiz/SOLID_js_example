const shapeInterface = (state) => ({
    type: 'shapeInterface',
    area: () => state.area(state),
    volume: () => state.volume(state)
})

//circle shape factory function
const circle = (radius) => {
    const proto = {
        type: 'Circle',
        area () {
            return Math.PI * Math.pow(shape.length, 2)
        }
    }
    return Object.assign(Object.create(proto), {radius})
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