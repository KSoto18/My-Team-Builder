const Engineer = require('../lib/Engineer');

describe('GitHub username', () => {
    it('Checks for GitHub username', () => {
      const githubTest = 'KSoto18';
      const employeeTest = new Engineer('Eve', 14, 'Eve@gmail.com', githubTest);

      expect(employeeTest.github).toBe(githubTest);
  });
})

describe('Checks role.', () => {
    describe('Check if role is correct', () => {
        const role = 'Engineer';
        const employeeTest = new Engineer('Eve', 14, 'Eve@gmail.com', 'KSoto18', role);

        expect(employeeTest.getRole()).toBe(role);
  });
})