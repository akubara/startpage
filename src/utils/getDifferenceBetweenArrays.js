export default function getDifferenceBetweenArrays(oldArray, newArray, key = null) {
  if (key) {
    return oldArray.filter((item) => !newArray.some((newItem) => newItem[key] === item[key]));
  }

  return oldArray.filter((item) => !newArray.includes(item));
}
