const shapeInterface = (state) => ({
    type: 'shapeInterface',
    area: () => state.area(state)
})

//circle shape factory function
const circle = (radius) => {
    const proto = {
        type: 'Circle',
        area () {
            return Math.PI * Math.pow(shape.length, 2)
        }
    }
    const basics = shapeInterface(proto)
    const composite = Object.assign({}, basics)
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
    const basics = shapeInterface(proto)
    const composite = Object.assign({}, basics)
    return Object.assign(Object.create(composite), {length})
}

const areaCalculator = (s) => {
    const proto = {
        sum() {
            const area = []
            for(shape of shapes) {
                if(Object.getPrototypeOf(shape).type === 'shapeInterface') {
                    area.push(shape.area())
                } else {
                    throw new Error('this is not a shapeInterface object')
                }
                
            }
            return area.reduce((v, c) => c += v, 0)
        }
    }
    return Object.assign(Object.create(proto), {shapes: s})
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