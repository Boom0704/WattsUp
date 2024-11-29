<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <title>boardWrite</title>
    <link href="css/bootstrap.min.css" rel="stylesheet"> <!-- 필요한 CSS 추가 -->
</head>

<style>

.btn.btn-primary1 {
	background: #59c544;
	border: 2px whitesmoke;
	color: white;
}

.btn.btn-primary1:hover {
	background-color: white;
	border: 0px;
	color: #59c544;
}
.feature-items {
    border: 3px solid #59c544;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background: white;
    transition: 0.5s;
}
.feature-items:hover {
  
transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
</style>
<body>
    <!-- 상단 포함 -->
    <jsp:include page="/WEB-INF/inc/top.jsp"></jsp:include>

    <!-- 메인 콘텐츠 시작 -->
    <div class="container-fluid px-0 mb-5">
        <section class="page-section" style="margin-top: 150px;">
            <div class="container feature-items p-5">
                <!-- 게시글 작성 제목 -->
                <h2 class="page-section-heading text-center text-uppercase text-primary mb-0">게시글 작성</h2>

                <!-- 게시글 작성 폼 -->
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <form action="/boardWriteDo" method="post" enctype="multipart/form-data">
                            <div class="mb-3">
                                <label for="boardTitle" class="fs-4" >제목</label>
                                <input type="text" class="form-control fs-3" name="boardTitle" id="boardTitle" required>
                            </div>
                             <div class="mb-3">
                                <label for="boardImage" class="fs-4">사진 첨부</label>
                                <input type="file" class="form-control fs-3" name="fileImage" id="fileImage" accept="image/*">
                            </div>
                            <div class="mb-3">
                                <label for="boardContent" class="fs-4">내용</label>
                                <textarea class="form-control fs-3" style="height: 20rem;" name="boardContent" id="boardContent" required></textarea>
                            </div>
                           
                            <input type="hidden" name="memId" value="${sessionScope.loginUser.memId}">
                            <button class="btn btn-primary1 btn-xl " style="font-size:20px;" id="submitButton" type="submit">등록</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- 하단 포함 -->
    <jsp:include page="/WEB-INF/inc/footer.jsp"></jsp:include>

    <!-- 필요한 JS 추가 -->
    <script src="js/bootstrap.bundle.min.js"></script>
</body>

</html>
