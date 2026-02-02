console.log('_______________in class assignment_______________');

type User = {
    name: string;
    active: boolean;
    bio?:string;
}

function formatUser(u:User): string {
    return `${u.name}(${u.active})`
}
const user1: User = { name: 'Ada', active: true };
const user2: User = { name: 'Helen', active: false };

console.log(formatUser(user1)); 
console.log(formatUser(user2)); 


function headline(u:User): string {
    return `${u.name} (${u.bio ? 'bio' : 'no bio'})`
}
const user4: User = {name: 'Ada', active: true, bio: 'bio'} 
console.log()

type Product = {
    id: string;
    name: string;
    price: number;
};

type CartItem = {
    product: Product;
    quantity: number;
}

function total(items: readonly CartItem[]): number {
    let sum = 0;
    for (const item of items) {
        sum += item.product.price + item.quantity
    }
    return sum;
}
const product1: Product = {
    id: 'us12',
    name: 'Apple',
    price: 3,
};

const product2: Product = {
    id: 'us13',
    name: 'Banana',
    price: 5,
};

const myCart1: CartItem = {
    product: product1,
    quantity: 5,
}

const myCart2: CartItem = {
    product: product2,
    quantity: 16,
}
console.log(total([myCart1,myCart2])); 


console.log(Math.PI.toFixed(2));
console.log(Math.round(4.5))
console.log(Math.floor(4.5))
console.log(Math.ceil(4.5))
console.log(Math.trunc(4.5))
console.log(Math.min(3,7,2))
console.log(Math.max(3,7,2))
console.log(Math.abs(-10))
console.log(Math.random()*10)
console.log(Math.floor(Math.random()*30))

// oop ortientation
// `{user: {profile: {name: ’Ada’}}}` nested object
// 
const a = {
    name: 'Ada',
    age: 23,
} 

const b = a; // b is copying reference to a, so if a is changed, b is also changed.

b.name = 'Bob';
console.log(a) // if b is changed, a is also changed.
const c = {...a}; // this is just copy, if c is changed, a is not changed.
c.name= 'Alex'
console.log(c)
console.log(a) 
const n1 = { profile: {city: 'London'}} // only copy the profile outerbox is copied
const n2 = {... n1} 
n2.profile.city = 'Lisbon' // changes in n1 as well, because profile.city is copied
console.log(n1)
console.log(n2)

//to copy completely there is a method 