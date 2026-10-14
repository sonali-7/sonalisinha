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
        <section id="awards" className="py-4">
            <div className="section-container">
                <h2 className="section-title">Awards & Honors</h2>
                <div className="space-y-5">
                    {awards.map((award) => (
                        <article key={award.id}>
                            <div className="flex items-baseline justify-between gap-4">
                                <h3 className="entry-title">
                                    {award.link ? (
                                        <a
                                            href={award.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="underline underline-offset-2 hover:text-gray-600"
                                        >
                                            {award.title}
                                        </a>
                                    ) : (
                                        award.title
                                    )}
                                </h3>
                                <span className="entry-meta shrink-0">{award.year}</span>
                            </div>
                            <p className="entry-meta">{award.organization}</p>
                            {award.description && (
                                <p className="entry-body">{award.description}</p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
