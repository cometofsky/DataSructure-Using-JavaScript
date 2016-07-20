function Node(val) {
    this.data = val;
    this.next = null;
}


//List 
function List() {
    this.head = null;
   
    this.add = push;
    this.print = printStack;
}


function push(val) {
    var newNode = new Node(val);
//    this.head.next=null;
    if (this.head == null) {
        this.head = newNode;
        
    }
    else {
        newNode.next = this.head;
        this.head =newNode ;
    }
}

//print list 
function printStack() {
    this.temp = this.head;
    while (this.temp != null) {
        console.log(this.temp.data + '-->');
        this.temp = this.temp.next;
    }
}

var stackList = new List();
stackList.add(12);
stackList.add(11);
stackList.add(10);
stackList.print();