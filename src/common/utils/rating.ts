export const rating = (rating: string) => {
  let ratingNum: string | number = rating

  if (rating.length > 3) {
    console.log(1111)
    const num = +rating.replace('%', '')
    ratingNum = (num / 10).toFixed(1)
  }
  if (!rating) {
    ratingNum = 0
  }
  console.log('rating', rating)
  return ratingNum
}