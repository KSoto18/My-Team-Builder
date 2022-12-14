const Employee = require('../lib/Employee');

 describe('Employee Input', ()=> {
    it('Check if Name is a string', () => {
        const name = 'Eve';
        const employeeTest = new Employee(name);
    
        expect((employeeTest.getName())).toBe(name);
    });
});

describe('Employee ID', ()=> {
    it('Checks if the ID is a number', () => {
        const id = "14";
        const employeeTest = new Employee('Eve', id);
    
        expect(employeeTest.getId()).toBe(id);
    });
});

describe('Employee Email', ()=> {
    it('Checks the Employees Email', () => {
        const email = 'Eve@gmail.com';
        const id = "14";
        const employeeTest = new Employee('Eve', id, email);
    
        expect(employeeTest.getEmail()).toEqual(email);
    });
});



