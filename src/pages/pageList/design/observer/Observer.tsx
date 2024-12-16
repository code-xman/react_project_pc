import { Button, Radio } from 'antd';
import { bus } from './index';
import { useRef } from 'react';
import moment from 'moment';

interface AttrsType {
  text: string;
  time: string;
}

const ObserverDemo = () => {
  const CB = (attrs: AttrsType) => {
    console.log('attrs :>> ', attrs);
    console.log(`${attrs.time}${attrs.text}发布晨报了！`);
  };

  const WB = (attrs: AttrsType) => {
    console.log(`${attrs.time}${attrs.text}发布晚报了！`);
  };

  const RB = (attrs: AttrsType) => {
    console.log(`${attrs.time}${attrs.text}发布日报了！`);
  };

  const name = useRef<string>('');
  const fn = useRef<((attrs: AttrsType) => void) | null>();

  const eventOptions = [
    { label: '阿勒泰', value: 'ALT' },
    { label: '北京', value: 'BJ' },
    { label: '重庆', value: 'CQ' },
  ];

  const options = [
    { label: '晨报', value: 'CB' },
    { label: '晚报', value: 'WB' },
    { label: '日报', value: 'RB' },
  ];

  const optionsObj = {
    CB,
    WB,
    RB,
  };

  const subscribe = () => {
    bus.$on(name.current, fn.current);
    console.log('bus :>> ', bus);
  };

  const unsubscribe = () => {
    bus.$off(name.current, fn.current);
    console.log('bus :>> ', bus);
  };

  const release = () => {
    const text = eventOptions.find((e) => e.value === name.current)?.label;
    bus.$emit(name.current, { text, time: moment(new Date()).format('YYYY-MM-DD HH:mm:ss') }, 111);
  };

  return (
    <div>
      <Radio.Group
        options={eventOptions}
        optionType="button"
        buttonStyle="solid"
        style={{ marginBottom: 10 }}
        onChange={(e) => (name.current = e.target.value)}
      />
      <br />
      <Radio.Group
        options={options}
        optionType="button"
        buttonStyle="solid"
        style={{ marginBottom: 10 }}
        onChange={(e) => (fn.current = optionsObj[e.target.value as keyof typeof optionsObj])}
      />
      <br />
      <Button.Group>
        <Button onClick={subscribe}>订阅</Button>
        <Button onClick={release}>发布</Button>
        <Button onClick={unsubscribe}>取消订阅</Button>
      </Button.Group>
    </div>
  );
};

export default ObserverDemo;
