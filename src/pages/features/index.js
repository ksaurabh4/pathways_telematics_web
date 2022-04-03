import Head from 'next/head'
import React from 'react'
import Feature from '@components/Feature'

function Features() {
    return (
        <>
            <Head>
                <title>Features - Pathways Telematics </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Features Page</h1>
            <Feature />
        </>
    )
}

export default Features
