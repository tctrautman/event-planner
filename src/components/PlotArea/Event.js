import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

const EventContainer = styled.div`
    grid-column: ${props => props.start} / ${props => props.end};
    display: inline-block;
    position: relative;
    vertical-align: center;
    min-height: 30px;
`;


const EventNameContainer = styled.div`
  display: inline-flex;
  background: ${props => props.theme.nicePastels[Math.floor(Math.random() * 5)]};
  color: ${props => props.theme.darkGrey};
  font-weight: 600;
  border: 1px solid ${props => props.theme.darkGrey};
  width: 100%;
  position: absolute;
  border-radius: 15px;
  text-align: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: center;

  .tooltip:hover .tooltiptext {
    overflow: visible;
    visibility: visible;
  }

  .tooltip .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    position: absolute;
    z-index: 1;
  }

  .tooltip {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    display: inline-block;
  }
`;

const Event = props => (
  <EventContainer start={props.start} end={props.end}>
    <EventNameContainer>
      <a className="tooltip" data-tip data-for={`${props.event.id}-${props.event.name}`}>
        {props.event.name}
      </a>
      <ReactTooltip id={`${props.event.id}-${props.event.name}`} type="error">
        <span>{props.event.name}</span>
      </ReactTooltip>
    </EventNameContainer>
  </EventContainer>
);

export default Event;
