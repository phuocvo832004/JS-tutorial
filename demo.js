function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve('Dữ liệu đã tải xong!'), 1000);
    });
  }
  
//   function process() {
//     fetchData()
//       .then(data => {
//         console.log(data); 
//       })
//       .catch(error => {
//         console.error('Đã xảy ra lỗi:', error);
//       });
//   }

  async function process() {
    const data = await fetchData();
    console.log(data);
  }
  
  process(); 