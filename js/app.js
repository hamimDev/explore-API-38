const user = {id: 1, name: 'Gorib Amir', job: 'actor'}

// const stringify = JSON.stringify(user);
// console.log(user);
// console.log(stringify);

const shop = {
    name:'Tea Shop',
    address:{
        street:'Kasipur goli',
        city:'Barishal',
        country: 'Bangladesh'
    },

    products: ['Tea', 'Coffey', 'Grom Pani', 'Cheaps'],
    revenue: 45000,
    isOpen:true,
    isNew:false
}

const stringify = JSON.stringify(shop);

const objectyfy = JSON.parse(stringify);
// console.log(shop);
// console.log(stringify);
// console.log(objectyfy);
