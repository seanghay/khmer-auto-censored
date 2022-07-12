import { describe, it, expect } from 'vitest'
import { censored, uncensored } from '../src/main.js'

describe('censored & uncensored', () => {
  it("should be censored", () => {
    expect(censored('បាញ់សម្លាប់')).toEqual("បា.ញ់ស.ម្លាប់")
    expect(censored('បាញ់សម្លាប់', '_')).toEqual("បា_ញ់ស_ម្លាប់")
    
  })
  it("should be uncensored", () => {
    expect(uncensored("បា.ញ់ស.ម្លាប់")).toEqual("បាញ់សម្លាប់")
    expect(uncensored("បា_ញ់ស_ម្លាប់", '_')).toEqual("បាញ់សម្លាប់")
  })
})