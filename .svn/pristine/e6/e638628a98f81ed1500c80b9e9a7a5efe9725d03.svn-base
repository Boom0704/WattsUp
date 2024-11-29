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
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
   <title>chart</title>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
   <script  src="http://code.jquery.com/jquery-latest.min.js"></script>
   <style>
        .chart-container {
            position: relative;
        }
        #backToYear {
            position: absolute;
            top: 65px;
            left: 80px;
            font-size: 24px;
            cursor: pointer;
            z-index: 100; 
        }
        .bg-breadcrumb {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/s3.jpg);
    		background-position: center center;
		    background-repeat: no-repeat;
		    background-size: cover;
		    padding: 160px 0 60px 0;
        }

	  	.autocomplete-container {
	  	    position: relative;
	  	}
	
	 	 .autocomplete-list {
			 position: absolute;
	  		  top: 120%;
			  left: 0;
			  right: 0;
			  max-height: 200px;
			  overflow-y: auto;
			  background-color: white;
			  border-radius: 10px;
			  z-index: 1000;
			  list-style: none;
			  padding: 0;
			  margin: 0;
		  }
		  .autocomplete-list li {
			  cursor: pointer;
			  list-style: none;
		  }
		  .autocomplete-list li:hover {
			  background-color: #f0f0f0;
		  }
	  	  .toeToMoney, .explainToe {
	  	  	  font-size:20px;
	  	  }
		   #explainChart {
		   	  font-size:24px;
		   }
		   .checkBoxes {
		   	  font-size:16px;
		   }	  
    </style>
</head>
<body>
<jsp:include page="/WEB-INF/inc/top.jsp"></jsp:include>

		<!-- Header Start -->
        <div class="container-fluid bg-breadcrumb">
            <div class="container text-center" style="max-width: 900px;">
                <h3 class="text-white display-3 mb-4 wow fadeInDown" data-wow-delay="0.1s">Chart</h3>
            </div>
        </div>
        <!-- Header End -->

        <!-- Feature Start -->
        <div class="container-fluid feature pt-5">
            <div class="container">
                <div class="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="sub-style">
                        <h4 class="sub-title px-3 mb-0">chart</h4>
                    </div>
                    <h3 class="display-3">기업 선택</h3>
                    <p class="fs-3">기업을 검색하세요</p>
               
                    <form class="row d-flex justify-content-center">
                        <div class="col-3"> 
                        	<input type="text" class="form-control" value="대전" style="background-color:white;" disabled>
                        </div>
                        <div class="col-3 autocomplete-container"> 
                           <input id="memCorp" type="text" class="form-control" placeholder="기업검색" >
                           <ul id="autocomplete-list" class="autocomplete-list"></ul> <!-- 자동완성 결과 리스트 -->
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        <!-- Feature End -->

        <!-- Feature Start -->
        <div class="container-fluid feature">
            <div class="container">
                <div class="section-title mb-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="row my-2">
                       <div class="col chart-container" style=" display: inline-block;">
                       	  <strong id="explainChart" style="display:block;"></strong>
                       	  <div class="col checkBoxes" style="display:none;">
                          	<input id="elecCheck" type="checkbox" checked> 전기 
                       	  	<input id="gasCheck" type="checkbox" checked> 가스      
                          </div>
                          <div class="col explainToe" style="display:none; ">
                          	<p style="margin-bottom:0;">TOE (석유환산톤) : 석유 1톤을 연소할때 발생하는 에너지</p> 
                          	<p style="margin-bottom:0;">1TOE는 서울 - 부산을 16번 왕복할 수 있는 양</p>
                          </div>
                          <div id="backToYear" style="display:none;">&#8592;</div>
                          <canvas id="year" width="900px" height="500px" style="display:none;"></canvas>
                          <canvas id="month" width="900px" height="500px" style="display:none;"></canvas>
                          <div id="yearToe" style="display:none; text-align: center; position:relative;">
	                         <canvas id="toe" width="900px" height="500px" style="position: absolute;"></canvas>
	  			          	 <svg id="elecToe" style="position:absolute;"></svg>
	  			          	 <svg id="gasToe" style="position:absolute;"></svg>
	  			          	 <p class=toeToMoney style="display: inline-block; position:absolute; top:104%;  transform: translate(-50%, -50%);"></p>
						  </div>
						  <div id="monthToe" style="display:none;  text-align: center; position:relative;">
	                         <canvas id="toeMonths" width="900px" height="500px" style="position: absolute;"></canvas>
	  			          	 <svg id="elecMonthToe" style="position:absolute;"></svg>
	  			          	 <svg id="gasMonthToe" style="position:absolute;"></svg>
	  			          	 <p class=toeToMoney style="display: inline-block; position:absolute; top:104%;  transform: translate(-50%,0%);"></p>
						  </div>
						  <div id="seeBtns" style="display:none;">
						  	<button id="seeUseChart" type="button" style="width:60px; position: absolute; top: 135px; right: -25px; background-color: #F7819F; border-color: #F7819F; border:none;">사용량</button>
						  	<button id="seeToeChart" type="button" style="width:60px; position: absolute; top: 165px; right: -25px; background-color: #58FAF4; border-color: #58FAF4; border:none;">TOE</button>
						  </div>
                       </div>
                    </div>
                    <div class="row my-2">
                    	<div class="col">
                    		<canvas id="firstMargin" width="900px" height="500px"></canvas>
                   		</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Feature End -->
<jsp:include page="/WEB-INF/inc/footer.jsp"></jsp:include>
<!-- JSON 데이터 전달 -->
<input type="hidden" id="company-data" value='<c:out value="${companyList}" escapeXml="false"/>' />
<!-- JavaScript 파일 연결 -->
<script src="/resources/js/autocomplete.js"></script>  
<script src="/resources/js/chart.js"></script>  
<script src="https://d3js.org/d3.v4.min.js"></script>
</body>
</html>