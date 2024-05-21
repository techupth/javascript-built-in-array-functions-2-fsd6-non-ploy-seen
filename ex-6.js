const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  if (carCollection.includes(carBrand)) {
    return (
      carBrand +
      " already exists in the position " +
      (carCollection.indexOf(carBrand) + 1) +
      " of car collection."
    );
  } else {
    carCollection.push(carBrand);
    console.log(carCollection);
    return "new car collection is: " + carCollection;
  }
}
//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.
