type HeroProps = {
  title: string
  description?: string
}

export const Hero = ({ title, description }: HeroProps) => {
  return (
    <section>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  )
}