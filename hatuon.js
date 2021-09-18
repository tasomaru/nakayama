//　ボタンを押したら、始まる関数によって、インプット内にワードを表示させる
//　
$("#strResult").click(function(){
    // 配列内にインプットへ表示したい文章を配置する
    let ary = [
        "ツェネッガー",
        "ツェネッガー　（ハァ、ハァ、ハァ・・・）",
        "...!!",
        "ツェネッ・・・"
    ];
    // ランダムメソッドを使用し、３％、６１％、３０％、６％と分けて対応するスクリプトを書く
    let number = Math.floor(Math.random()*100) + 1

    if (0 < number && number <=3) {
        $("#Result").val(ary[0])
    } else if (3 < number && number <= 64) {
        $("#Result").val(ary[1])
    } else if (64 < number && number <= 94) {
        $("#Result").val(ary[2])
    } else if (95 < number && number <= 100) {
        $("#Result").val(ary[3])
    }
    
 


})