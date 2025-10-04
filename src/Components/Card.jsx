import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ image, title, description, className = '' }) {
    return (
        <div className={`card ${className}`.trim()}>
            {image && <img src={image} alt={title || 'card image'} />}
            {title && <h2>{title}</h2>}
            {description && <p>{description}</p>}
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string,
};

Card.defaultProps = {
    image: null,
    title: '',
    description: '',
    className: '',
};
