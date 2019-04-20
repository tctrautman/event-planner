import React from 'react';
import styled from 'styled-components';
import { getUniquePeriods, getColumnSizes } from '../../utilities/utils';

const YearContainer = styled.div`
    text-align: center;
    font-weight: 600;
`;

const setCssYearColumns = (props) => {
  const columnSizes = getColumnSizes(props.dates, 'year');
  const minColumnWidth = parseInt(props.theme.columns.minWidth.substring(0, 2), 10);

  const string = columnSizes.map(yearColSize => (
    `minmax(${yearColSize * minColumnWidth}px, ${yearColSize}fr)`
  )).join(' ');

  return string;
};

const YearSectionContainer = styled.div`
    display: grid;
    grid-template-columns: ${props => setCssYearColumns(props)};
    border-right: 1px solid ${props => props.theme.darkGrey};
`;

const Year = props => (
  <YearContainer>
    {props.year}
  </YearContainer>
);

const YearSection = (props) => {
  const uniqueYears = getUniquePeriods(props.dates, 'year');
  return (
    <YearSectionContainer dates={props.dates}>
      {uniqueYears.map(year => <Year key={year} year={year} />)}
    </YearSectionContainer>
  );
};

export default YearSection;
