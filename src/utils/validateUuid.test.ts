import { isValidUuid } from './validateUuid'

describe('isValidUuid', () => {
  it('should return true for a valid UUID', () => {
    expect(isValidUuid('123e4567-e89b-12d3-a456-426614174000')).toBe(true)
  })

  it('should return false for a NIL UUID', () => {
    expect(isValidUuid('00000000-0000-0000-0000-000000000000')).toBe(false)
  })

  it('should return false for a UUID with invalid characters', () => {
    expect(isValidUuid('02adbdee-33de-4da3-8af0-5a7c41e025fz')).toBe(false)
  })

  it('should return false for a UUID that is too short', () => {
    expect(isValidUuid('123e4567-e89b-12d3-a456-42661417400')).toBe(false)
  })

  it('should return false for a UUID with missing segments', () => {
    expect(isValidUuid('123e4567-e89b-12d3-a456-426614174')).toBe(false)
  })
})
