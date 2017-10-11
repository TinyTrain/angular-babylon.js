!function() {
    "use strict";
    function e() {
        return function(e, s, t, n) {
            t.maxDate = s || null,
                n && e ? n.minDate = e : n && !e && (n.minDate = null)
        }
    }
    angular.module("ngBabylonjs").factory("timeUpdate", e)
}();
