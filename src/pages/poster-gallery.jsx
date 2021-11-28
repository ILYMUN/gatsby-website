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
        <div id="grid" style="display:grid;grid-template-columns: repeat(3, 1fr);grid-gap: 10px;">
          <img href={frontmatter.fichier1}>
          <img href={frontmatter.fichier2} >
          <img href={frontmatter.fichier3} >
          <img href={frontmatter.fichier4} >
          <img href={frontmatter.fichier5} >
          <img href={frontmatter.fichier6} >
          <img href={frontmatter.fichier7} >
          <img href={frontmatter.fichier8} >
          <img href={frontmatter.fichier9} >
          <img href={frontmatter.fichier10} >
          <img href={frontmatter.fichier11} >
        </div>
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
        fichier1
        fichier2
        fichier3
        fichier4
        fichier5
        fichier6
        fichier7
        fichier8
        fichier9
        fichier10
        fichier11
      }
    }
  }
`;
