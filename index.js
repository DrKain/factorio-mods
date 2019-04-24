var jsdom = require('jsdom');

var call = function(url, type){
    return new Promise(function(resolve, reject){
        jsdom.JSDOM.fromURL(url, {
            resources : 'usable'
        }).then(function(dom){
            resolve(require("jquery")(dom.window));
        }, function(error){
            if(error.statusCode === 404) return reject(`${type} does not exist`);
            else reject(error.name);
        });
    })
};

var _getModStats = function(mod_id){
    return new Promise(function(resolve, reject){
        call(`https://mods.factorio.com/mod/${mod_id}`, "Mod").then(function($){
            var modInfo         = {};

            modInfo.id          = mod_id;
            modInfo.downloads   = +$('span[title="Downloads"] div').text();
            modInfo.updated     = $('span[title="Last updated"] div').text();
            modInfo.versions    = $('span[title="Available for these Factorio versions"] div').text();
            modInfo.title       = $('title').text().split("- Factorio Mods").shift();
            modInfo.author      = {};
            modInfo.author.name = $(".mod-card-author a").text();
            modInfo.author.link = $(".mod-card-author a").attr('href');
            modInfo.author.id   = modInfo.author.link.split("/user/").pop();
            modInfo.license     = $($("td.data-name:contains('License:')").parent().find('a')).attr('href');
            modInfo.source      = $("a.source-code-link").attr('href');
            modInfo.summary     = $(".mod-card-summary").text();
            modInfo.description = $("article.mod-page-description").html();

            resolve( modInfo );

        }, reject);
    })
};

var _getUserStats = function(user_id){
    return new Promise(function(resolve, reject){
        call(`https://mods.factorio.com/user/${user_id}`, 'User').then(function($){
            var userInfo        = {};
            userInfo.id         = user_id;
            userInfo.avatar     = $(".author-card .author-card-thumbnail img").attr('src');
            userInfo.name       = $(".author-card .author-card-title").text();
            userInfo.downloads  = 0;
            userInfo.mods       = [];

            $(".mod-list .mod-card").each(function(i, _mod){
                var mod         = {};

                mod.id          = null;
                mod.image       = $(_mod).find(".mod-card-thumbnail img").attr('src');
                mod.title       = $(_mod).find(".mod-card-title a").text();
                mod.link        = $(_mod).find(".mod-card-title a").attr('href');
                mod.id          = mod.link.split("/mod/").pop();
                mod.summary     = $(_mod).find(".mod-card-summary").text();

                mod.downloads   = +$(_mod).find('span[title="Downloads"] div').text();
                mod.versions    = $(_mod).find('span[title="Available for these Factorio versions"] div').text();
                mod.updated     = $(_mod).find('span[title="Last updated"] div').text();
                userInfo.downloads += mod.downloads;

                userInfo.mods.push(mod);
            });

            resolve(userInfo);
        }, reject);
    })
};

module.exports = {
    mod : _getModStats,
    user : _getUserStats
};