const { validateAnswer } = require('./file'); // Replace 'module-name' with the actual module filename.

test('validateAnswer should return true for correct answer', () => {
  const userAnswer = 'Gloves';
  const correctAnswer = 'Gloves';
  const result = validateAnswer(userAnswer, correctAnswer);
  expect(result).toBe(true);
});

test('validateAnswer should return false for incorrect answer', () => {
  const userAnswer = 'Alcohol gel';
  const correctAnswer = 'Gloves';
  const result = validateAnswer(userAnswer, correctAnswer);
  expect(result).toBe(false);
});
