/**
 * Created by Cheol on 2015. 12. 18..
 */
// Lo-Dash 라이브러리 불러오기
var _ = require("lodash");

var worker = function(items) {
    // 뭔가 해서 결과를 반환하기
    return _.chain(items).map(function (word) {
        return (word + "chained").toUpperCase();
    }).sortBy(function (word) {
        return word;
    });
};

// worker 함수를 nodejs 모듈로 내보내기
module.exports = worker;
