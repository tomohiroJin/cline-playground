import { Calculator } from "./calculator";

/**
 * このファイルはアプリケーションのエントリーポイントです。
 * 実際のアプリケーションでは、ここからさまざまな機能を呼び出します。
 */

// Calculatorクラスのインスタンスを作成
const calculator = new Calculator();

// 計算例
console.log("加算: 5 + 3 =", calculator.add(5, 3));
console.log("減算: 10 - 4 =", calculator.subtract(10, 4));
console.log("乗算: 7 * 2 =", calculator.multiply(7, 2));
console.log("除算: 20 / 5 =", calculator.divide(20, 5));

// エラーハンドリングの例
try {
  console.log("0で割る:", calculator.divide(10, 0));
} catch (error) {
  if (error instanceof Error) {
    console.error("エラーが発生しました:", error.message);
  } else {
    console.error("予期しないエラーが発生しました");
  }
}

console.log("TypeScriptとJestを使ったTDD開発環境が正常に動作しています！");
