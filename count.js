const readline = require('readline');

function checkNumber(input) {
  let parsedInput;
  try {
    // 1. エラーが発生する可能性のあるJSON.parse()をtryブロック内に置く
    parsedInput = JSON.parse(input);
    
    // 2. パースした結果が配列かどうかをチェック
    if (Array.isArray(parsedInput)) {
      return `配列を入力しないでください。`;
    }
    
  } catch (e) {
    console.error('parseに問題があります');
  }

  // 4. ここから数値の判定ロジック
  const number = parseInt(input, 10);
  if (!isNaN(number)) {
    if (number >= 15) {
      return `入力された数字は${number}で、15以上です。`;
    } else {
      return `入力された数字は ${number} で、15未満です。`;
    }
  } else {
    return `無効な入力をしないでください。`;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('1文字の数字を入力してください: ', (input) => {
  const message = checkNumber(input);
  console.log(message);
  rl.close();
});