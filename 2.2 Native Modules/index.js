const fs = require("fs")

// fs.writeFile("Firstfile.txt", "Today i want to thank God as you can see I eating buscuit and cocacola", (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });

fs.readFile("Firstfile.txt", "utf8" , (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 