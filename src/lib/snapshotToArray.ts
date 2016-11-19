export default function snapshotToArray (snapshot) {
  const arr = []

  if (snapshot !== null) {
    Object.keys(snapshot).forEach((key) => {
      let item = Object.assign({}, snapshot[key], { uid: key})

      arr.push(item)
    })
  }

  return arr
}
