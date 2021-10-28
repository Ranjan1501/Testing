const { test, expect } = require('@jest/globals');
const { getTime } = require('./timer');
// console.log(" 80000 Should return 1 minutes 0 seconds", getTime(80000) === `${1} minutes ${20} seconds`);
test(" 200000 Should return 1 minutes 0 seconds", () => {
    expect(getTime(200000)).toBe(`${3} minutes ${20} seconds`);
});

test(" 5300 Should return 5 seconds", () => {
    expect(getTime(5300)).toBe(`${5} seconds`);
});

test(" 60000 Should return 1 minute", () => {
    expect(getTime(60000)).toBe(`${1} minute`);
});

test(" 120000 Should return 1 minutes 0 seconds", () => {
    expect(getTime(120000)).toBe(`${2} minutes ${0} seconds`);
});

test(" 4210000 Should return 1 minutes 0 seconds", () => {
    expect(getTime(4210000)).toBe(`${1} hours ${10} minutes ${10} seconds`);
});

