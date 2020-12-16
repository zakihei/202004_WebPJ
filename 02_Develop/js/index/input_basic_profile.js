'use strict';

/**************** ファイル説明 ****************/
/*	概要　初期プロフィール編集画面の機能を定義     */
/*  作成者　宮崎                              */
/**************** ファイル説明 ****************/

{
 
	/**************** 共通で使えそうな関数 ****************/

	/*
    	@fn setAttributes
    	@brief 現行では、setAttributeでは一属性しか追加できないため複数追加できるようにする関数
    	@param(el) 属性を追加したい要素
    	@param(attrs) 追加する属性(Dictionary型)
    	@return 無し
	*/
  
	function setAttributes(el, attrs) {
    	for(var key in attrs) {
    		el.setAttribute(key, attrs[key]);
    	}
	}

	/**************** 各項目の機能 ****************/

	/* 利用目的の「その他」にチェックを入れた時の処理 */
	document.getElementById('checkbox-other').addEventListener('click',()=>{
    
    	const otherTextbox = document.createElement('input');                     //「その他」の入力欄
    	const checkbox = document.getElementById('checkbox');                     //チェックボックス(その他)の親ノード
    	const checkboxPrm = document.getElementById('checkbox-other').checked;    //チェックボックスにチェックが付いているかを取得(boolean)
    	const checkboxParent = checkbox.parentNode;                               //チェックボックスの親ノードを取得
    
    	/* テキストボックスの挿入・削除 */
    	if(checkboxPrm){
    		/* 属性の追加 */
    		setAttributes(otherTextbox, {"type":"text", "name":"other", "value":"", "placeholder":"入力してください", "id":"other-txt" });
    		/* その他の入力欄を追加 */
      		checkboxParent.insertBefore(otherTextbox, checkbox.nextSibling);
    	}else{
    		$("#other-txt").remove()
    	}

	});

	/**************** 送信フォーム押下時の処理 ****************/

	document.getElementById('submit_basicProfile').addEventListener('click',()=>{

    	let passwordChkFlg = false;		//パスワードの値のチェックフラグ
		let nicknameChkFlg = false;		//ニックネームの値のチェックフラグ
		let checkboxChkFlg = false;		//チェックボックスの値のチェックフラグ
    	let passwordWornComment = document.createElement('p');             //警告時のコメントを作成(パスワード)
    	let nicknameWornComment = document.createElement('p');             //警告時のコメントを作成(ニックネーム)
    	let checkboxWornComment = document.createElement('p');             //警告時のコメントを作成(チェックボックス)
		
    	let reg_password = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,15}$/;		//パスワードチェック用の正規表現を格納(半角英小文字大文字数字をそれぞれ1種類以上含む8文字以上15文字以下) */
    	let password = document.getElementById('password').value;		//パスワード入力欄の値取得

		let reg_nickName = /^.{2,8}$/;		//ニックネームチェック用の正規表現を格納(2文字以上８文字以内) 
		let nickName = document.getElementById('nickname').value;		//ニックネーム入力欄の値取得 

    	const checkNum = 1;                                             //チェックする個数の最小値
    	let arr = [];                                                   //チェックした要素を格納する配列
    	let purposeCheckbox = document.checkbox.purpose;                //チェックボックスの要素を取得
		
    	passwordWornComment.textContent = "・パスワードは異常な値です";
    	passwordWornComment.style.color = "red";
    	nicknameWornComment.textContent = "・ニックネームが入力規則の範囲外です";
    	nicknameWornComment.style.color = "red";
    	checkboxWornComment.textContent = "・チェックの個数が" + checkNum + "つ以下です";
    	checkboxWornComment.style.color = 'red';

    	let wornComment = document.createElement('p');           		//警告の表示
    	let containerRow = document.getElementById('row-1');        //各初期プロフィール要素のRowコンテナ
    	let wornCommentParent = containerRow.parentNode;            //上記の親要素

    	wornComment.setAttribute("id","worncomment");

		/* パスワードチェック */
    	if(reg_password.test(password)){
    		/* none */
    	}else{
    		passwordChkFlg = true;
		}  
		
		/* ニックネームチェック */
		if(reg_nickName.test(nickName)){
    		/* none */
    	}else{
      		nicknameChkFlg = true;
    	}  

		/* 利用目的のチェック */
    	/* 配列にチェックされているチェックボックスの値を格納 */
    	for (let i = 0; i < purposeCheckbox.length; i++){
    		if(purposeCheckbox[i].checked){ 
        		arr.push(purposeCheckbox[i].value);
    		}
    	}

    	/* 何もチェックが入っていなかった場合の処理 */
    	if(arr.length <= checkNum){
    		checkboxChkFlg = true;
    	}

    	/* 注意欄の挿入 */
    	if(passwordChkFlg || nicknameChkFlg || checkboxChkFlg){

    		wornCommentParent.insertBefore(wornComment, containerRow);
      
    		if(passwordWornComment){
    			wornComment.appendChild(passwordWornComment);
    		}
      
    		if(nicknameChkFlg){
    			wornComment.appendChild(nicknameWornComment);
			}
      
    		if(checkboxChkFlg){
    			wornComment.appendChild(checkboxWornComment);
    		}

    	}

	});
  
	/* メモ */
	/*
    insertBefore使用

    insertedNode・・・挿入されたノード (newNode と同じ) です。
    parentNode・・・新しく挿入されるノードの親です。
    newNode・・・挿入されるノードです。
    referenceNode・・・newNode がこのノードの直前に挿入されます。このノードが null である場合は、 newNode は parentNode の子ノードの末尾に挿入されます。

    let insertedNode = parentNode.insertBefore(newNode, referenceNode)
    */
}
