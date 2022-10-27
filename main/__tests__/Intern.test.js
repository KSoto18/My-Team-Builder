const Intern = require('../lib/Intern');

describe('School Name', () => {
    it('Checks for the school name', () => {
      const school = 'UCF';
      const employeeTest = new Intern('Eve', 14, 'Eve@gmail.com', school);

      expect(employeeTest.school).toBe(school);
  });
})

describe('Checks role.', () => {
    describe('Check if role is correct', () => {
        const role = 'Intern';
        const employeeTest = new Intern('Eve', 14, 'Eve@gmail.com', 'KSoto18', role);

        expect(employeeTest.getRole()).toBe(role);
  });
})