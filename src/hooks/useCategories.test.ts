import { renderHook, act } from '@testing-library/react'
import useCategories from './useCategories'

describe('useCategories', () => {
  it('should initialize with the provided initial categories', () => {
    const initialCategories = ['category1', 'category2']
    const { result } = renderHook(() => useCategories(initialCategories))

    expect(result.current.categories).toEqual(initialCategories)
    expect(result.current.rawInput).toBe('')
  })

  it('should update rawInput and categories when handleRawInputChange is called', () => {
    const { result } = renderHook(() => useCategories([]))

    act(() => {
      result.current.handleRawInputChange('category1, category2')
    })

    expect(result.current.rawInput).toBe('category1, category2')
    expect(result.current.categories.length).toBe(2)
  })

  it('should reset categories and rawInput when resetCategories is called', () => {
    const { result } = renderHook(() => useCategories(['category1']))

    act(() => {
      result.current.resetCategories()
    })

    expect(result.current.categories).toEqual([])
    expect(result.current.rawInput).toBe('')
  })
})
