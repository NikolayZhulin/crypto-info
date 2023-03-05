import '@testing-library/jest-dom'
import { getFromATH, getToATH, round, formatPrice } from './index'

describe('to ATH tests', () => {
  it('should return correct to ATH value (%)', () => {
    expect(getToATH(23298, 68672)).toBe(194.8)
    expect(getToATH(1, 10)).toBe(900)
    expect(getToATH(1, 1)).toBe(0)
    expect(getToATH(-1, 1)).toBe(0)
    expect(getToATH(1, -13)).toBe(0)
  })
})

describe('from ATH tests', () => {
  it('should return correct percent', () => {
    expect(getFromATH(23224, 68672)).toBe(66.2)
    expect(getFromATH(1, 10)).toBe(90)
    expect(getFromATH(1, 1)).toBe(0)
    expect(getFromATH(-1, 1)).toBe(0)
    expect(getFromATH(1, -13)).toBe(0)
  })
})

describe('math round tests', () => {
  it('should return correct round', () => {
    expect(round(1.005, 2)).toBe(1.01)
    expect(round(55.55, 1)).toBe(55.6)
  })
})

describe('coin data round', () => {
  it('should return correct data round', () => {
    expect(formatPrice(0.000000909111111111)).toBe('0.000000909')
    expect(formatPrice(1)).toBe('1.00')
    expect(formatPrice(-0.000000909111111111)).toBe('error')
  })
})
