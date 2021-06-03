import React from 'react';
import Footer from './components/Footer';
import Profile_C from './components/Profile_C';
import Layout from './layouts/Layout';
import withAuthMember from '/helpers/withAuthMember';

function Profile(props) {
    return (
        <Layout>
            <section className="banner-wrap other-bg">
                <div className="overlay"></div>
                <Profile_C {...props.user} />
                <Footer/>
            </section>
        </Layout>
    )
}

export default withAuthMember(Profile);
