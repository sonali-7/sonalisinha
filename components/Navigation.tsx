'use client'

import Link from 'next/link'

export default function Navigation() {
    const navLinks = [
        { href: '#home', label: 'Home' },
        { href: '#projects', label: 'Projects' },
        { href: '#research', label: 'Research' },
        { href: 'https://substack.com/home/post/p-193035785', label: 'Blog' },
    ]

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200">
            <div className="max-w-3xl mx-auto px-5 sm:px-6">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-3">
                    <Link href="#home" className="text-sm font-bold text-gray-900">
                        Sonali Sinha
                    </Link>
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm text-gray-700 hover:text-gray-900 hover:underline underline-offset-2"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
