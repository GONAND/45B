function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  let subTree = new BinarySearchTree(value);
  if (value > this.value) {
    if (!this.right) {
      // ({}) -> true    (null) -> false  <- !null <- true  ==>  this.right === null
      this.right = subTree;
    } else {
      this.right.insert(value);
    }
  } else {
    // por defecto queda aquí <=
    if (!this.left) {
      // ({}) -> true    (null) -> false  <- !null <- true  ==>  this.left === null
      this.left = subTree;
    } else {
      this.left.insert(value);
    }
  }
};

const BTS = new BinarySearchTree(13);
console.log(BTS);
BTS.insert(7);
BTS.insert(6);
BTS.insert(3);
BTS.insert(4);
BTS.insert(24);
BTS.insert(16);
BTS.insert(27);
BTS.insert(45);
console.log(BTS);

BinarySearchTree.prototype.sumatodo = function (total = 0) {
  if (!this.left && !this.right) return this.value;
  if (!this.left) {
    total += this.value + this.right.sumatodo((total = 0));
    return total;
  }
  if (!this.right) {
    total += this.value + this.left.sumatodo((total = 0));
    return total;
  }
  total +=
    this.value +
    this.left.sumatodo((total = 0)) +
    this.right.sumatodo((total = 0));
  return total;
};

console.log(BTS.sumatodo());
