import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Post from './App';
//import * as serviceWorker from './serviceWorker';

////////
import Post from './MainBlog';

const post = {
    title: "Dinosaurs are awesome",
    author: ["Stealthy Stegosaurus","T-Rex", "Ivory Iguanodon"],
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
}

ReactDOM.render(<Post 
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
