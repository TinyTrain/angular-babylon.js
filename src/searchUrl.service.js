!function() {
    "use strict";
    function e() {
        return function(e) {
            var s = "";
            for (var t in e)
                if (null === e[t] || "" === e[t])
                    delete e[t];
                else if ("object" == typeof e[t]) {
                    var n = "";
                    for (var o in e[t]) {
                        if (("startDate" === o || "endDate" === o) && null !== e[t].startDate) {
                            n = t + ">=" + e[t].startDate + ";" + t + "<=" + e[t].endDate + ";";
                            break
                        }
                        if (("startDate" === o || "endDate" === o) && null === e[t].startDate)
                            break;
                        null !== e[t][0] && e[t][0] || null === e[t][1] || void 0 === e[t][1] ? null !== e[t][1] && e[t][1] || null === e[t][0] && !e[t][0] || void 0 === e[t][0] ? n = null !== e[t][1] && e[t][1] || null !== e[t][0] && e[t][0] ? t + ">=" + e[t][0] + ";" + t + "<=" + e[t][1] + ";" : "" : (delete e[t][1],
                            n = t + ">=" + e[t][0] + ";") : (delete e[t][0],
                            n = t + "<=" + e[t][1] + ";")
                    }
                    s += n
                } else
                    s += t + "==" + e[t] + ";";
            return s.substring(0, s.length - 1)
        }
    }
    angular.module("ngBabylonjs").factory("SearchUrl", e)
}();
