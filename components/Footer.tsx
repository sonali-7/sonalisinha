import profileData from '@/data/profile.json'

export default function Footer() {
    const { socialLinks, name } = profileData.personalInfo
    const links = [
        socialLinks.github && { href: socialLinks.github, label: 'GitHub' },
        socialLinks.linkedin && { href: socialLinks.linkedin, label: 'LinkedIn' },
        socialLinks.substack && { href: socialLinks.substack, label: 'Substack' },
    ].filter(Boolean) as { href: string; label: string }[]

    return (
        <footer className="border-t border-gray-200 py-4">
            <div className="section-container flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-gray-600">
                <p>© {new Date().getFullYear()} {name}</p>
                <p>
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
            </div>
        </footer>
    )
}
