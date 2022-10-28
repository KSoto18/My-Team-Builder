const Manager = require('../lib/Manager');

describe('Checks role.', () => {
  it('Check if role is correct', () => {
      const role = 'Manager';
      const employeeTest = new Manager('Eve', 14, 'Eve@gmail.com', '618', role);

      expect(employeeTest.getRole()).toBe(role);
});
});

describe('Manager Office Number', ()=> {
  it('Checks for the office number', () => {
      const officeNum = "618";
      const employeeTest = new Manager('Eve', 14, 'Eve@gmail.com', officeNum);
  
      expect(employeeTest.getOfficeNumber()).toBe(officeNum);
  });
});