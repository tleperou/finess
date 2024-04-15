module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: ['chore', 'docs', 'feat', 'fix', 'perf', 'refactor', 'release', 'typo', 'test'],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: ['type', 'scope', 'subject', 'body', 'breaking', 'issues', 'lerna'],
  scopes: ['', 'docs', 'lib'],
  types: {
    chore: {
      description: 'Build and CI/CD',
      emoji: '🤖',
      value: 'chore'
    },
    docs: {
      description: 'Documentation',
      emoji: '🏖 ',
      value: 'docs'
    },
    feat: {
      description: 'A new feature',
      emoji: '🚀',
      value: 'feat'
    },
    fix: {
      description: 'A bug fix',
      emoji: '🔥',
      value: 'fix'
    },
    perf: {
      description: 'Improves performance',
      emoji: '⚡',
      value: 'perf'
    },
    refactor: {
      description: 'Neither a bug or a feature',
      emoji: '💡',
      value: 'refactor'
    },
    release: {
      description: 'Create a release commit',
      emoji: '🏹',
      value: 'release'
    },
    typo: {
      description: 'Typos, white-space, formatting',
      emoji: '👀',
      value: 'typo'
    },
    test: {
      description: 'Adding and modifying tests',
      emoji: '🕊️ ',
      value: 'test'
    },
    messages: {
      type: 'Select the type of change that you\'re committing:',
      customScope: 'Select the scope this component affects:',
      subject: 'Write a short, imperative mood description of the change:\n',
      body: 'Provide a longer description of the change:\n ',
      breaking: 'List any breaking changes:\n',
      footer: 'Issues this commit closes, e.g #123:',
      confirmCommit: 'The packages that this commit has affected\n',
    },
  }
};
