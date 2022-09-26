type Data = Array<{
  [key:string]: any
}>
type Key = string

const frequencyCounter = (data: Data = [], key: Key) =>
  data.reduce((acc, d) => {
    if (!d[key]) {
      return acc
    }
    if (acc[d[key]]) {
      acc[d[key]]++
    } else {
      acc[d[key]] = 1
    }
    return acc
  }, {})

export {
  frequencyCounter,
}
