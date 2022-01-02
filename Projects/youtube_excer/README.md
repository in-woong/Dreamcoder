# YouTube Project

1. 구성
 - 검색페이지
    - 처음에는 검색없이 인기 순위25개
    - 검색 입력하고 나서는?
 - 클릭 이후 세부내용
    - 검색
    - 세부내용
    - 다른 비디오 리스트

2. 추가
 - UI는 반응형으로 구성

 # 문제점
1. class Component로 그대로 만들려고 했으나, fetch값을 어떻게 받아올 지 해결하지 못함
2. router를 만드는 과정 중  hook call problems 발생
> - invalid hook call에는 3가지 큰 이유가 있다.
>1. mismatching versions of React and the renderer( such as React DOM)
>2. You might be breaking the Rules of Hooks
>3. have more than one copy of React in the same app
> 나의 문제점은 3번 이었고 ,npm ls react와 공식문서에 나와있듯이 npm_modules에 react_dom과 
> app.jsx에서의 require("react")한 값이 같은 지 console.log를 찍어봐서 알 수 있었다.
> 결국 윗단에 쓰지않는 npm_modules에 react 이전 버전에 설치되어 그것과 충돌이 나서
> react-router가 실행이 안되었고, 삭제 이후에는 잘 되었다.