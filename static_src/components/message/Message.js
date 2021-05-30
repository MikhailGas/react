import { Grid, withStyles } from '@material-ui/core';
import React from 'react';
import styles from './style';


class Message extends React.Component {
  

  render(){
    const { classes } = this.props;
    return (
      <Grid item xs={10} className={this.props.author == 'Пользователь' ? classes.user : classes.opponent}>
        <i>{this.props.author}</i>: <b>{this.props.text}</b>
      </Grid>
    )
  }
}

export default withStyles(styles) (Message);