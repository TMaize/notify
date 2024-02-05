# notify

A frame less notify component，[watch demo](https://tmaize.github.io/notify/)

### API

[index.d.ts](https://github.com/TMaize/notify/blob/master/src/lib/index.d.ts)

### CDN usage

| lib             | size     | gzip    | CDN                                                                                         |
| --------------- | -------- | ------- | ------------------------------------------------------------------------------------------- |
| all.iife.js     | 14.33 kB | 5.35 kB | [npmmirror](https://registry.npmmirror.com/@tmaize/notify/0.4.0/files/dist/all.iife.js)     |
| alert.iife.js   | 11.27 kB | 4.42 kB | [npmmirror](https://registry.npmmirror.com/@tmaize/notify/0.4.0/files/dist/alert.iife.js)   |
| message.iife.js | 9.51 kB  | 3.70 kB | [npmmirror](https://registry.npmmirror.com/@tmaize/notify/0.4.0/files/dist/message.iife.js) |

```html
<script src="all.umd.js"></script>
<script>
  notify.message('hello')
</script>
```

### Module usage

```bash
yarn add @tmaize/notify
```

```js
import { alert, message } from '@tmaize/notify'

alert('hello')

alert({ title: 'title', content: 'content', type: 'error' })

message('content')

message.error('content')

message({ content: 'content', type: 'error' })
```

## Acknowledgments

[svelte](https://svelte.dev/)

[lew-ui](https://github.com/lewkamtao/lew-ui/blob/main/packages/directives/message/styles/index.scss)
