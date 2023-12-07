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
  
- **BackEnd**
    
    
    | Problem | CORS 에러 |
    | --- | --- |
    | Reason | 클라이언트와 서버의 오리진이 달라서 발생 |
    | Try to solve | authFilter 전에 corsFilter를 설정
    특정 오리진을 허용하도록 설정
    setAllowedOrigins(List.of("http://localhost:3000/",
    "https://warendy.vercel.app/")); |
    
    | Problem | 양방향 연관 관계 순환 참조 오류 |
    | --- | --- |
    | Reason | ManyToOne, OneToMany 양방향 관계에 있을 때, Entity 객체를 그대로 JSON 문자열로 변환하는 과정에서 관계를 맺고 있는 것을 계속 참조하는 순환참조 문제가 발생. |
    | Try to solve | 1. @ jackson 어노테이션 사용
        -  @JsonIgnore 
        -  @JsonManagedReference/@JsonBackReference
        -  @JsonIdentityInfo
    2. entity 를 그대로 반환 X → DTO로 변환 해서 반환, @OneToMany(mappedBy = “  ", fetch = FetchType.LAZY) 사용 @JoinColumn 삭제. |
    
    | Problem | No serializer found for class 오류 |
    | --- | --- |
    | Reason | ManyToOne의 옵션의 Lazy여서 나는 것, 필요가 없으면 조회를 안해서 비어있는 객체를 serializer 하려고 해서 발생되는 문제. |
    | Try to solve | 1. application 파일에 spring.jackson.serialization.fail-on-empty-beans=false 설정해주기
    2. 오류가 나는 엔티티의 LAZY 설정을 EAGER로 바꿔주기
    3. 오류가 나는 컬럼에 @JsonIgnore를 설정해주기
    그 중 1번을 선택. |
    
    | Problem | 채팅기능 구현시 kafka에서 보낸걸 consuming하는 과정에서 deserialize 무한루프 오류 발생 |
    | --- | --- |
    | Reason | kafka producer에서 send할 때는 serialize가 문제없이 작동하는 것 같은데
    consumer에서 deserialize할 때, 에러가 생기는 것으로 추정.
    사전에 약속된 형태(포맷)의 메시지가 아닌 다른 형태(포맷)의 메시지를 발행한 것이 원인입니다.
    KafkaMessageListenerContainer 클래스 내부에 있는 ListenerConsumer 클래스의 run( ) 메소드에서 여기서 value를 deserialize 할 때 실패가 나면서 계속해서 에러 메시지가 발생한걸로 추정됩니다. |
    | Try to solve | 1. consumerConfigs에
            props.put(ErrorHandlingDeserializer.KEY_DESERIALIZER_CLASS, StringDeserializer.class);
            props.put(ErrorHandlingDeserializer.VALUE_DESERIALIZER_CLASS, JsonDeserializer.class);
    
            // Define trusted package for JsonDeserializer
            props.put(JsonDeserializer.TRUSTED_PACKAGES, "com.be.friendy.warendy.domain.chat.entity");
    속성을 추가
    
    2. application.yml 파일에 
    consumer:
         key-deserializer: org.springframework.kafka.support.serializer.ErrorHandlingDeserializer
         value-deserializer: org.springframework.kafka.support.serializer.ErrorHandlingDeserializer
         properties:
              spring.deserializer.key.delegate.class: org.apache.kafka.common.serialization.StringDeserializer
              spring.deserializer.value.delegate.class: org.springframework.kafka.support.serializer.JsonDeserializer
              spring.json.trusted.packages: '*’
    속성을 추가 |
    | Alternative | Message Entity에 연관관계가 설정되어 있어서 desrialize 문제가 생겼었습니다. 새로이 MessageDto를 구현 해결했습니다. |
    
    | Problem | Kakao Login시 email 정보를 선택적으로 받을 수 있음 |
    | --- | --- |
    | Reason | email을 가지고 token 발행
    email을 회원가입 시 필수 입력 받도록 하였으나
    Kakao를 통한 로그인을 한 사람은 email 정보가 없는 경우가 발생 |
    | Try to solve | email 값이 null 일 경우 로그인하였을 시 이메일 입력 팝업으로 값을 넣도록 유도. 
    예시 문구) “이메일 인증 서비스 및 알람을 받으실 수 없습니다.” |
    | Alternative | 임의로 이메일을 생성하여 DB에 저장하고 위 방법으로 유효한 이메일 입력 유도.
    예) ${socialid}@warendy.com |
    
    | Problem | 배포시 EC2 멈춤 현상 (상태검사 1/2개 검사 등) |
    | --- | --- |
    | Reason | 프리티어 EC2 메모리 1G인 상황 |
    | Try to solve | EC2인스턴스 중단 후 재 시작 진행 → Code Deploy 중단된 배포 재 진행
    swap 메모리 할당(2G) |
    
    | Problem | entity 연관관계 설정 오류로 발생한 CRUD 에러(작성 및 삭제 불가) |
    | --- | --- |
    | Reason | - board 테이블과 member, winebar 테이블이 존재.
    1. board 테이블이 member와 winebar 테이블을 참조, memberId와 winebarId는 foreign key.
    2. boardEntity의 member와 winebar 컬럼 각각에 ManyToOne 어노테이션 삽입.
    3. member와 winebar Entity 쪽에도 OneToMany 어노테이션 삽입.
    → 순환참조 발생, Cannot add foreign key constraint 에러 발생. |
    | Try to solve | 1. JsonIgnore 어노테이션으로 순환참조 문제 해결. 하지만 여전히 foreign key 에러 발생.
    2. JsonIgnore 어노테이션 다시 삭제,  OneToMany 어노테이션 달려있는 컬럼 삭제.
    2번 이후 작성 및 삭제 가능. |
    
    | Problem | Page 객체 사용시 |
    | --- | --- |
    | Reason | 1. 추가적인 count 쿼리 실행
    2. 프론트와 시작 index 일치 시키기 |
    | Try to solve | 1. Slice 사용
    2. spring.data.web.pageable.one-indexed-parameters=true |
    
    | Problem | WebSecurityConfigureAdapter 사용불가 |
    | --- | --- |
    | Reason | SpringBoot 3.1.0 버전은 Spring Security 6.1.0 버전을 dependency
    Security 6.0 버전 기준으로 사용 불가(SecurityFilterChain)
    추가) 6.1 버전 기준으로 non-lamda DSL deprecated |
    | Try to solve | Spring Boot 3.1.0 → 3.0.1 로 변경 |
    
    | Problem | 테스트 코드 의존성 주입(UnsatisfiedDependencyException) 시 302, 403 에러 |
    | --- | --- |
    | Reason | 1. org.springframework.beans.factory.UnsatisfiedDependencyException
      -  @Component 어노테이션 붙어있는 클래스를 WebMvcTest가 스캔하지 못해 빈(Bean) 생성이 제대로 되지 않아 발생한 것.
      -  spring security 관련 빈(bean) 주입 필요. (JwtAuthenticationFilter, TokenProvider)
    
    2. 302 에러 - spring security 인증 관련
      - 302 Status Code(리다이렉션 응답)는 요청한 리소스가 임시적으로 이동하였음을 나타냄.
      - 스프링 시큐리티 설정 때문에 인증되지 않은 사용자의 요청은 이동시키기 때문.
    - board 생성에는 회원정보 필요.(정한 ROLE 필요).
    
    3. 403 에러 - spring security 인증 관련
      - 302 에러 해결 후 발생, 로그인은 했으나 권한이 맞지 않아 발생하는 에러.
      - spring security 에서는 csrf 토큰 이용 메서드 처리.(외부 공격 방어)
      - HTTP 요청마다 숨겨진 csrf 토큰을 같이 넘겨줘야 함.
      → 결국 csrf 토큰값이 일치하지 않기 때문에 발생한 에러. |
    | Try to solve | - UnsatisfiedDependencyException
      1. @WebMvcTest에 excludeFilters ={} 추가.
      ex)  @ComponentScan.Filter(type = filterType.ASSIGNABLE_TYPE, classes = JwtAuthenticationFilter.class)
      OR
      2.  클래스 내 @MockBeen 으로 등록
      ex)   @MockBeen
              private TokenProvider tokenProvider
    
    - 302 에러.
      spring security 인증 할 수 있는 어노테이션 붙히기( WithMockUser, WithAnonymousUser 등)
      1. @WithMockUser : @TEST 밑에 WithMockUser 어노테이션 붙히기.
      OR
      2. mockMvc 호출 시 .with(user(”user”)) 함수 추가.
    
    - 403 에러.
      1. mockMvc 호출 시 .with(csrf()) 함수 추가. |

