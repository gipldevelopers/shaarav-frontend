import { useEffect, useState } from 'react'

function useFetch(requestFn) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    async function run() {
      setLoading(true)
      setError(null)

      try {
        const result = await requestFn()
        if (isMounted) {
          setData(result)
        }
      } catch (err) {
        if (isMounted) {
          setError(err)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    run()

    return () => {
      isMounted = false
    }
  }, [requestFn])

  return { data, loading, error }
}

export default useFetch
