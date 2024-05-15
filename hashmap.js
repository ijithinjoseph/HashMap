class HashMap {
    constructor() {
      this.storage = {};
    }
  
    hash(key) {
      let hashCode = 0;
  
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
      return hashCode;
    }
  
    set(key, code) {
      const hashedKey = this.hash(key);
      this.storage[hashedKey] = code;
    }
  
    get(key) {
      const hashedKey = this.hash(key);
      if (this.storage.hasOwnProperty(hashedKey) === false) {
        return null;
      } else {
        return this.storage[hashedKey];
      }
    }
  
    has(key) {
      const hashedKey = this.hash(key);
      return this.storage.hasOwnProperty(hashedKey);
    }
  
    remove(key) {
      const hashedKey = this.hash(key);
      console.log(this.storage);
      if (this.storage[hashedKey]) {
        delete this.storage[hashedKey];
        return this.storage;
      }
    }
  
    length() {
      return Object.keys(this.storage).length;
    }
  
    clear() {
      this.storage = {};
    }
  
    keys() {
      return Object.keys(this.storage);
    }
  
    values() {
      return Object.values(this.storage);
    }
  
    entries() {
      return Object.entries(this.storage);
    }
  }
  console.log("HashMap")
  let myHashMap = new HashMap();
  console.log("Hash 'Hello' -", myHashMap.hash("Hello"));
  myHashMap.set("Hello", 12345);
  myHashMap.set("There", 109876);
  console.log("Length", myHashMap.length());
  console.table(myHashMap.entries());
  console.log("Get 'Hello' -", myHashMap.get("Hello"));
  console.log("Has 'hi' -", myHashMap.has("hi"));
  console.log("Remove 'Hello' -", myHashMap.remove("pig"));
  
  class HashSet {
    constructor() {
      this.storage = {};
    }
  
    hash(key) {
      let hashCode = 0;
  
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
      }
      return hashCode;
    }
  
    set(key) {
      const hashedKey = this.hash(key);
      this.storage[hashedKey] = true;
    }
  
    get(key) {
      const hashedKey = this.hash(key);
      if (this.storage.hasOwnProperty(hashedKey) === false) {
        return null;
      } else {
        return this.storage[hashedKey];
      }
    }
  
    has(key) {
      const hashedKey = this.hash(key);
      return this.storage.hasOwnProperty(hashedKey);
    }
  
    remove(key) {
      const hashedKey = this.hash(key);
      if (this.storage[hashedKey]) {
        delete this.storage[hashedKey];
      }
      return this.storage;
    }
  
    length() {
      return Object.keys(this.storage).length;
    }
  
    clear() {
      this.storage = {};
    }
  
    keys() {
      return Object.keys(this.storage);
    }
  
    values() {
      return Object.values(this.storage);
    }
  
    entries() {
      return Object.entries(this.storage);
    }
  }
  
  console.log("HashSet");
  let myHashSet = new HashSet();
  console.log("Hash 'Cat' -", myHashSet.hash("Cat"));
  myHashSet.set("Cat");
  myHashSet.set("Dog");
  console.log("Length -", myHashSet.length());
  console.table(myHashSet.entries());
  console.log("Get 'Cat' -", myHashSet.get("Cat"));
  console.log("Has 'rabbit' -", myHashSet.has("dog"));
  console.log("Remove 'Dog' -", myHashSet.remove("pig"));