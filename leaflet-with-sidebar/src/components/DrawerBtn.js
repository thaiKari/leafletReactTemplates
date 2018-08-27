import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import classNames from 'classnames';

const drawerWidth = 300;

const styles = theme => ({
    drawerButton: {
        margin: 0,
        padding: 0,
        border: 'none',
        outline: 'none',
        height: 50
      },
      'buttonDivOpen': {
        position: 'absolute',
        top: '50%',
        left: drawerWidth,
        zIndex: 10000,
        transition: theme.transitions.create('left', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        })
      },
      'buttonDivClosed': {
        position: 'absolute',
        top: '50%',
        left: 0,
        zIndex: 10000,
        transition: theme.transitions.create('left', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        })
      }
});


class DrawerBtn extends React.Component {
  state = {
    anchor: 'left',
  };

  render() {
    const { classes, drawerColor, drawerOpen } = this.props;

    var buttonClassName = drawerOpen? 'buttonDivOpen' : 'buttonDivClosed';
    var buttonIcon = drawerOpen? <ChevronLeftIcon/> : <ChevronRightIcon/>    

    return (
    <div className={classNames(classes[`${buttonClassName}`]) } >
        <button 
          style={{backgroundColor: drawerColor}}
          className={classNames(classes.drawerButton)}
          onClick={this.props.handleDrawerToggle} >
          {buttonIcon}
        </button >
    </div>
    );

  }
}

DrawerBtn.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(DrawerBtn);