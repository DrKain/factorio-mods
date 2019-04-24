factorio-mods
=============

[![NPM](https://nodei.co/npm/factorio-mods.png?downloads=true)](https://nodei.co/npm/factorio-mods/)

**What is this?***
------------------
Factorio-mods is an npm package to fetch user and mod information from mods.factorio.com

Install
---------------------

```npm install --save factorio-mods```

Usage
---------------------

```javascript
var Factorio = require('factorio-mods');
```

# Mod Information
---------------------
The main reason I made this was for the download stats.

```javascript
Factorio.mod("bobassembly").then(function(info){
    console.log( JSON.stringify(info, null, 2) );
}, console.warn);
```

This will return the following information:
```json
{
  "id": "bobassembly",
  "downloads": 452228,
  "updated": "a day ago",
  "versions": "0.13 - 0.17",
  "title": "Bob's Assembling machines ",
  "author": {
    "name": "Bobingabout",
    "link": "/user/Bobingabout",
    "id": "Bobingabout"
  },
  "license": "https://forums.factorio.com/viewtopic.php?f=51&t=28573",
  "summary": "Adds assembling machines 4, 5 and 6. And other machine higher tiers too.",
  "description": " ..long description.. "
}
```

# User Information
Not much user information is available.

```javascript
Factorio.user('Bobingabout').then(function(info){
    console.log( JSON.stringify(info, null, 2) );
}, console.warn);
````

Will return the following information:
```json
{
  "id": "Bobingabout",
  "avatar": "https://www.gravatar.com/avatar/cfd17b18221b7ba34f097081d55c3a5e?s=192",
  "name": "Bobingabout",
  "downloads": 7373337,
  "mods": [
    {
      "id": "bobassembly",
      "image": "https://mods-data.factorio.com/assets/7c17c0832f43a643145cb4bc3ea7e1ba2625c493.thumb.png",
      "title": "Bob's Assembling machines",
      "link": "/mod/bobassembly",
      "summary": "Adds assembling machines 4, 5 and 6. And other machine higher tiers too.",
      "downloads": 452228,
      "versions": "0.13 - 0.17",
      "updated": "a day ago"
    }
  ]
}
```
If you have any bugs or issues please report them [here](https://github.com/DrKain/factorio-mods/issues)
