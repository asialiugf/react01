interface Point {
    x: number
    y: number
}

// Exactly the same as the earlier example
function printCoord(pt: Point) {
    console.log("The coordinate's x value is " + pt.x)
    console.log("The coordinate's y value is " + pt.y)
}

printCoord({ x: 100, y: 100 })

// class dog {
//     name : string
//     age : number
// }

interface dog {
    name: string
    age: number
}

function haha(t: dog) {
    console.log(t.name, t.age)
}

haha({ name: "ddd", age: 13 })

class Point {
    x: number;
    y: number;
}

const pt = new Point();
pt.x = 0;
pt.y = 0;