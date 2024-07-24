function sortCustomerName(customers) {
  // เริ่มเขียนโค้ดตรงนี้จ้า
  for (let i = 0; i < customers.length - 1; i++) {
    for (let j = 0; j < customers.length - 1 - i; j++) {
      if (customers[j].localeCompare(customers[j+1]) > 0){
          let temp = customers[j]
          customers[j] = customers[j+1]
          customers[j+1] = temp
      }
    }
  }
  return console.log(customers);
}
let customers = ["Somchai", "Arthit", "Suchada", "Napasorn", "Pimchanok"]
sortCustomerName(customers)

// ตอบคำถามตรงนี้จ้า ใช้ O(n2) เพราะเป็นการใช้ลูปซ้อนลูป
