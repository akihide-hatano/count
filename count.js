const readline = require('readline');

function checkNumber(input){
    let parsedInput;
    try {
        parsedInput = JSON.parse(input);
    } catch (error) {
        console.log('入力値が取れていません');
    }

    if(Array.isArray(parsedInput)){
        return `配列を入力しないでください`;
    }

    //数値判定のロジック
    const number = parseInt(input,10);
    if( !isNaN(number)){
        if( number >= 15){
            return `入力された数字は${number}で、15以上です`;
        }else {
            return `入力された数字は${number}で、15未満です`;
        }
    }
    //文字列の判定
    else if (typeof input === 'string'){
        return `無効な文字列です`;
    }
    //その他の無効な入力
    else{
        return `無効な入力をしないでください`;
    }
}

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('何か入力してください:',(input)=>{
        const message = checkNumber(input);
        console.log(message);
        rl.close();
    });

//関数をエクスポート
module.exports = checkNumber;
