import Head from 'next/head'
import React from 'react'
import Hero from '@components/Hero'
import Seo from '@components/Seo'

function About() {
    return (
        <>
            <Seo title='About - Pathways Telematics' />
            <Hero />
        </>
    )
}

export default About
