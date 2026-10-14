interface Publication {
    title: string
    authors: string
    venue?: string
    year?: string
    link?: string
}

interface ResearchItem {
    id: string
    title: string
    description: string
    institution: string
    period: string
    publications?: Publication[]
    keywords?: string[]
}

interface ResearchProps {
    research: ResearchItem[]
}

export default function Research({ research }: ResearchProps) {
    if (!research || research.length === 0) return null

    return (
        <section id="research" className="py-4">
            <div className="section-container">
                <h2 className="section-title">Research</h2>
                <div className="space-y-5">
                    {research.map((item) => (
                        <article key={item.id}>
                            <div className="flex items-baseline justify-between gap-4">
                                <h3 className="entry-title">{item.title}</h3>
                                <span className="entry-meta shrink-0">{item.period}</span>
                            </div>
                            <p className="entry-meta">{item.institution}</p>
                            <p className="entry-body">{item.description}</p>
                            {item.keywords && item.keywords.length > 0 && (
                                <p className="entry-body">
                                    <span className="font-bold">Skills.</span>{' '}
                                    {item.keywords.join(', ')}
                                </p>
                            )}
                            {item.publications && item.publications.length > 0 && (
                                <div className="mt-2 space-y-2">
                                    {item.publications.map((pub, index) => (
                                        <div key={index}>
                                            <p className="text-sm font-bold text-gray-900">Poster</p>
                                            <p className="text-sm text-gray-800">
                                                {pub.link ? (
                                                    <a
                                                        href={pub.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="underline underline-offset-2 hover:text-gray-600"
                                                    >
                                                        {pub.title}
                                                    </a>
                                                ) : (
                                                    pub.title
                                                )}
                                            </p>
                                            <p
                                                className="text-sm text-gray-600"
                                                dangerouslySetInnerHTML={{ __html: pub.authors }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
