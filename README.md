<iframe width="560" height="315" src="https://www.youtube.com/embed/ikNlyk_ovZM?si=KTJEzEo5p9G21b-H" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

![제목 없음](https://github.com/user-attachments/assets/bc19bf66-1465-4e60-aa01-d2b4d6f2608d)

# Watt's Up: Energy Usage Sharing Community

### 프로젝트 개요

**Watt's Up**은 대전광역시 기업들의 에너지 사용량을 시각화하고, 이를 공유하여 효율적인 에너지 절약을 도모하기 위한 커뮤니티 플랫폼입니다. 주요 기능으로는 전력 및 가스 사용량 차트, 에너지 절약 정보 제공, 그리고 기업 간 소통을 위한 게시판이 포함되어 있습니다.

---

## 주요 기능

### 1. 에너지 사용량 시각화
- **TOE 차트**: D3.js를 활용하여 석유환산톤(TOE) 기반 전기 및 가스 사용량을 인포그래픽으로 제공.
- **연도별 및 월별 차트**: Chart.js를 사용하여 연도별 에너지 사용량 시각화 및 클릭 시 월별 차트로 이동.

### 2. 실시간 날씨 정보
- **기상청 API**: 실시간 날씨 정보를 제공하여 날씨에 따른 에너지 절약을 도모.

### 3. 기업 정보 및 위치 제공
- **카카오 지도 API**: 기업별 위치 정보를 제공하며 최신년도 에너지 사용 현황을 지도에 마커로 표시.
- **자동완성 기능**: 데이터베이스에서 기업 정보를 불러와 회원가입 및 수정 시 활용.

### 4. 게시판
- 기업 간 소통을 위한 회원 전용 게시판.
- **게시글 작성, 검색, 수정, 댓글** 기능 제공.

### 5. 에너지 절약 정보
- **영상 및 아코디언 정보**: 일상에서 실천 가능한 에너지 절약 방법 제공.

---

## 사용 데이터
- 기상청 단기예보 조회 서비스
- 카카오 지도 조회 서비스
- 대전광역시 산업단지 입주기업 현황
- 건물문 탄소배출량 공간정보

---

## 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript, Chart.js, D3.js
- **Backend**: Spring Framework
- **Database**: MySQL
- **APIs**: 기상청 API, 카카오 지도 API

---


## 구현 과정

### 데이터베이스 설계
- 기업 데이터와 에너지 사용량 데이터를 결합하여 주요 정보를 구성.
- Primary Key 부재 데이터를 보완하기 위해 `main_id` 생성.

### 주요 도전 과제
- 데이터 매칭 및 정제: 기업 데이터와 에너지 데이터를 수작업으로 매칭.
- 반응형 웹 제작: 다양한 화면 크기에 적합한 UI/UX 구현.
- 복잡한 쿼리 작성 및 기능 개발: 게시판 페이징, 검색, 조회수 기능 추가.

---

## 실행 방법

1. **환경 설정**
   - Java 11 이상, MySQL 8.0 이상 설치.
   - `application.properties`에 데이터베이스 설정 입력.
  
![제목 없음1](https://github.com/user-attachments/assets/8d07c548-803f-436a-890b-76f8ce1654a9)


2. **데이터베이스 초기화**
   - `boundarydb` 스키마 생성 후 초기 데이터 삽입.

3. **서버 실행**
   ```bash
   ./mvnw spring-boot:run