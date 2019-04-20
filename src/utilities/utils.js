import moment from 'moment';

/** *********************************************************************
*************** Used to initialize state from event list ****************
********************************************************************** */

const eventsPackedIntoLanes = (events) => {  
  const lanes = [];

  events.sort().forEach(event => {
    const laneWithSpace = lanes.find(lane => fitsInLane(lane, event));

    if (laneWithSpace) {
        laneWithSpace.push(event);
    } else {
        lanes.push([event]);
    }
  });

  return lanes;
};

const allDaysInRange = (events) => {
  let minDate;
  let maxDate;

  events.forEach((event, index) => {

    if (event.start < minDate || index === 0) {
      minDate = event.start;
    }
    if (event.end > maxDate || index === 0) {
      maxDate = event.end;
    }
  });
  return getEachDayInRange(minDate, maxDate);
};

/** *********************************************************************
*********************** Used to maniuplate dates ************************
********************************************************************** */

const getNumberOfDays = dates => dates.length;

let dateStringToMoment = date => moment(removeDateDashes(date), 'YYYY MM DD');

let removeDateDashes = date => date.split('-').join(' ');

const getColumnSizes = (dates, timePeriod) => {
  const momentDates = dates.map(day => moment(day));
  const columnSizes = [];
  const momentFormat = getFormat(timePeriod);

  momentDates.forEach((day, index) => {
    const lastDay = momentDates[index - 1];
    if (index === 0 || day.format(momentFormat) !== lastDay.format(momentFormat)) {
      columnSizes.push(1);
    } else {
      ++columnSizes[columnSizes.length - 1];
    }
  });
  return columnSizes;
};

const getUniquePeriods = (dates, period) => {
  const momentDates = dates.map(day => moment(day));
  const momentFormat = getFormat(period);
  const uniquePeriods = [];

  momentDates.forEach((date) => {
    const currentDate = date.format(momentFormat);
    const lastUnique = uniquePeriods[uniquePeriods.length - 1];
    if (currentDate !== lastUnique || uniquePeriods.length === 0) {
      uniquePeriods.push(currentDate);
    }
  });

  return uniquePeriods;
};

let getEachDayInRange = (minDate, maxDate) => {
  const days = [];

  while (minDate <= maxDate) {
    days.push(minDate);
    minDate = moment(minDate).add(1, 'days').format('YYYY-MM-DD');
  }

  return days;
};

let getFormat = (period) => {
  let format;

  if (period === 'month') {
    format = 'MMMM';
  } else if (period === 'year') {
    format = 'YYYY';
  }

  return format;
};

let fitsInLane = (lane, event) => {
  const lastEvent = lane[lane.length - 1];

  if (lastEvent.end < event.start) {
    return true;
  } else {
    return false;
  }
};

/** *********************************************************************
********************** Used to work with css grid ***********************
********************************************************************** */

const getStartTrack = (dates, targetDate) => {
  let index;

  dates.forEach((day, ind) => {
    if (day === targetDate) {
      index = ind + 1; // Account for 1-indexing
    }
  });
  return index;
};

const getEndTrack = (dates, targetDate) => {
  let index;

  dates.forEach((day, ind) => {
    if (day === targetDate) {
      index = ind + 2; // Account for 1-indexing and grid track #s are exclusive
    }
  });
  return index;
};

const getAxisWidth = (props) => {
  const minColumnWidth = parseInt(props.theme.columns.minWidth.substring(0, 2), 10);
  const dayNum = props.dates.length;

  return `${minColumnWidth * dayNum}px`;
};

export {
  eventsPackedIntoLanes,
  allDaysInRange,
  getNumberOfDays,
  getColumnSizes,
  getUniquePeriods,
  getStartTrack,
  getEndTrack,
  dateStringToMoment,
  getAxisWidth,
};
