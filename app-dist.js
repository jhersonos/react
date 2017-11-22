"use strict";

// el = React.createElement(
// 	'h1',
// 	{
// 		id:'title'
// 	},
// 	'hola ',
// 	React.createElement('span',null,'mundo')	
// );

// ReactDOM.render(el,document.getElementById('app'));

/* JSX */

var el = React.createElement(
  "h1",
  { id: "title" },
  " hola ",
  2 + 5,
  React.createElement(
    "span",
    null,
    "mundo"
  )
);
ReactDOM.render(el, document.getElementById('app'));