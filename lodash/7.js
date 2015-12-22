/**
 * Created by Cheol on 2015. 12. 21..
 */
// Lo-Dash 라이브러리 불러오기
var _ = require("lodash");

var worker = function(items) {
    var gruop = _.groupBy(items, 'article');
    gruop = _.sortBy(gruop, "article").reverse();

    var putArray = [];

    for(var i in gruop){

        var sum = 0;
        for(var j in gruop[i]){
            sum += gruop[i][j].quantity;
        }

        var putObject = {};
        putObject.article = gruop[i][0].article;
        putObject.total_orders = sum;
        putArray.push(putObject);
    }
    return putArray;
};

// worker 함수를 nodejs 모듈로 내보내기
module.exports = worker;
