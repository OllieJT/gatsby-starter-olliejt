import React from "react"
import PropTypes from "prop-types"

const CoreImage = ({ src, alt, width, height }) => <img src={src} alt={alt} width={width} height={height} />

const Image = props => {
	const hasCaption = props.caption ? true : false
	switch (hasCaption) {
		case true:
			return (
				<figure>
					<CoreImage {...props} />
					<figcaption>
						<p>{props.caption}</p>
					</figcaption>
				</figure>
			)
		case false:
		default:
			return <CoreImage {...props} />
	}
}

Image.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	width: PropTypes.number,
	height: PropTypes.number,
	caption: PropTypes.string,
}

export default Image
