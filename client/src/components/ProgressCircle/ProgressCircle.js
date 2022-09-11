import './ProgressCircle.css';
import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsFillTrophyFill } from 'react-icons/bs';

function ProgressCircle({ value }) {
  const percentageValue = value < 100 ? value : 100;
  if (percentageValue === 100) {
    return (
      <CircularProgressbarWithChildren
        background
        backgroundPadding={6}
        value={percentageValue}
        styles={buildStyles({
          pathColor: `#fff`,
          textColor: '#fff',
          trailColor: 'transparent',
          backgroundColor: '#7380ec',
        })}
      >
        <BsFillTrophyFill fill="#fff" fontSize={24} />
      </CircularProgressbarWithChildren>
    );
  }
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
