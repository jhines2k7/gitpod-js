class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

let node1 = new Node(1, null);
let node2 = new Node(2, null);
let node3 = new Node(3, null);
let node4 = new Node(4, null);
let node5 = new Node(5, null);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

function postOrderListTraversal(node) {
    if(node !== null) {
        postOrderListTraversal(node.next);
        
        console.log(node.data);
        
    }
}

function preOrderListTraversal(node) {
    if(node !== null) {
        console.log(node.data);

        preOrderListTraversal(node.next);
    }
}

postOrderListTraversal(node1);

// preOrderListTraversal(node1);


