// Object.create : 지정된 프로토타입 객체 및 속성(property)을 갖는 새 객체를 만듬

// Shape - 상위클래스
function Shape() {
  this.x = 0;
  this.y = 0;
}

// 상위클래스 메서드
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - 하위클래스
function Rectangle() {
  Shape.call(this); // super 생성자 호출.
}

// 하위클래스는 상위클래스를 확장
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?', rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'