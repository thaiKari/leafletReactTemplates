import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const drawerWidth = 300;

const styles = theme => ({
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar,
  }
});


class PersistentDrawer extends React.Component {
  state = {
    anchor: 'left',
  };

  render() {
    const { classes, open, drawerWidth } = this.props;

    return (
      <Drawer
        style={{width:drawerWidth}}
        variant="persistent"
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      HI
      </Drawer>
    );

  }
}

export default withStyles(styles, { withTheme: true })(PersistentDrawer);