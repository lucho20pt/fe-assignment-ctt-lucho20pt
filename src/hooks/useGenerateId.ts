import { useCallback } from 'react'

const useGenerateId = () => {
  const generateId = useCallback((): string => {
    return `id-${Date.now()}-${Math.random().toString(36).slice(2, 11)}`
  }, [])

  return generateId
}

export default useGenerateId
