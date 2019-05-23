import React from 'react'
import { render } from 'react-dom'
import Menu from './components/Menu'
import data from './data/recipes'

window.React = React
render(<Menu recipes={data}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
