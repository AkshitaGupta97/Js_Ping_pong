
const can = document.getElementById('myCanvas');
const ctx = can.getContext('2d');

const width = 400;
const height = 500;

can.width = width;
can.height = height;

ctx.fillstyle = 'black';
ctx.fillRect(0,0,width, height);