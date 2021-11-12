// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

test('checks first valid phone number', () => {
    expect(functions.isPhoneNumber(8585871121)).toBe(true);
});

test('checks second valid phone number', () => {
    expect(functions.isPhoneNumber(8585342230)).toBe(true);
});

test('checks first invalid phone number', () => {
    expect(functions.isPhoneNumber(1234)).toBe(false);
});

test('checks second invalid phone number', () => {
    expect(functions.isPhoneNumber(99)).toBe(false);
});

test('checks first valid email', () => {
    expect(functions.isEmail('sschaeff@ucsd.edu')).toBe(true);
});

test('checks second valid email', () => {
    expect(functions.isEmail('a1amaya@ucsd.edu')).toBe(true);
});

test('checks first invalid email', () => {
    expect(functions.isEmail('CSE@110')).toBe(false);
});

test('checks second invalid email', () => {
    expect(functions.isEmail('gmail.com')).toBe(false);
});