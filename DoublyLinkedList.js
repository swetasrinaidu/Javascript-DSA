//create a node
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
        }
}
class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(value){
        let node = new Node(value)
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            node.prev=this.tail;
            this.tail=node;
        }
        this.length++;
        return this;
    }
    pop(){
        console.log("popping")
        if(!this.length) return null;
        if(this.length===1) return this.head;
        let current=this.tail;//pop current
        current.prev.next=null;
        this.tail=current.prev;
        current.prev=null;
        this.length--;
        return current; 
        }
        shift(){
            console.log("shifting")
            if(!this.length) return null;
            if(this.length===1) return this.head;
            let current=this.head;
            current.next.prev=null;
            this.head=current.next;
            current.next=null;
            this.length--;
            console.log(this)
            return current;
        }
        unshift(value){
            console.log("unshifting")
            let node=new Node(value)
            if(!this.head){
                this.head=node;
                this.tail=node;
            }else{
                node.next=this.head;
                this.head.prev=node;
                this.head=node;
            }
            this.length++;
            return this;

        }
        get(index){
            console.log("getting")
            if(index<0 || index>=this.length) return null;
            let counter=0;
            let current=this.head;
            while(counter<index){
              counter++;
              current=current.next;
            }
            return current;
        }

        set(value,index){
            console.log("setting")
            let node=this.get(index)
            if(node.value===value) return true;
            return false;
        }

        insert(index,value){
            let node=new Node(value);
            if(!this.head){
                this.head=node;
                this.tail=node;
            }
            let counter=0;
            let current=this.head;
            let prev;
            while(counter<index){
                prev=current;
                current=current.next;
                counter++;
            }
            prev.next=node;
            node.prev=prev;
            node.next=current;
            current.prev=node;
            this.length++;
            return this;
        }

        remove(index){
            console.log("removing")
            if(index<0 || index>=this.length) return null;
            let counter=0;
            let current=this.head;   
            let prev;
            while(counter<index){
                prev=current;
                current=current.next;
                counter++;
            }
            prev.next=current.next;
            current.next.prev=prev;
            this.length--;
            return this;
        }
}

let list=new DoublyLinkedList();
console.log(list.push(5))
console.log(list.push(6))
console.log(list.push(7))
// console.log(list.pop())
console.log(list.shift())
console.log(list.unshift(4))
console.log(list.get(1))
console.log(list.set(6,1))
console.log(list.insert(1,8))
console.log(list.remove(1))