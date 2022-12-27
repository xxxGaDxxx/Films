export const timeLength = (time: string | null) => {
  if (time?.length) {
    const minutes = +time.slice(3)
    const hours = +time.slice(0, 2)
    return hours * 60 + minutes
  }
  return 1
}