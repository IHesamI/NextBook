import Link from "next/link"

export default function Home() {
  return (
    <>
      <div>
        <Link href={'/posts'} >Posts</Link>
        <br />
        <br />
        <Link href={'/'}>Home</Link>
        <br />
        <br />
        <Link href={{
          pathname: '/posts/[slug]', // * This is a way for implementing complex urls
          query: {
            zarp:'true',
            slug: '123',
          }
        }}>Post 123</Link>
        <br />
        <br />
        <Link href={'/contact-us'}>Contact</Link>

      </div>
    </>
  )
}
