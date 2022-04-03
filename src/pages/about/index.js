import Head from 'next/head'
import React from 'react'
import Hero from '@components/Hero'

function About() {
    return (
        <>
            <Head>
                <title>About us - Pathways Telematics </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
        </>
    )
}

export default About
