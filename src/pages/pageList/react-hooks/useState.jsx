import React, { useState } from 'react'
import cn from 'classnames'
import { Button } from 'antd'

const UseStateDome = () => {
  // 初始化可以使用函数，此函数只在初始渲染时被调用
  const [a, setA] = useState(() => 0)  
  return (
    <div className={cn('flex-1')}>
      <Button 
        style={{marginRight: '10px'}} 
        onClick={() => setA(0)}
      >归零</Button>

      <Button 
        style={{marginRight: '10px'}} 
        type="primary" 
        onClick={() => setA(a + 1)}
      >点击+1</Button>

      <Button 
        style={{marginRight: '10px'}} 
        type="primary" 
        onClick={() => setA(prevA => prevA + 2 ) }
      >点击+2</Button>
      
      <p>{a}</p>
    </div>
  )
}

export default UseStateDome