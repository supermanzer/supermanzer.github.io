'use strict';

/*
js/init.js
---------------------------------------------------------
This script is used to initialize those MaterializeCSS
UI components that require Javascript initliazation
and binding.
*/
document.addEventListener('DOMContentLoaded', function () {
    // Initialize side nav
    var elems = document.querySelector('.sidenav');
    var options = {}; // add options here if desired
    var inst = M.Sidenav.init(elems, options);

    // Initialize parallax elements
    var elems = document.querySelectorAll('.parallax');
    var options = {};
    var inst = M.Parallax.init(elems, options);

    // Initialize tab elements
    $('.tabs').tabs();
    // Initialize Collapsible elements
    var elems = document.querySelectorAll('.collapsible');
    var options = {};
    var inst = M.Collapsible.init(elems, options);
});