type ProductsProps = {
    title:string
    desc: string
    type:string
    capacity:string
    price:number
}

const productsArray: ProductsProps[] = [
{
    title:"iPhone X",
    desc: "This is iPhone X",
    type:"phone",
    capacity:"64",
    price: 500
 },
 {
    title:"iPhone XS",
    desc: "This is iPhone XS",
    type:"phone",
    capacity:"256",
    price: 1000
 },
 {
    title:"iPhone 14 Pro",
    desc: "This is iPhone 14 Pro",
    type:"phone",
    capacity:"512",
    price: 1300
 },
 {
    title:"iPhone 13",
    desc: "This is iPhone 13",
    type:"phone",
    capacity:"128",
    price: 800
 },
 {
    title:"iPhone 12",
    desc: "This is iPhone 12",
    type:"phone",
    capacity:"128",
    price: 600
 },
 {
    title:"iPhone 11",
    desc: "This is iPhone 11",
    type:"phone",
    capacity:"128",
    price: 500
 },
]
 export default productsArray