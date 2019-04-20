import React from 'react';
import styled from 'styled-components';
import DaySection from './DaySection';
import MonthSection from './MonthSection';
import YearSection from './YearSection';
import { getAxisWidth } from '../../utilities/utils';

const AxisContainer = styled.div`
    overflow: visible;
    width: ${props => getAxisWidth(props)};
    color: ${props => props.theme.darkBlue};
    background: ${props => props.theme.lightGrey};
    border-bottom: 1px solid ${props => props.theme.darkGrey};
`;

const Axis = props => (
  <AxisContainer dates={props.dates}>
    <YearSection dates={props.dates} />
    <MonthSection dates={props.dates} />
    <DaySection dates={props.dates} />
  </AxisContainer>
);

export default Axis;
