const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
	const name = "Foo";
	const id = 1;
	const email = "test@test.com";
	const testValue = "GitHubUser";

	const e = new Engineer(name, id, email, testValue);

	expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
	const testValue = "Engineer";
	const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");

	console.log(e.getRole());
	expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
	const testValue = "GitHubUser";
	const e = new Engineer("Foo", 1, "test@test.com", testValue);
	expect(e.getGithub()).toBe(testValue);
});
