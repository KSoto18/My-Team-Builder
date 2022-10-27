const Manager = require('../lib/Manager');

describe('Checks role.', () => {
    describe('Check if role is correct', () => {
        const role = 'Manager';
        const employeeTest = new Manager('Eve', 14, 'Eve@gmail.com', 'KSoto18', role);

        expect(employeeTest.getRole()).toBe(role);
  });
})