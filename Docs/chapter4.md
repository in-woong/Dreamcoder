## Class vs Function Component

Hook이 상대적으로 최신이라, 기존에 Class Componenet로 구성되어 있는 것이 굉장히 많기 때문에 이해하고 쓸 줄 알아야 한다.

## JSX 문법 정리

[introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
[JSX In Depth](https://reactjs.org/docs/jsx-in-depth.html)

class <-> className
onclick <-> onClick

1. JSX는 Javascript코드이다 {}를 통해서 로직을 완성할 수 있다.
2. 그리고 return은 한가지 태그로 감싸져 있어야 한다.(<> 빈 태그(Fragment)로 묶는다.)


## map에서 id를 계속 부여하는 이유:
 렌더링을 다시 할 때 반복을 하지 않게 하기 위해 고유한 번호로 사용한다 -> 배열의 인덱스를 사용하면 안된다.

 데이터를 가진 곳에서 데이터를 처리하는 함수를 가지자.

 ## state의 값을 직접적으로 수정하는 것은 좋지 않다!