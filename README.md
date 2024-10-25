# 풀 스크린 작동 페이지`
스크롤 이벤트를 방지하고, 클릭시 강제로 수직적 페이지 이동을 구현함

## 원리 소개 
1. ControlledScrollApp 페이지 return에 map() 으로 <Section></Section> 4개가 랜더링 됨
2. 루트 div에서 h-screen과 overflow-hidden 으로 4개의 section중 1개씩 보이게 함
3. 첫 useEffect에서 `window.addEventListener("wheel", handleScroll, { passive: false });` 로 스크롤 움직임 방지
4. 두번째 useEffect으로 버튼 클릭시 `currentSection` state가 바뀌면서 
   sectionsRef.current.style.transform = `translateY(-${currentSection * 100}vh)`; 으로 translateY가 -100vh씩 아래로 이동되는 원리
