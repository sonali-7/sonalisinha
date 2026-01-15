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
    <section id="education" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="space-y-6">
          {education.map((item) => (
            <div key={item.id} className="card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.degree}
                  </h3>
                  <p className="text-xl text-primary-600 mb-1">
                    {item.institution}
                  </p>
                  <p className="text-gray-600 mb-2">{item.location}</p>
                </div>
                <div className="text-gray-500 font-medium">
                  {item.period}
                </div>
              </div>
              {item.description && (
                <p className="text-gray-700 mb-2">{item.description}</p>
              )}
              {item.gpa && (
                <p className="text-gray-600">
                  <span className="font-semibold">GPA:</span> {item.gpa}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

