// ==UserScript==
// @name         TagPro Shortcuts
// @version      0.3
// @description  Starting a game is even simpler now.
// @downloadURL  https://github.com/wilcooo/TagProShortcuts/raw/master/tps.user.js
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


// If you want this script to work on all websites, replace the lines above starting with @include by the line below. Keep the //
// @match        *://*/*
// And second, you need to uncomment line 30 (and optionally change 'chord')

(function() {

    // All shortcut keys:
    play_key = 80; // P
    profile_key = 86; // V
    
    base = window.location.protocol + "//" + window.location.hostname;
    //base = "tagpro-chord.koalabeast.com"

    function keyDown(event){
        if (tagpro.disableControls) return;
        var char = event.keyCode;
        switch (event.keyCode) {      // One case for every shortcut key, and some code to run when the key is pressed.
            case play_key:
                window.location.href = base+'/games/find';
                break;
            case profile_key:
                window.location.href = base+'/profile';
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
