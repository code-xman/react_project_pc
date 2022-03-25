import cn from 'classnames';

/***
 * 1.只在最顶层使用 Hook, 不要在循环，条件或嵌套函数中调用 Hook
 * 2.只在 React 函数中调用 Hook, 不要在普通的 JavaScript 函数中调用 Hook
 */

const HookRules = () => {
  return <div className={cn('flex-1')}></div>;
};

export default HookRules;
