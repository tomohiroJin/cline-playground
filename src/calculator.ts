export class Calculator {
  /**
   * 2つの数値を加算します
   */
  add(a: number, b: number): number {
    return a + b;
  }

  /**
   * 2つの数値の差を計算します
   */
  subtract(a: number, b: number): number {
    return a - b;
  }

  /**
   * 2つの数値を乗算します
   */
  multiply(a: number, b: number): number {
    return a * b;
  }

  /**
   * 2つの数値を除算します
   * @throws {Error} 0で割ろうとした場合
   */
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
}
