# Timeline
## Visualizations of time lines using D3.js

The idea here is to explore different visualizations of groups of data points along a time line.  There's a data generator to allow this to be standalone. The data is in groups with potentially overlapping timelines of their own.  The visualization should:

* show when the various events occurred (or will occur) relative to one another along a timeline axis increasing left to right
* distinguish between the groups to which each event belongs
* show the start/earliest and end/latest events in each group

Events only belong to one group.  There are no events in a group earlier than the event tagged as START and none are later than the event tagged as END.

#### Sample data structure
The sample data is expressed as JSON with a single element called activities.  The value for this is an array of objects.  Each object represents a single event with the following structure:

 * created: timestamp expressed as milliseconds since epoch start
 * id: unique integer for each event
 * familyId: integer representing the group 'owning' this event
 * type: string of < START, MID, END >

### Random-ish data
Use Node.js to run the gen-data.js script to generate a JSON file of data we can use to explore the visualizations.  Some sample data files are in this project.  

### Beeswarm
Based on Mike Rostock's [original Beeswarm] (http://bl.ocks.org/mbostock/6526445e2b44303eebf21da3b6627320 "original Beeswarm") dated July 4, 2016.  This visualization retains the use of force layout but changes to a timeline axis, uses color for groups and changes the circle radius for the terminal events in a group.

### Scatter

