type Service = {
  id: string
  title: string
  description: string
}

type Props = {
  services: Service[]
}

export const ServicesSection = ({ services }: Props) => {
  return (
    <section className="py-20">

      <h2 className="text-4xl font-bold mb-10">
        Our Services
      </h2>

      <div className="grid grid-cols-3 gap-6">

        {services.map((service) => (

          <div
            key={service.id}
            className="border rounded-xl p-6"
          >
            <h3 className="text-2xl font-semibold mb-3">
              {service.title}
            </h3>

            <p>
              {service.description}
            </p>
          </div>

        ))}

      </div>

    </section>
  )
}