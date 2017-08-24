// @flow

class MyClass {
  async simple({a, b}) {
    return [a, b];
  }
}

export function getdb(): MyClass {
  return new MyClass();
}


