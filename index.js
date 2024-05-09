const { Employees } = require("./classes/Employees")
const { Manager } = require("./classes/Manager")
const { SalesPerson } = require("./classes/SalesPerson")
const { SoftwareEngineer } = require("./classes/SoftwareEngineer")

// Run and debug your code here
class Employees{
    #salary
    #isHired
    constructor(name,title,salary){
        this.name = name
        this.title = title
        this.#salary = salary
        this.#isHired = true
    }
getSalary(){
    return this.#salary
}

setSalary(amount){
    return amount + this.setSalary
}

getStatus(){
    return this.#isHired
}

setStatus(command){
    if(command === 'hire'){
        this.#isHired = true
    }
    else if (command === 'fire'){
        this.#isHired = false
    }
}

}

class Manager extends Employees{
    #employeesManaged
    constructor(department, employeesManaged){
        this.department = department
        this.#employeesManaged = []
    }
get employeesManaged(){
    return this.#employeesManaged    
}



}




module.exports = {
    Employees,
    Manager,
    SalesPerson,
    SoftwareEngineer
}