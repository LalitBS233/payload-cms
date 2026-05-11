import { ServicesSection } from '@/components/ServicesSection'
import { DynamicForm } from '@/components/DynamicForm'

export default async function HomePage() {

    // SERVICES API
    const servicesResponse = await fetch(
        'http://localhost:3000/api/services',
        {
            cache: 'no-store',
        }
    )

    const servicesData = await servicesResponse.json()

    // FORMS API
    const formResponse = await fetch(
        'http://localhost:3000/api/forms?depth=2',
        {
            cache: 'no-store',
        }
    )

    const formData = await formResponse.json()

    // DYNAMIC FORM
    const form = formData?.docs?.[0]

    // SAFE FIELDS
    const fields = form?.fields || []

    return (
        <main className="container mx-auto px-6">

            {/* HERO SECTION */}
            <section className="py-20">

                <h1 className="text-6xl font-bold mb-6">
                    Modern HR Solutions
                </h1>

                <p className="text-xl text-gray-400">
                    Dynamic website powered by Payload CMS
                </p>

            </section>

            {/* SERVICES */}
            <ServicesSection services={servicesData?.docs || []} />

            {/* FORM */}
            {fields.length > 0 && (
                <DynamicForm fields={fields} />
            )}

        </main>
    )
}