# prototype

#### 자바스크립트는 prototype 기반 언어이다. 
클래스 기반 언어에서는 <b>상속</b>을 사용하지만 prototype 기반 언어에서는 어떤 객체를 원형(proto)로 삼고 이를 복제(참조)함으로써 상속과 비슷한 효과를 얻는다.

#
### prototype, __ proto __
- 이 둘의 관계가 prototype 개념의 핵심.
- prototype => 객체, 이를 참조하는 __ proto __ => 객체
- prototype 객체 내부에는 인스턴스가 사용할 메서드를 저장하고, 인스턴스에 숨겨진 프로퍼티인 __ proto __를 통해 메서드들에 접근할 수 있다.
