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