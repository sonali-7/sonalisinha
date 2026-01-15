interface Award {
    id: string
    title: string
    organization: string
    year: string
    description?: string
    link?: string
}

interface AwardsProps {
    awards: Award[]
}

export default function Awards({ awards }: AwardsProps) {
    if (!awards || awards.length === 0) return null

    return (
        <section id="awards" className="py-10 bg-gray-50">
            <div className="section-container">
                <h2 className="section-title">Awards & Honors</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {awards.map((award) => (
                        <div key={award.id} className="card flex flex-col">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                                        {award.title}
                                    </h3>
                                </div>
                                <div className="ml-2">
                                    <span className="px-3 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                                        {award.year}
                                    </span>
                                </div>
                            </div>
                            <p className="mb-2.5 text-primary-600 font-medium">
                                {award.organization}
                            </p>

                            {award.description && (
                                <p className="text-gray-700 text-sm">{award.description}</p>
                            )}
                            <div className="mt-auto pt-2">
                                {award.link && (
                                    <a
                                        href={award.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-1 text-primary-600 hover:text-primary-700 font-medium flex items-center"
                                    >
                                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Link
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

