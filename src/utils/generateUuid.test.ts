import { generateUuid } from './generateUuid'

describe('generateUuid', () => {
  it('should generate a valid UUID', () => {
    const uuid = generateUuid()
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
    expect(uuid).toMatch(uuidRegex)
  })

  it('should generate unique UUIDs', () => {
    const uuid1 = generateUuid()
    const uuid2 = generateUuid()
    expect(uuid1).not.toBe(uuid2)
  })
})
