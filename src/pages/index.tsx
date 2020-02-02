import { graphql } from 'gatsby';
import React from 'react';
import Button from '../components/Button';
import Container from '../components/Container';
import Header from '../components/Header';
import Layout from '../components/Layout';
import SEO from '../components/Layout/SEO';

interface Props {
	data: object;
}

export default ({ data }: Props) => (
	<Layout hasSEO={false}>
		{console.log(data)}
		<SEO
			title="OllieJT"
			keywords={[
				'portfolio',
				'ollie',
				'taylor',
				'olliejt',
				'theolliejt',
				'designer',
				'product designer',
				'esports',
				'gaming',
			]}
		/>
		<Header />
		<Container isRestricted isRichText hasOuterPadding hasInnerPadding>
			<h1>
				Heading One
				<br />
				Creativity is a fucking work-ethic.
			</h1>
			<h2>
				Heading Two
				<br />
				Creativity is a fucking work-ethic.
			</h2>
			<h3>
				Heading Three
				<br />
				Creativity is a fucking work-ethic.
			</h3>
			<h4>
				Heading Four
				<br />
				Creativity is a fucking work-ethic.
			</h4>
			<h5>
				Heading Five
				<br />
				Creativity is a fucking work-ethic.
			</h5>
			<h6>
				Heading Six
				<br />
				Creativity is a fucking work-ethic.
			</h6>
			<p>
				Creativity is a fucking work-ethic. Can we all just agree as the greater design community to stop
				fucking talking about Comic Sans altogether? It’s getting fucking old. Never, never assume that what you
				have achieved is fucking good enough. Why are you fucking reading all of this? Get back to work. Use
				your fucking hands. Dedicate yourself to lifelong fucking learning. If you’re not being fucking honest
				with yourself how could you ever hope to communicate something meaningful to someone else? Practice
				won’t get you anywhere if you mindlessly fucking practice the same thing. Change only occurs when you
				work deliberately with purpose toward a goal. To surpass others is fucking tough, if you only do as you
				are told you don’t have it in you to succeed.
				<br />
				<br /> Design is all about fucking relationships—the relationship of form and content, the relationship
				of elements, the relationship of designer and user. Never let your guard down by thinking you’re fucking
				good enough. A good fucking composition is the result of a hierarchy consisting of clearly contrasting
				elements set with distinct alignments containing irregular intervals of negative space. Widows and
				orphans are terrible fucking tragedies, both in real life and definitely in
			</p>
			<p>
				Can we all just agree as the greater design community to stop fucking talking about Comic Sans
				altogether? It’s getting fucking old. Never, never assume that what you have achieved is fucking good
				enough. Why are you fucking reading all of this? Get back to work. Use your fucking hands.
			</p>
			<Button />
		</Container>
	</Layout>
);

export const query = graphql`
	query homePageQuery {
		allFile(filter: { name: { in: ["avatar-thailand", "photo-shanghai-s", "hero-video"] } }) {
			edges {
				node {
					name
					relativePath
				}
			}
		}
	}
`;
