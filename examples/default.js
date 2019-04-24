var Factorio = require('../index');

Factorio.user('Bobingabout').then(function(info){
    console.log( JSON.stringify(info, null, 2) );
}, console.warn);
/*

{
  "id": "Bobingabout",
  "avatar": "https://www.gravatar.com/avatar/cfd17b18221b7ba34f097081d55c3a5e?s=192",
  "name": "Bobingabout",
  "downloads": 7373337,
  "mods": [ "...array of mods..." ]
}
 */

Factorio.mod("bobassembly").then(function(info){
    console.log( JSON.stringify(info, null, 2) );
}, console.warn);
/*
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
 */