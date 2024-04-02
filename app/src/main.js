// import $ from 'jquery';
import React from 'react';
// import ReactDom from 'react-dom';
import Editor from './components/editor';
import { createRoot } from 'react-dom/client';

// ReactDom.render(<Editor />, document.getElementById('root'))
const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<Editor />);

// function getPageList() {
//     $("h1").remove();
//     $.get('./api', data => {
//         data.forEach(file => {
//             $("body").append(`<h1>${file}</h1>`)
//         })
//     }, "JSON");
// }

// getPageList();

// $("button").click(() => {
//     $.post("./api/createNewPage.php", {
//         "name": $("input").val()
//     }, () => {
//         getPageList()
//     })
//         .fail(() => {
//             alert("Страница уже существует!");
//         })
// })