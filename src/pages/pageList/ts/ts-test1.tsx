import React, { useMemo, useState } from 'react';
import cn from 'classnames';
import './ts-test1.less';

interface ObjType {
  // readonly 为只读属性，? 为可选属性
  readonly str?: string;
  name: string;
  type: string;
  id: string;
}

// omit 是排除掉 ObjType 的 name 属性
type ObjA = Omit<ObjType, 'name'>;
// omit 多个用 ‘|’ 隔开，后面可以用 & 添加自己的属性
type ObjB = Omit<ObjType, 'name' | 'type'> & {
  b: string;
};
// pick 是去选择 ObjType 的 name 属性，多个用 ‘|’ 隔开，后面可以用 & 添加自己的属性
type ObjC = Pick<ObjType, 'name'>;

// FruitsObjType 继承了 ObjType 的 name type id，又新增了attr
interface FruitsObjType extends ObjType {
  attr: {
    price: number;
    weight: number;
    source: string;
  };
}

const Card = ({ obj }: { obj: FruitsObjType }) => {
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
  const A: ObjA = {
    type: '',
    id: '',
  };
  const B: ObjB = {
    id: '',
    b: '',
  };
  const C: ObjC = {
    name: '',
  };

  const [objs, setObjs] = useState<FruitsObjType[]>([]);
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
