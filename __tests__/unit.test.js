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

// isStrongPassword Test
test('ImBatman is a strong password', () => {
    expect(functions.isStrongPassword('ImBatman')).toBe(true);
});

test('ImBatman_U2 is a strong password', () => {
    expect(functions.isStrongPassword('ImBatman_U2')).toBe(true);
});

test('1234567 is NOT a strong password', () => {
    expect(functions.isStrongPassword('1234567')).toBe(false);
});

test('What are you doing? is NOT a strong password', () => {
    expect(functions.isStrongPassword('What are you doing?')).toBe(false);
});

// isDate Test
test('1/1/1111 is a date', () => {
    expect(functions.isDate('1/1/1111')).toBe(true);
});

test('20/20/2020 is a date', () => {
    expect(functions.isDate('20/20/2020')).toBe(true);
});

test('1/1/11111 is NOT a date', () => {
    expect(functions.isDate('1/1/11111')).toBe(false);
});

test('//1111 is NOT a date', () => {
    expect(functions.isDate('//1111')).toBe(false);
});

// isHexColor Test
test('FFFFFF is a hex color', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
});

test('000000 is a hex color', () => {
    expect(functions.isHexColor('000000')).toBe(true);
});

test('0 is NOT a hex color', () => {
    expect(functions.isHexColor('0')).toBe(false);
});

test('F is NOT a hex color', () => {
    expect(functions.isHexColor('F')).toBe(false);
});