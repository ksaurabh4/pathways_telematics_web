import Head from 'next/head'
import React from 'react'
import Feature from '@components/Feature'
import Seo from '@components/Seo'

function Features() {
    return (
        <>
            <Seo title='Features - Pathways Telematics' />
            <h1>Features Page</h1>
            <Feature />
        </>
    )
}

export default Features
