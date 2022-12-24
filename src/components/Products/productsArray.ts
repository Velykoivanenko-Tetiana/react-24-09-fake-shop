type ProductsProps = {
    id:number
    title:string
    desc: string
    type:string
    capacity:string
    price:number
    image:string
}

const productsArray: ProductsProps[] = [
{
    id:1,
    title:"iPhone X",
    desc: "This is iPhone X",
    type:"phone",
    capacity:"64",
    price: 500,
   image:"images/iphone-green.jpg"
 },
 {
    id:2,
    title:"iPhone XS",
    desc: "This is iPhone XS",
    type:"phone",
    capacity:"256",
    price: 1000,
    image:"images/iphone-red.jpg"
 },
 { id:3,
    title:"iPhone 14 Pro",
    desc: "This is iPhone 14 Pro",
    type:"phone",
    capacity:"512",
    price: 1300,
    image:"images/iphone-pink.jpg"
 },
 {id:4,
    title:"iPhone 13",
    desc: "This is iPhone 13",
    type:"phone",
    capacity:"128",
    price: 800,
    image:"images/iphone-white.jpg"
 },
 {
   id:5,
    title:"iPhone 12",
    desc: "This is iPhone 12",
    type:"phone",
    capacity:"128",
    price: 600,
    image:"images/iphone-black.jpg"
 },
 {id:6,
    title:"iPhone 11",
    desc: "This is iPhone 11",
    type:"phone",
    capacity:"128",
    price: 500,
    image:"images/iphone-blue.jpg"
 },
]
 export default productsArray