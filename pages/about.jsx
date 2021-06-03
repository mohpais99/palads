import React from 'react'
import About_C from './components/About_C'
import Footer from './components/Footer'
import Layout from './layouts/Layout'

function About() {
    return (
        <Layout>
            <section className="banner-wrap other-bg">
                <div className="overlay"></div>
                <About_C />
                <Footer />
            </section>
        </Layout>
    )
}

export default About
