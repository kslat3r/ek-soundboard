import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  card: {
    cursor: 'pointer'
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
  },
});

const Photo = (props) => {
  const {
    classes,
    item,
    onClick
  } = props;

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
    >
      <Card
        className={classes.card}
        onClick={() => onClick(item)}
      >
        <CardMedia
          className={classes.media}
          image={item.image}
        />
        </Card>
    </Grid>
  );
};

Photo.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
};


export default withStyles(styles)(Photo);
