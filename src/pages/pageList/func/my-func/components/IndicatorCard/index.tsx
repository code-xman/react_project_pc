import { QuestionCircleOutlined, SettingOutlined, DragOutlined } from '@ant-design/icons';
import { Button, Card, Dropdown, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import styles from './index.less';

interface IndicatorCardData {
  totalNum?: number | string;
  processedNum?: number | string;
  pendingNum?: number | string;
}

interface CardConfig {
  title: string;
  filterConfig: any;
}

export interface IndicatorCardProps {
  title?: string; // 标题
  mode?: 'edit' | 'view'; // 模式
  config?: CardConfig;
  onChange?: (config: CardConfig, type: 'add' | 'delete' | 'edit') => void;
}

// 指标
const indicates: { title: string; key: keyof IndicatorCardData }[] = [
  {
    title: '总数',
    key: 'totalNum',
  },
  {
    title: '已处理',
    key: 'processedNum',
  },

  {
    title: '待处理',
    key: 'pendingNum',
  },
];

const IndicatorCard = (props: IndicatorCardProps) => {
  const { mode = 'edit', config } = props;

  const [cardTitle, setCardTitle] = useState('');
  // const [conditionsData, setConditionsData] = useState<any>({});
  const [tips, setTips] = useState<string>('');
  const [cardData, setCardData] = useState<IndicatorCardData>({});

  const getCardData = async () => {
    setCardData({
      totalNum: '123',
      processedNum: '123',
      pendingNum: '123',
    });
  };

  useEffect(() => {
    setCardTitle(config?.title || '标题');
    // setConditionsData(config.filterConfig || {});
    if (mode === 'view') {
      getCardData();
    }
  }, [config, mode]);

  return (
    <div className={styles.container}>
      <Card
        title={cardTitle}
        className={styles.card}
        extra={
          <div className={styles.cardExtra}>
            {tips && (
              <Tooltip title={tips} trigger={'click'}>
                <QuestionCircleOutlined
                  style={{ fontSize: 18, width: 32, height: 32, justifyContent: 'center' }}
                />
              </Tooltip>
            )}
            {mode === 'edit' && <DragOutlined className={`move`} />}
            {mode === 'edit' && (
              <Dropdown menu={{ items: [] }} trigger={['click']}>
                <Button icon={<SettingOutlined />} type="text"></Button>
              </Dropdown>
            )}
          </div>
        }
      >
        <div className={styles.content}>
          {indicates.map((item, index) => (
            <div key={index} className={styles.item}>
              <p className={styles.itemTitle}>{item.title}</p>
              <p className={styles.itemContent}>
                <span className={styles.itemValue} title={`${cardData[item.key] || 0}`}>
                  {(cardData[item.key] as number) || 0}
                </span>
                <span className={styles.itemUnit}>个</span>
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default IndicatorCard;
