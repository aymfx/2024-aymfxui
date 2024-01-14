const path = require('path')
const fs = require('fs-extra')
const { spawn } = require('child_process')

const root = path.resolve(__dirname, '..')
const esPath = path.resolve(root, '../aymfx-ui/es')
const libPath = path.resolve(root, '../aymfx-ui/lib')

const main = async () => {
  if (fs.existsSync(esPath)) {
    await fs.remove(esPath)
  }
  if (fs.existsSync(libPath)) {
    await fs.remove(libPath)
  }

  spawn('pnpm', ['build'], {
    cwd: root,
    stdio: 'inherit',
    shell: true
  })
}

main()
