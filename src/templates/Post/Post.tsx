import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../../components/Bio/Bio';
import Layout from '../../components/common/Layout/Layout';
import SEO from '../../components/common/SEO/SEO';
import PostHeader from '../../components/PostHeader/PostHeader';
import Post from '../../types/post';

import styles from './Post.module.scss';

const BlogPostTemplate = ({ data, location }) => {
	const post: { frontmatter: Post } = data.markdownRemark;
	const { previous, next } = data;

	return (
		<Layout>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>
			<article
				className={styles.post}
				itemScope
				itemType="http://schema.org/Article"
			>
				<PostHeader
					date={post.frontmatter.date}
					title={post.frontmatter.title}
				/>

				<section
					className={styles.postContent}
					itemProp="articleBody"
					dangerouslySetInnerHTML={{ __html: post.html }}
				/>

				{/* <footer>
					<Bio />
				</footer> */}
			</article>
			{/* <nav className="blog-post-nav">
				<ul
					style={{
						display: `flex`,
						flexWrap: `wrap`,
						justifyContent: `space-between`,
						listStyle: `none`,
						padding: 0,
					}}
				>
					<li>
						{previous && (
							<Link to={previous.fields.slug} rel="prev">
								← {previous.frontmatter.title}
							</Link>
						)}
					</li>
					<li>
						{next && (
							<Link to={next.fields.slug} rel="next">
								{next.frontmatter.title} →
							</Link>
						)}
					</li>
				</ul>
			</nav> */}
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
	query BlogPostBySlug(
		$id: String!
		$previousPostId: String
		$nextPostId: String
	) {
		site {
			siteMetadata {
				title
			}
		}
		markdownRemark(id: { eq: $id }) {
			id
			excerpt(pruneLength: 160)
			html
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				description
			}
		}
		previous: markdownRemark(id: { eq: $previousPostId }) {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
		next: markdownRemark(id: { eq: $nextPostId }) {
			fields {
				slug
			}
			frontmatter {
				title
			}
		}
	}
`;
