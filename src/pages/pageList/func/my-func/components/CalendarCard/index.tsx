import { SettingOutlined, DragOutlined } from '@ant-design/icons';
import type { CalendarProps, MenuProps } from 'antd';
import { Badge, Button, Calendar, Card, Dropdown, Tooltip } from 'antd'; // Empty, Modal,
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import styles from './index.less';

interface CardConfig {
  title: string;
  filterConfig: any;
}

export interface CardLayout {
  w: number;
  h: number;
  x?: number;
  y?: number;
  i?: string;
}

export interface CalendarCardProps {
  title?: string;
  mode?: 'edit' | 'view'; // 模式
  config?: CardConfig;
  layoutConfig?: CardLayout;
  onChange?: (config: CardConfig, type: 'add' | 'delete' | 'edit') => void;
}

const todoTypeObj: any = {
  important: {
    color: 'red',
  },
  todo: {
    color: 'blue',
  },
  done: {
    color: 'gray',
  },
};

const CalendarCard = (props: CalendarCardProps) => {
  const { mode = 'edit', config, layoutConfig, onChange } = props;
  const [cardTitle, setCardTitle] = useState('');
  const [conditionsData, setConditionsData] = useState<any>({});
  // 日历待办数据
  const [cardData, setCardData] = useState<any>({});

  useEffect(() => {
    console.log('layoutConfig :>> ', layoutConfig);
  }, [layoutConfig]);

  const getCardData = async (day: Dayjs) => {
    const dateLObj: any = {
      '2025-03-11': [
        {
          id: '21799550058319872',
          expireTime: '2025-03-11 00:00:00',
          todoName: '阿德飒飒的',
          todoStatus: 0,
          processorCompleteTime: null,
          importantMatter: 1,
          externalSystem: 0,
          todoSourceAddress: null,
        },
        {
          id: '21799550058319873',
          expireTime: '2025-03-11 00:00:00',
          todoName: '阿德飒飒的111',
          todoStatus: 0,
          processorCompleteTime: null,
          importantMatter: 0,
          externalSystem: 0,
          todoSourceAddress: null,
        },
        {
          id: '21799550058319874',
          expireTime: '2025-03-11 00:00:00',
          todoName: '阿德飒飒的111',
          todoStatus: 0,
          processorCompleteTime: null,
          importantMatter: 0,
          externalSystem: 0,
          todoSourceAddress: null,
        },
        {
          id: '21799550058319875',
          expireTime: '2025-03-11 00:00:00',
          todoName: '阿德飒飒的111',
          todoStatus: 0,
          processorCompleteTime: null,
          importantMatter: 0,
          externalSystem: 0,
          todoSourceAddress: null,
        },
        {
          id: '21799550058319876',
          expireTime: '2025-03-11 00:00:00',
          todoName: '阿德飒飒的111',
          todoStatus: 1,
          processorCompleteTime: null,
          importantMatter: 0,
          externalSystem: 0,
          todoSourceAddress: null,
        },
        {
          id: '21799550058319877',
          expireTime: '2025-03-11 00:00:00',
          todoName: '阿德飒飒的111',
          todoStatus: 1,
          processorCompleteTime: null,
          importantMatter: 0,
          externalSystem: 0,
          todoSourceAddress: null,
        },
      ],
    };
    const dateList = Object.keys(dateLObj);
    const dateData: any = {};
    dateList.forEach((date) => {
      const itemList = dateLObj[date];
      dateData[date] = itemList?.map((e: any) => {
        return {
          ...e,
          type: e.todoStatus === 1 ? 'done' : e.importantMatter === 1 ? 'important' : 'todo',
        };
      });
    });
    setCardData(dateData);
  };

  useEffect(() => {
    setCardTitle(config?.title || '标题');
    setConditionsData(config?.filterConfig || {});

    // if (mode === 'view') {
    getCardData(dayjs(new Date()));
    // }
  }, [config, mode]);

  // *************** detail start ****************

  // const [detailModal, setDetailModal] = useState<boolean>(false);
  // const [detailData, setDetailData] = useState<any[]>([]);

  // const showDetail = (date: Dayjs) => {
  //   const dayVal = date.format('YYYY-MM-DD');
  //   setDetailData(cardData[dayVal] || []);
  //   setDetailModal(true);
  // };

  // *************** detail end ****************

  const dateCellRender = (value: Dayjs) => {
    const dayVal = value.format('YYYY-MM-DD');
    const badges = cardData[dayVal] || [];

    return (
      <div
        className={`${layoutConfig && layoutConfig.w < 4 ? 'min-events' : ''} events`}
        // onClick={() => showDetail(value)}
      >
        {badges.map((item: any, index: number) => (
          <li key={index}>
            <Tooltip title={`${item.expireTime} ${item.todoName}`}>
              <Badge
                color={todoTypeObj[item.type].color}
                text={item.todoName}
                className={`badge-${item.type}`}
              />
            </Tooltip>
          </li>
        ))}
      </div>
    );
  };

  const cellRender: CalendarProps<Dayjs>['cellRender'] = (current, info) => {
    if (info.type === 'date') return dateCellRender(current);
    // if (info.type === 'month') return monthCellRender(current);
    return info.originNode;
  };

  const onPanelChange = (value: Dayjs) => {
    getCardData(value);
  };

  return (
    <div className={styles.container}>
      <Card
        title={cardTitle}
        className={styles.card}
        extra={
          <div className={styles.cardExtra}>
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
          <Calendar cellRender={cellRender} onPanelChange={onPanelChange} />
          <div className={styles.legend}>
            <Badge color="gray" text="已处理" style={{ textDecoration: 'line-through' }} />
            <Badge color="blue" text="待处理" />
            <Badge color="red" text="重要待处理" />
          </div>
        </div>
        {/* <Modal
          title="详细信息"
          open={detailModal}
          okButtonProps={{ style: { display: 'none' } }}
          cancelText="关闭"
          onCancel={() => setDetailModal(false)}
          className={styles.detailModal}
        >
          <div className={styles.content}>
            {detailData.map((item: any, index) => (
              <li key={index}>
                <Badge
                  color={todoTypeObj[item.type].color}
                  text={item.todoName}
                  className={styles[`badge-${item.type}`]}
                />
              </li>
            ))}
            {detailData.length === 0 && <Empty description="暂无数据" />}
          </div>
        </Modal> */}
      </Card>
    </div>
  );
};

export default CalendarCard;
