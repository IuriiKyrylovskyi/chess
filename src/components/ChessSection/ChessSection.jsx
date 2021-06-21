import React from 'react';
import ChessFloor from '../ChessFloor/ChessFloor';
// import { dataSection } from '../../data';

const ChessSection = props => {
  const { sectNum, section } = props;

  // console.log(props);
  // console.log(sectNum);
  // console.log(section);
  const lineNumber = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1];

  // const test = section
  //   .filter(item => parseInt(item.floor) === 2)
  //   .sort((a, b) => parseInt(b.number) - parseInt(a.number));
  // console.log(test);

  const filtedByFloor = floorNum => {
    section
      .filter(item => parseInt(item.floor) === floorNum)
      .sort((a, b) => parseInt(a.number) - parseInt(b.number));
  };
  console.log(filtedByFloor(2));
  return (
    <div className="chess__bg">
      <div className="chess__info">
        Building 1<span>{`section ${sectNum}`}</span>
      </div>
      <div className="chess__lines">
        {lineNumber.map(num => {
          const floor = filtedByFloor(num);

          return <ChessFloor key={num} {...floor} />;
        })}
      </div>
      <div className="chess__info">
        Building 1<span>{`section ${sectNum}`}</span>
      </div>
    </div>
  );
};

export default ChessSection;
