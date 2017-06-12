var React = require('react');
var ReactDOM = require('react-dom');


/*
var reactElement = React.createElement('h1');
ReactDOM.render(reactElement, document.getElementById('react-application'));
*/

/*
var reactElement = React.createElement('h1', {className:'header'});
ReactDOM.render(reactElement, document.getElementById('react-application'));
*/

/*
var reactElement = React.createElement('h1', {className:'header'}, 'This is React');
ReactDOM.render(reactElement, document.getElementById('react-application'));
*/

/*
var h1 = React.createElement('h1', {className:'header', key:'header'}, 'This is React');
var p = React.createElement('p', {className:'content', key:'content'}, "And that's how it works.");

var reactFragment = [h1, p];
var section = React.createElement('section', {className:'container'}, reactFragment);
ReactDOM.render(section, document.getElementById('react-application'));
*/


/*
var listItemElement1 = React.createElement('li', {className:'item-1', key:'item-1'}, 'Itme 1');
var listItemElement2 = React.createElement('li', {className:'item-2', key:'item-2'}, 'Itme 2');
var listItemElement3 = React.createElement('li', {className:'item-3', key:'item-3'}, 'Itme 3');

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];
var section = React.createElement('ul', {className:'list-ofitmes'}, reactFragment);
ReactDOM.render(section, document.getElementById('react-application'));
*/

/*
var createListItemElement = React.createFactory('li');

var listItemElement1 = createListItemElement({className:'item-1', key:'item-1'}, 'Itme 1');
var listItemElement2 = createListItemElement({className:'item-2', key:'item-2'}, 'Itme 2');
var listItemElement3 = createListItemElement({className:'item-3', key:'item-3'}, 'Itme 3');

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];
var listOfItems = React.createElement('ul', {className:'list-ofitmes'}, reactFragment);
ReactDOM.render(listOfItems, document.getElementById('react-application'));
*/

/*
var listItemElement1 = React.DOM.li({className:'item-1', key:'item-1'}, 'Itme 1');
var listItemElement2 = React.DOM.li({className:'item-2', key:'item-2'}, 'Itme 2');
var listItemElement3 = React.DOM.li({className:'item-3', key:'item-3'}, 'Itme 3');

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];
var listOfItems = React.createElement('ul', {className:'list-ofitmes'}, reactFragment);
ReactDOM.render(listOfItems, document.getElementById('react-application'));
*/

/*
var listItemElement1 = React.DOM.li({className:'item-1', key:'item-1'}, 'Itme 1');
var listItemElement2 = React.DOM.li({className:'item-2', key:'item-2'}, 'Itme 2');
var listItemElement3 = React.DOM.li({className:'item-3', key:'item-3'}, 'Itme 3');

var reactFragment = [listItemElement1, listItemElement2, listItemElement3];
var listOfItems = React.createElement('ul', {className:'list-ofitmes'}, reactFragment);
ReactDOM.render(listOfItems, document.getElementById('react-application'));

var ReactDOMServer = require('react-dom/server');
console.log(ReactDOMServer.renderToString(listOfItems));
console.log(ReactDOMServer.renderToStaticMarkup(listOfItems));
*/


var listOfItems = <ul className="list-of-items">
                   <li className="item-1">Item 1</li>
                   <li className="item-2">Item 2</li>
                   <li className="item-3">Item 3</li>
                  </ul>;

ReactDOM.render(listOfItems, document.getElementById('react-application'));

