class stack {
    constructor() {
      this.arr = [];
      this.top = 0;
    }
    push(element) {
      if (this.size() >= 4) {
        console.log("stack overflow");
        return;
     }
      this.arr[this.top] = element;
      this.top = this.top + 1;
      console.log( this.arr);
    }
    pop() {
      if (this.isEmpty()) {
        return "s1 is empty";
      }
       x=this.arr.pop();
      console.log(`${x} is removed`);
    }

    isEmpty() {
      return this.arr.length === 0;
    }
    search(element) {
      const index = this.arr.indexOf(element);
      return index === element ? true : false;
    }
    size() {
      return this.arr.length;
    }
  }

  const s1 = new stack();
  let x = [2, 1, 3, 10, 2, 2];

  for (let i = 0; i < x.length; i++) {
    s1.push(x[i]);
    console.log(s1.arr);
  }
  console.log(s1);
  s1.pop();
  s1.pop();
  console.log(s1.search(20));
  console.log(s1.search(1));
  console.log(s1.search(30));
