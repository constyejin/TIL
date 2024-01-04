// 변수 타입 지정 (string, number, boolean, null, undefined, bigint, [], {} ...etc)
// Union Type : 타입 2개 이상 합찬 새로운 타입
// (string | number | boolean)
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
var 회원들 = [1, '2', 3];
// let 회원들 :Array<string | number> = [1,'2',3];
var 오브젝트 = { a: '123' };
// any Type: 모든 자료형 허용
// 타입실드 해제문법으로 타입관련 버그가 나도 캐치하지 못한다.
var 아무거나;
아무거나 = 123;
;
아무거나 = '히히';
// unknown Type
// any랑 비슷하지만 더 안전한 타입
var 아무거나2;
아무거나2 = 456;
아무거나2 = [1, 2, 3];
var 변수1 = 아무거나;
// Typescript는 간단한 수학연산도 타입이 맞아야한다.
// string Type + 1 (허용)
// number Type + 1 (허용)
// string | number Type + 1 (허용X) 
var user = 'Lee';
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: 'Phil',
    friend: 'John'
};
학교.score[4] = false;
학교.friend = ['Lee', 학교.teacher];
// 함수는 parameter, return 값 지정 가능하다.
function 함수1(x) {
    return x * 2;
}
// 함수에서 void Type 활용가능
// return 쓰기 싫은 함수에 사용한다. 실수로 return하는 것을 사전에 막아준다.
function 함수2(x) {
    1 * 2;
}
함수2();
// Javascript와 다른 점
// 1. 타입 지정된 파라미터 필수
