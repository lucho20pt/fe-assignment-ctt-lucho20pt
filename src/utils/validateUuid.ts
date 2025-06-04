export const isValidUuid = (input: string): boolean => {
  const uuidRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i // Updated regex to avoid NIL UUIDs
  return uuidRegex.test(input)
}
