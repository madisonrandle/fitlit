const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');

describe('Sleep', function() {
  let sleep;
  let sleep1;
  let sleep2;
  let sleep3;
  let sleep4;
  let sleep5;
  let sleep6;
  let sleep7;
  let sleep8;
  let sleep9;
  let sleep10;
  let sleep11;
  let sleep12;
  let sleep13;
  let sleep14;

  beforeEach(function() {
    sleep = new Sleep(1, '2019/06/15', 6.1, 2.2);
    sleep1 = new Sleep(1, '2019/06/16', 7, 4.7);
    sleep2 = new Sleep(1, '2019/06/16', 3, 4.7);
    sleep3 = new Sleep(1, '2019/06/16', 10, 4.7);
    sleep4 = new Sleep(1, '2019/06/16', 7.8, 2.7);
    sleep5 = new Sleep(1, '2019/06/17', 10.8, 3);
    sleep6 = new Sleep(1, '2019/06/17', 10.8, 3);
    sleep7 = new Sleep(1, '2019/06/18', 4.1, 2.2);
    sleep8 = new Sleep(1, '2019/06/19', 5.4, 3.6);
    sleep9 = new Sleep(1, '2019/06/20', 9.6, 2.9);
    sleep10 = new Sleep(1, '2019/06/21', 6.1, 3.5);
    sleep11 = new Sleep(1, '2019/06/22', 5.1, 2.2);
    sleep12 = new Sleep(1, '2019/06/23', 8.1, 1.6);
    sleep13 = new Sleep(1, '2019/06/24', 8.9, 3.1);
    sleep14 = new Sleep(1, '2019/06/25', 4.4, 1.2);
    sleep.log(sleep);
    sleep.log(sleep1);
    sleep.log(sleep2);
    sleep.log(sleep3);
    sleep.log(sleep4);
    sleep.log(sleep5);
    sleep.log(sleep6);
    sleep.log(sleep7);
    sleep.log(sleep8);
    sleep.log(sleep9);
    sleep.log(sleep10);
    sleep.log(sleep11);
    sleep.log(sleep12);
    sleep.log(sleep13);
    sleep.log(sleep14);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should have an id', function() {
    expect(sleep.userID).to.equal(1);
  });

  it('should have a date', function() {
    expect(sleep.date).to.equal('2019/06/15');
  });

  it('should track the number of hours slept', function() {
    expect(sleep.hoursSlept).to.equal(6.1);
  });

  it('should track a sleep quality value', function() {
    expect(sleep.sleepQuality).to.equal(2.2);
  });

  it('should accept an array of all sleep data to date', function() {
    expect(sleep.sleepToDate).to.deep.equal([sleep, sleep1, sleep2, sleep3, sleep4, sleep5, sleep6, sleep7, sleep8, sleep9, sleep10, sleep11, sleep12, sleep13, sleep14]);
  });

  it('should find the average hours a user sleeps each night', function() {
    expect(sleep.getAvgHoursSlept()).to.equal(7);
  });

  it('should find a user\'s average sleep quality per day', function() {
    expect(sleep.getAvgSleepQuality()).to.equal(3);
  });

  it('should find how many hours a user slept on a given day', function() {
    expect(sleep.getHoursSleptOn('2019/06/15')).to.equal(6.1);
  });

  it('should find user\'s sleep quality on a given day', function() {
    expect(sleep.getSleepQualityOn('2019/06/21')).to.equal(3.5);
  });

  it('should find how many hours a user slept each day in a given week)', function() {
    expect(sleep.getHoursSleptTheWeekOf("2019/06/23")).to.deep.equal([10.8, 4.1, 5.4, 9.6, 6.1, 5.1, 8.1]);
    expect(sleep.getHoursSleptTheWeekOf("2019/06/24")).to.deep.equal([4.1, 5.4, 9.6, 6.1, 5.1, 8.1, 8.9]);
    expect(sleep.getHoursSleptTheWeekOf("2019/06/25")).to.deep.equal([5.4, 9.6, 6.1, 5.1, 8.1, 8.9, 4.4]);
  });

  it('should find user\'s sleep quality each day in a given week)', function() {
    expect(sleep.getSleepQualityTheWeekOf("2019/06/23")).to.deep.equal([3, 2.2, 3.6, 2.9, 3.5, 2.2, 1.6]);
    expect(sleep.getSleepQualityTheWeekOf("2019/06/24")).to.deep.equal([2.2, 3.6, 2.9, 3.5, 2.2, 1.6, 3.1]);
    expect(sleep.getSleepQualityTheWeekOf("2019/06/25")).to.deep.equal([3.6, 2.9, 3.5, 2.2, 1.6, 3.1, 1.2]);
  });

  it('should find nights of sleep whose sleep quality is greater than 3 for a given week', function() {
    expect(sleep.getBestNightsSleepOfWeek("2019/06/25")).to.deep.equal([sleep8, sleep10, sleep13]);
  });

  it('should find the night a user slept the most hours on a given day', function() {
    expect(sleep.getMostRestedUserOn('2019/06/16')).to.deep.equal([sleep3]);
  });
});
