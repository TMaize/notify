import cp from 'child_process'

cp.execSync('npx vite build --mode lib', { stdio: 'inherit', env: { ...process.env, emptyOutDir: true, entry: 'all' } })

cp.execSync('npx vite build --mode lib', { stdio: 'inherit', env: { ...process.env, emptyOutDir: false, entry: 'alert' } })

cp.execSync('npx vite build --mode lib', { stdio: 'inherit', env: { ...process.env, emptyOutDir: false, entry: 'message' } })
