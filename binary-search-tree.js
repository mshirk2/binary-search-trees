class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null){
      this.root = new Node(val);
      return this;
    }

    let current = this.root;

    while (true) {
      if (val < current.val){
        if (current.left === null){
          current.left = new Node(val);
          return this;
        } else {
          current = current.left
        }
      } else if (val > current.val){
        if (current.right === null){
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current = this.root) {
    if (this.root === null){
      this.root = new Node(val);
      return this;
    }

    if (val < current.val){
      if (current.left === null){
        current.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.left);

    } else {
      if (current.right === null){
        current.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, current.right);
    }

  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if (this.root === null) return;

    let current = this.root;

    while (true) {
      if (val < current.val){
        if (current.left === null){
          return;
        } else {
          current = current.left;
        }
      } else if (val > current.val){
        if (current.right === null){
          return;
        } else {
          current = current.right;
        }
      } else return current;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (this.root === null) return;

    if (val < current.val){
      if (current.left === null) return;
      return this.findRecursively(val, current.left);

    } else if (val > current.val){
      if (current.right === null) return;
      return this.findRecursively(val, current.right);

    } else return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let values = [];

    function traverse(node){
      if (node){
        values.push(node.val);
        traverse(node.left);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return values;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let values = [];

    function traverse(node){
      if (node){
        traverse(node.left);
        values.push(node.val);
        traverse(node.right);
      }
    }

    traverse(this.root);
    return values;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let values = [];

    function traverse(node){
      if (node){
        traverse(node.left);
        traverse(node.right);
        values.push(node.val);
      }
    }

    traverse(this.root);
    return values;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let values = [];
    let queue = [];
    let current = this.root;

    queue.push(current);

    while (queue.length){
      current = queue.shift();
      values.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
    return values;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
