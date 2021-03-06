const Storage = function (items) {
  this.items = items;
}

Storage.prototype.getItems = function (items) {
  return this.items;
};

Storage.prototype.addItem = function (item) {
  this.items.push(item);
  return this.items;
}

Storage.prototype.removeItem = function (item) {
  if (this.items.includes(item)) {
    let i = this.items.indexOf(item, 0);
    this.items.splice(i, 1);
  } else {
   console.log(`элемента ${item} не найдено`)
  }
   
}



const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонге');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]