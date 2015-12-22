/**
 * Created by Cheol on 2015. 12. 22..
 */
// Lo-Dash 라이브러리 불러오기
var _ = require("lodash");

var worker = function(items) {
    return _.template('Hello <%= name %> (logins: <%=login%>)')({name: items.name, login: items.login.length});
};

// worker 함수를 nodejs 모듈로 내보내기
module.exports = worker;
