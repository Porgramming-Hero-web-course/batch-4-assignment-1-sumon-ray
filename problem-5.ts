function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "alice", age: 30 };

console.log(getProperty(person, "age"));
