import { history } from 'umi';
import { Button } from 'antd';

export default function Page1() {
  const btnClick = () => {
    history.push('/pageList/home');
  };
  return (
    <div>
      <h1>Page1</h1>
      <div>
        {0 && <p>Value is 0.</p>}
        {1 && <p>Value is 1.</p>}
        {null && <p>Value is null.</p>}
        {undefined && <p>Value is undefined.</p>}
        {'' && <p>Value is an empty string.</p>}
      </div>
      <Button type="primary" onClick={btnClick}>
        返回Page index
      </Button>
    </div>
  );
}
