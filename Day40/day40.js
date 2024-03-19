class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  class linkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    insert(data) {
      let node = new Node(data);
      let current;
      if (this.head == null) {
        this.head = node;
      } else {
        current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = node;
      }
      this.size++;
    }
    traverse() {
      let current = this.head;
      console.log(this.head.data);
      while (current.next !== null) {   
        current = current.next;
        console.log(current.data);
      }
    }
    delete() {
      if (this.head == null) {
        console.log("linked lists is empty");
      }
      let node = this.head;
      while (node.next.next != null) {
        node = node.next;
      }
      node.next = null;
      this.size--;
    }
    search(data) {
      let current = this.head;
      let count = 0;
      let found = false;
      while (current !== null) {
        if (current.data === data) {
          console.log(`${data} value found at position: ${count}`);
          found = true;
        }
        current = current.next;
        count++;
      }
      if (!found) {
        console.log(`${data} not found in the linked list`);
      }
    }
  }
  let list1 = new linkedList();
  list1.insert(2);
  list1.insert(99);
  list1.insert(2.5);
  list1.insert(3);
  list1.insert(4);
  list1.search(2.5);
  console.log(list1);
  list1.traverse();
