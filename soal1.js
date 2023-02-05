var prompt = require('prompt-sync')();
const sqrt = x => {
    if (x < 0) {
      throw new Error("Tidak bisa input bilangan negatif");
    }
  
    if (x % 2 !== 0) {
      throw new Error("Tidak bisa input bilangan ganjil");
    }
  
    return Math.sqrt(x);
  };
  
  const x = prompt("Masukkan angka yang ingin Anda hitung akar pangkat 2-nya: ");
  
  try {
    const result = sqrt(x);
    console.log("Sukses: Akar pangkat 2 dari", x, "adalah", result);
  } catch (error) {
    console.error("Error: Anda melakukan kesalahan input", error.message);
  }