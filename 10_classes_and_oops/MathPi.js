const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(Math.PI)
// Math.PI = 5 // can not be changed
// console.log(Math.PI);

// console.log(descriptor)

// const myNewObject = Object.create(null) // Factory function to create object

const coffee = {
    name: 'Cold coffee',
    isAvailable: true,
    price: 250,

    orderCoffee: function(){
        console.log(`You ordered ${this.name}. Price: ${this.price}`)
    }
}

coffee.orderCoffee()

// console.log(Object.getOwnPropertyDescriptor(coffee, 'name'))

// Object.defineProperty(coffee, "name", {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(coffee, 'name'))

// console.log(coffee.name)
// coffee.name = "Hot coffee"
// console.log(coffee.name)

for (const [key, value] of Object.entries(coffee)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    } else {
        value.call(coffee) // give the context of 'this'
    }
}