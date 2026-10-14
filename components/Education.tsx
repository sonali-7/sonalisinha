interface EducationItem {
    id: string
    degree: string
    institution: string
    location: string
    period: string
    description?: string
    gpa?: string
}

interface EducationProps {
    education: EducationItem[]
}

export default function Education({ education }: EducationProps) {
    if (!education || education.length === 0) return null

    return (
        <section id="education" className="py-4">
            <div className="section-container">
                <h2 className="section-title">Education</h2>
                <div className="space-y-5">
                    {education.map((item) => (
                        <article key={item.id}>
                            <div className="flex items-baseline justify-between gap-4">
                                <h3 className="entry-title">{item.degree}</h3>
                                <span className="entry-meta shrink-0">{item.period}</span>
                            </div>
                            <p className="entry-meta">
                                {item.institution}
                                {item.location ? `, ${item.location}` : ''}
                            </p>
                            {item.description && (
                                <p className="entry-body">{item.description}</p>
                            )}
                            {item.gpa && (
                                <p className="entry-body">
                                    <span className="font-bold">GPA.</span> {item.gpa}
                                </p>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
