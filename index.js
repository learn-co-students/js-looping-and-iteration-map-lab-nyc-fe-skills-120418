// Code your solution in this file.
// const drivers = []

function lowerCaseDrivers(drivers){
   return drivers.map(name => name.toLowerCase())

}

// let nameToAttributes = {}

function nameToAttributes(drivers){
  return drivers.map(name => ({firstName:name.split(' ')[0], lastName:name.split(' ')[1]}))
  
  // name => [{firstName:"firstName", lastName:["name"]}])
  // [{"firstName": name, "lastName": name}])
}

function attributesToPhrase(drivers){
  return drivers.map(driver => (driver.name + ' is from ' + driver.hometown))
  
}
