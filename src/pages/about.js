import React from "react"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      <Header headerText={data.site.siteMetadata.title} />
      <p>Such wow. Very React.</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
