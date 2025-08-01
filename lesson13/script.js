const user = {
    name: 'Ratmir',
    age: '25',
    height: '175',
    weight: '63',
    sayHello(name) {
        console.log(`Hello ${name}`)
    }
}

console.log(user.age)

user.sayHello(user.name)

const profiles = [
    {
        name: 'Alex',
        age: 23,
        isAdmin: false
    },

    {
        name: 'Steve',
        age: 35,
        isAdmin: false
    },

    {
        name: 'Tom',
        age: 19,
        isAdmin: true
    },

    {
        name: 'Ron',
        age: 50,
        isAdmin: false
    },

    {
        name: 'Nick',
        age: 31,
        isAdmin: true
    },

    {
        name: 'Bob',
        age: 44,
        isAdmin: false
    },

    {
        name: 'Greg',
        age: 28,
        isAdmin: true
    } 
];

let notAdmin = 0;

for (let i = 0; i < profiles.length; i++) {
    if (!profiles[i].isAdmin){
        notAdmin++
    }
}

console.log(notAdmin)
