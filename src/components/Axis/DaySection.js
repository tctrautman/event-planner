import React from 'react';
import styled from 'styled-components';
import { dateStringToMoment, getNumberOfDays } from '../../utilities/utils';

const DayContainer = styled.div`
    font-size: 11px;
    font-weight: 600;
    display: inline;
    text-align: center;
    border-right: 1px solid ${props => props.theme.darkGrey};
    align-self: center;
    min-height: 17px;
`;

const setCssDayColumns = props => (
  `repeat(${getNumberOfDays(props.dates)}, 
        minmax(${props.theme.columns.minWidth}, 1fr));
    border-left: 1px solid ${props.theme.darkGrey}`
);

const DaySectionContainer = styled.div`
    display: grid;
    position: relative;
    grid-template-columns: ${props => setCssDayColumns(props)};
`;

const Day = props => (
  <DayContainer>
    <div>{props.date}</div>
  </DayContainer>
);

const DaySection = props => (
  <DaySectionContainer dates={props.dates}>
    {props.dates.map(date => (
      <Day
        key={date}
        date={dateStringToMoment(date).format('Do')}
      />
    ))}
  </DaySectionContainer>
);

export default DaySection;
export { setCssDayColumns };
