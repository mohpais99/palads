import React from 'react';
import Field_C from './components/Field_C';
import Footer from './components/Footer';
import Layout from './layouts/Layout';

function Field() {
    return (
        <Layout>
            <section className="banner-wrap other-bg">
                <div className="overlay"></div>
                <Field_C />
                <Footer />
            </section>
        </Layout>
    )
}

export default Field;