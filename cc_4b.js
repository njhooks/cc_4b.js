let products=[
{sku: "sku-001" , name: "Bracelet" , category: "Jewerly" , price: 15 , inventory: 50},
 {sku: "sku-002" , name: "Necklace" , category: "Jewerly" ,  price: 60 , inventory: 30},
 {sku: "sku-003" , name: "Dresses"  , category: "Apparel" , price: 35 , inventory: 100},
 {sku: "sku-004" , name: "Laptops"  , category: "Electronics" , price: 1000 , inventory:150},
 {sku: "sku-005" , name: "Coffe Mug" , category: "Household" , price: 25 , inventory: 200}
];

for (let product of products) {
    let discount=0;
    
    switch (product.category) {
        case "Jewerly":
            discount = .1
            break;
        case "Apparel":
        case "Household":
            discount = .2
            break
        case "Electronics":
            discount = .3
            break
        default:
            break;
    }
    let promoPrice = product.price * (1-discount);
    product.promoPrice = promoPrice.toFixed(2)

}
console.log(products)