import Head from 'next/head'
import React from 'react'
import Seo from '@components/Seo'
import Contact from '@components/Contact'

function ContactPage() {
    return (
        <>
            <Seo title='Contact - Pathways Telematics' />
            <Contact />
        </>
    )
}

export default ContactPage
