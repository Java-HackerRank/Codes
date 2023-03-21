class Node{
    constructor(data){
        this.data = data;
        this.next;
    }
    head = null;
}

function createNode(data){
    var node = new Node(data);
    node.next = null;

    if(Node.head == null)
        Node.head = node;
    else{
        temp = Node.head;
        while(temp.next != null)
            temp = temp.next;
        temp.next = node;
    }
}

function printLinkedList(){
    temp = Node.head;
    while(temp != null){
        console.log(temp.data);
        temp = temp.next;
    }
}

function sortLinkedList(){
    temp = Node.head
    temp2 = Node.head
    while(temp != null){
        if(temp.data > temp.next.data){
            temp2 = temp;
            temp = temp.next;
            temp.next = temp2;
            console.log(temp2.data)
        }
        temp = temp.next;
    }
}

createNode('Anish');
createNode('Parth');
createNode('Karan');
createNode('Nidhi');
createNode('Vishakha');

sortLinkedList();
//printLinkedList()