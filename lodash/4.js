/**
 * Created by Cheol on 2015. 12. 18..
 */
// Lo-Dash 라이브러리 불러오기
var _ = require("lodash");

var worker = function(items) {
    // 뭔가 해서 결과를 반환하기
    var putObject = {};
    putObject.hot = [];
    putObject.warm = [];
    for(var item in items){
        if(_.every(items[item], function (tem) {
                return (tem > 19);
            })){
            putObject.hot.push(item);
        }
        else if(_.some(items[item], function (tem) {
                return (tem > 19);
            })){
            putObject.warm.push(item);
        }

    }
    return putObject;
};

// worker 함수를 nodejs 모듈로 내보내기
module.exports = worker;
