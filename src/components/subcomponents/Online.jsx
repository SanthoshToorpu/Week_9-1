import React, { useEffect, useState } from 'react'

const useIsOnline = () => {
  const [online, setonline] = useState(window.navigator.onLine);
  useEffect(() => {
    window.addEventListener('online', ()=>{setonline(true)})
    window.addEventListener('offline', ()=>{setonline(false)})
  }, [online])
  return online
}
const Online = () => {
  
  const isOnline = useIsOnline()

  return (
    <div>
      <p>
        <ul style={{listStyle: 'none'}}>
          <li>window.addEventListener('online', () ={'>'} console.log('Became online'));</li>
          <li>window.addEventListener('offline', () ={'>'} console.log('Became offline'));</li>
        </ul>
      </p>
      {isOnline ? <p>Online</p> : <p>Offline</p>}
    </div>
  )
}

export default Online
