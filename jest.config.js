const { defaults } = require('jest-config')

module.exports = {
  testMatch: ['**/__tests__/**/*.[jt]s?(x)'],
  testPathIgnorePatterns: [...defaults.testPathIgnorePatterns, '.history'],
}