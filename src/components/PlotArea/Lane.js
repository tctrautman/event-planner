import React from 'react';
import styled from 'styled-components';
import Event from './Event';
import { getStartTrack, getEndTrack } from '../../utilities/utils';
import { setCssDayColumns } from '../Axis/DaySection';

const LaneContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: ${props => setCssDayColumns(props)};
    min-height: 50px;
    align-items: center;
    align-content: center;
    border-left: 0px;
`;

const Lane = props => (
  <LaneContainer dates={props.dates}>
    {props.lane.map(event => (
      <Event
        key={event.id}
        event={event}
        start={getStartTrack(props.dates, event.start)}
        end={getEndTrack(props.dates, event.end)}
      />
    ))}
  </LaneContainer>
);

export default Lane;
