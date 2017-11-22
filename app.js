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

const el = <h1 id="title"> hola {2+5}<span>mundo</span></h1>;
ReactDOM.render(el, document.getElementById('app'));