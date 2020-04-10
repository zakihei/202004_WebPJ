//練習用スクリプト
{
    /*　個人的にこの書き方の方が好き
    let startbtn = document.getElementById("btn-login");
    startbtn.addEventListener("click", login_fuc);

    function login_fuc(){
        window.alert("ログインボタン押下");
        document.getElementById("toppage-comment").textContent = "DOM操作";
    };
    */

    /* 練習用 */
    document.getElementById("btn-login").addEventListener("click", ()=>{
        window.alert("ログインボタン押下");
        document.getElementById("toppage-comment").textContent = "DOM操作";
    });

    /* ボタンを押したらイベント情報の文が増える */ 
    document.getElementById("event-reload").addEventListener("click", ()=>{
        const item = document.createElement("p");
        item.textContent = "新しい記事です";

        const event_info = document.getElementById("event-info");
        event_info.appendChild(item);
    });
}