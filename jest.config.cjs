// jest.config.cjs
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    },
    transform: {
        // Регулярное выражение должно включать j, t, x, s
        '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
    },
    transformIgnorePatterns: ['node_modules/(?!(nanoid)/)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};


// jest.config.js
// module.exports = {
//     preset: 'ts-jest',
//     testEnvironment: 'jsdom',
//     setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
//     transform: {
//         // Регулярное выражение должно включать j, t, x, s
//         '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
//     },
//     moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// };
