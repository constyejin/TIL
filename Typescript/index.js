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
// Pro tip : Typescript는 타입을 따로 지정하지 않아도 자동으로 된다.
var song = { singer: '유재하', song: '내 마음에 비친 내 모습' };
var project = {
    member: ['kim', 'park'],
    days: 30,
    started: true,
};
