import demo from '../app';

test('demo funktion returns value', () => {
  expect(demo('test')).toBe('test');
});
