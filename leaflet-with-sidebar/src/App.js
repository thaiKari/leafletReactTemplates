import PersistentDrawer from './components/PersistentDrawer';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Map from './components/Map';
import DrawerBtn from './components/DrawerBtn';

const drawerWidth = 400;
const drawerColor = '#ffffff';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },

  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
  },
  'content-left': {
    marginLeft: -drawerWidth,
  },
  'content-right': {
    marginRight: -drawerWidth,
  },
});



class App extends React.Component {
  state = {
    DrawerOpen: true,
    anchor: 'left',
  };

  handleDrawerToggle = () => {
    this.setState({ DrawerOpen: !this.state.DrawerOpen });
  };

  render() {
    const { classes } = this.props;
    const { DrawerOpen } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <PersistentDrawer 
          open={this.state.DrawerOpen}
          drawerWidth={drawerWidth}/>
          
          <main
            className={classNames(classes.content, classes[`content-left`], {
              [classes.contentShift]: DrawerOpen,
              [classes[`contentShift-left`]]: DrawerOpen,
            })}
          >
          <Map/>

          <DrawerBtn 
          handleDrawerToggle={this.handleDrawerToggle.bind(this)}
          drawerOpen={this.state.DrawerOpen}
          drawerColor={drawerColor}
          drawerWidth={drawerWidth}/>
          
          </main>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
