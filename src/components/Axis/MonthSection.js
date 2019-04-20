import React from 'react';
import styled from 'styled-components';
import { getUniquePeriods, getColumnSizes } from '../../utilities/utils';

const MonthContainer = styled.div`
    border-right: 1px solid ${props => props.theme.darkGrey};
    font-weight: 600;
`;

const setCssMonthColumns = (props) => {
  const columnSizes = getColumnSizes(props.dates, 'month');
  const minColumnWidth = parseInt(props.theme.columns.minWidth.substring(0, 2), 10);

  const string = columnSizes.map(monthColSize => (
    `minmax(${monthColSize * minColumnWidth}px, ${monthColSize}fr)`
  )).join(' ');

  return string;
};

const MonthSectionContainer = styled.div`
    display: grid;
    grid-template-columns: ${props => setCssMonthColumns(props)};
    text-align: center;
    border-top: 1px solid ${props => props.theme.darkGrey};
    border-bottom: 1px solid ${props => props.theme.darkGrey};
`;

const Month = props => (
  <MonthContainer>
    {props.month}
  </MonthContainer>
);

const MonthSection = (props) => {
  const uniqueMonths = getUniquePeriods(props.dates, 'month');

  return (
    <MonthSectionContainer dates={props.dates}>
      {uniqueMonths.map((month, ind) => <Month key={`${month}-${ind}`} month={month} />)}
    </MonthSectionContainer>
  );
};

export default MonthSection;
