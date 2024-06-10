import formatCurrency from '../formatCurrency'

const removeWhitespace = (str: string) => {
  return str.replace(/\s/g, '')
}

describe('formatCurrency', () => {
  it('should format number as USD currency', () => {
    const number = 1234.56
    const formatted = removeWhitespace(formatCurrency(number))
    expect(formatted).toEqual('US$1.234,56')
  })

  it('should handle negative numbers', () => {
    const number = -1234.56
    const formatted = removeWhitespace(formatCurrency(number))
    expect(formatted).toEqual('-US$1.234,56')
  })

  it('should handle zero', () => {
    const number = 0
    const formatted = removeWhitespace(formatCurrency(number))
    expect(formatted).toEqual('US$0,00')
  })
})
