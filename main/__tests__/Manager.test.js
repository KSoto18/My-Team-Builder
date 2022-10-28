const Manager = require('../lib/Manager');

describe('Checks role.', () => {
  it('Check if role is correct', () => {
      const role = 'Manager';
      const employeeTest = new Manager('Eve', 14, 'Eve@gmail.com', '618', role);

      expect(employeeTest.getRole()).toBe(role);
});
})