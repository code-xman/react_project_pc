/**
 * 延时函数
 * @param time 延时时间 毫秒 默认500
 * @returns
 */
export const delay = (time: number = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

/**
 * 获取label值
 * @param value 需要转换的值
 * @param list 转换对应表
 * @param key 对应的key值，eg.['label', 'value']
 * @returns value对应的label
 */
export const toLabel = (
  value: string | number | undefined,
  list: any[],
  key: string[] = ['label', 'value'],
) => {
  if (!list || !value?.toString()) return '';
  return list.find((i) => i[key[1]] === value)?.[key[0]] || '';
};

/**
 * 数组转对象
 * @param list 转换对应表
 * @param key 对应的key值，eg.['label', 'value']
 * @returns {value: label}
 */
export const listToObj = (list: any[], key: string[] = ['label', 'value']) => {
  return list.reduce((acc, cur) => {
    acc[cur[key[1]]] = cur[key[0]];
    return acc;
  }, {});
};

/**
 * 数组转Map对象
 * @param list 转换对应表
 * @param key 对应的key值，eg.['label', 'value']
 * @returns {value: label}
 */
export const listToMap = (list: any[], key: string[] = ['label', 'value']) => {
  const map = new Map();
  list.forEach((e) => {
    map.set(e[key[1]], e[key[0]]);
  });
  return map;
};
