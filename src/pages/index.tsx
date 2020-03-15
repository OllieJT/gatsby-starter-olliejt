import { graphql } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Layout from '../wrappers/Layout';
import SEO from '../components/SEO';

interface Props {
	data: object;
}

const Demo = styled.div`
	margin-top: 10vh;
	ul {
		display: flex;
		flex-direction: row;
	}
	li {
		display: block;
		min-height: 40px;
		min-width: 40px;
		background-color: rgba(255, 255, 0, 0.25);
		margin: 4px;
		border-radius: 15px;
		border: 1px solid var(--color-level-low);
	}
	ul.level {
		li:nth-child(1) {
			background-color: var(--color-level-bottom);
		}
		li:nth-child(2) {
			background-color: var(--color-level-lower);
		}
		li:nth-child(3) {
			background-color: var(--color-level-low);
		}
		li:nth-child(4) {
			background-color: var(--color-level-middle);
		}
		li:nth-child(5) {
			background-color: var(--color-level-high);
		}
		li:nth-child(6) {
			background-color: var(--color-level-higher);
		}
	}
	ul.content {
		li:nth-child(1) {
			background-color: var(--color-content-low);
		}
		li:nth-child(2) {
			background-color: var(--color-content-middle);
		}
		li:nth-child(3) {
			background-color: var(--color-content-high);
		}
	}
	ul.red {
		li:nth-child(1) {
			background-color: var(--color-utility-red-low);
		}
		li:nth-child(2) {
			background-color: var(--color-utility-red-middle);
		}
		li:nth-child(3) {
			background-color: var(--color-utility-red-high);
		}
	}
	ul.blue {
		li:nth-child(1) {
			background-color: var(--color-utility-blue-low);
		}
		li:nth-child(2) {
			background-color: var(--color-utility-blue-middle);
		}
		li:nth-child(3) {
			background-color: var(--color-utility-blue-high);
		}
	}
	ul.green {
		li:nth-child(1) {
			background-color: var(--color-utility-green-low);
		}
		li:nth-child(2) {
			background-color: var(--color-utility-green-middle);
		}
		li:nth-child(3) {
			background-color: var(--color-utility-green-high);
		}
	}
	ul.yellow {
		li:nth-child(1) {
			background-color: var(--color-utility-yellow-low);
		}
		li:nth-child(2) {
			background-color: var(--color-utility-yellow-middle);
		}
		li:nth-child(3) {
			background-color: var(--color-utility-yellow-high);
		}
	}
	ul.primary {
		li:nth-child(1) {
			background-color: var(--color-primary-bottom);
		}
		li:nth-child(2) {
			background-color: var(--color-primary-lower);
		}
		li:nth-child(3) {
			background-color: var(--color-primary-low);
		}
		li:nth-child(4) {
			background-color: var(--color-primary-middle);
		}
		li:nth-child(5) {
			background-color: var(--color-primary-high);
		}
		li:nth-child(6) {
			background-color: var(--color-primary-higher);
		}
	}
`;

export default ({ data }: Props) => (
	<Layout hasSEO={false}>
		{console.log(data)}
		<SEO title="OllieJT" />
		<Container isRestricted>
			<Demo>
				<ul className="primary">
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
				</ul>
				<ul className="level">
					<li />
					<li />
					<li />
					<li />
					<li />
					<li />
				</ul>
				<ul className="content">
					<li />
					<li />
					<li />
				</ul>
				<ul className="red">
					<li />
					<li />
					<li />
				</ul>
				<ul className="blue">
					<li />
					<li />
					<li />
				</ul>
				<ul className="green">
					<li />
					<li />
					<li />
				</ul>
				<ul className="yellow">
					<li />
					<li />
					<li />
				</ul>
			</Demo>
		</Container>
		<Container isRestricted isRichText insidePadding>
			<h1>If you fucking give up, you will achieve nothing.</h1>
			<h2>Practice won’t get you anywhere if you mindlessly fucking practice the same thing.</h2>
			<h3>Change only occurs when you work deliberately with purpose toward a goal.</h3>
			<h4>When you sit down to work, external critics aren’t the enemy.</h4>
			<h5>It’s you who you must to fight against to do great fucking work.</h5>
			<h6>You must overcome yourself.</h6>
			<p>
				If you’re not being fucking honest with yourself how could you ever hope to communicate something
				meaningful to someone else? <mark>Don’t fucking lie to yourself</mark>. While having drinks with Tibor
				Kalman one night, he told me, “When you make something no one hates, no one fucking loves it.” The
				graphic designer’s first fucking consideration is always the size and shape of the format, whether for
				the printed page or for digital display.
			</p>
			<p>
				A good fucking composition is the result of a hierarchy consisting of clearly contrasting elements set
				with distinct alignments containing <a href=".">irregular intervals</a> of negative space. Creativity is
				a fucking work-ethic. Can we all just agree as the greater design community to stop fucking talking
				about Comic Sans altogether? It’s getting fucking old. Why are you fucking reading all of this? Get back
				to work.
			</p>
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
