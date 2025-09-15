const checkNumber = require('./count');

describe('checkNumber',()=>{
    test('15以上の数値が入力された場合、正しいメッセージを返す',()=>{
        expect(checkNumber('20')).toBe('入力された数字は20で、15以上です');
    });
    test('15未満の数値が入力された場合、正しいメッセージを返す',()=>{
        expect(checkNumber('10')).toBe('入力された数字は10で、15未満です');
    });
    test('数値に変換できない文字列が入力された場合、エラーメッセージを返す', () => {
        expect(checkNumber('hello')).toBe('無効な文字列です');
    });
    test('空の文字列が入力された場合、エラーメッセージを返す', () => {
        expect(checkNumber('')).toBe('無効な文字列です');
    });
    test('配列が入力された場合、エラーメッセージを返す', () => {
        expect(checkNumber('["a","1"]')).toBe('配列を入力しないでください');
    });

})