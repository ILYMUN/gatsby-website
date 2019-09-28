import React from "react";
import { graphql } from "gatsby";

import "../../static/css/plain-page.css";

import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;

  const plainPage = (
    <div class="plainPage">
      <Navbar />

      <div id="content" class="container" style={{ marginBottom: "100px" }}>
        {frontmatter.title ? <h1 class="title">{frontmatter.title}</h1> : ""}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>

      <Footer />
    </div>
  );

  return plainPage;
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
