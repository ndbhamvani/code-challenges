/* You will be given a list of objects. Each object has type, material, and possibly secondMaterial.
The existing materials are: paper, glass, organic, and plastic.

Your job is to sort these objects across the 4 recycling bins according to their material
(and secondMaterial if it's present), by listing the type's of objects that should go into those bins.

NOTES
The bins should come in the same order as the materials listed above
All bins should be listed in the output, even if some of them are empty
If an object is made of two materials, its type should be listed in both of the respective bins
The order of the type's in each bin should be the same as the order of their respective objects was in the input list

EXAMPLE
input = [
  {"type": "rotten apples", "material": "organic"},
  {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
  {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
  {"type": "amazon box", "material": "paper"},
  {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
]

output = [
  ["wine bottle", "amazon box", "beer bottle"],
  ["wine bottle", "beer bottle"],
  ["rotten apples", "out of date yogurt"],
  ["out of date yogurt"]
]
*/

function recycle(array) {
  let a = array;
  let b = [[],[],[],[]];
  //paper, glass, organic, plastic

  for(let i=0; i<a.length; i++){
    if (a[i].material == 'paper' || a[i].secondMaterial == 'paper') b[0].push(a[i].type)
    if (a[i].material == 'glass' || a[i].secondMaterial == 'glass') b[1].push(a[i].type)
    if (a[i].material == 'organic' || a[i].secondMaterial == 'organic') b[2].push(a[i].type)
    if (a[i].material == 'plastic' || a[i].secondMaterial == 'plastic') b[3].push(a[i].type)
  }
  return b
}
