'use client'

import { useState, useEffect } from 'react'
import { withBasePath } from '@/utils/path'

interface PersonalInfo {
    name: string
    title: string
    email: string
    location: string
    bio: string
    photo?: string
    socialLinks: {
        github?: string
        linkedin?: string
        substack?: string
    }
}

interface HeroProps {
    personalInfo: PersonalInfo
}

export default function Hero({ personalInfo }: HeroProps) {
    const [photoSrc, setPhotoSrc] = useState(personalInfo.photo || '')

    useEffect(() => {
        if (personalInfo.photo) {
            setPhotoSrc(withBasePath(personalInfo.photo))
        }
    }, [personalInfo.photo])

    const links = [
        personalInfo.socialLinks.github && { href: personalInfo.socialLinks.github, label: 'GitHub' },
        personalInfo.socialLinks.linkedin && { href: personalInfo.socialLinks.linkedin, label: 'LinkedIn' },
        personalInfo.socialLinks.substack && { href: personalInfo.socialLinks.substack, label: 'Substack' },
    ].filter(Boolean) as { href: string; label: string }[]

    return (
        <header id="home" className="pt-20 pb-1">
            <div className="section-container">
                <div className="flex items-start justify-between gap-6">
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                            {personalInfo.name}
                        </h1>
                        <p className="mt-1 text-base font-bold text-gray-900">
                            {personalInfo.title}
                        </p>
                        <p className="mt-4 text-sm leading-relaxed text-gray-800 max-w-2xl">
                            {personalInfo.bio}
                        </p>
                        <p className="mt-3 text-sm text-gray-700">
                            <a href={`mailto:${personalInfo.email}`} className="hover:underline">
                                {personalInfo.email}
                            </a>
                            <span className="mx-2 text-gray-400">·</span>
                            {personalInfo.location}
                        </p>
                        {links.length > 0 && (
                            <p className="mt-1 text-sm">
                                {links.map((link, index) => (
                                    <span key={link.label}>
                                        {index > 0 && <span className="mx-2 text-gray-400">·</span>}
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-900 underline underline-offset-2 hover:text-gray-600"
                                        >
                                            {link.label}
                                        </a>
                                    </span>
                                ))}
                            </p>
                        )}
                    </div>
                    {personalInfo.photo && (
                        <img
                            src={photoSrc}
                            alt={personalInfo.name}
                            className="hidden sm:block w-40 md:w-48 aspect-square object-cover flex-shrink-0 shadow-sm"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement
                                if (target.src.includes('/sonalisinha/')) {
                                    target.src = personalInfo.photo || ''
                                }
                            }}
                        />
                    )}
                </div>
            </div>
        </header>
    )
}
