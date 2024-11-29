// login.js
document.addEventListener('DOMContentLoaded', () => {
    // 쿠키 관련 함수 정의
    const cookieController = {
        // 쿠키 읽기
        getCookie: (cookieName) => {
            const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
                const [name, value] = cookie.split('=');
                acc[name] = decodeURIComponent(value);
                return acc;
            }, {});
            return cookies[cookieName] || null;
        },

        // 쿠키 쓰기
        setCookie: (cookieName, cookieValue, days) => {
            const date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // days를 밀리초로 변환
            document.cookie = `${cookieName}=${encodeURIComponent(cookieValue)};expires=${date.toUTCString()};path=/`;
        },

        // 쿠키 삭제
        deleteCookie: (cookieName) => {
            document.cookie = `${cookieName}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/`;
        }
    };

    // DOM 요소 가져오기
    const form = document.querySelector('form[action="loginDo"]');
    const idInput = document.getElementById('memId');
    const passwordInput = document.getElementById('memPw');
    const rememberMeCheckbox = document.getElementById('rememberMe');

    // 쿠키 이름
    const ID_COOKIE_NAME = 'savedId';
    const PASSWORD_COOKIE_NAME = 'savedPassword';
    const REMEMBER_ME_COOKIE_NAME = 'rememberMe';

    // 페이지 로드 시 쿠키 확인 및 값 채우기
    const savedId = cookieController.getCookie(ID_COOKIE_NAME);
    const savedPassword = cookieController.getCookie(PASSWORD_COOKIE_NAME);
    const rememberMe = cookieController.getCookie(REMEMBER_ME_COOKIE_NAME);

    if (savedId) idInput.value = savedId;
    if (savedPassword) passwordInput.value = savedPassword;
    rememberMeCheckbox.checked = rememberMe === 'true';

    // 체크박스 클릭 이벤트
    rememberMeCheckbox.addEventListener('change', (event) => {
        if (event.target.checked) {
            // 체크박스 활성화 시 쿠키 저장
            cookieController.setCookie(REMEMBER_ME_COOKIE_NAME, 'true', 7);
            cookieController.setCookie(ID_COOKIE_NAME, idInput.value, 7);
            cookieController.setCookie(PASSWORD_COOKIE_NAME, passwordInput.value, 7);
        } else {
            // 체크박스 비활성화 시 쿠키 삭제
            cookieController.deleteCookie(REMEMBER_ME_COOKIE_NAME);
            cookieController.deleteCookie(ID_COOKIE_NAME);
            cookieController.deleteCookie(PASSWORD_COOKIE_NAME);
        }
    });

    // 폼 제출 시 쿠키 업데이트
    form.addEventListener('submit', () => {
        if (rememberMeCheckbox.checked) {
            // 체크박스가 체크된 상태에서 제출 시 쿠키 저장
            cookieController.setCookie(ID_COOKIE_NAME, idInput.value, 7);
            cookieController.setCookie(PASSWORD_COOKIE_NAME, passwordInput.value, 7);
        } else {
            // 체크박스가 해제된 상태에서 제출 시 쿠키 삭제
            cookieController.deleteCookie(ID_COOKIE_NAME);
            cookieController.deleteCookie(PASSWORD_COOKIE_NAME);
        }
    });
});
