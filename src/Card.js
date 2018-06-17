import React from 'react';
import PropTypes from 'prop-types';

const Card = ({onClick, color, index, isMatched, isHidden, id}) => {
  return (
    <div
      style={{
        backgroundColor: isMatched || !isHidden ? color : 'lightgray',
        border: '6px solid lightgray',
        display: 'flex',
        justifyContent: 'center',
        minWidth: '150px',
        width: 'calc(25% - 10px - 12px)',
        borderRadius: '50px',
        margin: '5px',
        fontSize: '4em',
        color: '#fff',
        alignItems: 'center',
        transition: 'background-color .3s ease-in-out'      }}
      onClick={() => onClick(color, id)}
    >{index + 1}</div>
  )
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired, 
  isHidden: PropTypes.bool.isRequired,
  isMatched: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
}

export default Card;