let arr = [
    {title : '[공지] 커넥트 이용안내' },
    {title : '[자작곡] 랩실력 평가 부탁드립니다' },
    {title : '[친목] 저와 함께하실 멤버를 구합니다!' },
    {title : '[말머리] 글 제목' },
    {title : '[말머리] 글 제목' },
    {title : '[말머리] 글 제목' },
    {title : '[말머리] 글 제목' },
    {title : '[말머리] 글 제목' },
    {title : '[말머리] 글 제목' },
    {title : '[말머리] 글 제목' },
    {title : '[말머리] 글 제목' }
];

arr.forEach(box => {
    let temp = `<div class="box"><a href="#"><h3>${box.title}</h3>
    </a></div>`
    $('#articles').append(temp);
});

let chat = [
    {user : '기타의 신' },
    {user : '노원구 피아노' },
    {user : 'JAY :)' },
    {user : 'Prod. AMY' },
    {user : '김철수' },
    {user : 'MUZIC GOD' },
    {user : '채팅방 이름' },
    {user : '채팅방 이름' },
    {user : '채팅방 이름' },
    {user : '채팅방 이름' },
    {user : '채팅방 이름' },
    {user : '채팅방 이름' },
    {user : '채팅방 이름' },
];


chat.forEach(function(box2,i){
    // let i = $('.pic').index()
    let temp = `
    <div class="box"><a href="#">
    <div class="pic pic${i+1}"></div>

    <div class="txt">
    <h3>${box2.user}</h3>
    <p>최근 메시지 상태</p>
    <span>시간</span>
    </div>
    </a></div>
    <!-- box -->`
    $('#chat').append(temp);
});


let alarm = [1,2,3,4,5];

alarm.forEach(function(a){
    let temp = `
    <li><a href="#">alarm${a}</a>
    <button class="alarmX">
        <span></span>
        <span></span>
    </button>
    </li>`
    $('#alarm').append(temp);
});


let prof = [
    {
        user : '김철수', 
        intro : '안녕하세요. 기타의 마법사 김철수입니다!',
        tag : ['극락예대', '활기찬', '기타 전공'],
    },
    {
        user : '박예슬', 
        intro : '피아노를 사랑하는 박예슬입니다.',
        tag : ['연결예대 수석졸업', '피아노 전공', '5년 이상', '부산'],
    },
];


prof.forEach(function(box3,i){

let hash = "";
for(let n=0; n<prof[i].tag.length; n++){
   hash = hash + `<span>${prof[i].tag[n]}</span>`
}
    let temp = `
    <div class="item">
    <div class="box">
        <div class="bwrap">
            <div class="pic"></div>
            <div class="txt">
                <h4>${box3.user}님의 포트폴리오</h4>
                <p>${box3.intro}</p>
            </div>
        </div>
        <!-- bwrap -->
        <div class="detail">${hash}</div>
    </div>
    <!-- box -->
    <div class="play">
        <div class="song song1">
            <audio controls>
                <source src="sound/piano1.mp3">
            </audio>
        </div>
        <!-- song -->
    </div>
    <!-- play -->
</div>
<!-- item -->`

$('.prof1').append(temp);
});


let prof2 = [
    {
        user : '김혜지', 
        intro : '일주일만에 피아노 한곡 완성하기!',
        tag : ['울산예대', '유머러스한', '피아노 전공'],
    },
    {
        user : '안지영', 
        intro : '보컬 수업하는 안지영입니다.',
        tag : ['비전공', '공모전 입상경력', '5년 이상', '강원도'],
    },
];


prof2.forEach(function(box3,i){

let hash = "";
for(let n=0; n<prof2[i].tag.length; n++){
   hash = hash + `<span>${prof2[i].tag[n]}</span>`
}
    let temp = `
    <div class="item">
    <div class="box">
        <div class="bwrap">
            <div class="pic"></div>
            <div class="txt">
                <h4>${box3.user}님의 포트폴리오</h4>
                <p>${box3.intro}</p>
            </div>
        </div>
        <!-- bwrap -->
        <div class="detail">${hash}</div>
    </div>
    <!-- box -->
    <div class="play">
        <div class="song song1">
            <audio controls>
                <source src="sound/guitar1.mp3">
            </audio>
        </div>
        <!-- song -->
    </div>
    <!-- play -->
</div>
<!-- item -->`

$('.prof2').append(temp);
});




// select btn

let tab1 = [
    { gen : '알앤비' },
    { gen : '재즈' },
    { gen : '힙합' },
    { gen : 'Electic Pop' },
    { gen : 'POP' },
    { gen : '락' },
    { gen : '펑크' },
    { gen : '클래식' },
    { gen : 'EDM' },
];

tab1.forEach(btn1 => {
    let btn = `<button>${btn1.gen}</button>`
    $('.select1').append(btn);
});

let tab2 = [
    { area : '서울' },
    { area : '부산' },
    { area : '광주' },
    { area : '인천' },
    { area : '울산' },
    { area : '대구' },
    { area : '세종' },
    { area : '경기도' },
    { area : '충청북도' },
    { area : '충청남도' },
    { area : '강원도' },
    { area : '경상북도' },
    { area : '경상남도' },
    { area : '전라북도' },
    { area : '전라남도' },
];

tab2.forEach(btn2 => {
    let btn = `<button>${btn2.area}</button>`
    $('.select2').append(btn);
});

let tab3 = [
    { career : '1년 이상' },
    { career : '3년 이상' },
    { career : '5년 이상' },
    { career : '10년 이상' },
    { career : '관련 전공 졸업자' },
    { career : '관련 전공 재학자' },
    { career : '관련 대회 우승자' },
    { career : '관련 공모전 입상자' },
    { career : '관련 자격증 보유자' },
];

tab3.forEach(btn3 => {
    let btn = `<button>${btn3.career}</button>`
    $('.select3').append(btn);
});

let tab4 = [
    { etc : '활기찬' },
    { etc : '다정한' },
    { etc : '친절한' },
    { etc : '시간약속 잘 지키는' },
    { etc : '유머러스한' },
];

tab4.forEach(btn4 => {
    let btn = `<button>${btn4.etc}</button>`
    $('.select4').append(btn);
});




