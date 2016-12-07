export default function snapshotToArray (snapshot) {
  const arr = []

  if (snapshot !== null) {
    Object.keys(snapshot).forEach(key => {
      let item = snapshot[key]
      item.uid = key

      arr.push(item)
    })
  }

  return arr
}
