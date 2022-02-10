import React, { useMemo, useRef, useEffect, useState, useCallback } from 'react'
import cn from 'classnames'
import { Table } from 'antd';

import './index.less'

// 表格组件
const TableA = props => {
  // 列
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

  // 数据
  const dataSource = useMemo(() => {
    const arr = []
    for (let i = 0; i <5; i++) {
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

// 递归寻找目标dom 寻找[attr]为val的dom
const findDomRef = (domObj, attr, val) => {
  if (!domObj) {
    return false;
  }
  if (domObj[`${attr}`] === val) {
    return domObj
  }
  if (domObj?.childNodes?.length > 0) {
    return findDomRef(domObj?.childNodes[0], attr, val)
  }
  return false;
}

const ScollTablePage = () => {
  const refObj = useRef({
    // 页面高度
    offsetHeight: 0,
    // 表格宽度
    tableWidth: 0,
    // 表格内容宽度
    tableContentWidth: 0,
    // 表格滚动元素
    tableScrollDom: null,
  })
  // 页面ref
  const pageRef = useRef(null)
  // 滚动条ref
  const scrollRef = useRef(null)
  // 目标表格
  const [tableArr, setTableArr] = useState([])
  // 目标表格的信息 getBoundingClientRect
  const [tableObjArr, setTableObjArr] = useState([])
  // 判断是否有目标表格
  const [hasYsTable, setHasYsTable] = useState(false)
  // 是否展示粘滞滚动条
  const [showScoll, setShowScoll] = useState(false)

  useEffect(() => {
    // 获取可视区域的高度offsetHeight
    refObj.current.offsetHeight = pageRef.current.offsetHeight
    // 遍历子级 看是否有ys-sticky
    pageRef.current?.childNodes?.forEach((child, index) => {
      // 有ys-sticky 则获取相关数据
      if (child.className.includes('ys-sticky')) {
        if (!hasYsTable) {
          setHasYsTable(true)
        }
        // 获取目标表格
        setTableArr([...tableArr, child])
        // 获取目标表格的信息 getBoundingClientRect
        setTableObjArr([...tableObjArr, child.getBoundingClientRect()])
        refObj.current.tableWidth = child.offsetWidth
        // 获取实际内容表格
        const table = findDomRef(child, 'nodeName', 'TABLE')
        refObj.current.tableContentWidth = table.offsetWidth
        // 获取目标表格的滚动元素
        refObj.current.tableScrollDom = findDomRef(child, 'className', 'ant-table-content')
      }
    });
  }, [])
  // console.log(`pageRef`, pageRef.current.offsetTop)
  // console.log(`object`, {refObj: refObj.current ,tableArr, tableObjArr})

  // 页面滚动监听
  const pageScroll = (e) => {
    // console.log(`e`, e.target.scrollTop)
    // 目标表格可见且其自身滚动条不在可视区的时候，显示粘滞滚动组件
    // top/bottom 包含了 pageRef.current.offsetTop，所以需要减去
    if ( e.target.scrollTop > tableObjArr[0].top - refObj.current.offsetHeight - pageRef.current.offsetTop 
        && e.target.scrollTop < tableObjArr[0].bottom - refObj.current.offsetHeight - pageRef.current.offsetTop ) {
      // 同步表格的滚动条的scrollLeft和粘滞滚动组件的scrollLeft
      if (!!scrollRef?.current && scrollRef?.current?.scrollLeft !== refObj?.current?.tableScrollDom?.scrollLeft) {
        scrollRef.current.scrollLeft = refObj?.current?.tableScrollDom?.scrollLeft
      }
      setTimeout(() => {
        setShowScoll(true)
      }, 0);
    } else {
      setShowScoll(false)
    }
  }
  
  // 粘滞滚动组件
  const ScollDemo = useCallback( 
    () => {
      // 粘滞滚动滚动组件的滚动事件
      const scroll = (e) => {
        if (refObj.current.tableScrollDom.scrollLeft === e.target.scrollLeft) {
          return
        }
        // 同步表格的滚动条的scrollLeft和粘滞滚动组件的scrollLeft
        refObj.current.tableScrollDom.scrollLeft = e.target.scrollLeft
      }
      return (
        <div 
          ref={scrollRef}
          className='ys-scoll-box' 
          style={{ width: `${refObj.current.tableWidth}px` }} 
          onScroll={scroll}
        >
          <div className='ys-scoll' style={{ width: `${refObj.current.tableContentWidth}px` }}></div>
        </div>
      )
    }
  , [])

  return (
    <div className={cn('a-page')} ref={pageRef} onScroll={pageScroll} >
      <div className={cn('a-part')}>其他不重要的内容</div>
      {/* <div className={cn('a-part')}>其他不重要的内容</div>
      <div className={cn('a-part')}>其他不重要的内容</div> */}
      <TableA className={cn('a-table ys-sticky')} ></TableA>
      <div className={cn('a-part')}>其他不重要的内容</div>
      <div className={cn('a-part')}>其他不重要的内容</div>
      <div className={cn('a-part')}>其他不重要的内容</div>
      {/* <ScollDemo /> */}
      { hasYsTable && showScoll && <ScollDemo />}
    </div>
  )
}

export default ScollTablePage