
  'use strict';
{
  /* メールアドレスチェック */
  document.getElementById('loginbtn').addEventListener('click',()=>{

    /* メールアドレスチェック用の正規表現を格納 */
    let reg_mailAdress = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
    /* パスワードチェック用の正規表現を格納(半角英小文字大文字数字をそれぞれ1種類以上含む8文字以上15文字以下) */ 
    let reg_password = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,15}$/;

    /* メールアドレス入力欄の値取得 */
    let mailAdress = document.getElementById('mailAdress').value;
    /* パスワード入力欄の値取得 */
    let password = document.getElementById('password').value;

    if(reg_mailAdress.test(mailAdress) || reg_password.test(password)){
      /* none */
      if(reg_mailAdress.test(mailAdress)){
        /* none */
        if(reg_password.test(password)){
          /* none */
        }else{
          window.alert("パスワードは異常な値です");
          $("#password").css('background', 'yellow');
        }  
      }else{
        window.alert("メールアドレスは異常な値です");
        $("#mailAdress").css('background', 'yellow');
      }
    }else{
      window.alert("パスワードとメールアドレスは異常な値です");
      $("#mailAdress").css('background', 'yellow');
      $("#password").css('background', 'yellow');
    }
  });
}
