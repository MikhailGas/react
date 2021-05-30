import { Container, Grid, withStyles } from '@material-ui/core';
import React from 'react';
import ChatList from '../chatlist/ChatList';
import MessageField from '../messagelist/MessageField';
import styles from './style';



class Layout extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div >
        <Container maxWidth="xl" className={classes.messenger}>
            
            <Grid item xs={12} className={classes.header} container alignItems='center' justify="center">
                    Проект "Мессенджер"
            </Grid>
            <Grid container alignItems="stretch" >
                
                <Grid item xs={3} className={classes.chatlist}>
                    <ChatList />
                </Grid>
                <Grid item container xs={9} >
                    <MessageField  />
                </Grid>
                
            </Grid>
            
            
        </Container>
        
      </div>
    )
  }
}

export default withStyles(styles) (Layout);