// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// isPhoneNumber Test
test('858-319-5053 is a phone number', () => {
    expect(functions.isPhoneNumber('858-319-5053')).toBe(true);
});

test('(858)319-5053 is a phone number', () => {
    expect(functions.isPhoneNumber('(858)319-5053')).toBe(true);
});

test('858-319-(5053) is NOT a phone number', () => {
    expect(functions.isPhoneNumber('858-319-(5053)')).toBe(false);
});

test('858-(319)-5053 is NOT a phone number', () => {
    expect(functions.isPhoneNumber('8587-(319)-5053')).toBe(false);
});

// isEmail Test
test('xul007@ucsd.edu is an Email', () => {
    expect(functions.isEmail('xul007@ucsd.edu')).toBe(true);
});

test('imbatman@batman.com is an Email', () => {
    expect(functions.isEmail('imbatman@batman.com')).toBe(true);
});

test('imbatman is NOT an Email', () => {
    expect(functions.isEmail('imbatman')).toBe(false);
});

test('@batman.com is NOT an Email', () => {
    expect(functions.isEmail('@batman.com')).toBe(false);
});