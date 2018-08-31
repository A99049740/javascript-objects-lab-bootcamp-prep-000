var recipes = new Object({"ob1":"first","ob2":"second"})
function updateObjectWithKeyAndValue(object, key, value){
  let newob = new Object(object)
  newob[key]=value
  console.log(newob)
  return newob
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value
  return object
}
function deleteFromObjectByKey(object, key){
  let newob = new Object(object)
  delete newob[key]
  console.log(newob)
  return newob
}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key]
  return object
}
updateObjectWithKeyAndValue(recipes,"ob1","third")
deleteFromObjectByKey(recipes,"ob1")
