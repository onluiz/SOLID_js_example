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
            //sums logic
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
    return Object.assign(Object.create(proto), {areas: a})
}

const shapes = [
    circle(2),
    square(5),
    square(6)
]

const areas = areaCalculator(shapes)
console.log(areas.output())