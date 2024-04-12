/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function makeOutputOfChildren(root: TreeNode | null): string[] {
  const result: string[] = [];
  if (!root) {
    return [];
  }
  if (root.right) {
    result.push(
      ...makeOutputOfChildren(root.right).map((right) => {
        return root.val + '->' + right;
      })
    );
  }
  if (root.left) {
    result.push(
      ...makeOutputOfChildren(root.left).map((left) => {
        return root.val + '->' + left;
      })
    );
  }
  if (!root.right && !root.left) {
    result.push(root.val.toString());
  }
  return result;
}

function binaryTreePaths(root: TreeNode | null): string[] {
  return makeOutputOfChildren(root);
}
