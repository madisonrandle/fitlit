class Activity {
  constructor(userID, date, numSteps, minutesActive, flightsOfStairs) {
    this.userID = userID;
    this.date = date;
    this.numSteps = numSteps;
    this.minutesActive = minutesActive;
    this.flightsOfStairs = flightsOfStairs;
    this.exceededStepGoal = [];
  }

  getMilesWalkedOn(userData, date) {
    let stridesInAMile = 5280 / userData.strideLength;
    let stepsInAMile = stridesInAMile * 2;
    let milesWalked = this.numSteps / stepsInAMile;
    return parseFloat(milesWalked.toFixed(2));
  }

  getDailyActiveMinutes(date) {
    return this.minutesActive;
  }

  getWeeklyActiveMinutes(data, dates) {
    let activityData = data.getTheWeekOf(dates);
    let avg = 0;
    activityData.forEach(date => {
      avg += date.minutesActive / activityData.length;
    });

    return Math.round(avg);
  }

  compareStepGoal(user, date) {
    return this.date === date ? this.numSteps >= user.dailyStepGoal : 'Select which date you\'d like to view if goal was met';
  }

  getExceededStepGoal(user, activities) {
    return activities.reduce((acc, el) => {
      el.numSteps >= user.dailyStepGoal ? acc.push(el.date) : '';
      return acc;
    }, []);
  }

  getStairClimbingRecord(userData) {
    let record = userData.reduce((acc, el) => {
      if (el.flightsOfStairs > acc) {
        acc = el.flightsOfStairs;
      }
      
    return acc;
    }, 0);
    return record;
  }


  // Make a metric of your own! Document it, calculate it, and display it. (iteration 3 for sleep)

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
