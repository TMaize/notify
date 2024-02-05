import cp from 'child_process'

cp.execSync('npx vite build --mode lib', { stdio: 'inherit', env: { ...process.env, emptyOutDir: true, buildType: 'es' } })

cp.execSync('npx vite build --mode lib', { stdio: 'inherit', env: { ...process.env, emptyOutDir: false, buildType: 'cjs' } })

cp.execSync('npx vite build --mode lib', { stdio: 'inherit', env: { ...process.env, emptyOutDir: false, buildType: 'iife', buildEntry: 'all' } })

cp.execSync('npx vite build --mode lib', { stdio: 'inherit', env: { ...process.env, emptyOutDir: false, buildType: 'iife', buildEntry: 'alert' } })

cp.execSync('npx vite build --mode lib', { stdio: 'inherit', env: { ...process.env, emptyOutDir: false, buildType: 'iife', buildEntry: 'message' } })
