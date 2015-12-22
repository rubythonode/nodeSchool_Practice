/**
 * Created by Cheol on 2015. 12. 18..
 */
// Lo-Dash 라이브러리 불러오기
var _ = require("lodash");

var worker = function(items) {

    var group = _.groupBy(items, 'username');
    var putObject = [];

    _.forEach(group, function (comments, username) {
        var InObject = {};
        InObject.username = username;
        InObject.comment_count = _.size(comments);
        putObject.push(InObject);
    });
    return _.sortBy(putObject, 'comment_count').reverse();
    /*
    // 뭔가 해서 결과를 반환하기
    var group = _.groupBy(items, 'username');
    var putObject = [];
    for(var user in group){
        var InObject  = {};
        InObject.username = user;
        InObject.comment_count = _.size(group[user]);
        putObject.push(InObject);
    }
    putObject = _.sortBy(putObject, function (user) {
        return -user.comment_count;
    });
    return putObject;
    */
};

// worker 함수를 nodejs 모듈로 내보내기
module.exports = worker;
