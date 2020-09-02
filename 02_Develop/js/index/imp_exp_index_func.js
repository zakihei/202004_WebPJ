  /* モジュールをインポート */
  import { setAttributes, checkPassword, checkMailadress } from '../common/common_func.js';

  //function checkPasswordAndMailadress(){
  document.getElementById('loginbtn').addEventListener('click',()=>{
    let checkMailadressFlg = checkMailadress();
    let chkPasswordFlg = checkPassword();

    if( checkMailadressFlg || chkPasswordFlg ){
      /* none */
      if( checkMailadressFlg ){
        /* none */
        if( chkPasswordFlg ){
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
