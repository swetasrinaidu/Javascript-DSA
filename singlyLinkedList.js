//each node will have value and pointer
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
//each linked list has head,tail and length
class SinglyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    //lets push node into linked list
    push(value){
        console.log("pushing")
        let node=new Node(value);
        if(!this.head){
            this.head=node;
            this.tail=node;
        }else{
            this.tail.next=node;
            this.tail=node;
        }
        this.length++;
        return this;
    }

    traverse(){
        console.log("traversing")
        if(!this.head) return null;
        let current=this.head;
        while(current){
            console.log(current.value);
            current=current.next;
        }
        return;
    }

    pop(){
        console.log("popping")
        if(this.length===1) return null;
        let current=this.head;
        let prevCurrent=null;
        while(current.next){
            prevCurrent=current
            current=current.next;
        }
        this.tail=prevCurrent;
        this.tail.next=null;        
        this.length--;
        return this;
    }

    shift(){
        console.log("shifting");
        if(!this.head) return null;
        this.head=this.head.next;
        if(this.head==null) this.tail=null;
        this.length--;
        return this;
    }
    unshift(value){
        console.log("unshifting")
        let node = new Node(value)
        if(!this.head){
             this.head=node;
             this.tail=node;
        }else{
            node.next=this.head;
            this.head=node;

        }
        this.length++;
        return this;
    }
    get(index){
        console.log("setting")
        if(!this.head) return null;
        if(this.length===1) return this.head.value;
        let current=this.head;
        let counter=0;
        while(current){
            if(index==counter) return current.value;
            counter++;
            current=current.next;
        }
    }
    set(index,value){
        console.log("setting")
        if(!this.head) return false;
        let current=this.head;
        let counter=0;
        while(current){
            if(index==counter && value==current.value) return true;
            counter++;
            current=current.next;
        }
        return false;
    }

    insert(index,value){
        console.log("inserting")
        let node=new Node(value);
        if(!this.head) return false;
        let current=this.head;
        let temp;
        let counter=0;
        while(current){
            if(index-1==counter){
                temp=current.next;//6,7
                current.next=node;//4,8
                node.next=temp;//4,8,6,7
                this.length++;
                
            }
            current=current.next;
            counter++;
        }
         return this;   
        }

        remove(index){
            console.log("removing")
            if(!this.head) return null;
            let current=this.head;
            let counter=0;
            while(current){
                if(index-1==counter){
                    current.next=current.next.next;
                    this.length--;
                }
                current=current.next;
                counter++;    
            }
            return this;
        }
        print(){
            const arr=[];
            let current=this.head;
            while(current){
                arr.push(current.value)
                current=current.next;
            }
            return arr;
        }

        reverse(){
            console.log("reversing")
            if(!this.head) return null;
            if(this.length===1) return this;
             //swap head and tail
             let temp=this.head;
             this.head=this.tail;
             this.tail=temp;
             //now reverse the linked list
             let current=this.tail;
             let prev=null;
             let next;
             for(let i=0;i<this.length;i++){
                 next=current.next;//store it in dummy node
                 current.next=prev;
                 prev=current;
                 current=next;
             }
              return this;
        }

    }

// let node = new Node("Hi")
// node.next= new Node("how")
// node.next.next=new Node("are")
// node.next.next.next=new Node("you")

let list=new SinglyLinkedList();
// console.log(node)
console.log(list.push(5))
console.log(list.push(6))
console.log(list.push(7))
console.log(list.traverse())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.pop())
// console.log(list.shift())
// console.log(list.shift())
console.log(list.shift())
console.log(list.unshift(4))
console.log(list.get(2))
console.log(list.set(1,6))
console.log(list.insert(1,8))
console.log(list.remove(1))
console.log(list.print())
console.log(list.reverse())