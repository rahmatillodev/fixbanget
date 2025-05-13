 interface Main {
    id:number,
    name:string,
    price:number,
    image:string,
 }
 interface Product extends Main{
    category: string,
    gender: string[],
    colors: string[],
    sizes: number[],
    rating: number,
    reviews: number,
    oldPrice?: number,
}
interface StyledData extends Main{
    quantity: number,
    link:string,
    stylist:string,
    season:string,
    items:ItmesType[],




}

type ItmesType  = { name: string, brand: string }