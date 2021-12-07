/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

function even_or_odd(number) {
    return number % 2 ? 'Odd' : 'Even';
}

test('2 is even', () => {
    expect(even_or_odd(2)).toBe('Even');
});

test('7 is odd', () => {
    expect(even_or_odd(7)).toBe('Odd');
});
