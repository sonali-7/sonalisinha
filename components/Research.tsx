interface Publication {
  title: string
  authors: string
  venue: string
  year: string
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
    <section id="research" className="py-16 bg-white">
      <div className="section-container">
        <h2 className="section-title">Research</h2>
        <div className="space-y-8">
          {research.map((item) => (
            <div key={item.id} className="card">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xl text-primary-600 mb-1">
                    {item.institution}
                  </p>
                </div>
                <div className="text-gray-500 font-medium">
                  {item.period}
                </div>
              </div>
              <p className="text-gray-700 mb-4">{item.description}</p>
              
              {item.keywords && item.keywords.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              )}

              {item.publications && item.publications.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-3">Publications</h4>
                  <div className="space-y-3">
                    {item.publications.map((pub, index) => (
                      <div key={index} className="text-gray-700">
                        <p className="font-medium mb-1">
                          {pub.link ? (
                            <a
                              href={pub.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary-600 hover:text-primary-700 hover:underline"
                            >
                              {pub.title}
                            </a>
                          ) : (
                            pub.title
                          )}
                        </p>
                        <p className="text-sm text-gray-600">{pub.authors}</p>
                        <p className="text-sm text-gray-600">
                          {pub.venue}, {pub.year}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

