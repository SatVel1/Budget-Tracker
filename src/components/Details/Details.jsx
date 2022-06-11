import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import useTransactions from "../../useTransactions";

import makeStyles from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({ title }) => {
  const classes = makeStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
        <CardHeader title={ title }></CardHeader>
        <CardContent>
            <Typography variant="h5" align="center">${ total }</Typography>
            <Doughnut data={ chartData }></Doughnut>
        </CardContent>
    </Card>
  )
}

export default Details