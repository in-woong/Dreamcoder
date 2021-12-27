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

## 상위 Class에서는 함수를 작성, 및 Logic을 구성하고, 실재하는 부분에서 데이터를 받고, 데이터를 함수에 넣자

## PureComponent란?

-

## Shallow compoarison?

Object의 reference만 검사

1. 변화하는 것 을 따로 빼서 전달

2. Object의 값이 변경될 때마다 깊게 까지 복사해서 새로 만든다
   Object의 reference만을 비교하는 것이므로, 그 reference를 비교할 수 있도록 전체를 새로 저장한다.

## Lifecycle 함수 이해하기

리엑트로 생각하기(component로 나누고 , props와 state를 나누고)

## function Component

PureComponent == memo
props를 변경하지 않으면 component를 업데이트 하지 않아도 될 때
