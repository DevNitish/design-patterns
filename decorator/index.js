var Shopper = require('./Shopper');
var {
  InventoryItem,
  GoldenInventoryItem,
  DiamondInventoryItem
} = require('./InventoryItem');

var nitish = new Shopper('Nitish', 3000);

var walkman = new InventoryItem("Walkman", 29.99);
var necklace = new InventoryItem("Necklace", 9.99);

var gold_necklace = new GoldenInventoryItem(necklace);
var diamond_gold_necklace = new DiamondInventoryItem(gold_necklace);

var diamond_walkman = new DiamondInventoryItem(walkman);

nitish.purchase(diamond_gold_necklace);
// nitish.purchase(diamond_walkman);

nitish.printStatus();

diamond_walkman.print();
