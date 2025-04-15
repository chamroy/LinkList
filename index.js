class Node{
    constructor(value = null, nextNode = null){
        this.value = value;
        this.nextNode = nextNode;

    }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }


  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
    this.length++;
  }


  prepend(value) {
    const newNode = new Node(value, this.head); 
    this.head = newNode;
    this.length++;
  }


  size() {
    return this.length;
  }


  getHead() {
    return this.head;
  }


  getTail() {
    if (!this.head) return null;
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }


  at(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }


  pop() {
    if (!this.head) return null;
    if (!this.head.nextNode) {
      const removedNode = this.head;
      this.head = null;
      this.length--;
      return removedNode;
    }
    let current = this.head;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }
    const removedNode = current.nextNode;
    current.nextNode = null;
    this.length--;
    return removedNode;
  }


  contains(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  
  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

 
  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    string += "null";
    return string;
  }
}

const list = new LinkedList();
list.append(10)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)
console.log(list)
list.prepend(0)
console.log(list)
console.log(list.size())
console.log(list.getHead())
console.log(list.getTail())
console.log(list.at(4))
console.log(list.pop())
console.log(list.contains(40))
console.log(list.contains(400))
console.log(list.find(50))
console.log(list.toString())

export default LinkedList;