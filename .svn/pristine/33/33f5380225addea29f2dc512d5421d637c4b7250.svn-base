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
	<title>mypage</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
</head>
    <style>
    

    .log{
    height: 50px; border: 2px solid;
    }
    .log:active{
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
    
    
    button:active {
      transform: scale(0.55);
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
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
          0 10px 10px rgba(0,0,0,0.22);
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
    .btn.btn-mypage{
    background: #59c544;
    border: 2px whitesmoke;
    color: white;
    
}
.btn.btn-mypage:hover{
    background-color: white;
    border: 0px;
    color: #01DE1A;
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
.feature-items {
    position: relative;
    display: flex;
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
.feature .feature-item-list {
position: relative;
display: flex;
border: 3px solid #01DE1A;
box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
border-radius: 10px;
background: white;
transition: 0.5s;

}
.feature-item-list:hover {
  
transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}
    </style>
    
<script type="text/javascript" src="https://dapi.kakao.com/v2/maps/sdk.js?appkey=3ee7d3dfdfd596f4375644830e0ca77d&libraries=services"></script>
    
<script>
document.addEventListener('DOMContentLoaded', function () {
// 회사의 해당년도 월별 차트
	getMonth();
 // 지도 API
         // 회사 주소
         
         const companyAddress = "${sessionScope.loginUser.subAddr}";

         // 지도를 표시할 div
         const mapContainer = document.getElementById('map');

         // 지도 옵션
         const mapOption = {
             center: new kakao.maps.LatLng(33.450701, 126.570667), // 기본 중심 좌표
             level: 3 // 확대 레벨
         };

         // 지도 생성
         const map = new kakao.maps.Map(mapContainer, mapOption);

         // 주소-좌표 변환 객체 생성
         const geocoder = new kakao.maps.services.Geocoder();

         // 주소로 좌표를 검색
         geocoder.addressSearch(companyAddress, function (result, status) {
             if (status === kakao.maps.services.Status.OK) {
                 const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                 // 검색된 좌표로 지도 이동
                 map.setCenter(coords);
                 // 마커이미지의 주소 (해당 주소는 야구공 모양)
                 var imageSrc = '/img/marker.png';
                 var imageSize = new kakao.maps.Size(44, 59); // 마커이미지의 크기
                 var imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션.

                 var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption)
                 // 마커 생성
                 const marker = new kakao.maps.Marker({
                     map: map,
                     position: coords,
                     image : markerImage
                 }); 
                 
                 
              	 // 마커 클릭 이벤트
                 const infowindow = new kakao.maps.InfoWindow({
                     content: `<div style="padding:5px; text-align:center;">${sessionScope.loginUser.memCorp}</div>` // 정보 창 내용
                 });
              	 
                 kakao.maps.event.addListener(marker, 'click', function () {
                     infowindow.open(map, marker);
                 });
                 
                 // 화면 크기 변경 시 마커를 다시 중심으로 맞추기
                 window.addEventListener('resize', function () {
                    map.relayout(); // 지도 크기 변경 시 재조정
                    map.setCenter(coords); // 마커 위치를 중심으로 설정
                });
                 
                 
                 // 인포윈도우 생성
                 
                 
             } else {
            	 
                 alert("주소 검색에 실패했습니다.");
                 
                 
             }
         });

         function getMonth() {
        	    const year = 2022; // 연도는 2022로 고정
        	    const corp = "${sessionScope.loginUser.memCorp}"; // 세션에서 회사 정보 가져오기
        	    
        	    $.ajax({
        	        url: '/mypage/getMonth', // 컨트롤러에서 JSON 데이터를 반환하는 URL
        	        type: 'POST',
        	        contentType: "application/json",
        	        dataType: "json",
        	        data: JSON.stringify({ year: year, corp: corp }), // 서버에 전송할 데이터
        	        success: function (response) {
        	            // 받은 데이터를 차트에 업데이트
        	            monthChart.data.datasets[0].data = response.elecList; // 전기 사용량
        	            monthChart.data.datasets[1].data = response.gasList; // 가스 사용량
        	            monthChart.update(); // 차트 새로고침
        	        },
        	        error: function (error) {
        	            console.error("AJAX 요청 실패:", error);
        	        }
        	    });
        	}
         // 월별 차트
         const month = document.querySelector('#month').getContext('2d');
         const monthChart = new Chart(month, {
             type: 'bar',
             data: {
                 labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
                 datasets: [
                	 {
                     label: '월별 전기 사용량',
                     data: [0,0,0,0,0,0,0,0,0,0,0,0],
                     borderColor: 'rgba(255, 255, 48, 0.766)',
                     backgroundColor: 'rgba(255, 255, 48, 0.766)',
                     borderWidth: 2,
                     fill: false,
                	 },
                	 {
                     label: '월별 가스 사용량',
                     data: [0,0,0,0,0,0,0,0,0,0,0,0],
                     borderColor: 'rgba(176, 176, 176, 0.617)',
                     backgroundColor: 'rgba(176, 176, 176, 0.617)',
                     borderWidth: 2,
                     fill: false,
                	 }
                 ]
             },
             options: {
                 responsive: true,
                 layout: {
                     padding: {
                         left: 20,   // 왼쪽 여백
                         right: 23,  // 오른쪽 여백
                         top: 20,    // 위쪽 여백
                         bottom: 20  // 아래쪽 여백
                     }
                 },
                 plugins: {
                     legend: { position: 'top' },
                     tooltip: { enabled: true },
                 },
                 scales: {
                     x: { beginAtZero: true },
                     y: { beginAtZero: true }
                 },
                 onClick: function(e) {
                     const activePoints = monthChart.getElementsAtEventForMode(e, 'nearest', {intersect: true}, true);
                 }
             }
         });



});






        </script>
     
<body>
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

                    <div class="col-md-10 col-lg-10 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="row-cols-1 feature-items p-4 d-flex flex-column align-items-center text-center" >
                            <div class="col-12" >
                                <div class="feature-icon mb-4">
                                    <div class="p-3 d-inline-flex bg-white rounded">
                                        <i class="fas far fa-user-circle fa-10x" style="color:#59c544;"></i>
                                    </div>
                                </div>
                                <div class="feature-content d-flex flex-column">
                                    <h3 class="mb-2">내 정보</h3>
                                    <p class="mb-2 fs-4">${sessionScope.loginUser.memId}</p>
                                </div>
                                <button onclick="location.href='/mypageedit' " class="btn btn-mypage btn_log fs-4" >회원정보 수정</button>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-10 col-lg-10 col-xl-8 wow fadeInUp" data-wow-delay="0.2s">
                        <div class="row-cols-1 feature-items p-4">
                            <div class="col-12">
                                <div class="feature-icon mb-4">
                                    <div class="p-3 d-inline-flex bg-white rounded">
                                        <i class="fas fa-school fa-5x" style=" color:#59c544; margin-right: 20px;"></i>
                                        <div class="feature-content d-flex flex-column m-2">
                                            <h3 class="mb-2">회사정보</h3>
                                            <p class="mb-0 fs-4">${sessionScope.loginUser.memCorp}</p>
                                        </div>
                                    </div>
                                    <div class="feature-content d-flex flex-column m-2">
                                        <h3 class="mb-2">회사 주소 정보</h3>
                                        <p class="mb-0 fs-4">${sessionScope.loginUser.subAddr}</p>
                                    </div>
                                 

                                        <div class="row-cols-1 feature-item-list p-4 mb-3">
                                            <div class="col-12">
                                                    <div class="feature-content d-flex flex-column m-2">
                                                       <h3 class="mb-2">회사 위치</h3>
                                                        <div id="map" style="width: 100%; height: 400px;"></div>
                                                    </div>
                                                   
                                        </div>
                                    </div>
                                    <div class="feature-content d-flex flex-column m-2">
                                        <h3 class="mb-2">회사 차트 정보</h3>
                                        <p class="mb-0 fs-4">2022년도 '${sessionScope.loginUser.memCorp}' 의 에너지 사용량 입니다 </p>
                                    </div>

                                    <div class="row-cols-1 feature-item-list p-4 mb-3">
                                        <div class="col-12">
                                                <div class="feature-content d-flex flex-column m-2">
                                                   

                                                    <canvas id="month" width="600px" height="300px"></canvas>
                                                </div>
                                               
                                    </div>
                                </div>



                                </div>
                            </div>
                        </div>
                    </div>
               

     


                </div>
            </div>
        </div>
        <!-- Feature End -->


<jsp:include page="/WEB-INF/inc/footer.jsp"></jsp:include>
</body>
</html>