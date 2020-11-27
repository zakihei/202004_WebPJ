/* 備考：現行、ファイル分割をするにはサーバー（仮想環境）経由でないと実装できない。とりあえずコミットしておくがサーバー構築待ち。 */

/**************** ファイル説明 ****************/
/*	概要　トップページで使用する関数を定義  	　 */
/*  作成者　宮崎                              */
/**************** ファイル説明 ****************/

/* モジュールをインポート        */
/* インポート元：common_func.js */
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
