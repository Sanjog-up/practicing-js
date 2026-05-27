// const { act } = require("react");

function parseShipment(rawData){
const seen = new Set();
const result = [];

for(const entry of rawData){
  const [sku, name, qtyStr, expires, zone ] = entry.split("|");

if(seen.has(sku))continue;
seen.add(sku);

result.push({
  sku,
  name,
  qty : Number(qtyStr),
  expires,
  zone : zone || "general",
});
} return result;
}

function planRestock(pantry, shipment){
  const actions = [];

  for(const item of shipment){
    if(item.qty <= 0){
    actions.push({type: "discard", item});
    continue;
    }

  const inpantry = pantry.find((i)=> i.sku === item.sku);
  actions.push({type: inpantry ? "restock" : "donate", item})
  }
  return actions;
}

function groupByZone(actions){
  const groups = {};

  for(const action of actions){
    const zones = action.item.zone;
    if(!groups[zones]) groups[zones] = [];
    groups[zones].push(action);
  } return groups;
}

function clonePantry(pantry){
  return pantry.map((item) => ({...item}));
}
const rawData = [
  "SKU-001|Apples|50|2026-08-15|produce",
  "SKU-002|Canned Beans|200|2028-01-01|dry",
  "SKU-003|Yogurt|0|2026-06-01|dairy",
  "SKU-004|Olive Oil|30|2027-03-10|dry",
  "SKU-002|Canned Beans|999|2028-01-01|dry",
  "SKU-005|Bread|15|2026-05-30",
];

const currentPantry = [
  { sku: "SKU-001", name: "Apples", qty: 10, expires: "2026-07-01", zone: "produce" },
  { sku: "SKU-002", name: "Canned Beans", qty: 50, expires: "2027-06-01", zone: "dry" },
];
const pantryNow = clonePantry(currentPantry);
const shipment = parseShipment(rawData);
const actionTaken = planRestock(pantryNow,shipment);
const grouped = groupByZone(actionTaken);

console.log(groupByZone(actionTaken));