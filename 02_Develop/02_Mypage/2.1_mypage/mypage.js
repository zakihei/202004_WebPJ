function onButtonClick() {		//ボタン押下
	var tsubuyaki = document.getElementById("output");	//つぶやく入力の取得
	if (tsubuyaki.value != null) {		//つぶやきに1文字以上ある場合の処理
	    tsubuyaki.innerText = document.forms.id_form.id_textBox.value;		//テスト動作
	}else{		//条件に合わない場合の処理
		window.alert("1文字以上入力してください。");		//ウィンドウ警告
	}
}