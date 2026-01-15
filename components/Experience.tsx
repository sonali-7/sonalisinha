interface ExperienceItem {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements?: string[]
}

interface ExperienceProps {
  experience: ExperienceItem[]
}

export default function Experience({ experience }: ExperienceProps) {
  if (!experience || experience.length === 0) return null

  return (
    <section id="experience" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="space-y-6">
          {experience.map((item) => (
            <div key={item.id} className="card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xl text-primary-600 mb-1">
                    {item.company}
                  </p>
                  <p className="text-gray-600 mb-2">{item.location}</p>
                </div>
                <div className="text-gray-500 font-medium">
                  {item.period}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{item.description}</p>
              {item.achievements && item.achievements.length > 0 && (
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  {item.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

