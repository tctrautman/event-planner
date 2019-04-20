import React from 'react';
import styled from 'styled-components';
import Lane from './Lane';

const PlotContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.lanes.length}, 1fr);
    padding-top: 5px;
    padding-bottom: 5px;
    width: 100%;
`;

const PlotArea = props => (
  <PlotContainer lanes={props.lanes}>
    {props.lanes.map(lane => (
      <Lane key={lane[0].id} lane={lane} dates={props.dates} />
    ))}
  </PlotContainer>
);

export default PlotArea;
