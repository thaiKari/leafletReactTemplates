import PersistentDrawer from './components/PersistentDrawer';

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Map from './components/Map';
import DrawerBtn from './components/DrawerBtn';

const drawerWidth = 300;
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
    const { classes, theme } = this.props;
    const { anchor, DrawerOpen } = this.state;


    var buttonClassName = this.state.DrawerOpen? 'buttonDivOpen' : 'buttonDivClosed';
    var buttonIcon = this.state.DrawerOpen? <ChevronLeftIcon/> : <ChevronRightIcon/>

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
          drawerColor={drawerColor}/>
          
          </main>
        </div>
      </div>
    );
  }
}

PersistentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);
