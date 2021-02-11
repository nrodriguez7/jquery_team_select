# jQuery Select Team

A  jQuery plugin for adding team members (agents) to an input.

## Usage

Include jQuery and the plugin.

```html
<script src="path/to/jquery.js"></script> 
<script src="path/to/jquery.team-select.js"></script>
```

Include the plugin styles

```html
<link rel="stylesheet" href="path/to/team-select.css">

```

```html
 <textarea id="TeamSelector" ></textarea>

```


```javascript
$(document).ready(function() {
  $('#TeamSelector').teamSelect();
});
```

## Usage  with custom font-size

```javascript
$(document).ready(function() {
  $('#TeamSelector').teamSelect(8);
});
```