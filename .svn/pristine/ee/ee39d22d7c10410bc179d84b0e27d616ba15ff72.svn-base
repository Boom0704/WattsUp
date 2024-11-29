<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8">
<title>boardEdit</title>
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<link rel="stylesheet" href="css/bootstrap.min.css">
<style>
#myImage {
	max-width: 100%;
	height: auto;
	margin-bottom: 20px;
}

.form-section {
	margin-bottom: 30px;
}
/* 버튼 스타일 */
button {
	width: auto; /* 자동 크기 조정 */
	padding: 12px 20px; /* 버튼 안쪽 여백 */
	font-size: 16px; /* 글자 크기 */
	font-weight: bold; /* 글자 굵기 */
	border: none; /* 테두리 없애기 */
	border-radius: 8px; /* 둥근 모서리 */
	cursor: pointer; /* 마우스 커서 스타일 */
	transition: all 0.3s ease; /* 애니메이션 효과 */
}

/* 수정 버튼 스타일 */
button.btn-warning {
	background: linear-gradient(to right, #f39c12, #f1c40f); /* 그라디언트 색상 */
	color: white;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 버튼 그림자 효과 */
}

/* 삭제 버튼 스타일 */
button.btn-danger {
	background: linear-gradient(to right, #e74c3c, #c0392b); /* 그라디언트 색상 */
	color: white;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 버튼 그림자 효과 */
}

/* 버튼 호버 효과 */
button:hover {
	transform: translateY(-2px); /* 마우스를 올리면 버튼이 살짝 올라오도록 */
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* 그림자 강도 증가 */
}

/* 버튼 클릭 시 효과 */
button:active {
	transform: translateY(2px); /* 클릭 시 버튼이 눌린 것처럼 보이도록 */
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 약간 감소 */
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

</head>
<body>
	<!-- 상단 포함 -->
	<jsp:include page="/WEB-INF/inc/top.jsp"></jsp:include>

	<div>
		<c:if test="${not empty sessionScope.login}">
			<p>
				로그인 사용자 ID:
				<c:out value="${sessionScope.login.memId}" />
			</p>
		</c:if>
		<c:if test="${not empty board}">
			<p>
				게시글 작성자 ID:
				<c:out value="${board.memId}" />
			</p>
		</c:if>

		<!-- 로그인 사용자와 게시글 작성자가 동일하지 않으면 리디렉션 -->
		<c:if
			test="${not empty sessionScope.login && board.memId != sessionScope.login.memId}">
			<script>
				alert('작성자만 수정할 수 있습니다.');
				window.location.href = '<c:url value="/boardDetailView?boardNo=${board.boardNo}" />';
			</script>
		</c:if>
	</div>

	<section class="page-section" style="margin-top: 100px" id="contact">
    <div class="container feature-items p-5 mb-5">
        <div class="row justify-content-center">
            <div class="col-lg-8 col-xl-7">
                <form action="<c:url value='/boardEditDo' />" method="post" enctype="multipart/form-data">
                <h2 class="page-section-heading text-center text-uppercase text-primary mb-0">게시글 수정</h2>
                    <input type="hidden" name="boardNo" value="${board.boardNo}">

                    <div class="mb-3 fs-4">
                        <label class="fs-4">제목</label> <input class="form-control input-sm fs-5" type="text" name="boardTitle" value="${board.boardTitle}" readonly>
                    </div>

                    <div class="mb-3">
                        <label class="fs-4">내용</label>
                        <textarea class="form-control fs-5" name="boardContent" style="height: 20rem">${board.boardContent}</textarea>
                    </div>

                    <div class="mb-3">
                        <label class="fs-4" style="margin-bottom: 18px;">이미지 업로드</label> 
                        <input id="boardImageInput" type="file" name="fileImage">
                        <c:if test="${not empty board.boardImage}">
                            <img id="previewImage" src="${pageContext.request.contextPath}${board.boardImage}" alt="게시글 이미지" style="max-width: 100%; height: auto;">
                        </c:if>
                        <input type="hidden" name="boardImage" value="${pageContext.request.contextPath}${board.boardImage}">
                    </div>

                    <!-- 수정 버튼 -->
                    <button type="submit" class="btn btn-warning btn-lg" style="margin-bottom: 20px;">수정</button>

            </div>
        </div>
    </div>
</section>

	<script>
	    document.getElementById('boardImageInput').addEventListener('change', function(event) {
	        const file = event.target.files[0]; // 업로드된 파일
	        const previewImage = document.getElementById('previewImage'); // 이미지 태그
	        
	        if (file) {
	            const reader = new FileReader();
	            
	            // 파일 로드 완료 시
	            reader.onload = function(e) {
	                previewImage.src = e.target.result; // img src 변경
	            };
	            
	            reader.readAsDataURL(file); // 파일을 데이터 URL로 변환
	        } else {
	            // 파일이 선택되지 않았을 경우 기본 이미지를 유지하거나 초기화
	            previewImage.src = '${pageContext.request.contextPath}${board.boardImage}';
	        }
	    });
	</script>
	<!-- 하단 포함 -->
	<jsp:include page="/WEB-INF/inc/footer.jsp"></jsp:include>
</body>
</html>
