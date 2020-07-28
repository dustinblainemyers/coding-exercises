function mergeRanges(meetingRanges) {
  mergedRanges = [];
  meetingToPairDown = [];
  highestEndTime = -1;
  lowestStartTime = -1;
  // loop through each meeting object in array
  meetingRanges.forEach((meetingRange) => {
    if (meetingRange.endTime > highestEndTime) {
      highestEndTime = meetingRange.endTime;
    }

    if (lowestStartTime > meetingRange.startTime || lowestStartTime < 0) {
      lowestStartTime = meetingRange.startTime;
    }
  });

  for (let i = 0; i <= highestEndTime; i++) {
    meetingToPairDown.push("");
  }

  meetingRanges.forEach((meetingRange) => {
    meetingToPairDown[meetingRange.startTime] = meetingRange.startTime;

    meetingToPairDown[meetingRange.endTime] = meetingRange.endTime;
  });
  console.log("lowestStartTime", lowestStartTime);
  console.log("highestEndTime", highestEndTime);
  console.log("meetingToPairDown", meetingToPairDown);

  //return merged meetingRanges
  return mergedRanges;
}

mergeRanges([
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
]);
