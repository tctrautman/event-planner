import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyleContainer, RootContainer } from '../utilities/styles';
import { eventsPackedIntoLanes, allDaysInRange } from '../utilities/utils';
import timelineItems from '../utilities/timelineItems';
import Title from '../components/Title';
import Timeline from '../components/Timeline';
import Form from '../components/Form';

class Home extends React.Component {
    state = {
        events: timelineItems,
        lanes: [],
        dates: []
    }

    componentWillMount() {
        let lanes = eventsPackedIntoLanes(this.state.events);
        let dates = allDaysInRange(this.state.events);

        this.setState({
            lanes: lanes,
            dates: dates
        })
    }

    _addEvent = (newEvent) => {
        const events = this.state.events.slice()
        events.push(newEvent)
        
        let lanes = eventsPackedIntoLanes(events);
        let dates = allDaysInRange(events);

        this.setState({events, lanes, dates});
    }

    render() {
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <GlobalStyleContainer />
                    <RootContainer>
                        <Title />
                        <Timeline
                            events={this.state.events}
                            lanes={this.state.lanes}
                            dates={this.state.dates}
                        />
                        <Form addEvent={this._addEvent} events={this.state.events}/>
                    </RootContainer>
                </React.Fragment>
            </ThemeProvider>
        );
    }
}

export default Home;
/*
1. Add form that let's a user input a name and 
   start / end dates, letting a user put the 

*/
