const assert = require("assert");

function add(a, b) {
    return a + b;
}

// TEST 1
assert.strictEqual(add(2, 3), 5);

// TEST 2
assert.strictEqual(add(10, 5), 15);

console.log("All tests passed ✅");
