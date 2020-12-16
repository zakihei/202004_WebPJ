function onButtonClick() {	//ボタン押下
	var tsubuyaki = document.getElementById("id_textBox");	//つぶやく入力の取得
		if ( tsubuyaki.value == "" || tsubuyaki.value == null ) {	//つぶやきに1文字以上ある場合の処理
			window.alert("つぶやきを入力してください。");	//NG処理
		}else{		//条件に合わない場合の処理
			window.alert("OK");	//OK処理
	}
}
