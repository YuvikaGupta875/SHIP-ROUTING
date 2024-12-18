<!doctype html>
<html>
<head>
	<script src="https://api.mapy.cz/loader.js"></script>
	<script>Loader.load()</script>
	<meta charset="UTF-8">
</head>

<body>
	<div id="alles">
		<table style="width:100%;height:100%;"> <tr> <td>
		<div id="menu" style='padding-right:11px;padding-left:5px'>
			<table style='text-align:center;height:100%'>
				<tr>
					<td colspan = 2>
						<text style='font-size:23px'>
						ROUTE&nbspPLANNER
						</text>
						<br>
						<text style='font-size:18px'>
						SHOWING WEATHER
						</text>
						<br>
						<text style='font-size:15px'>
						VIA Project by Petr Hrubý
						</text>
						<br>
					</td>
				</tr><tr>
					<td colspan = 2>
					</td>
				</tr><tr>
					<td colspan = 2>
						<br>
						<b>FIND ROUTE</b>
					</td>
				</tr><tr>
					<td colspan = 2>
					<input type="radio" id="car" name="means" value=1 checked>
					<label for="car">Car</label>
					<input type="radio" id="bike" name="means" value=2>
					<label for="bike">Bike</label>
					<input type="radio" id="walk" name="means" value=3>
					<label for="walk">Walk</label>
					</td>
				</tr><tr>
					<td>
						<button onclick="load_start()" style='background-color:silver;width:100%'>Set Start</button>
					</td><td>
						<button onclick="load_target()" style='background-color:silver;width:100%'>Set Target</button>
					</td>
				</tr><tr>
					<td colspan = 2>
						<button onclick="find_route()" style='background-color:lightGreen;width:100%'>Find Route</button>
					</td>
				</tr><tr>
					<td colspan = 2>
						<br>
						<b>SAVE AND LOAD</b>
					</td>
				</tr><tr>
					<td>
						Route List:
					</td><td>
						<select id="route_select"></select>
					</td>
				</tr><tr>
					<td colspan = 2>
						<button onclick="load_routes()" style='background-color:silver;width:100%'>Update Route List</button>
					</td>
				</tr><tr>
					<td>
						<button onclick="save_route()" style='background-color:silver;width:100%'>Save Route</button>
					</td><td>
						<button onclick="load_route()" style='background-color:silver;width:100%'>Load Route</button>
					</td>
				</tr><tr>
					<td colspan = 2>
						<br>
						<b>GET WEATHER</b>
					</td>
				</tr><tr>
					<td colspan = 2>
						<button onclick="get_weather()" style='background-color:lightBlue;width:100%'>Get Weather</button>
					</td>
				</tr><tr>
					<td colspan = 2>
						Departure delay  <text id="demo"></text> hours
					</td>
				</tr><tr>
					<td colspan = 2>
						<input type="range" min="0" max="24" value="0" class="slider" id="delay">
					</td>
				</tr><tr>
					<td colspan = 2>
						<br>
						<b>DESCRIPTION</b>
					</td>
				</tr><tr>
					<td colspan = 2>
						Precipitation amount:
					</td>
				</tr><tr>
					<td>
						<text bgcolor="blue" style="background-color:blue;color:white"> <b> Blue </b> </text>
					</td><td>
						&lt 1 mm/h
					</td>
				</tr><tr>
					<td>
						<text bgcolor="green" style="background-color:green;color:white"> <b> Green </b> </text>
					</td><td>
						&lt 10 mm/h
					</td>
				</tr><tr>
					<td>
						<text bgcolor="orange" style="background-color:orange;color:white"> <b> Orange </b> </text>
					</td><td>
						&lt 100 mm/h
					</td>
				</tr><tr>
					<td>
						<text bgcolor="red" style="background-color:red;color:white"> <b> Red </b> </text>
					</td><td>
						&gt= 100 mm/h
					</td>
				</tr><tr>
					<td colspan = 2>
						Precipitation probability:
					</td>
				</tr><tr>
					<td>
						<text bgcolor="blue" style="background-color:black;color:lightBlue"> <b> Blue </b> </text>
					</td><td>
						zero
					</td>
				</tr><tr>
					<td>
						<text bgcolor="green" style="background-color:black;color:lightGreen"> <b> Green </b> </text>
					</td><td>
						up to 33 %
					</td>
				</tr><tr>
					<td>
						<text bgcolor="orange" style="background-color:black;color:orange"> <b> Orange </b> </text>
					</td><td>
						up to 66 %
					</td>
				</tr><tr>
					<td>
						<text bgcolor="red" style="background-color:black;color:red"> <b> Red </b> </text>
					</td><td>
						over 66 %
					</td>
				</tr><tr>
					<td colspan=2>
						<a href="http://hrubype7.pythonanywhere.com/"> API Documentation </a>
					</td>
				</tr><tr>
					<td colspan=2>
						<a href="https://github.com/petrhruby97/Route-Planner-Showing-Weather"> Github project </a>
					</td>
				</tr>
			</table>
		</div>
		</td><td style="width:100%;height:100%;">
		<div id="mapa" style="width:100%;height:100%;"></div>
		</td></tr></table>
		<script src="weather.js"></script> 
	</div>
</body>
</html>
