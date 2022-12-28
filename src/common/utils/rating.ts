export const rating = (rating: string) => {
  let ratingNum: string | number = rating

  if (rating.length > 3) {
    const num = +rating.replace('%', '')
    ratingNum = (num / 10).toFixed(1)
  }
  if (!rating) {
    ratingNum = 0
  }

  return ratingNum
}