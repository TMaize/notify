# notify

A frame less notify component，[watch demo](xxx)

// TODO alert loading

### usage

see [index.d.ts](httxxx/src/lib/index.d.ts)

### CDN usage

| lib          | size     | gzip    | CDN           |
| ------------ | -------- | ------- | ------------- |
| all.umd.js   | 17.24 kB | 6.32 kB | [npmmirror]() |
| alert.umd.js | 14.14 kB | 5.37 kB | [npmmirror]() |
| alert.umd.js | 10.19 kB | 3.81 kB | [npmmirror]() |

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
