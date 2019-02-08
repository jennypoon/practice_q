const user = {
    id: 101,
    email: 'jack@dev.com',
    personalInfo: {
        name: 'Jack',
        address: {
            line1: 'westwish st',
            line2: 'washmasher',
            city: 'wallas',
            state: 'WX'
        }
    }
}

Object.keys(user).forEach(key => {
  let value = user[key]
  // return console.log("KEY", key, "VALUE", value)
})

for (const key in user) {
  let value = user[key]
  // console.log("KEY2", key, "VALUE2", value)
}

////// RECURSION
function objRecursion(object) {
  for (const key in object) {
    let value = object[key]
    if (typeof value === "object" && value !== null) {
      objRecursion(value)
    } else
    console.log("RECURSION KEY", key, " | RECURSION VALUE", value)
  }
}

objRecursion(user)
