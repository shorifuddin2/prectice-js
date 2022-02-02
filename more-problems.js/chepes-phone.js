const phones = [
    {name:'samsung',
    price: 45000,
    camera: 10,
    storage: 21
},
    {name:'oppo',
    price: 48000,
    camera: 12,
    storage: 20
},
    {name:'walton',
    price: 40000,
    camera: 8,
    storage: 11
},
    {name:'sawmi',
    price: 35000,
    camera: 11,
    storage: 16
},
]

let cheapest = phones[0];
for (const phone of phones){
    //compare price only
    if(phone.price < cheapest.price){
        cheapest = phone;
    }

}
console.log(cheapest);