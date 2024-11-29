
<%
	/* ================================================================= 
	 * 작성일     : 2024. 11. 18. 
	 * 작성자     : 팽수
	 * 상세설명  : 
	 * 화면ID  :
	 * ================================================================= 
	 * 수정일         작성자             내용      
	 * -----------------------------------------------------------------
	 *
	 * ================================================================= 
	 */
%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>login</title>
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
<!--jua font-->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
	href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Gamja+Flower&family=Jua&display=swap"
	rel="stylesheet">
<!--jua font-->

<!-- Icon Font Stylesheet -->
<link rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
	rel="stylesheet">

<!-- Libraries Stylesheet -->
<link href="lib/animate/animate.min.css" rel="stylesheet">
<link href="lib/owlcarousel/assets/owl.carousel.min.css"
	rel="stylesheet">



<!-- Customized Bootstrap Stylesheet -->
<link href="css/bootstrap.min.css" rel="stylesheet">

<!-- Template Stylesheet -->
<link href="css/style.css" rel="stylesheet">

<!--Chart_js-->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js"></script>
<!--Chart_js-->


<style>

/* 공통 버튼 스타일 */
.btn_log {
	border-radius: 10px; /* 둥근 모서리 */
	padding: 12px 15px;
	width: 100%;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* 기본 그림자 */
	transition: background-color 0.3s ease, transform 0.3s ease, box-shadow
		0.3s ease; /* 부드러운 전환 효과 */
}

/* 회원가입 버튼 스타일 */
.btn_log.mb-2 {
	background-color: #87CEEB; /* 밝은 하늘색 */
	color: white;
}

/* 회원가입 버튼 호버 효과 */
.btn_log.mb-2:hover {
	background-color: #4682B4; /* 어두운 하늘색 */
	box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3); /* 호버 시 그림자 확대 */
	transform: translateY(-2px); /* 살짝 위로 이동 */
}

/* 로그인 버튼 스타일 */
#signupButton {
	background-color: chartreuse; /* 연두색 */
	color: white;
}

/* 로그인 버튼 호버 효과 */
#signupButton:hover {
	background-color: #6B8E23; /* 더 짙은 연두색 */
	box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3); /* 호버 시 그림자 확대 */
	transform: translateY(-2px); /* 살짝 위로 이동 */
}

.log {
    height: 50px;
    border: 2px solid;
    width: 100%; /* 모든 입력 필드의 가로 크기를 동일하게 설정 */
    max-width: 400px; /* 입력 필드의 최대 가로 폭 설정 */
    box-sizing: border-box; /* 패딩과 보더를 가로 크기에 포함 */
}

.log:active {
	transform: scale(0.98);
}

button:active {
	transform: scale(0.95);
}

input {
	background-color: #eee;
	border: none;
	border-radius: 10px;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;
}

form {
	background-color: #FFFFFF;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
    overflow: visible;
}

.main {
	background-color: #fff;
	border-radius: 10px;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px
		rgba(0, 0, 0, 0.22);
	position: relative;
	overflow: hidden;
	width: 768px;
	max-width: 100%;
	min-height: 480px;
	background: #f6f5f7;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 40vh;
}

.form-container {
	position: absolute;
	top: 0;
	height: 100%;
}

.sign-in-container {
	left: 0;
	width: 50%;
}

.overlay-container {
	position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;
}

.overlay {
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
}

.bg-loginpage {
	background: url(img/loginimg.png);
	margin-left: 380px;
	background-repeat: no-repeat;
	background-size: cover;
}

.bg-loginpage .loginpage-item a {
	color: white !important;
}

.bg-loginpages {
	background: url(img/loginimg.png);
	margin-left: 0px;
	background-repeat: no-repeat;
	background-size: cover;
}

.bg-loginpages .loginpage-item a {
	color: white !important;
}

.autocomplete-container {
	position: relative;
}

.autocomplete-list {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	max-height: 200px;
	overflow-y: auto;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 10px;
	z-index: 1000;
	list-style: none;
	padding: 0;
	margin: 0;
}

.autocomplete-list li {
	padding: 8px;
	cursor: pointer;
}

.autocomplete-list li:hover {
	background-color: #f0f0f0;
}

.autocomplete-list li.disabled {
	cursor: not-allowed;
	color: #aaa;
}
.text-danger {
    color: red;
    font-size: 0.835rem;
    margin-bottom: 5px;
    display: block;
}
</style>


</head>

<body style="overflow: hidden;">
	<!-- Spinner Start -->
	<div id="spinner"
		class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
		<div class="spinner-border text-primary"
			style="width: 3rem; height: 3rem;" role="status">
			<span class="sr-only">Loading...</span>
		</div>
	</div>
	<!-- Spinner End -->

	<!-- Topbar Start -->
	<div class="container-fluid px-5"
		style="background-color: rgb(0, 0, 0);">
		<div class="row gx-0 align-items-center" style="height: 45px;">
			<div class="col-lg-8 text-center text-lg-start mb-lg-0">


				<a href="/" class="text-light me-4"><i
					class="fas fa-home text-primary me-2"></i>Watt's Up?</a>


			</div>
			<div class="col-lg-4 text-center text-lg-end">
				<div class="d-flex align-items-center justify-content-end">


					<!-- 세션이 없을때
                <a href="#" class="text-light me-4"><i class="fas fa-map-marker-alt text-primary me-2"></i>회사이름</a>
                <a href="#" class="text-light me-4"><i class="fas fa-user-alt text-primary me-2"></i>본인</a>
                <a href="#" class="text-light me-4"><i class="fas fa-user text-primary me-2"></i>Example@gmail.com</a>
                <a href="#" class="text-light me-4"><i class="fas fa-user text-primary me-2"></i>로그아웃</a>
                -->

					<a href="/login" class="text-light me-4"><i
						class="fas fa-pen-square text-primary me-2"></i>로그인</a> <a
						href="/regist" class="text-light me-4"><i
						class="fas far fa-bookmark text-primary me-2"></i>회원가입</a>


				</div>
			</div>
		</div>
	</div>
	<!-- Topbar End -->

	<div class="container main wow fadeInUp" id="container"
		style="margin-top: 170px;">
		<div class="form-container sign-in-container ">
			<div class="overlay bg-loginpage">
				<div class="overlay-panel overlay-right"></div>
			</div>
		</div>
		<div class="overlay-container">
			<form action="registDo">
				<h1>회원가입</h1>
				<input class="form-control log" type="id" placeholder="Id"
					id="memId" name="memId" /> 
					<input class="form-control log"
					type="password" placeholder="Password" id="memPw" name="memPw" />
				<div class="autocomplete-container" style="width: 100%; max-width: 400px;">
				    <input class="form-control log" type="text" placeholder="회사" id="memCorp" name="memCorp" />
				    <ul id="autocomplete-list" class="autocomplete-list"></ul> <!-- 자동완성 결과 리스트 -->
				</div>
				<span class="text-danger">${error}</span> 
				<button class="btn btn-primary btn_log mb-2" type="submit">
					회원가입</button>
				<button class="btn btn-primary btn_log" type="button"
					id="signupButton" onclick="location.href='login'">로그인</button>
			</form>

		</div>
	</div>
	<!-- Back to Top -->
	<a href="#" class="btn btn-primary btn-lg-squarse back-to-top"><i
		class="fa fa-arrow-up"></i></a>


	<!-- JavaScript Libraries -->
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
	<script src="lib/wow/wow.min.js"></script>
	<script src="lib/easing/easing.min.js"></script>
	<script src="lib/waypoints/waypoints.min.js"></script>
	<script src="lib/owlcarousel/owl.carousel.min.js"></script>


	<!-- Template Javascript -->
	<script src="js/main.js"></script>
	<!-- JSON 데이터 전달 -->
	<input type="hidden" id="company-data" value='<c:out value="${companyList}" escapeXml="false"/>' />
	<!-- JavaScript 파일 연결 -->
	<script src="/resources/js/autocomplete.js"></script>

</body>

</html>