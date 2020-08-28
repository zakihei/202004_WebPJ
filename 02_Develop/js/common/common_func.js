'use strict';

{

  /**************** グローバル変数を定義 ****************/

  //export const checkNumCheckbox = 1;                                     //チェックボックスのチェックする個数の最小値

  /**************** 共通で使えそうな関数を定義 ****************/

  /*
  @fn setAttributes
  @brief 現行では、setAttributeでは一属性しか追加できないため複数追加できるようにする関数
  @param {element} [el]-属性を追加したい要素
  @param {Dictionary} [attrs] - 追加する属性
  @return 無し
  @relation ALL
  */
  
  export function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

  /**************** 各ページで共通の関数 ****************/
  
  /*
  @fn checkPassword
  @brief パスワードの入力値をチェックする関数
         チェックする条件：半角英小文字大文字数字をそれぞれ1種類以上含む8文字以上15文字以下
  @return {boolean} [chkPassword]-真偽値を返す
  @relation index.html input_basic_profile.html
  */

  export function checkPassword() {

    let reg_password = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,15}$/;     //正規表現を格納
    let password = document.getElementById('password').value;                     //パスワード入力欄の値取得

    /* パスワードチェック */
    if(reg_password.test(password)){
      return true;
    }else{
      return false;
    }
  
  };

  /*
  @fn checkMailadress
  @brief メールアドレスの入力値をチェックする関数
         チェックする条件：
  @return {boolean} [chkMailadress]-真偽値を返す
  @relation index.html input_basic_profile.html
  */

  export function checkMailadress() {

    let reg_mailAdress = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;      //正規表現を格納
    let mailAdress = document.getElementById('mailAdress').value;                                       //パスワード入力欄の値取得

    /* メールアドレスチェック */
    if(reg_mailAdress.test(mailAdress)){
      return true;
    }else{
      return false;
    }
  
  };

  /*
  @fn countCheckNum
  @brief チェックボックスの入力個数をカウントする関数
  @return {Array} [checkboxArray]-チェックボックスにチェックが入っている値を格納する配列
  @relation input_basic_profile.html
  */

  export function countCheckNum() {

    let purposeCheckbox = document.checkbox.purpose;                //チェックボックスの要素を取得
    let checkboxArray = [];                                         //チェックした要素を格納する配列

    /* 配列にチェックされているチェックボックスの値を格納 */
    for (let i = 0; i < purposeCheckbox.length; i++){
      if(purposeCheckbox[i].checked){ 
        checkboxArray.push(purposeCheckbox[i].value);
      }
    }

    return checkboxArray;

  };

  /*
  @fn checkCheckbox
  @brief チェックボックスの入力個数をチェックする関数
  @param {Array} [checkboxArray]-パスワードチェックフラグ
  @return {boolean} [chkMailadress]-真偽値を返す
  @relation index.html input_basic_profile.html
  */

  export function checkCheckbox(checkboxArray) {

    const checkNumCheckbox = 1;

    /* 何もチェックが入っていなかった場合の処理 */
    if(checkboxArray.length <= checkNum){
      return true;
    }

  };

}
