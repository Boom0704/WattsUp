<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>mypage</title>
    <!-- 부트스트랩 CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <style>
        .log {
            height: 50px; border: 2px solid;
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
        }

        .main {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
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

        .btn.btn-mypage {
            background: #02C218;
            border: 2px whitesmoke;
            color: white;
        }

        .btn.btn-mypage:hover {
            background-color: white;
            border: 0px;
            color: #02C218;
        }

        .bg-breadcrumb {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/mypage.jpg);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 160px 0 60px 0;
        }

        .bg-breadcrumb .breadcrumb-item a {
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
        .feature-items {
    position: relative;
    display: flex;
    border: 3px solid #59c544;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background: white;
    transition: 0.5s;

}
    </style>

    <!-- Chart.js CDN 추가 -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>

<body>
    <!-- 상단 include -->
    <jsp:include page="/WEB-INF/inc/top.jsp"></jsp:include>

    <!-- Header Start -->
    <div class="container-fluid bg-breadcrumb">
        <div class="container text-center" style="max-width: 900px;">
            <h3 class="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">마이페이지</h3>
        </div>
    </div>
    <!-- Header End -->

    <!-- Feature Start -->
    <div class="container-fluid feature py-3">
        <div class="container-fluid py-3">
            <div class="row g-4 justify-content-center">
                <div class="col-md-8 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="row-cols-1 feature-items p-4 d-flex flex-column align-items-center text-center">
                        <div class="col-12">
                            <div class="feature-icon mb-4">
                                <div class="p-3 d-inline-flex bg-white rounded">
                                    <i class="fas far fa-user-circle fa-10x" style="color:#02C218;"></i>
                                </div>
                            </div>
                            <div class="feature-content d-flex flex-column">
                                <!-- 사용자 정보 수정 폼 -->
                                <form method="post" action="/updateDo">
                                    <p class="mb-2 fs-4">${sessionScope.loginUser.memId}</p>
                                    <h4>회사</h4>
                                    <input name="memId" type="hidden" value="${sessionScope.loginUser.memId}">
                                    <input type="hidden" id="company-data" value='<c:out value="${companyList}" escapeXml="false"/>' />
                                    
                                    <div class="autocomplete-container" style="width: 100%; max-width: 400px;">
                                        <input class="form-control fs-4 mb-3" id="memCorp" name="memCorp" type="text" value="${sessionScope.loginUser.memCorp}"> 
                                        <ul id="autocomplete-list" class="autocomplete-list"></ul> 
                                    </div>

                                    <button type="submit" class="btn btn-mypage btn_log fs-4 mb-4">회원정보 수정</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Feature End -->

    <!-- JavaScript 파일 연결 -->
    <script src="/resources/js/autocomplete.js"></script>

    <!-- 하단 include -->
    <jsp:include page="/WEB-INF/inc/footer.jsp"></jsp:include>
</body>
</html>
