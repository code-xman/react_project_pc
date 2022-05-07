import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import './ts-test1.less';

interface ObjType {
  name: string;
  type: string;
  id: string;
  attr: {
    price: number;
    weight: number;
    source: string;
  };
}

const Card = ({ obj }: { obj: ObjType }) => {
  return (
    <div className={cn('fruits-card', 'box-border')}>
      <p>名称：{obj?.name}</p>
      <p>类型：{obj?.type}</p>
      <p>
        属性：价格是{obj?.attr.price}元/kg, 重量是{obj?.attr.weight}g, 产自
        {obj?.attr.source}
      </p>
    </div>
  );
};

const Index = () => {
  const [objs, setObjs] = useState<ObjType[]>([]);
  useMemo(() => {
    setObjs([
      {
        name: '苹果',
        type: '水果',
        id: new Date().getTime().toString(),
        attr: {
          price: 10,
          weight: 200,
          source: '新疆',
        },
      },
    ]);
  }, []);
  return (
    <div>
      {objs?.length > 0 &&
        objs.map((item) => <Card key={item.id} obj={item} />)}
    </div>
  );
};

export default Index;
