/**
 * 延时函数
 * @param time 延时时间 毫秒 默认500
 * @returns
 */
const delay = (time: number = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
