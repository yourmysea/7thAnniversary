// 이미지 랜덤 배치
// window.onload=function randomLoc() {
//     var randomNum = 0;
//     var duo = document.getElementsByClassName("duo");
    
//     for(var i = 0; i < duo.length; i++) {
//         randomNum = Math.floor(Math.random() * 500) + 1;
//         duo[i].style.top = randomNum + "px";
//         randomNum = Math.floor(Math.random() * 1000) + 1;
//         duo[i].style.left = randomNum + "px";
//         duo[i].style.clear = "both";
//     }
    
// }

// 버튼 여러 개 추가
const print_buttons = function(id, num) {
    var str_html = "";
    for(var i = 0; i < num; i++) {
        var html_btn = '<input type="button" class="btn" id="' + '">'
        html_btn = html_btn.replace('{}', i);
        str_html = str_html + html_btn + '\n';
    }
    document.getElementById("").html(str_html);
}


// vscode 코드
function search() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// 아이콘 클릭하면 해당 메세지 보임 
function click_letter() {
    window.location.href = '../after_letter'
}