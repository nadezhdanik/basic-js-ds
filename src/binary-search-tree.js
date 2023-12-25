const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addNode(this.rootNode, newNode);
    }
  }

  addNode(curNode, newNode) {
    if (newNode.data < curNode.data) {
      if (curNode.left === null) {
        curNode.left = newNode;
      } else {
        this.addNode(curNode.left, newNode);
      }
    } else if (newNode.data > curNode.data) {
      if (curNode.right === null) {
        curNode.right = newNode;
      } else {
        this.addNode(curNode.right, newNode);
      }
    }
  }

  has(data) {
    return this.findNode(this.rootNode, data) !== null;
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(curNode, data) {
    if (curNode === null || curNode.data === data) {
      return curNode;
    }
    if (data < curNode.data) {
      return this.findNode(curNode.left, data);
    }
    return this.findNode(curNode.right, data);
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(curNode, data) {
    if (curNode === null) {
      return curNode;
    }

    if (data < curNode.data) {
      curNode.left = this.removeNode(curNode.left, data);
    } else if (data > curNode.data) {
      curNode.right = this.removeNode(curNode.right, data);
    } else {
      if (curNode.left === null) {
        return curNode.right;
      } else if (curNode.right === null) {
        return curNode.left;
      }
      const temp = this.findMin(curNode.right);
      curNode.data = temp.data;
      curNode.right = this.removeNode(curNode.right, temp.data);
    }
    return curNode;
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (this.rootNode === null) {
      return null;
    }
    return this.findMin(this.rootNode).data;
  }

  findMax(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }

  max() {
    if (this.rootNode === null) {
      return null;
    }
    return this.findMax(this.rootNode).data;
  }
}

module.exports = {
  BinarySearchTree,
};
