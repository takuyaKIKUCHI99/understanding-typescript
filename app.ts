function add(input1: number | string, input2: number | string) {
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    return input1 + input2
  } else {
    return input1.toString() + input2.toString()
  }
}

console.log(add(1, 2))
console.log(add('Takuya', 'Kikuchi'))
