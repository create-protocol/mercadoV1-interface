import React from 'react';
import { Statistic } from 'antd';
const { Countdown } = Statistic;

const Counter = (props) => {
  const { timer } = props || null;
  console.log(timer, 'this is the timer');
  return <Countdown valueStyle={{color: 'white', fontSize: '1rem'}} value={Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30} format="DdHHhmm:ss"></Countdown>;
};

export default Counter;
