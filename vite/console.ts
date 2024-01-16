export default function consolePlugin() {
  return {
    name: 'console',
    transform(code, id) {
      if (id.endsWith('.ts') || id.endsWith('.js')) {
        return code.replace(/console\.log/g, 'console.error');
      }
    },
  };
}
