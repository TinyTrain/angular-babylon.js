!function() {
    "use strict";
    function e() {
        return function(e, s) {
            return {
                applyClass: "btn-green",
                locale: {
                    applyLabel: "应用",
                    fromLabel: "从",
                    format: e,
                    toLabel: "至",
                    cancelLabel: "取消",
                    customRangeLabel: "自定义时间范围"
                },
                ranges: {
                    "最近7天": [moment().subtract(6, "days"), moment()],
                    "最近100天": [moment().subtract(100, "days"), moment()]
                },
                timePicker: s,
                timePickerIncrement: 1
            }
        }
    }
    angular.module("ngBabylonjs").factory("timeSearch", e)
}();
