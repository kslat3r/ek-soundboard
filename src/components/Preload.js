import React from 'react';
import PropTypes from 'prop-types';

const Preload = (props) => {
  const {
    items
  } = props;

  return (
    <React.Fragment>
      {items.map((item, i) => (
        <audio
          key={i}
          src={item.sound}
          autoPlay={true}
          preload="auto"
          muted={true}
        />
      ))}
    </React.Fragment>
  );
};

Preload.propTypes = {
  items: PropTypes.array.isRequired
};

export default Preload;
