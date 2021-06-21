import React from 'react';
import ChessSection from '../ChessSection/ChessSection';
import { dataSection } from '../../data';
import './style.scss';

const ChessContent = () => {
  const sections = [1, 2, 3];
  
  const filteredSectionNumber = sectionNum =>
    dataSection.filter(item => parseInt(item.section) === sectionNum);

  // console.log(filteredSectionNumber(sections[0]));

  return (
    <div className="chess__content">
      {sections.map(num => {
        const currentSection = filteredSectionNumber(num);

        return (
          <ChessSection
            key={num}
            sectNum={num}
            section={currentSection}
            // {...filteredSectionNumber}
          />
        );
      })}

      <div className="chess__section">SECTION 1</div>
    </div>
  );
};

export default ChessContent;
