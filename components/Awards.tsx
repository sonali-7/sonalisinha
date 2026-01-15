interface Award {
    id: string
    title: string
    organization: string
    year: string
    description?: string
}

interface AwardsProps {
    awards: Award[]
}

export default function Awards({ awards }: AwardsProps) {
    if (!awards || awards.length === 0) return null

    return (
        <section id="awards" className="py-16 bg-gray-50">
            <div className="section-container">
                <h2 className="section-title">Awards & Honors</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {awards.map((award) => (
                        <div key={award.id} className="card">
                            <div className="flex items-start justify-between mb-3">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {award.title}
                                    </h3>
                                    <p className="text-primary-600 font-medium">
                                        {award.organization}
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                                        {award.year}
                                    </span>
                                </div>
                            </div>
                            {award.description && (
                                <p className="text-gray-700 text-sm">{award.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

