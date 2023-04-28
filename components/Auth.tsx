import { useEffect, useState } from "react"

const useAuth = () => {

    const [logged, setlogged] = useState(false)
    useEffect(() => {
      setlogged(Boolean(localStorage.getItem('islogged')))
    }, [])
    console.log(logged)
    
    return { logged }
}
export default useAuth