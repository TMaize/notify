# notify

A frame less notify component，[watch demo](https://tmaize.github.io/notify/)

### API

[index.d.ts](https://github.com/TMaize/notify/blob/master/src/lib/index.d.ts)

### CDN usage

| lib            | size     | gzip    | CDN                                                                                        |
| -------------- | -------- | ------- | ------------------------------------------------------------------------------------------ |
| all.umd.js     | 14.56 kB | 5.43 kB | [npmmirror](https://registry.npmmirror.com/@tmaize/notify/0.2.0/files/dist/all.umd.js)     |
| alert.umd.js   | 11.50 kB | 4.49 kB | [npmmirror](https://registry.npmmirror.com/@tmaize/notify/0.2.0/files/dist/alert.umd.js)   |
| message.umd.js | 9.74 kB  | 3.77 kB | [npmmirror](https://registry.npmmirror.com/@tmaize/notify/0.2.0/files/dist/message.umd.js) |

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
import { alert, message } from '@test/demo'

alert('hello')

alert({ title: 'title', content: 'content', type: 'error' })

message('content')

message.error('content')

message({ content: 'content', type: 'error' })
```

## Acknowledgments

[svelte](https://svelte.dev/)

[lew-ui](https://github.com/lewkamtao/lew-ui/blob/main/packages/directives/message/styles/index.scss)
