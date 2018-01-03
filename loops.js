var forLoop = (array) => {
  for (let i = 0; i < 25; i++){
    if (i===0) {
      array.push('I am 1 strange loop.')
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }
  return array
}

var whileLoop = (num) => {
  while (num > 0){
    console.log(--num)
  }
  return 'done'
}
