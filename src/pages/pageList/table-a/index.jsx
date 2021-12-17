import React, { useMemo, useRef, useEffect, useState } from 'react'
import cn from 'classnames'
import { Table } from 'antd';

import './index.less'

const TableA = props => {
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      fixed: true,
      width: 300,
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 300,
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 300,
    },
    {
      title: '列一',
      dataIndex: 'col1',
      key: 'col1',
      width: 300,
    },
    {
      title: '列二',
      dataIndex: 'col2',
      key: 'col2',
      width: 300,
    },
    {
      title: '列三',
      dataIndex: 'col3',
      key: 'col3',
      width: 300,
    },
    {
      title: '列四',
      dataIndex: 'col4',
      key: 'col4',
      width: 300,
    },
    {
      title: '列五',
      dataIndex: 'col5',
      key: 'col5',
      width: 300,
    },
    {
      title: '列六',
      dataIndex: 'col6',
      key: 'col6',
      width: 300,
    },
    {
      title: '列七',
      dataIndex: 'col7',
      key: 'col7',
      width: 300,
    },
    {
      title: '列八',
      dataIndex: 'col8',
      key: 'col8',
      width: 300,
    },
  ];

  const dataSource = useMemo(() => {
    const arr = []
    for (let i = 0; i <40; i++) {
      arr.push({
        key: 'x00'+i,
        name: 'x00'+i,
        age: i,
        address: 'x00'+i,
        col1: 'col1'+ i,
        col2: 'col2'+ i,
        col3: 'col3'+ i,
        col4: 'col4'+ i,
        col5: 'col5'+ i,
      })
    }
    return arr
  }, [])

  return (
    <Table 
      className={props.className} 
      dataSource={dataSource} 
      columns={columns} 
      pagination={false} 
      bordered 
      scroll={{x:'100%'}}
    />
  )
}

const ScollDemo = () => {
  return (
    <div className='ys-scoll-box'>
      <div className='ys-scoll'></div>
    </div>
  )
}

const ScollTablePage = () => {
  const pageRef = useRef(null)
  const [tableArr, setTableArr] = useState([])
  const [tableObjArr, setTableObjArr] = useState([])
  const [hasYsTable, setHasYsTable] = useState(false)
  const [showScoll, setShowScoll] = useState(false)
  // .getBoundingClientRect()
  useEffect(() => {
    pageRef.current?.childNodes?.forEach(child => {
      if (child.className.includes('ys-sticky')) {
        if (!hasYsTable) {
          setHasYsTable(true)
        }
        console.log(`child`, child)
        setTableArr([...tableArr, child])
      }
    });
  }, [])
  // console.log(`tableArr`, tableArr)

  const pageScroll = (e) => {
    // console.log(`e`, e.target.scrollTop)
    // console.log(`object`, tableArr[0].getBoundingClientRect())
    const objArr = []
    tableArr.forEach((item, index) => {
      objArr[index] = item.getBoundingClientRect()
    })
    console.log(`objArr`, objArr)
    setTableObjArr(objArr)
  }

  return (
    <div className={cn('a-page')} ref={pageRef} onScroll={pageScroll} >
      <div className={cn('a-part')}></div>
      <div className={cn('a-part')}></div>
      <div className={cn('a-part')}></div>
      <TableA className={cn('a-table ys-sticky')} ></TableA>
      <div className={cn('a-part')}></div>
      <div className={cn('a-part')}></div>
      <div className={cn('a-part')}></div>
      { hasYsTable && showScoll && <ScollDemo />}
    </div>
  )
}

export default ScollTablePage