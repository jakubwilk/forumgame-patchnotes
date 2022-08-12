import { useCallback, useState } from 'react'
import { ITutorials, ITutorialsResponse } from '../models'

function useTutorialsQuery() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<ITutorials[]>([])

  const getTutorialsList = useCallback(() => {
    setIsLoading(false)
    setData([])
    fetch(`${window.location.origin}/data/tutorials.json`)
      .then((res) => res.json())
      .then((res: ITutorialsResponse) => {
        setData(res.tutorials)
      })
      .catch((err) => {
        setData([])
      })
      .finally(() => setIsLoading(false))
  }, [])

  return { isLoading, data, getTutorialsList }
}

export default useTutorialsQuery
