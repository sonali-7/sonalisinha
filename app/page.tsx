import Hero from '@/components/Hero'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
import Research from '@/components/Research'
import Awards from '@/components/Awards'
import profileData from '@/data/profile.json'

export default function Home() {
    return (
        <div className="bg-gray-50">
            <Hero personalInfo={profileData.personalInfo} />
            <Education education={profileData.education} />
            <Research research={profileData.research} />
            <Projects projects={profileData.projects} />
            <Awards awards={profileData.awards} />
        </div>
    )
}

