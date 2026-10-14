'use client'

import { useEffect, useState } from 'react'
import { withBasePath } from '@/utils/path'

interface Project {
    id: string
    title: string
    description: string
    technologies?: string[]
    period: string
    link?: string
    github?: string
    image?: string
}

interface ProjectsProps {
    projects: Project[]
}

function useAssetSrc(path?: string) {
    const [src, setSrc] = useState(path || '')

    useEffect(() => {
        if (path) setSrc(withBasePath(path))
    }, [path])

    return src
}

function ProjectImage({ project, className }: { project: Project; className?: string }) {
    const src = useAssetSrc(project.image)

    if (!project.image) return null

    return (
        <img
            src={src}
            alt=""
            className={className}
            onError={(e) => {
                const target = e.target as HTMLImageElement
                if (target.src.includes('/sonalisinha/')) {
                    target.src = project.image || ''
                }
            }}
        />
    )
}

function ProjectArticle({ project, onClose }: { project: Project; onClose: () => void }) {
    useEffect(() => {
        const onKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', onKey)
        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', onKey)
            document.body.style.overflow = previousOverflow
        }
    }, [onClose])

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            role="presentation"
            onClick={onClose}
        >
            <div className="absolute inset-0 bg-black/40" />
            <article
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-article-title"
                className="relative z-10 w-full max-w-2xl bg-white border border-gray-300 shadow-lg"
                onClick={(event) => event.stopPropagation()}
            >
                <ProjectImage project={project} className="w-full h-96 object-cover" />
                <div className="p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                        <h3 id="project-article-title" className="text-lg font-bold text-gray-900">
                            {project.title}
                        </h3>
                        <button
                            type="button"
                            onClick={onClose}
                            className="shrink-0 text-lg text-gray-500 hover:text-gray-900"
                            aria-label="Close"
                        >
                            &times;
                        </button>
                    </div>
                    <p className="mt-1 text-sm text-gray-600">{project.period}</p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-800">
                        {project.description}
                    </p>
                    {project.technologies && project.technologies.length > 0 && (
                        <p className="mt-3 text-sm leading-relaxed text-gray-800">
                            <span className="font-bold">Skills.</span>{' '}
                            {project.technologies.join(', ')}
                        </p>
                    )}
                    {(project.github || project.link) && (
                        <p className="mt-4 text-sm">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold underline underline-offset-2 hover:text-gray-600"
                                >
                                    Code
                                </a>
                            )}
                            {project.github && project.link && (
                                <span className="mx-2 text-gray-400">·</span>
                            )}
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold underline underline-offset-2 hover:text-gray-600"
                                >
                                    Link
                                </a>
                            )}
                        </p>
                    )}
                </div>
            </article>
        </div>
    )
}

export default function Projects({ projects }: ProjectsProps) {
    const [selectedId, setSelectedId] = useState<string | null>(null)

    if (!projects || projects.length === 0) return null

    const selected = projects.find((project) => project.id === selectedId) || null

    return (
        <section id="projects" className="py-4">
            <div className="section-container">
                <h2 className="section-title">Projects</h2>
                <div className="project-scroller flex gap-3 overflow-x-auto snap-x snap-mandatory pb-3">
                    {projects.map((project) => (
                        <button
                            key={project.id}
                            type="button"
                            onClick={() => setSelectedId(project.id)}
                            aria-label={`Open ${project.title}`}
                            className="group relative snap-start shrink-0 w-[78%] sm:w-[30%] aspect-[4/3] overflow-hidden bg-gray-100 text-left"
                        >
                            <ProjectImage
                                project={project}
                                className="h-full w-full object-cover"
                            />
                            <span className="pointer-events-none absolute inset-0 flex items-end bg-black/55 p-3 text-sm font-bold leading-snug text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
                                {project.title}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            {selected && (
                <ProjectArticle project={selected} onClose={() => setSelectedId(null)} />
            )}
        </section>
    )
}
