import { mystery3 } from '../src/mystery';

test('Two strings with 1 different letter return 1', () => {
  // Arrange
  const string1 = 'CATCGTAGTGACGGCCT';
  const string2 = 'CATCGTAATGACGGCCT';

  // Act
  const result = mystery3(string1, string2);

  // Assert
  expect(result).toEqual(1);
});

test('Two Empty Strings return 0', () => {
  // Arrange
  const string1 = '';
  const string2 = '';

  // Act
  const result = mystery3(string1, string2);

  // Assert
  expect(result).toEqual(0);
});

test('Two identical strings return 0', () => {
  // Arrange
  const string1 = 'GAGCCTACTAACGGGAT';
  const string2 = 'GAGCCTACTAACGGGAT';

  // Act
  const result = mystery3(string1, string2);

  // Assert
  expect(result).toEqual(0);
});

test('Comparing "GAGCCTACTAACGGGAT" and "CATCGTAATGACGGCCT" returns 7', () => {
  // Arrange
  const string1 = 'GAGCCTACTAACGGGAT';
  const string2 = 'CATCGTAATGACGGCCT';

  // Act
  const result = mystery3(string1, string2);

  // Assert
  expect(result).toEqual(7);
});

test('comparing "GAGCC" and "GAGCCMMNL" returns 4', () => {
  const string1 = 'GAGCC';
  const string2 = 'GAGCCMMNL';

  const result = mystery3(string1, string2);
  
  expect(result).toEqual(4)
});

test('one empty string: "" for string one and "GAGCC" for string two returns 5', () => {
  const string1 = '';
  const string2 = 'GAGCC';

  const result = mystery3(string1, string2);
  
  expect(result).toEqual(5)
});

test('one empty string: "GAGCC" for string one and "" for string two returns 5', () => {
  const string1 = 'GAGCC';
  const string2 = '';

  const result = mystery3(string1, string2);
  
  expect(result).toEqual(5)
});