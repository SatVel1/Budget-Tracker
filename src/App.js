import React, { useEffect,  useRef } from "react";
import { Divider, Grid } from "@material-ui/core";

import Main from "./components/Main/Main";
import Details from "./components/Details/Details";
import { PushToTalkButton, PushToTalkButtonContainer } from "@speechly/react-ui";
// import { SpeechState, useSpeechContext } from "@speechly/react-client";

import makeStyles from "./styles";

const App = () => {
  const classes = makeStyles();

//   const { speechState } = useSpeechContext();
//   const main = useRef(null)

//   const executeScroll = () => main.current.scrollIntoView()    

//   useEffect(() => {
//     if (speechState === SpeechState.Recording) {
//       executeScroll();
//     }
//   }, [speechState]);

  return (
    <div>
        <Grid className={classes.grid} container spacing={0} alignItems="center" justifyContent="center" style={{ height: '100vh' }}>
            <Grid item xs={12} sm={4} className={classes.mobile}>
                <Details title="Income"></Details>
            </Grid>
            <Grid item xs={12} sm={3} className={classes.main}>
                <Main></Main>
            </Grid> 
            <Grid item xs={12} sm={4} className={classes.desktop}>
                <Details title="Income"></Details>
            </Grid>
            <Grid item xs={12} sm={4} className={classes.last}>
                <Details title="Expense"></Details>
            </Grid>
        </Grid>
        <PushToTalkButtonContainer>
            <PushToTalkButton>
                
            </PushToTalkButton>
        </PushToTalkButtonContainer>
    </div>
  )
}

export default App;