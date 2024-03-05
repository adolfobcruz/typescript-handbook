// Try it
const test = {
  prop: 34,
  func: function () {
    return this.prop;
  },
};

console.log(test.func());
