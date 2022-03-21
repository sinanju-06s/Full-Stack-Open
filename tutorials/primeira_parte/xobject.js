const object1 = {
    name: 'pedro henrique',
    age: 35,
    education: "Ciencia da computação"
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }

  console.log(object1.name)
  const fieldName = 'age'
  console.log(object1[fieldName])
  object1.address = 'Ribeirão Preto'
  object1['secret number'] = 12341

  console.log(object1.address)