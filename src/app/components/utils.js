const utils = {
    sum: (arr) => arr.reduce((acc, curr) => acc + curr, 0),
  
    range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),  // min max inclusive
  
    random: (min, max) => min + Math.floor(max * Math.random()),
  
    randomSumIn: (arr, max) => {
      const sets = [[]];
      const sums = [];
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0, len = sets.length; j < len; j++) {
          const candidateSet = sets[j].concat(arr[i]);
          const candidateSum = utils.sum(candidateSet);
          if (candidateSum <= max) {
            sets.push(candidateSet);
            sums.push(candidateSum);
          }
        }
      }
      return sums[utils.random(0, sums.length)];
    },
  };
  
  export default utils;