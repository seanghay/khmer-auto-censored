## Khmer Auto Censored

Automatically censored Khmer text

## Usage

```js
import { censored, uncensored } from 'khmer-auto-censored';

console.log(censored('បាញ់សម្លាប់'))
// បា.ញ់ស.ម្លាប់


console.log(censored('បាញ់សម្លាប់', '_'))
// បា_ញ់ស_ម្លាប់


console.log(uncensored('បា.ញ់ស.ម្លាប់'))
// បាញ់សម្លាប់
```

## License

Apache-2.0