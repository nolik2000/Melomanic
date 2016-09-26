var arr = [];

//document.getElementById("inputYear3").onclick = createData();


function createData(){
  //var data = getElementById('inputDay3');
  arr.push(document.getElementById('inputYear3').value);
  arr.push(document.getElementById('inputMonth3').value);
  arr.push(document.getElementById('inputDay3').value);
  console.log(arr)
  return arr;
}
