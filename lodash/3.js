/**
 * Created by Cheol on 2015. 12. 18..
 */
// Lo-Dash 라이브러리 불러오기
var _ = require("lodash");

var worker = function(items) {
    // 뭔가 해서 결과를 반환하기
    return _.forEach(items, function (item) {
        if(item.population > 1){
            item.size = 'big';
        }else if(item.population > 0.5){
            item.size = 'med';
        }else{
            item.size = 'small';
        }
        return item;
    });
};

// worker 함수를 nodejs 모듈로 내보내기
module.exports = worker;
