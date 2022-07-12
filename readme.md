## Khmer Auto Censored

Automatically **censored/uncensored** Khmer text

[![test](https://github.com/seanghay/khmer-auto-censored/actions/workflows/test.yml/badge.svg)](https://github.com/seanghay/khmer-auto-censored/actions/workflows/test.yml)

## Usage

```js
import { censored, uncensored } from 'khmer-auto-censored';

console.log(censored('បាញ់សម្លាប់'))
// បា.ញ់ស.ម្លាប់

// with a custom delimter
console.log(censored('បាញ់សម្លាប់', '_'))
// បា_ញ់ស_ម្លាប់

// Uncensored
console.log(uncensored('បា.ញ់ស.ម្លាប់'))
// បាញ់សម្លាប់
```

## Contributing

In order to add more words, please check [`dict.json`](./src/dict.json)

## License

Apache-2.0
