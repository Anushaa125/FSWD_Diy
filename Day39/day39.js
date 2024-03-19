class HashTable {
    constructor() {
      this.table = new Array(10);
      this.size = 0;
    }
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    }
    set(key, value) {
      const index = this.hash(key);
      this.table[index] = [key, value];
      this.size++;
    }
    get(key) {
      const index = this.hash(key);
      let keyValue = this.table[index];
      console.log(keyValue[1]);
    }
    search(key) {
      let hashCode = this.hash(key);
      if (hashCode) {
        console.log(`${key} is present in at ${hashCode}`);
      } else {
        console.log(undefined);
      }
    }
  }
  let fruits = new HashTable();
  fruits.set(22, "DSA");
  fruits.set("fullstack", "FSWD");
  fruits.get(22);
  fruits.search("22");
  fruits.get("fullstack");

  
