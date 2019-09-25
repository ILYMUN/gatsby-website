import React from "react"
import { graphql } from "gatsby"

class AboutPage extends React.Component {

    constructor(props) {
        super(props)
        this.data = props.data
    }

    render () {
        // const { markdownRemark } = this.props // data.markdownRemark holds our post data
        // const { frontmatter, html } = markdownRemark

        return (
            <div>
                <h1>Hey ya!</h1>
                {/* <div className="blog-post-container">
                    <div className="blog-post">
                    <h1>{frontmatter.title}</h1>
                    <h2>{frontmatter.date}</h2>
                    <div
                        className="blog-post-content"
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                    </div>
                </div> */}
            </div>
        )
    }
}

  
export const pageQuery = graphql`
{
    markdownRemark(frontmatter: {page: {eq: "about"}}) {
        frontmatter {
            page
        }
        html
    }
}
`

export default AboutPage