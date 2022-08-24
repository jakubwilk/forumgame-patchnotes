import { useCallback, useState } from 'react'
import { IMagic, IMagicResponse } from '../models'

function useBasicMagicQuery() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<IMagic | null>(null)

  const getBasicMagicList = useCallback(() => {
    fetch(`${window.location.origin}/data/magic-standard.json`)
      .then((res) => res.json())
      .then((res: IMagicResponse) => {
        setData(res.data)
      })
      .catch((err) => {
        setData(null)
      })
      .finally(() => setIsLoading(false))
  }, [])

  return { isLoading, data, getBasicMagicList }
}

export default useBasicMagicQuery
