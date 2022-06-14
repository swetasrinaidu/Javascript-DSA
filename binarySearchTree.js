//find and insert nodes in binary search tree
class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root=newNode;
            return this;
        }else{
            var current = this.root;
            while(true){
                if(value===current.value) return undefined;
                else if(value<current.value){
                    if(!current.left){
                        current.left=newNode;
                        return this;
                    }
                    current=current.left;   
                }
                else if(value>current.value){
                    if(!current.right){
                        current.right=newNode;
                        return this;
                    }
                    current=current.right;               
                  }                 
              }
            }
        }   
       find(value){
           let current = this.root;
           while(current){
               if(value<current.value){
                   current = current.left;

               }
               else if(value>current.value){
                   current = current.right;
               }
               else{
                   return true;
               }
           }
           return false;            
       } 
       BFS(){
           var data=[];
           var queue=[];
           var current=this.root;
           queue.push(current);
           let value;
           while(queue.length){
               value=queue.shift();
               data.push(value.value);
               if(value.left){
               queue.push(value.left);
               }
               if(value.right)
               {
                queue.push(value.right);
               }    
           }
           return data;
       }    
       DFS_preOrder(){
           var data=[];
           function traverse(node){
               data.push(node.value);
               if(node.left) traverse(node.left);
               if(node.right) traverse(node.right);   
           }
           traverse(this.root);
           return data;
       }  
       DFS_InOrder(){
           var data=[];
           function traverse(node){
               if(node.left) traverse(node.left);
               data.push(node.value);
               if(node.right) traverse(node.right);
           }
           traverse(this.root);
           return data;
       } 
       DFS_postOrder(){
           var data=[];
           function traverse(node){
               if(node.left) traverse(node.left);
               if(node.right) traverse(node.right);
               data.push(node.value);
           }
           traverse(this.root);
           return data;
       }
}
        
var tree= new BinarySearchTree();
console.log(tree.insert(5));
console.log(tree.insert(6));
console.log(tree.insert(4));
console.log(tree.insert(7));
console.log(tree.insert(3));
console.log(tree.insert(2));
console.log(tree.insert(1));
console.log(tree.find(7));
console.log(tree.find(8));
console.log(tree.find(6));
console.log(tree.BFS())
console.log(tree.DFS_preOrder())
console.log(tree.DFS_InOrder())
console.log(tree.DFS_postOrder())
