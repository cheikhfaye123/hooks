// components/CharacterCard.js
import React from 'react';

const CharacterCard = ({ title, name, image }) => (
    <div>
        <h2>{title}</h2>
        <p>{name}</p>
        <img src={image} alt={name} />
    </div>
);

export default CharacterCard;
