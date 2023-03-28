import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faChartLine, faCoins, faDollar, faSignal } from '@fortawesome/free-solid-svg-icons';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { StackedChart } from './StackedChart';
import { ToggleButtonOverview } from './ToggleButtonOverview';
import { useState } from 'react';



function App() {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <SummaryBoxList />
      <Overview />
      <MonthlyProfits />

    </div>
  )
}
function Overview() {
  const monthlabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const yearlabels = [2016, 2017, 2018, 2019, 2020, 2021, 2022];
  const [time, setTime] = useState("month");
  return (
    <div className="overview-container">
      <div className="overview-spec">
        <div>
          <h4 className="profit-box-heading">Overview of Sales Win/Lost</h4>
          <p className="profit-box-sub-text">Comapred to Last Month Sales</p>
        </div>
        <ToggleButtonOverview time={time} setTime={setTime} />
      </div>
      <StackedChart labels={time === "month" ? monthlabels : yearlabels} />
    </div>
  );
}
const BorderLinearProgress = styled(LinearProgress)(({ theme, lineColor }) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "hsl(221geg 36% 91%)",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: lineColor,
  },
}));


function SummaryBoxList() {
  const dataList = [
    {
      number: 568,
      percent: 0.7,
      icon: faChartLine,
      text: "Number Of Sales",
      time: "Last Month",
      iconColor: "rgb(135, 96, 251)",
      performance: "up",
      type: "count",
      linePercent: 70,
    },
    {
      number: "12,897",
      percent: 0.43,
      icon: faCoins,
      text: "New Revenue",
      time: "Last Month",
      iconColor: "#eb6f33",
      performance: "down",
      type: "money",
      linePercent: 60,
    },
    {
      number: "11,234",
      percent: 1.44,
      icon: faDollar,
      text: "Total Cost",
      time: "Last Month",
      iconColor: "#03c895",
      performance: "down",
      type: "money",
      linePercent: 50,
    },
    {
      number: "789",
      percent: 0.9,
      icon: faSignal,
      text: "Profit By Sale",
      time: "Last Month",
      iconColor: "#01b8ff",
      performance: "up",
      type: "money",
      linePercent: 40,
    }
  ];
  return (
    <div className="summary-box-list">
      {dataList.map((dt) => (
        <SummaryBox data={dt} />
      ))}
    </div>
  );
}

function SummaryBox({ data }) {
  // const data = {
  //   text: "Number of Sales",
  //   number: 568,
  //   percent: 0.7,
  //   performance: "up",
  //   time: "Last Month",
  //   type: "number",
  //   icon: faChartLine,
  //   iconColor: "hsl(255deg 94% 68%)",
  // }
  return (
    <div className="summary-box-container">

      <div className="summary-box-spec">
        <p className="summary-box-text">{data.text}</p>
        <FontAwesomeIcon style={{ color: data.iconColor }} icon={data.icon} />
      </div>

      <h2 className="summary-box-number">
        {data.type === "money" ? "$" : null}
        {data.number}
      </h2>
      <BorderLinearProgress lineColor={data.iconColor} variant="determinate" value={data.linePercent} />

      <div className="summary-box-time-container">
        <p>{data.time}</p>
        <p>
          <FontAwesomeIcon
            style={{
              color:
                data.performance === "up"
                  ? "hsl(164deg 97% 40%)"
                  : "hsl(3deg 99% 62%)"
            }}
            icon={data.performance === "up" ? faCaretUp : faCaretDown} />
          {" "}
          {data.percent}%
        </p>
      </div>
    </div>
  )
}

function PercentProgress({ data }) {

  return (<div>
    <div className="profit-box-time-container">
      <p>{data.time}</p>
      <p>{data.percent}%</p>
    </div>
    <BorderLinearProgress lineColor={data.lineColor} variant="determinate" value={data.percent} />
  </div>)

}
function PercentProgressList(props) {
  return (
    <div className="percent-box-container">
      {props.profits.map((dt) => (
        <PercentProgress data={dt} />
      ))}
    </div>
  )
}

function MonthlyProfits() {
  const profits = [
    {
      time: "This Month",
      percent: 75,
      lineColor: "rgb(135, 96, 251)",
    },
    {
      time: "Last Month",
      percent: 50,
      lineColor: "#03c895",
    },

  ]
  return <div className="profit-box-container">
    <h3 className="profit-box-heading">Monthly Profit</h3>
    <p className="profit-box-sub-text">Excepteur sint occaecat cupidatat non proident</p>
    <h2 className="profit-box-number">$22,534</h2>
    <PercentProgressList profits={profits} />
  </div>
}

export default App;
