import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('h1', { id: 'heading', xyz: 'abc' }, 'Hello World from React');
// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);

const parent = React.createElement('div', { id: 'parent' }, 
    [
        React.createElement('div', {id: 'child'}, 
    [
        React.createElement('h1', {}, 'I am a H1 tag'), 
        React.createElement('h2', {}, 'I am a H2 tag')
    ]),
    React.createElement('div', {id: 'child2'}, 
    [
        React.createElement('h1', {}, 'I am a H1 tag'), 
        React.createElement('h2', {}, 'I am a H2 tag')
    ])
    ]
);

console.log(parent);
root.render(parent);