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

