import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import ArtGallery from '../components/ArtGallery'

export default function art() {
  return (
    <div>
      <Layout>
        <Head>
          <title>Artwork</title>
        </Head>
        <ArtGallery />
      </Layout>
    </div>
  )
}
