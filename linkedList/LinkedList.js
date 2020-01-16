'use strict';
var a = console.log;
var b = function (x){return JSON.stringify(x,null,"\t")};
//var lnode = require("./Lnode");

class Lnode {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){
        var node = new Lnode(element);
        var current;

        if(this.head ==null){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    reverse(){
        var curr = this.head;
        a("curr ****** ", curr)
        var previous = null;
        var temp = null;
        while(curr){
            temp = curr.next; // took 2,3,4,5 in temp in first loop 
            // seet 3,4,5 in temp in second loop
            // set 4,5 in temp in second loop
        a("temp ****** ", temp)
            curr.next = previous; // set null in curr.next in first loop  { element: 1, next: null }
            //{ element: 2, next: Lnode { element: 1, next: null } }
            // Lnode { element: 2, next: Lnode { element: 1, next: null } }
            
        a("curr.next ****** ", curr.next) 
            previous = curr; //set { element: 1, next: null } # first element  in previous
            //{ element: 2, next: Lnode { element: 1, next: null } }
        a("previous ****** ", previous)
            curr = temp; // set 2,3,4,5 in curr in first loop
             // seet 3,4,5 in temp in second loop
        a("curr ****** ", curr)
        }
        return previous;
    }

    fromArray(values) {
        values.forEach(value => this.add(value));
        return this;
    }

    toArray(){
        var arr = [];
        var curr = this.head;
        while(curr){
            arr.push(curr.element);
            curr = curr.next;
        }
        return arr;

    }

    delete(element){
        if(!this.head) return null;
        if (this.head.element === element) {
            this.head = this.head.next;
        } else {
            var previousNode = this.head;
            var currentNode = previousNode.next;
            while (currentNode) {
                if (currentNode.element === element) {
                    previousNode.next = currentNode.next;
                    break;
                } else {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
            }
        }
       
        return this.head;
    }

    removeReverseNthNode(n){
        var i = 1;
        var first = this.head;
        var dummy = this.head;
        while(first != null){
            first = first.next;
            i++;
        }
        console.log("i n",i, n);
        i -= n+1;
         console.log("i ",i);
        console.log("this.head ", b( this.head));
        first = this.head;
        while(i){
            i--;
            dummy = dummy.next;
            first = first.next
        }
        console.log("dummy ",b( dummy));
        console.log("@@this.head ", b( this.head));
        this.head.next = dummy.next;
       return this.head
    }
}

var ll = new LinkedList();

console.log("ll ",b(ll));
ll.fromArray([1,2,3,4]);
ll.add(5);
// console.log("ll ",b(ll));
console.log("ll ",b(ll.reverse()));
//console.log("ll ",b(ll.delete(5)));
// console.log("ll ",b(ll.toArray()));
//console.log(b(ll.removeReverseNthNode(2)));