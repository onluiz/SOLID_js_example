//circle shape factory function
const circle = (radius) => {
    const proto = {
        type: 'Circle'
    }
    return Object.assign(Object.create(proto), {radius})
}

//square shape factory function
const square = (length) => {
    const proto = {
        type: 'Square'
    }
    return Object.assign(Object.create(proto), {length})
}

const areaCalculator = (s) => {
    const proto = {
        sum() {
            const area = []
            for(shape of shapes) {
                if(shape.type === 'Square') {
                    area.push(Math.pow(shape.length, 2))
                } else if (shape.type === 'Circle') {
                    area.push(Math.PI * Math.pow(shape.length, 2))
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