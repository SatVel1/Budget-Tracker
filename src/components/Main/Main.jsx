import React, { useContext } from "react";
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from "@material-ui/core";
import { ExpenseTrackerContext } from "../../context/context";

import makeStyles from "./styles";
import Form from "./Form/Form";
import List from "./List/List";
import InfoCard from "../InfoCard";

const Main = () => {
  const classes = makeStyles();

  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
        <CardHeader title="Expense Tracker">
        </CardHeader>
        <CardContent>
            <Typography align="center" variant="h5">
                Total Balance ${ balance }
            </Typography>
            <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px'}}>
                <InfoCard></InfoCard>
            </Typography>
            <Divider className={classes.divider}></Divider>
            <Form></Form>
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <List></List>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main;