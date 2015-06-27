---
layout: page
title: Treasure Hunt
description: Mini Treasure Hunt
theme: green
---

Welcome to Treasure Hunt game! Here is how to play:

<div style="margin: auto">
<ol style="text-align: left">
	<li>Use your keyboard arrows or buttons below to move</li>
	<li>Collect all the gold bullions.</li>
	<li>Avoid those bombs, you only have 100 HP.</li>
	<li>You only have limited moves, so use it wisely</li>
	<li>Some of the gold bullions are behind the bombs -- Sneaky!!</li>
</ol>

<canvas id="myCanvas" width="500" height="500" style="border:1px solid #000000; background-color: #B1F1B9"><p>Your browser does not support Canvas. Switch browser! (Maybe try Chrome or Firefox!)</p>
</canvas> 

<script src="treasure-hunt.js" type="text/javascript"></script>

<div id="buttons">
<button onclick="startOver()" style="display:inline">Start/Restart Game</button>
<button id="left" onclick="player.move('left')" style="display:inline">Left</button>
<button id="right" onclick="player.move('right')" style="display:inline">Right</button>
<button id="up" onclick="player.move('up')" style="display:inline">Up</button>
<button id="down" onclick="player.move('down')" style="display:inline">Down</button>
</div>
