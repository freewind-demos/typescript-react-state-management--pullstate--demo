import React from 'react'
import {getState, updateStore} from './store';

export default function Hello() {
  const username = getState(it => it.username);
  return <div>
    <h1>Hello {username}</h1>
    <hr/>
    <input type='text' value={username} onChange={event => updateStore(it => {
      it.username = event.target.value
    })}/>
  </div>
};
