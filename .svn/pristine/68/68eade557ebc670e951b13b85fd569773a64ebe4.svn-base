<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<title>boardView</title>
<meta content="width=device-width, initial-scale=1.0" name="viewport">
<meta content="" name="keywords">
<meta content="" name="description">

<!-- CSS 링크 추가 -->
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link
	href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
	rel="stylesheet">
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css"
	rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/bootstrap.min.css"
	rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/style.css"
	rel="stylesheet">
<style>
.bg-breadcrumb {
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(../img/e1.jpg);
	background-position: center center;
		    background-repeat: no-repeat;
		    background-size: cover;
		    padding: 160px 0 60px 0;
}

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

</head>

<body>
	<!-- 상단 포함 -->
	<jsp:include page="/WEB-INF/inc/top.jsp"></jsp:include>

	<!-- Header Start -->
       <div class="container-fluid bg-breadcrumb">
            <div class="container text-center" style="max-width: 900px;">
                <h3 class="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Board</h3>

            </div>
        </div>
        <!-- Header End -->
<!-- 메인 콘텐츠 시작 -->
	<section class="page-section" id="contact"
		style="letter-spacing: 0.5px;">
		<div class="container feature-items p-5 mb-5" style="margin-top: 50px;">
			<div class="card-body pt-0">
				<!-- START : 검색 폼  -->
				<div class="row g-0 justify-content-md-center">
					<div class="col-md-10 col-lg-5 col-xl-6 mb-3">
					
						<form action="<c:url value='/boardView' />" name="search"
							method="post">
							<input type="hidden" name="curPage" id="curPage"
								value="${searchVO.curPage }"> <input type="hidden"
								name="rowSizePerPage" value="${searchVO.rowSizePerPage }">
							<div class="input-group">
								<div class="col-sm-2">
									<select id="id_searchType" name="searchType"
										class="form-control input-sm">
										<option value="T"
											${searchVO.searchType eq "T" ? "selected='selected'" : ""}>제목</option>
										<option value="W"
											${searchVO.searchType eq "W" ? "selected='selected'" : ""}>작성자</option>
											<!--  회사 검색 오류남.
										<option value="J"
											${searchVO.searchType eq "J" ? "selected='selected'" : ""}>회사</option>
											 -->
										<option value="C"
											${searchVO.searchType eq "C" ? "selected='selected'" : ""}>내용</option>
									</select>
								</div>
								<div class="col-sm-2">
									<select id="id_searchCategory" name="searchCategory"
										class="form-control input-sm">
										<option value="">-- 전체 --</option>
										<c:forEach items="${comList }" var="code">
											<option
												${searchVO.searchCategory eq code.commCd ? "selected='selected'" : ""}
												value="${code.commCd }">${code.commNm }</option>
										</c:forEach>
									</select>
								</div>
								<div class="col-sm-6">
									<input class="form-control shadow-none search" type="search"
										name="searchWord" placeholder="검색어"
										value="${searchVO.searchWord }">
								</div>
								<div class="col-sm-2 text-right">
									<button type="submit" class="btn btn-primary1">
										<i class="fa fa-search"></i>검색
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<!-- END : 검색 폼  -->

				<!-- START : 목록건수 및 새글쓰기 버튼  -->
				<div class="row justify-content-end">
					<div class="col-md-3 col-lg-3 col-xl-3 mb-3">
						<div class="input-group">	
							<label class="form-control input-sm">총${searchVO.totalRowCount}
								건</label> <select id="rowSizePerPage" class="form-control">
								<c:forEach var="i" begin="10" end="50" step="10">
									<option value="${i}"
										${searchVO.rowSizePerPage eq i ? "selected='selected'" : ""}>
										${i}</option>
								</c:forEach>
							</select>
						</div>
					</div>
				</div>
				<!-- END : 목록건수 및 새글쓰기 버튼  -->
			</div>

		<!-- 게시글 목록 테이블 -->
			<table class="table fs-5 " style="border-top: 2px solid;">
				<colgroup>
					<col class="col-md-1 col-lg-1 col-xl-1" />
					<col class="col-md-3 col-lg-4 col-xl-4"  />
					<col class="col-md-2 col-lg-2 col-xl-2" />
					<col class="col-md-2 col-lg-2 col-xl-1"  />
					<col class="col-md-2 col-lg-2 col-xl-3"  />	
					<col class="col-md-3 col-lg-2 col-xl-2"  />
				</colgroup>
				<thead>
					<tr style="text-align: center;">
						<th>No.</th>
						<th>제목</th>
						<th>회사</th>
						<th>작성자</th>
						<th>작성일자</th>
						<th>조회수</th>
						<!-- 조회수 컬럼 추가 -->
					</tr>
				</thead>
				<tbody>

					<c:if test="${not empty boardList}">
						<c:forEach items="${boardList}" var="board" varStatus="status">
						<tr>
							<!-- 글번호는 전체 글수에서 index를 빼서 계산 -->
							<td style="text-align: center;">${board.boardNo}</td>
							<!-- 글번호는 아래에서부터 1씩 증가 -->
							<td onclick="window.location='<c:url value='/boardDetailView?boardNo=${board.boardNo}' />'" style="font-weight: bold; cursor:pointer;">${board.boardTitle}</td>
							<td style="text-align: center;">${board.memCorp}</td>
							<td style="text-align: center;">${board.memId}</td>
							<td style="text-align: center;">${board.createDt}</td>
							<td style="text-align: center;">${board.viewCount}</td>
						</tr>
					</c:forEach>

					</c:if>
					<c:if test="${empty boardList}">
						<tr>
							<td colspan="5">검색된 게시글이 없습니다.</td>
						</tr>
					</c:if>
				</tbody>
			</table>


			<!-- 글쓰기 버튼 -->
			<div class="d-grid gap-2 d-md-flex justify-content-md-end">
				<a href="<c:url value='/boardWriteView' />" class="btn btn-primary1">글쓰기</a>
			</div>
				<!-- START : 페이지네이션  -->
		<nav aria-label="Page navigation example">
			<ul class="pagination justify-content-center">
				<c:if test="${searchVO.firstPage !=1 }">
					<li class="page-item"><a class="page-link"
						aria-label="Previous" href="#" data-page="${searchVO.firstPage-1}">
							<span aria-hidden="true">&laquo;</span>
					</a></li>
				</c:if>
				<!-- paging -->
				<c:forEach begin="${searchVO.firstPage}" end="${searchVO.lastPage }"
					var="i">
					<c:if test="${searchVO.curPage != i}">
						<li class="page-item"><a class="page-link" href="#"
							data-page="${i}">${i}</a></li>
					</c:if>
					<c:if test="${searchVO.curPage == i}">
						<li class="page-item active"><a class="page-link" href="#"
							data-page="${i}">${i}</a></li>
					</c:if>
				</c:forEach>
				<!-- paging -->
				<!-- next -->
				<c:if test="${searchVO.lastPage != searchVO.totalPageCount }">
					<li class="page-item"><a class="page-link" aria-label="Next"
						href="#" data-page="${searchVO.lastPage+1}"> <span
							aria-hidden="true">&raquo;</span>
					</a></li>
				</c:if>
				<!-- next -->
			</ul>
		</nav>
		<!-- END : 페이지네이션  -->
		</div>
		<!-- container -->
	
		<!-- container -->
	</section>

	<!-- 하단 포함 -->
	<jsp:include page="/WEB-INF/inc/footer.jsp"></jsp:include>
</body>
<script type="text/javascript">

	$(document).ready(function(){   
		
		 $("#rowSizePerPage").change(function(){
			$("#curPage").val(1);
			$("input[name='rowSizePerPage']").val($(this).val());
			$("form[name='search']").submit();
		 });
		 
		 $("ul.pagination li a[data-page]").click(function(e){
			 e.preventDefault();
			 $("#curPage").val($(this).data('page'));
			 $("form[name='search']").submit();
		 });
	});

</script>

</html>
