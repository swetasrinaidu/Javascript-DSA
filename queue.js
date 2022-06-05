class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class Queue{
    constructor(){
        this.first=null;
        this.last=null;
        this.length=0;
    }
    push(value){
        let newNode= new Node(value)
        if(!this.first){
           this.first=newNode;
           this.last=newNode;
        }else{
            this.last.next=newNode;
            this.last=newNode;
        }
        return ++this.length;
    }
    pop(){
        if(!this.length) return null;
        if(this.length==1){
            this.last=null;
        }else{
          this.first=this.first.next;
        }
        this.length--;
        return this;

    }
}
let queue = new Queue();
console.log(queue.push(5));
console.log(queue.push(6));
console.log(queue.push(7));
console.log(queue.pop());
console.log(queue.pop());