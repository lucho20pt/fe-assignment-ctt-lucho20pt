import { useState, useCallback } from 'react'
import { generateUuid } from '../utils/generateUuid'

const useCategories = (initialCategories: string[] = []) => {
  const [categories, setCategories] = useState<string[]>(initialCategories)

  const handleRawInputChange = useCallback((input: string) => {
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
    setCategories(transformedCategories)
  }, [])

  const resetCategories = useCallback(() => {
    setCategories([])
  }, [])

  return {
    categories,
    handleRawInputChange,
    resetCategories,
  }
}

export default useCategories
