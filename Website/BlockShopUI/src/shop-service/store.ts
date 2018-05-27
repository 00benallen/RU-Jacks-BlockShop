export class Store {
    fullStoreName: String
    storeBannerText: String
    posterFiles: String[] //base64
    products: Product[]
    walletId: String
}
  
  export class Product {
    productName: String
    productPicture: String //base64
    price: number
    stock: number
    featured: boolean
}