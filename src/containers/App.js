import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import items from '../items';
import Grid from '@material-ui/core/Grid';
import Photo from '../components/Photo';
import Preload from '../components/Preload';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    backgroundColor: '#000',
    padding: theme.spacing.unit,
  }
});

class App extends React.Component {
  constructor (props) {
    super(props);

    this.playSound = this.playSound.bind(this);

    this.state = {
      audio: null
    }
  }

  playSound (item) {
    if (this.state.audio) {
      this.state.audio.pause();
    }

    const audio = new Audio(item.sound);

    audio.play();

    this.setState({
      audio
    })
  }

  render () {
    const {
      classes
    } = this.props;

    return (
      <React.Fragment>
        <Grid
          className={classes.container}
          container
          spacing={8}
        >
          {items.map((item, i) => (
            <Photo
              key={i}
              item={item}
              onClick={this.playSound}
            />
          ))}
        </Grid>
        <Preload
          items={items}
        />
      </React.Fragment>
    );
  }
};

App.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(App);
