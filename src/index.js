import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>

);


var colors = ["silver", "aquamarine", "silver", "aquamarine"]
var currentColor = 0
var textColor = document.getElementsByTagName("h1")

function changeColor() {
  --currentColor
  if (currentColor < 0) currentColor = colors.length - 1
  for (var i = 0; i < textColor.length; i++) {
    textColor[i].style.color = colors[(currentColor + i) % colors.length]
  }
}

setInterval(changeColor, 3000)







