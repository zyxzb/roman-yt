const add = (a, b) => a + b;

const users = [
    'andrzej', 'daniel', 'miłosław'
]

it('Adds two values', () => {
    expect(add(2, 4)).toBe(6);
})

it('compares two values', () => {
    expect(users).toContain('daniel');
    expect(users).not.toContain('bartek');

})