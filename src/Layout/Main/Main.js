import React, { useState } from "react";
import classes from "./Main.module.scss";
import Card from "../../components/Card/Card";
import Avatar from "../../images/image-jeremy.png";
import ClearButton from "../../components/Buttons/ClearButton/ClearButton";
import IconWork from "../../images/icon-work.svg";
import IconPlay from "../../images/icon-play.svg";
import IconStudy from "../../images/icon-study.svg";
import IconExercise from "../../images/icon-exercise.svg";
import IconSocial from "../../images/icon-social.svg";
import IconSelfCare from "../../images/icon-self-care.svg";

const iconList = [
  {
    color: "hsl(15, 100%, 70%)",
    icon: IconWork,
  },
  {
    color: "hsl(195, 74%, 62%)",
    icon: IconPlay,
  },
  {
    color: "hsl(348, 100%, 68%)",
    icon: IconStudy,
  },
  {
    color: "hsl(145, 58%, 55%)",
    icon: IconExercise,
  },
  {
    color: "hsl(264, 64%, 52%)",
    icon: IconSocial,
  },
  {
    color: "hsl(43, 84%, 65%)",
    icon: IconSelfCare,
  },
];

const Main = () => {
  const data = require("../../data/data.json");
  const [timeframe, setTimeframe] = useState("weekly");
  const [timeframeMessage, setTimeframeMessage] = useState("Last Week");
  const dailyHandler = () => {
    setTimeframe("daily");
    setTimeframeMessage('Yesterday')
  };
  const weeklyHandler = () => {
    setTimeframe("weekly");
    setTimeframeMessage('Last Week')
  };
  const monthlyHandler = () => {
    setTimeframe("monthly");
    setTimeframeMessage('Last Month')
  };
  return (
    <main className={classes.dashboard}>
      <div className={classes.dashboard__header}>
        <div className={classes.dashboard__profile}>
          <img
            src={Avatar}
            alt="Avatar of Jeremy Robson"
            className={classes.dashboard__avatar}
          />
          <div className={classes.dashboard__column}>

          <h1 className={classes.dashboard__heading}>Report for</h1>
          <p className={classes.dashboard__name}>Jeremy Robson</p>
          </div>
        </div>
        <div className={classes.dashboard__timeframes}>
          <ClearButton
            className={timeframe === "daily" ? classes.dashboard__active : ""}
            onClick={dailyHandler}
          >
            Daily
          </ClearButton>
          <ClearButton
            className={timeframe === "weekly" ? classes.dashboard__active : ""}
            onClick={weeklyHandler}
          >
            Weekly
          </ClearButton>
          <ClearButton
            className={timeframe === "monthly" ? classes.dashboard__active : ""}
            onClick={monthlyHandler}
          >
            Monthly
          </ClearButton>
        </div>
      </div>

      {data.map((info, i) => (
        <Card className={classes[`card--${i}`]} data={info} bg={iconList[i]} timeframe={timeframe} message={timeframeMessage}/>
      ))}
    </main>
  );
};

export default Main;
