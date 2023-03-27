import { writable, get } from 'svelte/store'

export default function useSessionStorage(key) {
  const getStoredValue = (item) => {
    const raw = sessionStorage.getItem(item)
    if (!raw) {
      return false
    }
    return JSON.parse(raw)
  }

  const store = writable(getStoredValue(key) || false)

  const setStorage = (value) => {
    try {
      sessionStorage.setItem(key, JSON.stringify(value))
      store.set(value)
    } catch (error) {
      console.error(error)
    }
  }

  const removeStorage = () => {
    sessionStorage.removeItem(key)
    store.set(false)
  }

  const getStorage = () => {
    return get(store)
  }

  return { getStorage, setStorage, removeStorage }
}
