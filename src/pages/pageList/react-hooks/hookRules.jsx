import cn from 'classnames';

/***
 * 1.只在最顶层使用 Hook, 不要在循环，条件或嵌套函数中调用 Hook，否则会出现问题；
 * 这个是因为受限于依赖机制和状态更新逻辑，Hook 的调用顺序是固定的；
 * 但循环、条件等代码块中的顺序是不固定的，所以不能在循环、条件等代码块中调用 Hook。
 * 2.只在 React 函数中调用 Hook, 不要在普通的 JavaScript 函数中调用 Hook
 */

const HookRules = () => {
  return <div className={cn('flex-1')}></div>;
};

export default HookRules;
