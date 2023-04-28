import Link from "next/link"
import useAuth from "@/components/Auth"
import PrivateComponent from "@/components/PrivateComponents"
import { useEffect } from "react"
import { useRouter } from "next/router"
export default function Home() {
  const router = useRouter();
  const { logged } = useAuth()
  useEffect(() => {
    if (!logged) {
     
      router.push('/login')

      // * router.push has the feature like Link 
      // router.push({
      // pathname: '/blog/[date]/[slug]',
      // query: {
      // date: '2021-01-01',
      // slug: 'happy-new-year',
      // foo: 'bar'
      // }
      // });

    }

  }, [logged])
  return (
    <>
      {
        logged ? <PrivateComponent /> : <div>zarp</div>
      }
    </>
  )

}
