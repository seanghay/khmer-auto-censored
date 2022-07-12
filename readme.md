## Khmer Auto Censored

Automatically **censored/uncensored** Khmer text

[![npm](https://shields.io/npm/v/khmer-auto-censored)](https://npmjs.com/package/khmer-auto-censored)
[![test](https://github.com/seanghay/khmer-auto-censored/actions/workflows/test.yml/badge.svg)](https://github.com/seanghay/khmer-auto-censored/actions/workflows/test.yml)

<img src=https://user-images.githubusercontent.com/15277233/178417612-0c4b0c5f-7ff4-486d-b943-f6ae659c3ac1.png width=720>


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
