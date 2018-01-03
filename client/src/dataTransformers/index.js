export const transformProducts = products => products.map(product => ({
  category: product.category,
  brand: product.brand,
  name: product.productName,
  price: product.price,
  score: product.score,
  link: `/model/${product._id}`
}))

export const transformModel = model => ({
  name: model.productName,
  category: model.category,
  price: model.price,
  picture: model.picture,
  score: model.score,
  brand: model.brand,
  reviewsCount: model.numberOfReviews,
  description: model.description
})
