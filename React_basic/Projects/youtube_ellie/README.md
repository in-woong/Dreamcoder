# 내가 할 때 문제점 해결

-검색 할 시 두가지 id가 곂친다고 뜨는 에러메시지가 나온다
검색할때는 id의 출력값이 달랐다.(Network, previe에 가서 확인)


# 착안할 점 

MVC, MVVM, MVI, MVP등의 디자인 패턴을 유지해야한다.
> 역할에 맞게 세부적으로 세분화해서 한가지의 역할만 가지게 만든다.

앱, 컴포넌트에 필요한 dependency를 따로 만들어 놓은다음에 injection 해 주는 방식 이용
유닛 테스트를 할 때도 ,네트워크 통신을 하는 것에 있어서 굉장히 쉬워진다.

** 리액트 컴포넌트는 가장 멍청하게 만들고 네트워크 처리, 스토리지 사용 등은 따로 class를 만든다 **

- promise를 반환할 때는 async를 달아 놓아서 promise를 리턴해 줄 수 있도록 하자.

# useCallback 사용처
1. function component에서는 class가 불려올 때마다 변수들이 다시 생성된다. 그럼 그 변수들을 props로 가지는 자식 component들도 다시 생성이 된다.
이렇게 자식 컴포넌트가 계속해서 re-rendering이 되는 것을 방지해주기 위해 useCallback을 사용핟다.
하지만 useCallback에 있는 콜백함수는 메모리에 계속 저장이 되어있기 때문에 메모리를 많이 잡아먹어 신중히 사용해 주어야 한다.
자식 컴포넌트에 props를 전달할 때는 사용해도 되지만
div, btn element 혹은 이벤트 핸들러를 전달하는 경우에는 re-rendering이 되지 않기 때문에 사용하지 않는다.

# 무엇을 할때
계획하고
검증하고
코드를 들어가자

# fetch web APIs 와 Axios 라이브러리
axios 장점:
1. 가독성
2. json()를 라이브러리 자체에서 해준다
3. XMLHttpRequest도 쓴다