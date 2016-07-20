//create a node 
function Node(val) {
    this.data = val;
    this.next = null;
}//end node 


//class LinkList 
function LinkList() {

//create head reference 
    this.head = null;
    //create a end node refence 
    this.end = null;
    //push -->inset first Like stack
    this.push = function (val) {
        //create a new node 
        var newNode = new Node(val);
        //if head is null
        if (this.head == null) {
            this.head = newNode;
            this.end = this.head;
        } else {
            //add last nodes at newNode next
            newNode.next = this.head;
            // move head new to first
            this.head = newNode;
        }
    }
    //end push 






}//end LinkList 




//create a  linklist 
var myLinkList = new LinkList();
myLinkList.push(12);//push 
myLinkList.push(13);//push

//print list
myLinkList.printStack();

//end //by Zahirul 




//append node at end 
this.appendNode = function (val) {
    //create a new node firsr
    var endNode = new Node(val);

    //if  end node is null
    if (this.end == null) {
        this.end = endNode;
    }
    //add new end at last
    this.end.next = endNode;
    //end end pointer to endNode 
    this.end = endNode;
}//end appendNode 



//print stack now 
this.printStack = function () {
    var temp = this.head;
    while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
    }//end while
}//end printStack
