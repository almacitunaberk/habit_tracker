import './ProgressCircle.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function ProgressCircle({ value }) {
  const percentageValue = value < 100 ? value : 100;
  return (
    <CircularProgressbar
      background
      backgroundPadding={6}
      value={percentageValue}
      text={`${percentageValue}%`}
      styles={buildStyles({
        pathColor: `#fff`,
        textColor: '#fff',
        trailColor: 'transparent',
        backgroundColor: '#7380ec',
      })}
    />
  );
}

export default ProgressCircle;
