import React, { useState } from 'react'
import cn from 'classnames'
import { Button } from 'antd'

const UseStateDome = () => {
  const [a, setA] = useState(0)  
  return (
    <div className={cn('flex-1 flex center column')}>
      <Button type="primary" onClick={() => setA(a + 1)}>点击+1</Button>
      <p>{a}</p>
    </div>
  )
}

export default UseStateDome