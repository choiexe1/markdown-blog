# Markdown Blog


https://github.com/choiexe1/markdown-blog/assets/161970433/180015fb-7e17-4fca-b635-99cc55c817db


- Sveltekit
  - Skeleton (UI Toolkit)
  - TailwindCSS (CSS Framework)

## 설치와 실행

- 이 레포지토리를 클론하고 클론한 폴더로 이동한 뒤 아래 명령어를 순차적으로 입력합니다.

```bash
npm install
npm dev -- --open
```

## 구현 기능

- [x] mdsvex 패키지를 이용, `.md` 파일을 파싱하여 HTML로 렌더링

- [x] 마크다운 파일명으로 동적 라우팅

- [x] 공개 및 비공개 게시글 처리 기능

- [x] 사전에 마크다운 파일들의 숫자와 제목들을 파싱해서 게시판 형식으로 `/post` 라우터에 렌더링

- [x] 페이지네이션
