import { useState, useCallback } from 'react'
import { generateUuid } from '../utils/generateUuid'

const useCategories = (initialCategories: string[] = []) => {
  const [categories, setCategories] = useState<string[]>(initialCategories)
  const [rawInput, setRawInput] = useState<string>('') // Add rawInput state

  const handleRawInputChange = useCallback((input: string) => {
    setRawInput(input) // Update rawInput state
    const transformedCategories = input
      .split(',')
      .map((cat) => cat.trim())
      .filter((cat) => cat.length > 0) // Remove empty strings
      .map(
        (cat) =>
          /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
            cat
          )
            ? cat // Keep valid UUIDs
            : generateUuid() // Generate UUIDs for invalid entries
      )
    setCategories(transformedCategories) // Update categories immediately
  }, [])

  const resetCategories = useCallback(() => {
    setCategories([])
    setRawInput('') // Reset rawInput state
  }, [])

  return {
    categories,
    rawInput, // Return rawInput state
    handleRawInputChange,
    resetCategories,
  }
}

export default useCategories
