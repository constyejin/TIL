// 변수 타입 지정 (string, number, boolean, null, undefined, bigint, [], {} ...etc)
var 이름 = 'Lee';
이름 = 123;
function 함수(x) {
    return x * 2;
}
함수(10);
var john = [123, true];
var samanda = { name: 'Lee' };
// class 타입 지정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
