//create a node 
function Node(val){
	this.data=val;
	this.next=null;
}//end node 


//class LinkList 
function LinkList(){

//create head reference 
	this.head=null;
	//create a end node refence 
	this.end=null;
	//push -->inset first Like stack
	this.push=function(val){
		//create a new node 
		var newNode= new Node(val);
		//if head is null
		if(this.head == null){
			this.head=newNode;
			this.end=this.head;
		}else{
			//add last nodes at newNode next
			newNode.next=this.head;
			// move head new to first
			this.head=newNode;
		}
	}
	//end push 





	//append node at end 
	this.appendNode=function(val){
		//create a new node firsr
		var endNode= new Node(val);

		console.log("Called form append Node");

		//if  end node is null
		if (this.end==null) {
			
			this.end=endNode;
			this.head=endNode;
		}else{
		//add new end at last
		this.end.next=endNode;
		//end end pointer to endNode 
		this.end=endNode;
	}
	}//end appendNode 





	//inset After a node 

	this.insertAfterNode= function(preNode,val){

		var tempHead=this.head;
		
		if (tempHead == null) {
			console.log("You have a single node ");
			return;
		}

		while(tempHead.data != preNode){
			tempHead=tempHead.next;
		}

		var newinsetNode= new Node(val);
		newinsetNode.next=tempHead.next;
		tempHead.next=newinsetNode;
	}//end inset after 

	//print stack now 
	this.printStack=function(){
		var temp = this.head;
		while(temp!= null){
			console.log(temp.data);
			temp=temp.next;
		}//end while
	}//end printStack

}//end LinkList 




//create a  linklist 
var  myLinkList = new LinkList();


	myLinkList.appendNode(45);//append
 	myLinkList.push(12);//push 
 	myLinkList.push(13);//push
	myLinkList.appendNode(46);//append
 	//print list
 	myLinkList.insertAfterNode(46,10);
 	myLinkList.printStack();


//end //by Zahirul 




