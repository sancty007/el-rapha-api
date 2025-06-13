/** @type {import('git-commit-lint').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'refactor', 'test', 'build', 'perf', 'release', 'chore', 'revert'],
    ],
    'references-empty': [2, 'never'],
  },
};
