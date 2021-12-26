// Write your solution in this file!
const employee = {
   name: "Scott",
   streetAddress: "17818 Fieldglen Drive"
};

function updateEmployeeWithKeyAndValue (employee, key, value) {
    const newObject = { ...employee };
    newObject[key] = value;
    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    return Object.assign (employee, {[key]: value});
}

function deleteFromEmployeeByKey (employee, key) {
    const newObject = Object.assign({}, employee);
    delete newObject [key];
    return newObject;
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {
    const newObject = ({}, employee);
    delete newObject [key];
    return newObject;
}