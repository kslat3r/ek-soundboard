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
          src={item.sound}
          preload="auto"
        />
      ))}
    </React.Fragment>
  );
};

Preload.propTypes = {
  items: PropTypes.array.isRequired
};

export default Preload;
