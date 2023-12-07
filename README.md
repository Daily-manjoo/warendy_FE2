# [2조 프렌디] Warendy

## **OverView**

<aside>
🌿 **와인과 사람이 함께하는 이곳,  Warendy  🌲**

</aside>

🍷 어떤 와인을 마실지 고민 될 때 내 입맛에 맞춰 누군가 추천해준다면?

🍷 지난 번에 마셨던 와인 괜찮았던 것 같은데 기억이 나지 않는다면?

### Warendy는

사용자의 취향에 따라 추천을 받고 다양한 사람과 와인 스타일을 공유할 수 있는 커뮤니티 플랫폼입니다.

🥨 선호하는 취향에 따라 와인을 추천 해줘요!

🍇 와인에 대해 잘 알지 못해도 설문조사를 통해 와인 추천을 받을 수 있어요!

🍃 다른 사용자들의 와인 추천과 리뷰를 통해 서로의 취향에 대해 의견을 공유할 수 있어요!

🖌️ 자신의 와인 경험을 기록하고, 추천 받은 와인들에 대한 정보를 저장하여 참고할 수 있어요!

### ⚙️ 프로젝트 아키텍쳐

https://www.notion.so/2-Warendy-c7bdcf817a484e5ab61b05e13a9c4f66?pvs=4#3f916b53c0824f2f8d9ab74d35afcc06

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c182137-cfc1-46aa-ba92-5af07ed97943/Untitled.png)

### 🛠️ 기술 스택

---

### FE

- `Next.js + React`
- `Recoil`
- `Axios`
- `react-beautiful-dnd`
- `react-datepicker`
- `sweetalert2`

**Styles**

- `CSS Modules`
- `Fontawesome`
- `sass`

### BE

- `SpringBoot`, `SpringSecurity`, `SpringDataJPA`
- `AWS RDS(MySQL)`, `AWS S3`
- `JWT`, `OAuth 2.0(kakao)`
- `AWS Load Balancer`, `AWS Certificate Manager`, `SSL`
- `Kafka`, `WebSoket`, `SSE`

### CI / CD

- Deploy
    - FE : `Vercel`, `Github`
    - BE : `AWS EC2`, `Github Actions`, `AWS CodeDeploy`
- Communication
    
    `Slack`, `Gather`
    

### 📋 ERD

---

![ERD 완성.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a4fe66e-b4dc-4fc3-8969-198b3edc36ba/ERD_%EC%99%84%EC%84%B1.png)

### 📎 주요 기능

---

- 회원가입
    
- 로그인/로그아웃
    
- 취향 선택
    
    Body, Dry, tannin, Acidity
    
- 메인 페이지
    
    오늘의 와인, 상황별 와인, 찜 많이 받은 와인들
    
- 와인 정보
    
    Body, Dry, tannin, Acidity
    
    리뷰 리스트 보기 및 한줄리뷰 작성
    
    좋아요
    
- 와인 추천
    - 유저 취향에 맞는 와인 리스트를 제공.
    - 유저 정보와 wine정보(body, dry, tannin, acidity)를 비교하여 유사 추천
    - 거리를 계산 가까운 순 20개 선택.
    
    Best Wines - 메인 페이지 접속 시 보이는 와인 추천
    
- 와인 컬렉션
    - 배경: 유저가 좋아하는 와인을 선택, 저장하고 주제 별로 확인 할 수 있는 공간 제공.
- 주변 와인 바
    - 배경 - 특정 위도, 경도 중심 가까운 순으로 쉽게 원하는 와인 바를 찾을 수 있는 방법 제공.
    
    
- 커뮤니티 - 동행 게시글
    - 배경 - 유저들이 함께 와인 마실 사람을 구하고 확인 할 수 있는 공간을 제공.
    - 게시글 조회 - 다른 테이블과 연관 관계가 많아 데이터 조회하는데 성능 저하와, 순환 참조 오류 등이 발생. 제약 조건을 추가해 문제 해결 .
    - 게시글 삭제 - 사이버 불릿이나 익명성 관련 사이버 문제에 대응하기 위해, 삭제 시 완전 삭제가 아닌, status 변경.(deleteAt update)
    - 동행 게시글 참가 - board 테이블에 참가자 닉네임을 Set으로 저장하여, 한 유저가 여러 번 들어가지 않게 방지.

    
- 마이페이지
    
- 회원 정보 수정/삭제
    
- 리뷰페이지
    

---

- 커뮤니티 - 채팅(BE)
    - 게시글 내에서 채팅에 참여하여 동행에 대한 궁금증을 해결하는 공간 제공.
    
- 커뮤니티 - 알람(BE)
    - 다른 유저가 내가 참여한 동행 게시글에 참여했을 때 확인 할 수 있는 알람 제공.
    

### 🎯 트러블 슈팅

---

- **FrontEnd**
    
    
    | Problem | 설문조사 시 어떻게 값을 저장하고 그에 맞는 결과를 보여주는지 |
    | --- | --- |
    | Reason | 알고리즘에 약한 나의 수학적 능력 |
    | Try to solve | 리코일을 사용해 해당 와인 타입들을 만든 다음 문항수마다 타입값들을 저장해 해당 수치들이 전부 낮게 나온다면 와인 입문자로 만들어버림  |
    | Alternative | 설문조사의 로직들을 util로 따로 빼서 스파게티 코드 방지하기 |
    
    | Problem | Next.js 사용 시 폴더 구조 세분화 |
    | --- | --- |
    | Reason | 기존 react와 달리 정형화되어 있는 구조로 인한 혼선 |
    | Try to solve | 라우터 기능을 가진 페이지(’pages’)와 헤더 및 푸터를 components 폴더에 넣어 작업 |
    
    | Problem | 전역에 globlas.css 적용 |
    | --- | --- |
    | Reason | _app.js _document.js index.js 사용 구분 |
    | Try to solve | 디렉토리 구조 파악 후 해결 |
    
    | Problem | svg 이미지 파일 넣을 시 콜스택 최대 사이즈 초과 에러 |
    | --- | --- |
    | Reason | next.js에는 맞지 않는 문법 |
    | Try to solve | next/image 임포트 한 후 Image 컴포넌트로 src 같이 불러오기 |
    | Alternative | 이미지 사이즈를 40x40 사이즈로 설정하기 |
    
    | Problem | 순수 리액트로 드래그앤드롭 기능 구현 |
    | --- | --- |
    | Reason | 여러 이벤트 처리와 상태 관리를 해야하며 코드가 길어진다. 그리고 라이브러리 없이 브라우저의 네이티브 드래그앤드롭 API를 사용한다면 구현은 가능하지만 크로스브라우징과 브라우저 호환성 문제로 인해 꽤 복잡해질 수 있다. 그래서 라이브러리 기능을 사용하는 것이 보편적이라고 한다. |
    | Try to solve | react-dnd로 ‘나만의 와인 컬렉션’ 페이지의 dnd 기능 구현
    
    1. 컨테이너 간의 아이템 이동이 불가능
    2. hover 중일 때 순서가 변경되는 애니메이션이나 위치 변경 직접 정의해야함 |
    | Alternative | react-beautiful-dnd로 대체
    
    1. 컨테이너 간의 아이템 이동이 자유로움
    2. 어느 좌표부터 순서를 변경할 지 결정하는 로직 잘 구성되어있음
    3. UI/UX나 퍼포먼스가 좋은 동작이 predefined 되어있음 |
    
    | Problem | CORS 정책 문제로 개발 환경 proxy 설정
    Access to fetch at 'https://warendy.shop/signin' from origin 'http://localhost:3000/' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
     |
    | --- | --- |
    | Reason | module.exports = {
      async rewrites() {
        return [
          {
            source: "http://localhost:3000/sign-in",
            destination: "https://warendy.shop/signin”,
          },
        ];
      },
    };
    proxy 설정 후 websocket 오류 발생
    1. websocket으로 서버와 통신할 때는 protocol을 ws를 사용하기 때문에 |
    
    | Problem | put 으로 통신하려 하는데 400에러 |
    | --- | --- |
    | Reason | body 값을 빈 오브젝트로 만들지 않았음 |
    | Try to solve | header를 통합하고 싶은데 body 값을 빈 오브젝트로 만들지 않으면 header가 body로 인식되지 않아서 원하지 않는 결과 값을 발생시킴
    그래서 빈 오브젝트를 같이 넣어줘야 header위치에 있는걸 header로 
    인식함 |
    
    | Problem | Fast Refresh 기능이 런타임 오류로 전체 페이지를 로드할 때 발생 |
    | --- | --- |
    | Reason | 두 개 이상의 같은 이름을 가진 userTokenState atom이 중복으로 정의된 오류 |
    | Try to solve | 코드에서 중복된 상태를 찾아 하나로 통합하거나 이름을 변경하여 해결해야 함 |
    
    | Problem | SSR 초기 렌더링 이슈 |
    | --- | --- |
    | Reason | 서버에서 렌더링된 HTML과 클라이언트에서 생성된 UI 간에 일치하지 않는 부분에대한 오류 |
    | Try to solve | SSR에서는 초기 렌더링 시에 컴포넌트의 라이프사이클이 서버와 클라이언트간에 다를 수 있어서, 서버에서는 useEffect 콜백이 실행되고, 클라이언트에서도 마운트가 발생하면 useEffect 콜백이 다시 실행될 수 있다.
    이런 경우, 클라이언트에서 발생한 마운트 시에 중복된 작업이 발생하는 것을 setMounted(true); 를 실행해서 중복 작업을 방지하는 것이다. |
  

