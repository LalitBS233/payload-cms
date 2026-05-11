import { Hero } from '@/components/Hero'

export default async function Home() {
  const data = await fetch('http://localhost:3000/api/pages')
  const json = await data.json()

  const page = json.docs[0]

  return (
    <div>
      <Hero
        title={page.title}
        description="Connected from Payload API"
      />
    </div>
  )
}