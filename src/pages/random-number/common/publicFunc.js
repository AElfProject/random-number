// 用await可以进行等待
export function sleep(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

// 给假数据添加index
export const listIndexSet = list => list.map((data, index) => ({ ...data, index: `第${index + 1}位` }));

// hash转number，用于随机数的展示
export function stringToIntHash(str, lowerbound = 1, upperbound = 500,) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += str.charCodeAt(i);
  }

  return (result % (upperbound - lowerbound)) + lowerbound;
}
