//
//  index.ts
//  Calcusim
//
//  Created by CL Wang on 9/22/23.
//

class Human {
    name: string
    age: number
    constructor(name: string, age: number) { 
        this.name = name
        this.age = age 
    }
}

class Male extends Human {
    constructor(name: string, age: number) {
        super(name, age)
        this.name = name
        this.age = age
    }

    greet(to: Human, addtions: string) {
        console.log(this.name + " said: Hello " + to.name + ", " + addtions)
    }
}

var clWang = new Male("ChenLin Wang", 22)
var jason = new Male("Jason", 19)
clWang.greet(jason, "this is my first TypeScript program. now I see it's easy to use too!")