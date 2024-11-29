<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>Watt's Up?</title>
	
	
	
	<!-- main css -->
    <style>
        @font-face {
            font-family: 'NanumSquareRound';
            src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        .bgfont{
            font-family: 'NanumSquareRound';
        }

    
    .img_item img {
		    height: 160px; 
		    border-radius: 15px;
             /* 둥근 모서리 */
		}

        .menu-item {
        position: relative;
        
        border-radius: 30px;
        background: white;
        transition: 0.5s;
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
        align-items: center;
        justify-content: center;
        
            }
            .menu-item p{
       font-size: 20px;
            }
        .menu-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
		}
        .menu-context span {
		    display: inline-block; /* 개별 글자를 컨트롤하기 위해 inline-block 설정 */
		    transition: transform 0.1s ease, color 0.1s ease;
		}
		
		.menu-context span.active {
		    color: #7bd4f4; /* 강조된 글자 색상 */
		    transform: translateY(-5px) scale(1.4); /* 위로 튀어오르고 크기 확대 */
		}
        .what-text{
            border: 3px solid;
            border-radius:20px;
            padding-top: 2px;
            transition: 0.5s;
            box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
		    transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.2 ease;
        }
        .what-text:hover{
            color: #7bd4f4;
            box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
        }
        .mmin{
            position: relative;
            background-image: url('img/chart.jpg');
            background-size: cover;
            background-position: center;
            height: 300px;
        }
        .min:hover{
            
        }
        .mmin2{
            position: relative;
            background-image: url('img/2.gif');
            background-size: cover;
            background-position: center;
            height: 300px;
        }
        
        .mmin3{
            position: relative;
            background-image: url('img/tip.jpg');
            background-size: cover;
            background-position: center;
            height: 300px;
        }
        .mins{
            position: absolute;
            bottom: 0;
            background-color: rgba(255, 255, 255, 0.632);
            color: rgba(0, 0, 0, 0.71);
            border-bottom-left-radius: 25px;
            border-bottom-right-radius: 25px;
        }
        
        </style>
        <!-- main css -->
        
       
       
       
       
       
       
     <!-- weather script -->  
	<script>
	feather.replace()
	</script>
       <!-- weather script -->  
       <!-- weather css -->
<style>

:root {
    --gradient: linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.8) 100%);
}
.clear {
	clear: both;
}

.weather-main {

	border:1px solid;

	color: #ffffff;
	height: 400px;
}

.weather-content-main {

	
	border-radius: 25px;
	background-color:  white;
	color: #ffffff;
	height: 400px;
	transition: 0.5s;
        box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.weather-content-main:hover {
	transform: translateY(-5px);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}



.weather-side.clear-sky {
	position: relative;
	height: 100%;
	border-radius: 25px;
 	background-image: url('<c:url value="/resources/img/clear-sky.jpg" />');
 	background-size: cover;
 	transition: 0.5s;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.weather-side.snowy {
	position: relative;
	height: 100%;
	border-radius: 25px;
 	background-image: url('<c:url value="/resources/img/snowy.png" />');
 	background-size: cover;
 	transition: 0.5s;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.weather-side.rainy {
	position: relative;
	height: 100%;
	border-radius: 25px;
 	background-image: url('<c:url value="/resources/img/rainy.jpg" />');
 	background-size: cover;
 	transition: 0.5s;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.weather-side.default {
	position: relative;
	height: 100%;
	border-radius: 25px;
	background-image: url('<c:url value="/resources/img/default.png" />');
 	background-size: cover;
 	transition: 0.5s;
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
	transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.weather-side:hover {
	 transform: translateY(-5px);
     box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);

}

.weather-gradient {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-image: var(--gradient);
	border-radius: 25px;
	opacity: 0.8;
}
.date-container {
	position: absolute;
	top: 25px;
	left: 25px;
}
.date-dayname {
	margin: 0;
}

.date-day {
	display: block;
}

.location {
	display: inline-block;
	margin-top: 10px;
}

.location-icon {
	display: inline-block;
	height: 0.8em;
	width: auto;
	margin-right: 5px;
}

.weather-container {
	position: absolute;
	bottom: 25px;
	left: 25px;
}


.weather-icon.feather {
	height: 60px;
	width: auto;
}

.weather-temp {
	margin: 0;
	font-weight: 700;
	font-size: 4em;
}

.weather-desc{
	margin: 0;
}

.today-info {
	padding: 15px;
	margin: 0 25px 25px 25px;
/* 	box-shadow: 0 0 50px -5px rgba(0, 0, 0, 0.25); */
	border-radius: 10px;
}



.today-info>div .title {
	float: left;
	font-weight: 700;
}

.today-info>div .value {
	float: right;
}



.day-infomation{
	color: #15b9d9;
	cursor: pointer;
	-webkit-transition: 200ms ease;
	-o-transition: 200ms ease;
	transition: 200ms ease;
	border-radius: 10px;
	}
.day-infomation:hover{
-webkit-transform: scale(1.05);
	    -ms-transform: scale(1.05);
	        transform: scale(1.05);
	        background: #15b9d9;
	color: white;
	}
.iconimage{
	width:60px;
}
.day-name{
font-size:30px
}
.day-temp{
font-size:17spx
}
</style>
       
       
       
       
        <!-- weather css -->
        
        <!-- text css -->
<style>
.text {
    position: absolute;
    font-size: 2rem;
    opacity: 0;
    transform: translateY(100%);
    animation-duration: 12s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;

}
/* 첫번째 텍스트 애니메이션 */
#first {
    animation-name: slideInOut;
    animation-delay: 0s;
}

/* 두번째 텍스트 애니메이션 */
#second {
    animation-name: slideInOut;
    animation-delay: 4s;

}

/* 세번째 텍스트 애니메이션 */
#third {
    animation-name: slideInOut;
    animation-delay: 8s;

}

/* 공통 애니메이션 */
@keyframes slideInOut {
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    10% {
        opacity: 1;
        transform: translateY(0);
    }
    30% {
        opacity: 1;
        transform: translateY(0);
    }
    40% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 0;
        transform: translateY(-100%);
    }
}

</style>
</head>
<body>

<jsp:include page="/WEB-INF/inc/top.jsp"></jsp:include>


<!-- Carousel Start -->
<div class="header-carousel owl-carousel">
    <div class="header-carousel-item">
        <img src="img/b1.jpg" class="img-fluid w-100" alt="Image">
        <div class="carousel-caption">
            <div class="carousel-caption-content p-3">
               <h3 class="text-white text-uppercase mb-4 bgfont" style="letter-spacing: 3px;">가스, 전기 등 우리가 사용하는 자원을 점검하고 필요에 따라 조정하세요. 작은 실천이 환경 보호로 이어집니다.</h3>
            </div>
        </div>
    </div>
    <div class="header-carousel-item">
        <img src="img/b3.jpg" class="img-fluid w-100" alt="Image">
        <div class="carousel-caption">
            <div class="carousel-caption-content p-3">
               <h3 class="text-white text-uppercase mb-4 bgfont" style="letter-spacing: 3px;">기업 간의 원활한 커뮤니케이션을 통해 피드백을 주고받으며 서로 성장하세요. 지속 가능한 협력은 환경과 미래에 긍정적인 영향을 줍니다.</h3>
            </div>
        </div>
    </div>
    <div class="header-carousel-item">
        <img src="img/b2.jpg" class="img-fluid w-100" alt="Image">
        <div class="carousel-caption">
            <div class="carousel-caption-content p-3">
                  <h3 class="text-white text-uppercase  mb-4 bgfont" style="letter-spacing: 3px;">우리가 실천할 수 있는 환경 보호 팁을 함께 나눠보세요. 작은 아이디어가 모여 큰 변화를 만듭니다.</h3>
             </div>
        </div>
    </div>
</div>
<!-- Carousel End -->
        <!-- Navbar & Hero End -->
        <!-- Feature0 Start -->
        <div class="container-fluid feature py-3">
            <div class="container-fluid py-3">
                <div class="row g-4 justify-content-center mb-5">
                    <div class="col-md-10 col-lg-8 col-xl-10  wow fadeInUp" data-wow-delay="0.2s"
                    	 style="position: relative; height:50px; width:100%; text-align:center; display: flex;
                    	 		justify-content: center; align-items: center;">
                         <h4 class="text" id="first" style="text-align: center;"> 날씨가 추우니 온열기구 사용에 주의하세요</h4>
                         <h4 class="text" id="second" style="text-align: center;"> 많이 건조한 겨울입니다 산업현장 화재에 주의하세요</h4>
                         <h4 class="text" id="third" style="text-align: center;"> 난방비를 아낄 수 있는 방법이 TIP에 준비되어 있습니다</h4>
                    </div>
                    <script src="script.js"></script>
                </div>
            </div>
            
            <div class="row g-4 justify-content-center mb-4">
				<!-- weather zone -->
		        <div class="col-md-10 col-lg-8 col-xl-2 mb-4 wow fadeInUp weather-main" data-swow-delay="0.1s">
		              <div class="weather-side
		              	<c:choose>
		           			<c:when test="${daejeonWeather.PTY == '0'}"> clear-sky</c:when>
		           			<c:when test="${daejeonWeather.PTY == '1'}"> rainy</c:when>
		           			<c:when test="${daejeonWeather.PTY == '2'}"> snowy</c:when>
		           			<c:when test="${daejeonWeather.PTY == '3'}"> snowy</c:when>
		           			<c:when test="${daejeonWeather.PTY == '4'}"> rainy</c:when>
		           			<c:when test="${daejeonWeather.PTY == '5'}"> rainy</c:when>
		           			<c:when test="${daejeonWeather.PTY == '6'}"> rainy</c:when>
		           			<c:when test="${daejeonWeather.PTY == '7'}"> snowy</c:when>
		           			<c:otherwise> default</c:otherwise>
		        		</c:choose>">
				            <div class="weather-gradient"></div>
						    <div class="date-container">
							      <h2 class="date-dayname">${dayOfWeek}</h2>
							      <span class="date-day">${date}</span><span class="date-day">${standardTime }시 기준</span>
				
							      <span class="location" style="font-size: 1.6pc;">대한민국, 대전광역시</span>
						    </div>
			    
			    
		                    <div class="weather-container">
		                    <!-- 쓸모 없을지도..?
		                   		<span class="title">강수량 : </span><span class="value">${daejeonWeather.RN1} mm/h</span>
		                   		<br>
		                   		<span class="title">습도 : </span><span class="value">${daejeonWeather.REH} %</span>
		                   		<br>
		                   		<span class="title">바람 : </span><span class="value">${daejeonWeather.WSD} km/h</span>
							  -->
							  <div class="ml-2">
							  	<c:choose>
		           			<c:when test="${daejeonWeather.PTY == '0'}">  <img class="iconimage" src="img/iconpack/ic-clear-sky.png" alt=""> </c:when>
		           			<c:when test="${daejeonWeather.PTY == '1'}">  <img class="iconimage" src="img/iconpack/ic-rain.png" alt=""> </c:when>
		           			<c:when test="${daejeonWeather.PTY == '2'}">  <img class="iconimage" src="img/iconpack/ic-rain-snow.png" alt=""> </c:when>
		           			<c:when test="${daejeonWeather.PTY == '3'}">  <img class="iconimage" src="img/iconpack/ic-snow.png" alt=""> </c:when>
		           			<c:when test="${daejeonWeather.PTY == '4'}">  <img class="iconimage" src="img/iconpack/ic-shower.png" alt=""> </c:when>
		           			<c:when test="${daejeonWeather.PTY == '5'}">  <img class="iconimage" src="img/iconpack/ic-rain.png" alt=""> </c:when>
		           			<c:when test="${daejeonWeather.PTY == '6'}">  <img class="iconimage" src="img/iconpack/ic-rain-snow.png" alt=""> </c:when>
		           			<c:when test="${daejeonWeather.PTY == '7'}">  <img class="iconimage" src="img/iconpack/ic-snow.png" alt=""> </c:when>
		           			<c:otherwise> <img class="iconimage" src="img/iconpack/default.png" alt=""> </c:otherwise>
		        		</c:choose>
		        		</div>
							  
							  
							  
							  
			                    <h1 class="weather-temp">${daejeonWeather.T1H}°C</h1>
			                    <h3 class="weather-desc">${daejeonWeather.PTY}</h3>
		                    </div>
		              </div>
		         </div>     
				<div class="col-md-10 col-lg-8 col-xl-5 p-3 wow fadeInUp weather-content-main" data-swow-delay="0.1s">
				<div class="row " style="text-align:center;"> <h3 style="color: #15b9d9;">지역별 날씨 정보</h3></div>
		            	<div class="row pt-3" style="text-align:center;">
		                	<c:forEach var = "location" items="${locations}">
			                    <div class="col day-infomation">
			                    <div class="day-name my-2">${location.gu }</div>
			                 
			              	<c:choose>
			           			<c:when test="${location.description == '맑음'}">  <img class="iconimage" src="img/iconpack/ic-clear-sky.png" alt=""> </c:when>
			           			<c:when test="${location.description == '비'}">  <img class="iconimage" src="img/iconpack/ic-rain.png" alt=""> </c:when>
			           			<c:when test="${location.description == '비/눈'}">  <img class="iconimage" src="img/iconpack/ic-rain-snow.png" alt=""> </c:when>
			           			<c:when test="${location.description == '눈'}">  <img class="iconimage" src="img/iconpack/ic-snow.png" alt=""> </c:when>
			           			<c:when test="${location.description == '소나기'}">  <img class="iconimage" src="img/iconpack/ic-shower.png" alt=""> </c:when>
			           			<c:when test="${location.description == '빗방울'}">  <img class="iconimage" src="img/iconpack/ic-rain.png" alt=""> </c:when>
			           			<c:when test="${location.description == '빗방울/눈날림'}">  <img class="iconimage" src="img/iconpack/ic-rain-snow.png" alt=""> </c:when>
			           			<c:when test="${location.description == '눈날림'}">  <img class="iconimage" src="img/iconpack/ic-snow.png" alt=""> </c:when>
			           			<c:otherwise> <img class="iconimage" src="img/iconpack/default.png" alt=""> </c:otherwise>
			        		</c:choose>
			        		
			        		
			                    <div class="day-temp mt-2">날씨 : ${location.description}</div>
			                    <div class="day-temp">기온 : ${location.temperature}°C</div>
			                    <div class="day-temp">강수량 : ${location.rain} mm/h</div>
			                    <div class="day-temp">습도 : ${location.humidity} </div>
			                    <div class="day-temp mb-2">바람 : ${location.wind} km/h</div>
			                    </div>
		                	</c:forEach>
			            </div>   	
			</div>  
									<!-- weather zone End -->
				<div class="col-md-10 col-lg-8 col-xl-2 p-4  wow fadeInUp" data-wow-delay="0.1s">
            		<h4 class="p-2">WebLink</h4>
            		<a href="https://www.me.go.kr/home/web/main.do">
            			<div class="d-flex fs-4" ><p class="what-text px-3"> # 환경부</p></div>
            		</a>
            		<a href="https://www.keco.or.kr/web/index.do;jsessionid=6A8B6F6D975C83551D4150D5DED238EA.hfkeco">
            			<div class="d-flex fs-4" ><p class="what-text px-3"># 환경공단</p></div>
           			</a>
            		<a href="https://www.gihoo.or.kr/menu.es?mid=a30101020000 ">
            			<div class="d-flex fs-4"><p class="what-text px-3"># 탄소중립 포털</p></div>
           			</a>  
        		</div>					
		</div>
		
		
		
		
		
        <div class="row g-4 justify-content-center mb-4">
            <div class="col-md-10 col-lg-8 col-xl-3 mx-2 wow fadeInUp" data-wow-delay="0.1s"  style="cursor:pointer;" OnClick="location.href ='/chartView'" >
                <div class="row-cols-1 menu-item p-4 d-flex flex-column text-center mmin" >
                    <div class="col-12 mins">
                        <div class="menu-text">
                            <p class="menu-context fs-1 pt-3">차트</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-10 col-lg-8 col-xl-3 mx-2 wow fadeInUp" data-wow-delay="0.1s" style="cursor:pointer;" OnClick="location.href ='/boardView'">
                <div class="row-cols-1 menu-item p-4 d-flex flex-column text-center mmin2" >
                    <div class="col-12 mins">
                        <div class="menu-text">
                            <p class="menu-context fs-1 pt-3">게시판</p>
                        </div>
                	</div>
                </div>
            </div>
          	<div class="col-md-10 col-lg-8 col-xl-3 mx-2 wow fadeInUp" data-wow-delay="0.1s" style="cursor:pointer;" OnClick="location.href ='/tipView'">
                <div class="row-cols-1 menu-item p-4 d-flex flex-column text-center mmin3" >
                    <div class="col-12 mins">
                        <div class="menu-text">
                            <p class="menu-context fs-1 pt-3">꿀Tip</p>
                        </div>
                	</div>
                </div>
            </div>
            
            
        </div>
    
    
    
</div>


	
<jsp:include page="/WEB-INF/inc/footer.jsp"></jsp:include>
<script>
const weather = { PTY: ${daejeonWeather.PTY} };
const weatherDescElement = document.querySelector('.weather-desc');
const getWeatherDescription = (PTY) => {
    switch (PTY) {
        case 0: return "맑음";
        case 1: return "비";
        case 2: return "비/눈";
        case 3: return "눈";
        case 4: return "소나기";
        case 5: return "빗방울";
        case 6: return "빗방울/눈날림";
        case 7: return "눈날림";
        default: return "알 수 없음";
    }
}; 
const ptyValue = parseInt(weather.PTY, 10);
weatherDescElement.textContent = getWeatherDescription(ptyValue);
</script>
</body>
</html>
