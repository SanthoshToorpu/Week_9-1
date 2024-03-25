import {React, useState} from 'react'
import Datafetching from './subcomponents/Datafetching'
import Online from './subcomponents/Online';
import MousePointer from './subcomponents/mouse';
import Debouncing from './subcomponents/Debounce';
import UseIntervali from './subcomponents/Interval';

const Customhooks = () => {
    const [datafetching, setdatafetching] = useState(false);
    const [online, setonline] = useState(false);
  return (
    <div>
      <p>
  Hooks that you create yourself, so other people can use them are called custom hooks.
  A custom hook is effectively a function, but with the following properties:
  <ul>
    <li>Uses another hook internally (useState, useEffect, another custom hook)</li>
    <li>Starts with use</li>
  </ul>

  A few good examples of this can be:
  <ul>
    <li>Data fetching hooks</li>
    <li>Browser functionality related hooks - useOnlineStatus , useWindowSize, useMousePosition</li>
    <li>Performance/Timer based - useInterval, useDebounce</li>
  </ul>
</p>
    <h2>Custom Data Fetching Hook</h2>
    <button onClick={() => {setdatafetching(!datafetching)}}>Datafetching</button>
    {datafetching && <Datafetching/>}
    <h2>Useonline Hook</h2>
    <button onClick={() => {setonline(!online)}}>Online</button>
    {online && <Online/>}
    <MousePointer />
    <Debouncing />
    <UseIntervali />
    </div>

  )
}

export default Customhooks
