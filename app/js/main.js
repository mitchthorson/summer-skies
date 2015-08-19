var randomColor = require('randomcolor');
var jQuery = require('jquery');
var _ = require('lodash');

var $gradient,
$document,
ctx,
canvas;

function init() {
    $document = jQuery(document);
    $gradient = jQuery(".gradient");
    canvas = document.getElementById("c");
    ctx = canvas.getContext("2d");
    var numBars = getNumBars(8);
    var colors = randomColor({hue: 'blue', count: 2});
    renderGradient(colors);
}

function getNumBars(maxNum) {
    return Math.ceil(Math.random() * maxNum)
}

function renderGradient(colorArray) {
    var gradient = ctx.createLinearGradient(0,0,0,600);
    gradient.addColorStop(0,colorArray[0]);
    gradient.addColorStop(1,colorArray[1]);
    ctx.fillStyle = gradient;
    ctx.fillRect(0,0,600,600);
}

jQuery(document).on('ready', init);
