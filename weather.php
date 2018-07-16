<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
 
    <style>    
  body {
  display: flex;
  background-attachment: fixed;
  background-color: #222;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  flex-direction: column;  
  font-family: 'Cabin', sans-serif;
  min-height: 100vh;
  min-width: 320px;
  text-align: center;
}
main {
  flex: 1 0 auto;
}

#city {
  font-size: 2em;
  text-shadow: 2px 4px 1px #333;
}

@media screen and (min-width: 768px) {
  #city {
    margin-top: 10%;
  }
}
#temperature {
  font-size: 3em;
  text-shadow: 2px 4px 2px #333;
}

#condition,
#wind-speed {
  background-color: #93AFC4;
  background-color: rgba(147, 175, 196, .4);
  border: 2px solid #fff;
  border-radius: 50%;
  box-shadow: .2em .2em .2em #222;
  display: inline-block;
  font-size: 1.2em;
  margin: .5em;
  min-height: 6em;
  min-width: 10em;
  padding-top: 1em;
  text-shadow: 1px 1px 1px #333333;
}

.wi {
  font-size: 2em;
}

.description {
  line-height: 2em;
}

.input-group {
  color: #222;
  margin: 2em auto 0 auto;
  max-width: 25em;
  padding: 0 1em;
}

#search-field {
  font-size: 16px;
}

/* auto-complete menu */
.ui-menu {
  background-color: white;
  list-style: none;
  max-width: 20em;
  outline: none;
  padding: 0;
  text-align: left;
  position: absolute!important;
}

.ui-menu .ui-menu-item {
  color: #222;
  border-bottom: 2px solid #428bca;
  cursor: pointer;
  font-weight: bold;
  overflow: hidden;
  padding: 3px 1em 3px .4em;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ui-state-focus,
.ui-state-active {
  background-color: #ddd;
  margin: -1px;
}

.ui-helper-hidden-accessible { 
  clip: rect(1px,1px,1px,1px);
  position: absolute;
}

 
 {
    box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.column {
    float:left;
    width: 20%;
    padding: 10px;
    height: 300px; /* Should be removed. Only for demonstration */
}
 #customers {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
}

#customers td, #customers th {
    border: 1px solid #ddd;
    padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}
#customers td {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
 
    color: black;
}
    </style>    
  </head>
  <body>
 
<div class="container">
 

<main>
  <div class="container">
      <div class="row">
      <div class="input-group">
        <input id="search-field" type="text" class="form-control" placeholder="Search for a city...">
      </div>
    <div class="row">
      <div id="city"></div>
      <div id="temperature"></div>
    </div>
    <div id="results row">
      <div id="condition"></div>
      <div id="wind-speed"></div>  
    </div>
 
    <div class="row">
      <a id="convert-button" class="btn btn-primary">°F / °C</a>
    </div>
  
    </div>
  </div>
</main>
 <div id="table"></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js"></script>
<script src="weather.js"></script>
 
 
 
</div>

</body>
</html>