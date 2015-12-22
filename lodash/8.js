/**
 * Created by Cheol on 2015. 12. 22..
 */
// Lo-Dash 라이브러리 불러오기
var _ = require("lodash");

var worker = function(items) {
    var sum = 0;
    for(var i in items){
        sum += items[i].income;
    }
    var average = sum/(items.length);
    var under = _.filter(items, function (item) {
        return item.income <= average;
    });
    under = _.sortBy(under, 'income');

    var over = _.filter(items, function (item) {
        return item.income > average;
    });
    over = _.sortBy(over, 'income');

    return {
        'average' : average,
        'underperform' : under,
        'overperform' : over
    };
};

// worker 함수를 nodejs 모듈로 내보내기
module.exports = worker;
