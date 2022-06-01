// Write your solution in this file!
let employee={name:`Caitlin M`,streetAddress: "123 Seamore St"}

function updateEmployeeWithKeyAndValue(employee, key, value){
      return Object.assign({},employee,{[key]:value}) 

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
       employee[key]=value
      return employee
}

function deleteFromEmployeeByKey(employee, key){
      let newArray=Object.assign({},employee) 
      delete newArray[key]
      return newArray
}

function  destructivelyDeleteFromEmployeeByKey(employee, key){
      delete employee[key]
      return employee
}