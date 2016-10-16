#!/usr/bin/env node
// generate sample data for historical activity
// array of objects:
// {
//   when: millis
//   size: integer
// }
//

const data = {
  user: 'Your Name',
  activities: []  
};

// inclusive limits, pseudo-random number
function random(low, high) {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

const start = Date.parse('September 24, 2015');
const end = Date.parse('September 23, 2016');

for (var a = 0; a < 50; a++) {
  const dt = random(start, end);
  const size = random(1, 15);
  data.activities.push({
    when: dt,
    size: size
  });
}

console.log(JSON.stringify(data));
