<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<head>
		<script src="https://code.jquery.com/jquery-3.7.1.js"></script>
		<!--jua font-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Gamja+Flower&family=Jua&display=swap" rel="stylesheet">
        <!--jua font-->
       
        
        <!-- Icon Font Stylesheet -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

        <!-- Libraries Stylesheet -->
           <link href="lib/animate/animate.min.css" rel="stylesheet">
        <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">



        <!-- Customized Bootstrap Stylesheet -->
        <link href="css/bootstrap.min.css" rel="stylesheet">

        <!-- Template Stylesheet -->
        <link href="css/style.css" rel="stylesheet">
        
        <!--Chart_js-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.min.js"></script>
        <!--Chart_js-->
        
</head>        
        
        
        
        
        
<!-- top header 컨텐츠 영역 
        
        <!-- Spinner Start -->
        <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            </div>
            
        <!-- Spinner End -->
        
        
 <!-- Topbar Start -->
 <div class="container-fluid px-5" style="background-color: rgb(0, 0, 0);">
    <div class="row gx-0 align-items-center" style="height: 45px;">
        <div class="col-lg-8 text-center text-lg-start mb-lg-0">

		<a href="/" class="text-light me-4"><i class="fas fa-home text-primary me-2"></i>Watt's Up?</a>

        </div>
        <div class="col-lg-4 text-center text-lg-end">
            <div class="d-flex align-items-center justify-content-end">
	
                <c:if test="${sessionScope.loginUser != null }">
                <a href="#" class="text-light me-4"><i class="fas fa-map-marker-alt text-primary me-2"></i>${sessionScope.loginUser.memCorp}</a>
                <a href="/mypage" class="text-light me-4"><i class="fas fa-user-alt text-primary me-2"></i>${sessionScope.loginUser.memId}</a>

                <a href="/logoutDo" class="text-light me-4"><i class="fas fa-user-times text-primary me-2"></i>로그아웃</a>
               	</c:if>	

				<c:if test="${sessionScope.loginUser == null }">
                <a href="/login" class="text-light me-4"><i class="fas fa-pen-square text-primary me-2"></i>로그인</a>
                <a href="/regist" class="text-light me-4"><i class="fas far fa-bookmark text-primary me-2"></i>회원가입</a>
				</c:if>

            </div>
        </div>
    </div>
</div>
<!-- Topbar End -->


 <!-- Navbar & Hero Start -->
 
            <div class="container-fluid position-relative p-0">
                <nav class="navbar navbar-expand-lg navbar-light bg-white px-4 px-lg-5 py-3 py-lg-0">
                        <a href="/" class="navbar-brand p-0 d-flex align-items-center">
				        <img src="img/logo.png" alt="Logo" class="me-2">
				        <h1 class="text-primary m-0">Watt's Up?</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse" >
                        <div class="navbar-nav ms-auto py-0">
                            <a href="/" class="nav-item nav-link">Home</a>
                            <a href="/chartView" class="nav-item nav-link">Chart</a>
                            <a href="/boardView" class="nav-item nav-link ">board</a>	
                            <a href="/tipView" class="nav-item nav-link ">tip!</a>
                        </div>
                    </div>
                </nav>
            </div>
            <!-- Navbar End -->

      
      
      
      
      