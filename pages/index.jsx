import React from 'react'
import Welcome from './components/Welcome'
import Layout from './layouts/Layout'

function index() {
  return (
    <Layout>
      <section className="banner-wrap welcome-bg">
          <div className="overlay"></div>
          <Welcome />
      </section>
    </Layout>
  )
}

export default index;
