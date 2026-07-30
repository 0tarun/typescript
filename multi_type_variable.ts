type circle = {
    radius: number;
}

type rectangle = {
    width: number;
    height: number;
}

type square = {
    length: number;
}

type Shape = circle | rectangle | square;

function calculateArea(shape: Shape): number {
    if ('radius' in shape) {
        return Math.PI * shape.radius * shape.radius;
    }
    else if ('length' in shape) {
        return shape.length * shape.length;
    }

    else {
        return shape.width * shape.height;
    }
}

console.log(calculateArea({ radius: 5}));
console.log(calculateArea({ length: 4 }));
console.log(calculateArea({ width: 3, height: 4 }));