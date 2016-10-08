#!/usr/bin/env node

// Date range is between the Equinoxes
const earliest = Date.parse('March 20 2016');
const latest = Date.parse('September 23 2016');
const duration = latest - earliest;
const twoWeeks = 1000 * 60 * 60 * 24 * 7 * 2;

// inclusive limits, pseudo-random number
function random(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

const numberOfGroups = random(5, 11);
const interval = duration / numberOfGroups;
let id = 0;

// data structure, simply an array of objects thus
// {
//   created: timestamp
//   id: unique integer
//   familyId: integer
// }
const holder = { activities: [] };

// iterate for each group and generate a set of activities
// centered around a chosen point in the timeline
// each of those activities will be a random interval away
// from the center
for (var g = 0; g < numberOfGroups; g++) {
  const center = earliest + (g * interval);
  const numberOfMembers = random(3, 12);
  for (var m = 0; m < numberOfMembers; m++) {
    // ignore the overspill of these at the ends of the date range
    const memberDate  = center + random(-twoWeeks, twoWeeks);
    holder.activities.push({
      created: memberDate,
      id: id++,
      familyId: g
    });
  } // number of members
} // number of groups

console.log(JSON.stringify(holder));
