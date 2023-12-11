// Promises - promises are rejected and resolved with some data (valid resultis or errors)

function savetoDb(data) {
  return new Promise((success, failure) => {
    // promise(resolve , reject)
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      success("success : data was saved");
    } else {
      failure("failure : weak connection");
    }
  });
}

savetoDb("ks")
  .then((result) => {
    console.log("promise was resolved");
    console.log("result : ", result);
    return savetoDb("Data2 saved");
  })
  .then((result) => {
    console.log("data2 saved");
    console.log("result : ", result);
  })
  .then((result) => {
    console.log("data3 saved");
    console.log("result : ", result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("my error :" ,error);
  });
