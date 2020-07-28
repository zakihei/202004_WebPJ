'use strict';
{
  /* 送信フォーム押下時の処理 */

  /* パスワードチェック関数 */
  document.getElementById('submit_basicProfile').addEventListener('click',()=>{

    /* パスワードチェック用の正規表現を格納(半角英小文字大文字数字をそれぞれ1種類以上含む8文字以上15文字以下) */ 
    let reg_password = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,15}$/;
    
    /* パスワード入力欄の値取得 */
    let password = document.getElementById('password').value;

    if(reg_password.test(password)){
      /* none */
    }else{
      window.alert("パスワードは異常な値です");
    }  
  });

  /* ニックネームチェック関数 */
  document.getElementById('submit_basicProfile').addEventListener('click',()=>{
    /* ニックネームチェック用の正規表現を格納(2文字以上８文字以内) */ 
    let reg_nickName = /^(.+){2,8}$/;
    
    /* パスワード入力欄の値取得 */
    let nickName = document.getElementById('nickname').value;

    if(reg_nickName.test(nickName)){
      /* none */
    }else{
      window.alert("ニックネームが入力規則の範囲外です");
    }  
  });

  /* 利用目的のチェック判定 */
  document.getElementById('submit_basicProfile').addEventListener('click',()=>{
    
    const checkNum = 1;                                               //チェックする個数の最小値
    const arr = [];                                                   //チェックした要素を格納する配列
    const purposeCheckbox = document.checkbox.purpose;                //チェックボックスの要素を取得
    
    const attentionComment = document.createElement('p');             //注意のコメントを作成
    const titlePurpose = document.getElementById('title-purpose');    //利用目的のタイトル名が書かれている箇所の要素を取得
    const purpose = titlePurpose.parentNode;                          //上記変数の親ノード

    attentionComment.textContent = "チェックの個数が" + checkNum + "つ以下です";
    attentionComment.style.color = 'red';

    /* 配列にチェックされているチェックボックスの値を格納 */
    for (let i = 0; i < purposeCheckbox.length; i++){
      if(purposeCheckbox[i].checked){ 
        arr.push(purposeCheckbox[i].value);
      }
    }

    /* 何もチェックが入っていなかった場合の処理 */
    if(arr.length <= checkNum){
      //window.alert("一つ以上チェックを入れてください");
      purpose.insertBefore(attentionComment, titlePurpose);
    }
  });
  
}
