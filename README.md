# Olympic Medal Sort
![image](https://github.com/user-attachments/assets/db7f76a3-5d97-420c-b313-26430b490234)


# 프로젝트 개요

리액트를 이용하여 만든 올림픽 메달 순위를 보여주는 페이지 입니다.

# 기능

- LocalStorage에 데이터 저장
- 국가, 메달 갯수 입력 폼 
- 금은동 메달로 정렬 및 총 메달 수 정렬
- 국가 추가, 내용 업데이트, 삭제 기능

# 트러블 슈팅
- [some메서드의 조건을 어떻게 해야하지?](https://velog.io/@wltn7star/TIL19.-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-some-%EC%82%AC%EC%9A%A9)

# 프로젝트 구조
```
📦Olympic_medal_sort
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂atoms
 ┃ ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┃ ┗ 📜Input.jsx
 ┃ ┃ ┣ 📂molecules
 ┃ ┃ ┃ ┗ 📜SortBox.jsx
 ┃ ┃ ┣ 📂organism
 ┃ ┃ ┃ ┣ 📜Body.jsx
 ┃ ┃ ┃ ┗ 📜FormContainer.jsx
 ┃ ┃ ┣ 📂pages
 ┃ ┃ ┃ ┗ 📜App.jsx
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┣ 📜App.css
 ┃ ┃ ┃ ┣ 📜body.css
 ┃ ┃ ┃ ┣ 📜button.module.css
 ┃ ┃ ┃ ┗ 📜form.module.css
 ┃ ┃ ┗ 📂utils
 ┃ ┃ ┃ ┣ 📜localStorage.js
 ┃ ┃ ┃ ┗ 📜sortFunc.js
 ┃ ┗ 📜main.jsx
 ┣ 📜.gitignore
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜vite.config.js
 ┗ 📜yarn.lock
```
