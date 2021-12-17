import { history } from 'umi';
import { Button } from 'antd';

export default function Page1() {
  const btnClick = () => {
    history.push('/')
  }
  return (
    <div>
      <h1>Page1</h1>
      <Button type="primary" onClick={btnClick}>返回Page index</Button>
    </div>
  );
}