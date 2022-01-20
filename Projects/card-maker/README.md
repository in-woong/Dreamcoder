Refactoring
useCallback : maker라는 컴포넌트가 변경될때마다 함수가 재 선언되고 그렇게되면 재실행 되기 때문 에 변하지 않게 만들어줌
단, 한번만든 함수를 계속 동일하게 사용한다. 따라서, dependency를 주면 된다.

memo를 변경하는게 불필요한 경우도 있다.
props나 state가 과다하게 ㅕ