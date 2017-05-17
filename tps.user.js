// ==UserScript==
// @name         TagPro Shortcuts
// @version      0.1
// @description  Starting a game is even simpler now.
// @downloadURL  https://gist.github.com/wilcooo/2933ebcbfb5e245a599834d31e4a2d2b/raw/ac7d8a1c21ed391956acecb6299d85dd3e57bc5e/TagProShortcuts.user.js
// @include      http://tagpro-*.koalabeast.com:*
// @include      http://tangent.jukejuice.com:*
// @include      http://*.newcompte.fr:*
// @include      http://tagpro-*.koalabeast.com/
// @include      http://tangent.jukejuice.com/
// @include      http://*.newcompte.fr/
// @include      http://tagpro-*.koalabeast.com/*
// @include      http://tangent.jukejuice.com/*
// @include      http://*.newcompte.fr/*
// @author       Ko
// ==/UserScript==




(function() {

    // All shortcut keys:
    play_key = 80; // P
    profile_key = 86; // V

    function keyDown(event){
        var char = event.keyCode;
        switch (event.keyCode) {      // One case for every shortcut key, and some code to run when the key is pressed.
            case play_key:
                window.location.href = '/games/find';
                break;
            case profile_key:
                window.location.href = '/profile';
                break;
            default:
                break;
        }
        if ( char == play_key ) {
            window.location.href = '/games/find';
        }
    }

    document.addEventListener("keydown", keyDown);


})();
