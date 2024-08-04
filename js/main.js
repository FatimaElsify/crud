
let submit = document.getElementById('submit');
let firstName = document.getElementById('fName');
let lastName  = document.getElementById('lName');
let rollNum = document.getElementById('rollNo');
let tbody= document.getElementById('content');
let mood = "create"
let temp;
let storedProducts = JSON.parse(localStorage.getItem('productList')) || [];
let productList = storedProducts;

display();


  function addproduct(event){
  event.preventDefault();

    let fName = firstName.value;
    let lName = lastName.value;
    let rollNo = rollNum.value;  

    let product= {
        pfirstName:fName,
        plastName:lName,
        pnumber:rollNo
         
    };
    if(mood === "create"){
  productList.push(product);
  localStorage.setItem('productList' , JSON.stringify(productList));
  console.log(product)
    
    display();

     clearInputs();

}  else{
  productList[temp] = product;
  localStorage.setItem('productList' , JSON.stringify(productList));
  display();
  submit.innerHTML= "submit"
  mood = "create"
}
 
}
 






     function display(){
      let row = ""
      for(i= 0 ; i<productList.length; i++){
        
        row+=`<tr>
  <td>${productList[i].pfirstName }</td>
  <td>${productList[i].plastName}</td>
  <td>${productList[i].pnumber}</td>
  <td><button id="edit" onclick="editData(${i})"style="background-color: green; color: white;border-radius:4px; padding:3px"> Edit </button> 
  <button class="delete" onclick="deleteData(${i})"  style="background-color: red; color: white; border-radius:4px ; padding:3px"> Delete </button></td>
  
</tr>` ;


}
  
tbody.innerHTML = row;


 

}

    function clearInputs() {
  firstName.value= '';
  lastName.value  = '';
     rollNum.value = '';
;}

function deleteData(i){
 productList.splice(i , 1);
 localStorage.setItem('productList' , JSON.stringify(productList));
 display()
};

function editData(i){

  firstName.value= productList[i].pfirstName ;
  lastName.value  = productList[i].plastName;
  rollNum.value =productList[i].pnumber;
  submit.innerHTML = "Update";
  mood = "update";
temp = i   ;

}

submit.addEventListener('click', addproduct);

