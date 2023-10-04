import moment from 'moment';
export const performExpensiveComputation = () => {
  // Some expensive calculation
  const largeArray = new Array(1000000)
    .fill(moment('2020-01-01').format('YYYY-MM-DD'))
    .map(() => Math.random());
  const sum = largeArray.reduce((acc, val) => acc + val, 0);
  console.log(sum); // Prevent the calculation from being stripped out by minification
};
