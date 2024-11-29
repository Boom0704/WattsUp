$(document).ready(function() {
            
    let corpName;
    let maxElecUse;
    let maxGasUse;
    let elecUse;
    let gasUse;
    let explainText;            
    let newExplainText;            
    let label;
    let elecToe = 0;
    let gasToe = 0;
    
    // 년별 차트
    const year = document.querySelector('#year').getContext('2d');
    const yearChart = new Chart(year, {
        type: 'line',
        data: {
            labels: ['2015년', '2016년', '2017년', '2018년', '2019년', '2020년', '2021년', '2022년'],
            datasets: [
           	 {
                label: '년도별 전기 사용량',
                data: [0,0,0,0,0,0,0,0],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
             	 },
           	 {
                label: '년도별 가스 사용량',
                data: [0,0,0,0,0,0,0,0],
                borderColor: 'rgba(255, 99, 132, 1)',
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
                    top: 36,    // 위쪽 여백
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
                // 클릭 위치의 좌표를 확인
                const canvasPosition = Chart.helpers.getRelativePosition(e, yearChart); // 차트의 상대 좌표
                const xScale = yearChart.scales.x; // x축 스케일 정보
                const xValue = xScale.getValueForPixel(canvasPosition.x); // 클릭된 위치의 x 값

                // x축 라벨에 해당하는 값 찾기
                const labelIndex = yearChart.data.labels.findIndex((label, index) => {
                    // 라벨의 위치와 클릭된 x 좌표가 가까운지 확인
                    const labelPosition = xScale.getPixelForValue(index); // x축 라벨의 위치
                    const labelWidth = xScale.width / yearChart.data.labels.length; // 라벨 너비
                    return Math.abs(labelPosition - canvasPosition.x) < labelWidth / 2; // 클릭한 위치가 라벨 영역 내에 있을 때
                });

                if (labelIndex !== -1) {
                    label = yearChart.data.labels[labelIndex]; // 클릭된 라벨
                    getMonth(label.slice(0,4),corpName)
                }
            }
        }
    });
    
    
    // 월별 차트
    const month = document.querySelector('#month').getContext('2d');
    const monthChart = new Chart(month, {
        type: 'line',
        data: {
            labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
            datasets: [
           	 {
                label: '월별 전기 사용량',
                data: [0,0,0,0,0,0,0,0,0,0,0,0],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false,
           	 },
           	 {
                label: '월별 가스 사용량',
                data: [0,0,0,0,0,0,0,0,0,0,0,0],
                borderColor: 'rgba(255, 99, 132, 1)',
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
                    top: 36,    // 위쪽 여백
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
    
    // TOE 차트
    const toe = document.querySelector('#toe').getContext('2d');
    const toeChart = new Chart(toe, {
        type: 'bar',
        data: {
            labels: [1],
            datasets: [
            	{label: '전기 TOE',
            	 data: [0],
        		 borderColor: '#D7DF01',
                 borderWidth: 2,}, 
            	{label: '가스 TOE',
            	 data: [0],
            	 borderColor: '#BDBDBD',
                 borderWidth: 2,}
            	]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 20,   // 왼쪽 여백
                    right: 23,  // 오른쪽 여백
                    top: 0,    // 위쪽 여백
                    bottom: 20  // 아래쪽 여백
                }
            },
            plugins: {
                legend: { position: 'top' },
                tooltip: { enabled: true },
            },
            scales: {
                x: { beginAtZero: true, 
                	 ticks: {
                        maxTicksLimit: 2, 
                        display: false
                    }
                },
                y: { beginAtZero: true,
                	 ticks: {
                        maxTicksLimit: 2, 
                        display: false
                    }
                }
            },
        }
    });
    
 // TOE 월차트
    const toeMonths = document.querySelector('#toeMonths').getContext('2d');
    const toeMonthChart = new Chart(toeMonths, {
        type: 'bar',
        data: {
            labels: [1],
            datasets: [
            	{label: '전기 TOE',
            	 data: [0],
        		 borderColor: '#D7DF01',
                 borderWidth: 2,}, 
            	{label: '가스 TOE',
            	 data: [0],
            	 borderColor: '#BDBDBD',
                 borderWidth: 2,}
            	]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 20,   // 왼쪽 여백
                    right: 23,  // 오른쪽 여백
                    top: 0,    // 위쪽 여백
                    bottom: 20  // 아래쪽 여백
                }
            },
            plugins: {
                legend: { position: 'top' },
                tooltip: { enabled: true },
            },
            scales: {
                x: { beginAtZero: true, 
                	 ticks: {
                        maxTicksLimit: 2, 
                        display: false
                    }
                },
                y: { beginAtZero: true,
                	 ticks: {
                        maxTicksLimit: 2, 
                        display: false
                    }
                }
            },
        }
    });
    
  //Enter로 검색 
    document.addEventListener('keydown', function(event) {
       if (event.key === 'Enter'){
          corpName = $("#memCorp").val()
          if (corpName != null && corpName !== ""){
             event.preventDefault()
             $("#autocomplete-list").html('');
             $("#memCorp").val("")
             getCorpData(corpName)
          }
       }
    })
    
    //차트 변경
    function changeDisplay() {
       $("#year").toggle();
       $("#month").toggle();
       $("#backToYear").toggle();   
    }
    
    function allNone(){
    	$("#year").css("display", "none");
    	$("#month").css("display", "none");
    	$("#backToYear").css("display", "none");
    	$(".checkBoxes").css("display", "none");

    	$("#yearToe").css("display", "none");
    	$("#monthToe").css('display', "none")
    	$(".explainToe").css("display", "none");
    }
    
    function toeToMoney(value, type){
    	let newValue;
    	let toMoney = Math.round(value * 11628 * 260).toLocaleString();
        if (value >= 1000){
        	newValue = Math.round(value)
        }else if (value >= 100){
        	newValue = value.toFixed(1)
        }else if (value >= 10){
        	newValue = value.toFixed(2)
        }else{
        	newValue = value.toFixed(3)
        }
        return (newValue + "toe는 전기비로 환산하면 약 " + toMoney + "원")
    } 
    
    
    //화살표 클릭 시 년도 차트
     $("#backToYear").click(function(){
    	 $(".toeToMoney").text(toeToMoney(parseFloat(elecToe)))
    	 $("#explainChart").text(explainText)
       	 changeDisplay();
    })
    
    $("#elecCheck").change(function(){
    	yearChart.getDatasetMeta(0).hidden = !$(this).prop('checked')	
    	monthChart.getDatasetMeta(0).hidden = !$(this).prop('checked')
    	yearChart.update()
    	monthChart.update()
    })
    $("#gasCheck").change(function(){
    	yearChart.getDatasetMeta(1).hidden = !$(this).prop('checked')	
    	monthChart.getDatasetMeta(1).hidden = !$(this).prop('checked')
    	yearChart.update()
    	monthChart.update()
    })
    
    $("#seeUseChart").click(function(){
    	if ($("#yearToe").css('display') != 'none'){
    		allNone();
        	$("#year").css("display", "block");
    	}else if($("#monthToe").css('display') != 'none'){
    		allNone();
    		$("#month").css("display", "block");
    		$("#backToYear").css("display", "block");
    	}
    	$(".checkBoxes").css("display", "block");
    })
    
    $("#seeToeChart").click(function(){
    	if ($("#year").css('display') != 'none'){
    		allNone();
        	$("#yearToe").css("display", "block");
        	setFirstSize()
            setTimeout(() => {
            	toeChart.resize();
            	toeChart.update();
            }, 100);
            loadLiquidFillGauge("elecToe", elecToe, configElec);
            loadLiquidFillGauge("gasToe", gasToe, configGas);
    	}else if($("#month").css('display') != 'none'){
    		allNone();
    		$("#monthToe").css("display", "block");
    		setFirstSize()
    		setTimeout(() => {
    			toeMonthChart.resize();
    			toeMonthChart.update();
    		}, 100);
    		loadLiquidFillGauge("elecMonthToe", elecMonthToe, configElec);
            loadLiquidFillGauge("gasMonthToe", gasMonthToe, configGas);
    	}
    	$(".explainToe").css("display", "block");
    })
    
    var chartList;
    var elecList = [];
    var gasList = [];
    function getCorpData(corp){
        $.ajax({
           url: '/getCorpData',
             type: 'POST',
             data: {
                corp : corp
             }, 
             success: function(response) {
            	if(response[0]['maxElecUse'] > 100000 || response[0]['maxGasUse'] > 100000){
            		maxElecUse = Math.ceil(response[0]['maxElecUse'] / 10000) * 10000
                	maxGasUse = Math.ceil(response[0]['maxGasUse'] / 10000) * 10000
            	}else if (response[0]['maxElecUse'] > 10000 || response[0]['maxGasUse'] > 10000){
            		maxElecUse = Math.ceil(response[0]['maxElecUse'] / 1000) * 1000
                	maxGasUse = Math.ceil(response[0]['maxGasUse'] / 1000) * 1000
            	}else{
                	maxElecUse = Math.ceil(response[0]['maxElecUse'] / 500) * 500
                	maxGasUse = Math.ceil(response[0]['maxGasUse'] / 500) * 500
            	}
            	elecList = [];
            	gasList = [];
            	explainText = corpName + '의 에너지 사용량입니다.'
            	$("#explainChart").text(explainText)
                for (let i=0; i<response.length; i++){
                   elecList.push(response[i]['elecUse']) 
                   gasList.push(response[i]['gasUse'])
                }
                if(Math.max(...elecList, ...gasList) > 1000000){
                	yearChart.options.scales.y.max = Math.ceil(Math.max(...elecList, ...gasList) / 100000) * 100000;
                }else{
                	yearChart.options.scales.y.max = Math.ceil(Math.max(...elecList, ...gasList) / 10000) * 10000;
                }
                yearChart.data.datasets[0].data = elecList; 
                yearChart.data.datasets[1].data = gasList; 
                yearChart.update();
                $("#firstMargin").css("display", "none");
                $("#month").css("display", "none");
                $("#backToYear").css("display", "none");
                $("#year").css("display", "block");
                $(".checkBoxes").css("display", "block");
                $(".explainToe").css("display", "none");
                
                elecToe = 0;
                gasToe = 0;
                
                for (let i = 0; i < response.length; i++){
                	elecToe += parseFloat(response[i]['elecToe'])
                	gasToe += parseFloat(response[i]['gasToe'])
                }
                
                if (parseFloat(elecToe) <= 100){
                	configElec.maxValue = 100
                }else {
                	configElec.maxValue = 1000
                }
                if (parseFloat(gasToe) <= 100){
                	configGas.maxValue = 100
                }else {
                	configGas.maxValue = 1000
                }
                
                $("#yearToe").css("display", "none");
                $("#monthToe").css("display", "none");
                $("#seeBtns").css("display", "block");
                
                $(".toeToMoney").text(toeToMoney(parseFloat(elecToe)))
                
             },                    
             error: function(error) {
             	console.log(error)
             	alert("기업 이름을 정확하게 작성해주세요");
             }
        });
     }
    
     
     function getMonth(year, corp){
         $.ajax({
                url: '/getMonth',  
                type: 'POST',         
                contentType: "application/json",
                dataType: "json",
                data: JSON.stringify({ year: year, corp : corp }), 
                success: function(response) {
                	monthChart.options.scales.y.max = Math.max(maxElecUse, maxGasUse);
                	monthChart.data.datasets[0].data = response.elecList; 
                	monthChart.data.datasets[1].data = response.gasList; 
                	monthChart.update();  
                	newExplainText = corpName + '의 ' + label + ' 에너지 사용량입니다.'
                	$("#explainChart").text(newExplainText)
                	
                	elecMonthToe = response['elecToeList']
	                gasMonthToe = response['gasToeList']
	                
	                if (parseFloat(elecMonthToe) <= 100){
	                	configElec.maxValue = 100
	                }else {
	                	configElec.maxValue = 1000
	                }
	                if (parseFloat(gasMonthToe) <= 100){
	                	configGas.maxValue = 100
	                }else {
	                	configGas.maxValue = 1000
	                }
	                
	                $("#yearToe").css("display", "none");
	                $("#monthToe").css("display", "none");
	                $("#seeBtns").css("display", "block");
	                
	                $(".toeToMoney").text(toeToMoney(parseFloat(elecMonthToe)))
                	
                	changeDisplay();           
	                
	                setFirstSize()
                },
                error: function(error) {
                    console.error("AJAX 요청 실패:", error);
                }
         });                
     }
     
     const autocompleteList = document.getElementById('autocomplete-list'); 
     autocompleteList.addEventListener('mousedown', function(event) {
         if (event.target && event.target.tagName === 'LI') {
             const companyName = event.target.textContent;
        	 corpName = companyName
        	 if (corpName != null && corpName !== ""){
        		 $("#autocomplete-list").html('');
        		 $("#memCorp").val("")
             getCorpData(companyName);
        	 }
         }
     });
     
     const yearToeParent = document.getElementById('yearToe');
     const monthToeParent = document.getElementById('monthToe');
     
     const canvasYearToe = document.getElementById('toe');
     const canvasMonthToe = document.getElementById('toeMonths');
     
     const yearElecToe = document.getElementById('elecToe');
     const yearGasToe = document.getElementById('gasToe');
     
     const monthElecToe = document.getElementById('elecMonthToe');
     const monthGasToe = document.getElementById('gasMonthToe');
     
     
     function setFirstSize(){
    	 let firstSize = window.innerWidth; 
    	 if(firstSize >= 992){
    		 yearToeParent.style.height = '500px';
    		 monthToeParent.style.height = '500px';
    		 
    		 canvasYearToe.style.height = '500px';
    		 canvasYearToe.height = '500';
    		 canvasYearToe.style.width = '900px';
    		 canvasYearToe.width = '900';
    		 
    		 canvasMonthToe.style.height = '500px';
    		 canvasMonthToe.height = '500';
    		 canvasMonthToe.style.width = '900px';
    		 canvasMonthToe.width = '900';
    		 
    	 }else if(firstSize < 992 && firstSize >= 768){
    		 yearToeParent.style.height = '386px';
    		 monthToeParent.style.height = '386px';
    		 
    		 canvasYearToe.style.height = '386px';
    		 canvasYearToe.height = '386';
    		 canvasYearToe.style.width = '696px';
    		 canvasYearToe.width = '696';
    		 
    		 canvasMonthToe.style.height = '386px';
    		 canvasMonthToe.height = '386';
    		 canvasMonthToe.style.width = '696px';
    		 canvasMonthToe.width = '696';
    		 
    	 }else if(firstSize < 768){
    		 if(elecToe >= 100 || gasToe >= 100){
    			 yearToeParent.style.height = '700px';
    			 canvasYearToe.style.height = '700px';
    			 canvasYearToe.height = '700';
    			 yearElecToe.style.top = '27%';
    			 yearElecToe.style.left = '50%';
    			 yearGasToe.style.top = '73%';
    			 yearGasToe.style.left = '50%';
    		 }else{
    			 yearToeParent.style.height = '286px';
    			 canvasYearToe.style.height = '286px';
            	 canvasYearToe.height = '286';
    		 }
    		 
    		 if(elecMonthToe >= 100 || gasMonthToe >= 100){
    			 canvasMonthToe.style.height = '650px';
    			 canvasMonthToe.height = '650';
    		 }else{
    			 canvasMonthToe.style.height = '286px';
    			 canvasMonthToe.height = '286';
    		 }
    		 
    		 canvasYearToe.style.width = '516px';
    		 canvasYearToe.width = '516';
    		 canvasMonthToe.style.width = '516px';
    		 canvasMonthToe.width = '516';
    	 }
    	 setTimeout(() => {
    		    window.dispatchEvent(new Event('resize'));
    		}, 100);
     }
     
     window.addEventListener('resize', () => {
    	 if(window.innerWidth >= 992){
    		 yearToeParent.style.height = '500px';
    		 monthToeParent.style.height = '500px';
    		 
    		 canvasYearToe.style.height = '500px';
        	 canvasYearToe.height = '500';
        	 canvasYearToe.style.width = '900px';
        	 canvasYearToe.width = '900';
        	 
        	 canvasMonthToe.style.height = '500px';
        	 canvasMonthToe.height = '500';
        	 canvasMonthToe.style.width = '900px';
        	 canvasMonthToe.width = '900';
        	 
        	 if(elecToe >= 100 || gasToe >= 100){
	        	 yearElecToe.style.top = '50%';
				 yearElecToe.style.left = '27%';
				 yearGasToe.style.top = '50%';
				 yearGasToe.style.left = '73%';
				 monthElecToe.style.top = '50%';
    			 monthElecToe.style.left = '27%';
    			 monthGasToe.style.top = '50%';
    			 monthGasToe.style.left = '73%';
        	 }
    		 
    	 }else if (window.innerWidth >= 768 && window.innerWidth < 992){
    		 yearToeParent.style.height = '386px';
    		 monthToeParent.style.height = '386px';
    		 
    		 canvasYearToe.style.height = '386px';
        	 canvasYearToe.height = '386';
        	 canvasYearToe.style.width = '696px';
        	 canvasYearToe.width = '696';
        	 
        	 canvasMonthToe.style.height = '386px';
        	 canvasMonthToe.height = '386';
        	 canvasMonthToe.style.width = '696px';
        	 canvasMonthToe.width = '696';
        	 
        	 if(elecToe >= 100 || gasToe >= 100){
	        	 yearElecToe.style.top = '50%';
				 yearElecToe.style.left = '27%';
				 yearGasToe.style.top = '50%';
				 yearGasToe.style.left = '73%';
				 monthElecToe.style.top = '50%';
    			 monthElecToe.style.left = '27%';
    			 monthGasToe.style.top = '50%';
    			 monthGasToe.style.left = '73%';
        	 }
    		 
    	 }else if (window.innerWidth < 768){
    		 if(elecToe >= 100 || gasToe >= 100){
    			 yearToeParent.style.height = '700px';
    			 canvasYearToe.style.height = '700px';
    			 canvasYearToe.height = '700';
    			 yearElecToe.style.top = '27%';
    			 yearElecToe.style.left = '50%';
    			 yearGasToe.style.top = '73%';
    			 yearGasToe.style.left = '50%';
    			
    		 }else{
    			 yearToeParent.style.height = '286px';
    			 canvasYearToe.style.height = '286px';
            	 canvasYearToe.height = '286';
    		 }
    		 
    		 if(elecMonthToe >= 100 || gasMonthToe >= 100){
    			 monthToeParent.style.height = '700px';
    			 canvasMonthToe.style.height = '700px';
    			 canvasMonthToe.height = '700';
    			 monthElecToe.style.top = '27%';
    			 monthElecToe.style.left = '50%';
    			 monthGasToe.style.top = '73%';
    			 monthGasToe.style.left = '50%';
    		 }else{
    			 monthToeParent.style.height = '286px';
    			 canvasMonthToe.style.height = '286px';
    			 canvasMonthToe.height = '286';
    		 }
    		 
    		 canvasYearToe.style.width = '516px';
    		 canvasYearToe.width = '516';
        	 canvasMonthToe.style.width = '516px';
        	 canvasMonthToe.width = '516';
    	 }
    	 setTimeout(() => {
    	        toeChart.resize();
    	        toeMonthChart.resize();
    	        toeChart.update();
    	        toeMonthChart.update();
    	    }, 100);
     });
     

	var configElec = liquidFillGaugeDefaultSettings();
	configElec.textVertPosition = 0.5
	configElec.waveAnimateTime = 1000;
	configElec.valueCountUp = true;
	configElec.waveCount = 1;
	configElec.circleColor = "#D7DF01";
	configElec.waveColor = "#D7DF01";
	configElec.textColor = "#D7DF01";

	var configGas = liquidFillGaugeDefaultSettings();
	configGas.textVertPosition = 0.5
	configGas.waveAnimateTime = 1000;
	configGas.valueCountUp = true;
	configGas.waveCount = 1;
	configGas.circleColor = "#BDBDBD";
	configGas.waveColor = "#BDBDBD";
	configGas.textColor = "#BDBDBD";

	function liquidFillGaugeDefaultSettings() {
	    return {
	        minValue: 0, // The gauge minimum value.
	        maxValue: 60, // The gauge maximum value.
	        circleThickness: 0.05, // The outer circle thickness as a percentage of it's radius.
	        circleFillGap: 0.05, // The size of the gap between the outer circle and wave circle as a percentage of the outer circles radius.
	        circleColor: "#000", // The color of the outer circle.
	        waveHeight: 0.05, // The wave height as a percentage of the radius of the wave circle.
	        waveCount: 1, // The number of full waves per width of the wave circle.
	        waveRiseTime: 2000, // The amount of time in milliseconds for the wave to rise from 0 to it's final height.
	        waveAnimateTime: 18000, // The amount of time in milliseconds for a full wave to enter the wave circle.
	        waveRise: true, // Control if the wave should rise from 0 to it's full height, or start at it's full height.
	        waveHeightScaling: true, // Controls wave size scaling at low and high fill percentages. When true, wave height reaches it's maximum at 50% fill, and minimum at 0% and 100% fill. This helps to prevent the wave from making the wave circle from appear totally full or empty when near it's minimum or maximum fill.
	        waveAnimate: true, // Controls if the wave scrolls or is static.
	        waveColor: "#000", // The color of the fill wave.
	        waveOffset: 0, // The amount to initially offset the wave. 0 = no offset. 1 = offset of one full wave.
	        textVertPosition: .5, // The height at which to display the percentage text withing the wave circle. 0 = bottom, 1 = top.
	        textSize: 1, // The relative height of the text to display in the wave circle. 1 = 50%
	        valueCountUp: true, // If true, the displayed value counts up from 0 to it's final value upon loading. If false, the final value is displayed.
	        displayPercent: true, // If true, a % symbol is displayed after the value.
	        textColor: "#000", // The color of the value text when the wave does not overlap it.
	        waveTextColor: "#FFF" // The color of the value text when the wave overlaps it.
	    };
	}

	function loadLiquidFillGauge(elementId, value, config) {
	    if (config == null) config = liquidFillGaugeDefaultSettings();

	    const gauge = d3.select("#" + elementId);
	    gauge.selectAll("*").remove();
	    
	    if (parseFloat(value) <= 100 && elementId == "elecToe" || parseFloat(value) <= 100 && elementId == "elecMonthToe"){
	    	gauge.style("width", "170px")
	        .style("height", "170px")
	        .style("top", "50%")
	        .style("left", "30%");
        }else if (parseFloat(value) <= 100 && elementId == "gasToe" || parseFloat(value) <= 100 && elementId == "gasMonthToe"){
        	gauge.style("width", "170px")
	        .style("height", "170px")
	        .style("top", "50%")
	        .style("left", "70%");
        }else if (parseFloat(value) > 100 && elementId == "elecToe" || parseFloat(value) > 100 && elementId == "elecMonthToe"){
        	gauge.style("width", "300px")
	        .style("height", "300px")
	        .style("top", "50%")
	        .style("left", "27%");
        }else if (parseFloat(value) > 100 && elementId == "gasToe" || parseFloat(value) > 100 && elementId == "gasMonthToe"){
        	gauge.style("width", "300px")
	        .style("height", "300px")
	        .style("top", "50%")
	        .style("left", "73%");
        }
	    gauge.style('transform', 'translate(-50%, -50%)')
	    
	    const radius = Math.min(parseInt(gauge.style("width")), parseInt(gauge.style("height"))) / 2;

	    const locationX = parseInt(gauge.style("width")) / 2 - radius;
	    const locationY = parseInt(gauge.style("height")) / 2 - radius;
	    const fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value)) / config.maxValue;

	    let waveHeightScale = null;
	    if (config.waveHeightScaling) {
	        waveHeightScale = d3.scaleLinear()
	            .range([0, config.waveHeight, 0])
	            .domain([0, 50, 100]);
	    } else {
	        waveHeightScale = d3.scaleLinear()
	            .range([config.waveHeight, config.waveHeight])
	            .domain([0, 100]);
	    }

	    // Rounding functions so that the correct number of decimal places is always displayed as the value counts up.
	    let textRounder = function (value) {
	        if (value >= 1000){
	            config.displayPercent = true;
	            return Math.round(value) + '톤';
	        }else if (value >= 100){
	            config.displayPercent = true;
	            return parseFloat(value.toFixed(1)) + '톤';
	        }else if (value >= 10){
	            config.displayPercent = true;
	            return parseFloat(value.toFixed(2)) + '톤';
	        }else if (value >= 1){
	            config.displayPercent = true;
	            return parseFloat(value.toFixed(3)) + '톤';
	        }else{
	            config.displayPercent = false;
	            return parseFloat((value*1000).toFixed(1)) + "kg";
	        }
	    };

	    const textPixels = (config.textSize * radius / 2);
	    const textFinalValue = parseFloat(value)
	    const textStartValue = config.valueCountUp ? config.minValue : textFinalValue;
	    const circleThickness = config.circleThickness * radius;
	    const circleFillGap = config.circleFillGap * radius;
	    const fillCircleMargin = circleThickness + circleFillGap;
	    const fillCircleRadius = radius - fillCircleMargin;
	    const waveHeight = fillCircleRadius * waveHeightScale(fillPercent * 100);

	    const waveLength = fillCircleRadius * 2 / config.waveCount;
	    const waveClipCount = 1 + config.waveCount;
	    const waveClipWidth = waveLength * waveClipCount;

	    
	  

	    // Data for building the clip wave area.
	    const data = [];
	    for (let i = 0; i <= 40 * waveClipCount; i++) {
	        data.push({ x: i / (40 * waveClipCount), y: (i / (40)) });
	    }

	    // Scales for drawing the outer circle.
	    const gaugeCircleX = d3.scaleLinear().range([0, 2 * Math.PI]).domain([0, 1]);
	    const gaugeCircleY = d3.scaleLinear().range([0, radius]).domain([0, radius]);

	    // Scales for controlling the size of the clipping path.
	    const waveScaleX = d3.scaleLinear().range([0, waveClipWidth]).domain([0, 1]);
	    const waveScaleY = d3.scaleLinear().range([0, waveHeight]).domain([0, 1]);

	    // Scales for controlling the position of the clipping path.
	    const waveRiseScale = d3.scaleLinear()
	       // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
	       // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
	       // circle at 100%.
	       .range([(fillCircleMargin + fillCircleRadius * 2 + waveHeight), (fillCircleMargin - waveHeight)])
	       .domain([0, 1]);
	    const waveAnimateScale = d3.scaleLinear()
	        .range([0, waveClipWidth - fillCircleRadius * 2]) // Push the clip area one full wave then snap back.
	        .domain([0, 1]);

	    // Scale for controlling the position of the text within the gauge.
	    const textRiseScaleY = d3.scaleLinear()
	       .range([fillCircleMargin + fillCircleRadius * 2, (fillCircleMargin + textPixels * 0.7)])
	       .domain([0, 1]);

	    // Center the gauge within the parent SVG.
	    const gaugeGroup = gauge.append("g")
	        .attr('transform', 'translate(' + locationX + ',' + locationY + ')');

	    // Draw the outer circle.
	    const gaugeCircleArc = d3.arc()
	        .startAngle(gaugeCircleX(0))
	        .endAngle(gaugeCircleX(1))
	        .outerRadius(gaugeCircleY(radius))
	        .innerRadius(gaugeCircleY(radius - circleThickness));
	    gaugeGroup.append("path")
	        .attr("d", gaugeCircleArc)
	        .style("fill", config.circleColor)
	        .attr('transform', 'translate(' + radius + ',' + radius + ')');

	    // Text where the wave does not overlap.
	    const text1 = gaugeGroup.append("text")
	       .text(textRounder(textStartValue))
	       .attr("class", "liquidFillGaugeText")
	       .attr("text-anchor", "middle")
	       .attr("font-size", textPixels + "px")
	       .style("fill", config.textColor)
	       .attr('transform', 'translate(' + radius + ',' + textRiseScaleY(config.textVertPosition) + ')');
	    let text1InterpolatorValue = textStartValue;

	    // The clipping wave area.
	    const clipArea = d3.area()
	        .x(function (d) { return waveScaleX(d.x); })
	        .y0(function (d) { return waveScaleY(Math.sin(Math.PI * 2 * config.waveOffset * -1 + Math.PI * 2 * (1 - config.waveCount) + d.y * 2 * Math.PI)); })
	        .y1(function (d) { return (fillCircleRadius * 2 + waveHeight); });
	    const waveGroup = gaugeGroup.append("defs")
	        .append("clipPath")
	        .attr("id", "clipWave" + elementId);
	    const wave = waveGroup.append("path")
	        .datum(data)
	        .attr("d", clipArea)
	        .attr("T", 0);

	    // The inner circle with the clipping wave attached.
	    const fillCircleGroup = gaugeGroup.append("g")
	        .attr("clip-path", "url(#clipWave" + elementId + ")");
	    fillCircleGroup.append("circle")
	        .attr("cx", radius)
	        .attr("cy", radius)
	        .attr("r", fillCircleRadius)
	        .style("fill", config.waveColor);

	    // Text where the wave does overlap.
	    const text2 = fillCircleGroup.append("text")
	       .text(textRounder(textStartValue))
	       .attr("class", "liquidFillGaugeText")
	       .attr("text-anchor", "middle")
	       .attr("font-size", textPixels + "px")
	       .style("fill", config.waveTextColor)
	       .attr('transform', 'translate(' + radius + ',' + textRiseScaleY(config.textVertPosition) + ')');
	    let text2InterpolatorValue = textStartValue;

	    // Make the value count up.
	    if (config.valueCountUp) {
	        text1.transition()
	        .duration(config.waveRiseTime)
	        .tween("text", function () {
	            const i = d3.interpolateNumber(text1InterpolatorValue, textFinalValue);
	            return function (t) {
	                text1InterpolatorValue = textRounder(i(t));
	                // Set the gauge's text with the new value and append the % sign
	                // to the end
	                text1.text(text1InterpolatorValue);
	            }
	        });
	        text2.transition()
	            .duration(config.waveRiseTime)
	            .tween("text", function () {
	                const i = d3.interpolateNumber(text2InterpolatorValue, textFinalValue);
	                return function (t)  {
	                    text2InterpolatorValue = textRounder(i(t));
	                // Set the gauge's text with the new value and append the % sign
	                // to the end                
	                text2.text(text2InterpolatorValue);
	            }
	            });
	    }

	    // Make the wave rise. wave and waveGroup are separate so that horizontal and vertical movement can be controlled independently.
	    var waveGroupXPosition = fillCircleMargin + fillCircleRadius * 2 - waveClipWidth;
	    if (config.waveRise) {
	        waveGroup.attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(0) + ')')
	            .transition()
	            .duration(config.waveRiseTime)
	            .attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(fillPercent) + ')')
	        // .each("start", function () { wave.attr('transform', 'translate(1,0)'); }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
	        .on("start", function () { wave.attr('transform', 'translate(1,0)'); }); // This transform is necessary to get the clip wave positioned correctly when waveRise=true and waveAnimate=false. The wave will not position correctly without this, but it's not clear why this is actually necessary.
	    } else {
	        waveGroup.attr('transform', 'translate(' + waveGroupXPosition + ',' + waveRiseScale(fillPercent) + ')');
	    }

	    if (config.waveAnimate) animateWave();

	    function animateWave() {
	        wave.attr('transform', 'translate(' + waveAnimateScale(wave.attr('T')) + ',0)');
	        wave.transition()
	            .duration(config.waveAnimateTime * (1 - wave.attr('T')))
	            .ease(d3.easeLinear)
	            .attr('transform', 'translate(' + waveAnimateScale(1) + ',0)')
	            .attr('T', 1)
	            .on('end', function () {
	                wave.attr('T', 0);
	                animateWave(config.waveAnimateTime);
	            });
	    }

	    function GaugeUpdater() {
	        this.update = function (value) {
	            var newFinalValue = parseFloat(value).toFixed(2);
	            var textRounderUpdater = function (value) { return Math.round(value); };
	            if (parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))) {
	                textRounderUpdater = function (value) { return parseFloat(value).toFixed(1); };
	            }
	            if (parseFloat(newFinalValue) != parseFloat(textRounderUpdater(newFinalValue))) {
	                textRounderUpdater = function (value) { return parseFloat(value).toFixed(2); };
	            }
	            text1.transition()
	        .duration(config.waveRiseTime)
	        .tween("text", function () {
	            const i = d3.interpolateNumber(text1InterpolatorValue, newFinalValue);
	            return function (t) {
	                text1InterpolatorValue = textRounder(i(t));
	                // Set the gauge's text with the new value and append the % sign
	                // to the end
	                text1.text(text1InterpolatorValue);
	            }
	        });
	            text2.transition()
	                .duration(config.waveRiseTime)
	                .tween("text", function () {
	                    const i = d3.interpolateNumber(text2InterpolatorValue, newFinalValue);
	                    return function (t) {
	                        text2InterpolatorValue = textRounder(i(t));
	                        // Set the gauge's text with the new value and append the % sign
	                        // to the end                
	                        text2.text(text2InterpolatorValue);
	                    }
	                });

	            var fillPercent = Math.max(config.minValue, Math.min(config.maxValue, value)) / config.maxValue;
	            var waveHeight = fillCircleRadius * waveHeightScale(fillPercent * 100);
	            var waveRiseScale = d3.scaleLinear()
	                // The clipping area size is the height of the fill circle + the wave height, so we position the clip wave
	                // such that the it will overlap the fill circle at all when at 0%, and will totally cover the fill
	                // circle at 100%.
	                .range([(fillCircleMargin + fillCircleRadius * 2 + waveHeight), (fillCircleMargin - waveHeight)])
	                .domain([0, 1]);
	            var newHeight = waveRiseScale(fillPercent);
	            var waveScaleX = d3.scaleLinear().range([0, waveClipWidth]).domain([0, 1]);
	            var waveScaleY = d3.scaleLinear().range([0, waveHeight]).domain([0, 1]);
	            var newClipArea;
	            if (config.waveHeightScaling) {
	                newClipArea = d3.area()
	                    .x(function (d) { return waveScaleX(d.x); })
	                    .y0(function (d) { return waveScaleY(Math.sin(Math.PI * 2 * config.waveOffset * -1 + Math.PI * 2 * (1 - config.waveCount) + d.y * 2 * Math.PI)); })
	                    .y1(function (d) { return (fillCircleRadius * 2 + waveHeight); });
	            } else {
	                newClipArea = clipArea;
	            }

	            var newWavePosition = config.waveAnimate ? waveAnimateScale(1) : 0;
	            wave.transition()
	                .duration(0)
	                .transition()
	                .duration(config.waveAnimate ? (config.waveAnimateTime * (1 - wave.attr('T'))) : (config.waveRiseTime))
	                .ease(d3.easeLinear)
	                .attr('d', newClipArea)
	                .attr('transform', 'translate(' + newWavePosition + ',0)')
	                .attr('T', '1')
	                .on("end", function () {
	                    if (config.waveAnimate) {
	                        wave.attr('transform', 'translate(' + waveAnimateScale(0) + ',0)');
	                        animateWave(config.waveAnimateTime);
	                    }
	                });
	            waveGroup.transition()
	                .duration(config.waveRiseTime)
	                .attr('transform', 'translate(' + waveGroupXPosition + ',' + newHeight + ')')
	        }
	    }

	    return new GaugeUpdater();
	}

});