import React from 'react';
import { eventsPackedIntoLanes, allDaysInRange } from '../utilities/utils';
import { TimelineContainer } from '../utilities/styles';
import Axis from './Axis/Axis';
import PlotArea from './PlotArea/PlotArea';
  
const Timeline = props => (
  <TimelineContainer>
    <Axis dates={props.dates} />
    <PlotArea lanes={props.lanes} dates={props.dates} />
  </TimelineContainer>
);

export default Timeline;
