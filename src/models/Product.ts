class Products {
  image: string
  title: string
  description: string
  price: number
  id: number

  constructor(
    image: string,
    title: string,
    description: string,
    price: number,
    id: number
  ) {
    this.image = image
    this.title = title
    this.description = description
    this.price = price
    this.id = id
  }
}

export default Products
