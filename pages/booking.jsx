import React from 'react';
import Footer from './components/Footer';
import Layout from './layouts/Layout';
import Booking_C from './components/Booking_C';

function Booking() {
    return (
        <Layout>
            <section className="banner-wrap other-bg">
                <div className="overlay"></div>
                <Booking_C />
                <Footer />
            </section>
        </Layout>
    )
}

export default Booking
