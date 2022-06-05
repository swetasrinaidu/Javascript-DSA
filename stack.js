class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }
    push(value){
        let newNode = new Node(value)
        if(!this.first){
            this.first=newNode;
            this.last=newNode;
        }else{
            newNode.next=this.first
            console.log("this.first",this.first)
            console.log("this.first.next",this.first.next)

            this.first=newNode;
            console.log("this.first.next",this.first.next)
        }
        return ++this.length;
    

    }
    pop(){
        if(this.length==0) return null;
        if(this.first===this.last){
            this.last=null;
        }else{
            this.first=this.first.next;
        }
        this.length--;
        return this.first;
    }
}

let stack = new Stack();
console.log(stack.push(5));
console.log(stack.push(6));
console.log(stack.push(7));
console.log(stack.pop());
console.log(stack.pop());