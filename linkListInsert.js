//create a node 
function Node(val) {
    this.data = val;
    this.next = null;
}



//class LinkList 
function LinkList() {

//create head reference 
    this.head = null;

    //push -->inset first Like stack
    this.push = function (val) {
        //create a new node 
        var newNode = new Node(val);
        //if head is null
        if (this.head == null) {
            this.head = newNode;
        } else {
            //add last nodes at newNode next
            newNode.next = this.head;
            // move head new to first
            this.head = newNode;
        }
    }
    //end push 





    //print stack now 
    this.printStack = function () {
        var temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }//end while
    }//end printStack

}//end LinkList 




//create a  linklist 
var myLinkList = new LinkList();
myLinkList.push(12);//push 
myLinkList.push(13);//push

//print list
myLinkList.printStack();

//end //by Zahirul 




