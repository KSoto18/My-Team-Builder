const Intern = require('../lib/Intern');

describe('School Name', () => {
    it('Checks for the school name', () => {
      const school = 'UCF';
      const employeeTest = new Intern('Eve', 14, 'Eve@gmail.com', school);

      expect(employeeTest.getSchool()).toBe(school);
  });
})

describe('Checks role.', () => {
    it('Check if role is correct', () => {
        const role = 'Intern';
        const employeeTest = new Intern('Eve', 14, 'Eve@gmail.com', 'UCF', role);

        expect(employeeTest.getRole()).toBe(role);
  });
})