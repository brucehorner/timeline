#!/usr/bin/env node

// Date range is between the Equinoxes
// but we'll also let the data spill out up to two weeks
const earliest = Date.parse('March 20 2016');
const latest = Date.parse('September 23 2016');
const duration = latest - earliest;
const twoWeeks = 1000 * 60 * 60 * 24 * 7 * 2;

// inclusive limits, pseudo-random number
function random(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

const numberOfGroups = random(5, 15);
const interval = duration / numberOfGroups;
let id = 0;

// data structure, simply an array of objects thus
// {
//   created: timestamp millis since epoch start
//   id: unique integer
//   familyId: integer
//   type: string of < START, MID, END >
// }
const holder = { activities: [] };

// iterate for each group and generate a set of activities
// centered around a chosen point in the timeline
// each of those activities will be a random interval away
// from the center with some juggling to make sure START is the 
// earliest and END is the latest within each group
for (var g = 0; g < numberOfGroups; g++) {
  const center = earliest + (g * interval);
  const numberOfMembers = random(4, 12);
  const members = [];
  for (var m = 0; m < numberOfMembers; m++) {
    // ignore the overspill of these at the ends of the date range
    const memberDate  = center + random(-twoWeeks, twoWeeks);
    members.push({
      created: memberDate,
      id: id++,
      familyId: g,
      type: 'MID'
    });
  } // number of members

  // now sort members and push into the main collection
  members.sort( (a, b) => { return a.created - b.created; });
  members[0].type = 'START';
  members[numberOfMembers - 1].type = 'END';
  members.forEach( (a) => { holder.activities.push(a) });
} // number of groups

console.log(JSON.stringify(holder));
