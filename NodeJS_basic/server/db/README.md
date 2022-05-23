1.UnhandledPromiseRejectionWarning: Error: Access denied for user ''@'localhost' (using password: YES) 오류 발생

-> root의 비밀번호가 잘못된 것 같았지만, workbench 상에 같은 비밀번호로 로그인 할 때 이상 없음

-> cli 상에 mysql 명령어 입력 시 설치된 내용 없음

해결방법: config가 동작을 안하고 있었음

문제점: config 에서 만든 required 함수에서 값을 출력하지 않고 undefined를 계속 출력중이 었음
 
디버깅방법: 출력 내용을 디버깅 툴을 이용해서 추적 확인