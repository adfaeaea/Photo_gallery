//console.log("연결확인");

//태그 = 선택자 = 엘리먼트 = 요소 (같은의미 다른표현)

/*
1. 썸네일 클릭
2. a 태그의 기본기능 차단
3. 매칭되는 큰 이미지의 정보를 가져온다
4. 가져온 큰 이미지의 정보를 section>img의 src 속성값으로 넣어준다.
*/

//준비핸들러
$(document).ready(function () {
	$('ul>li>a').on('click', function (evt) {
		evt.preventDefault()

		const imgSrc = $(this).attr('href')
		$('section > img').attr({ src: imgSrc })
	})
})
