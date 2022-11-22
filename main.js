    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const emailId = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const object = {
      name: name,
      emailId: emailId,
    };

    axios.post("https://crudcrud.com/api/f98f011ea06a475486774566142aeab1/users",  object)
    .then((response) => {
       addNewLineElement(response.data);
       console.log(response)
     })
     .catch((err)=> {
       document.body.innerHTML = document.body.innerHTML ="<h4>Something went Wrong</h4>"; 
       console.log(err)
     })
});
     

  axios.get("https://crudcrud.com/api/f98f011ea06a475486774566142aeab1/users")
  .then((response) => {
      console.log(response.data);
      response.data.forEach((key) => {
      console.log(key);
      addNewLineElement(key);
      for(let i=0;i<response.data.length;i++)
      { 
        const para = document.createElement("p");
        para.setAttribute('id','uid');
        para.textContent = response.data[i]._id;
        console.log(para.textContent);
        document.body.appendChild(para).style.visibility="hidden";
      }
      });
  });


  function addNewLineElement(object) {
  const ul = document.getElementById("users");
  const li = document.createElement("li");
  li.appendChild(
    document.createTextNode(object.name + " " + object.emailId + " ")
  );

  const a1 = document.createElement("input");
  a1.id = "viv";
  a1.type = "button";
  a1.value = "Edit";
  a1.addEventListener("click", () => {
    console.log(object);
    document.getElementById("name").value = object.name;
    document.getElementById("email").value = object.emailId;
    li.remove();

    axios.delete(`https://crudcrud.com/api/f98f011ea06a475486774566142aeab1/users/${object._id}`)
    .then((response) => {
      console.log(response);
    })  
    .catch((err) => {
      console.log(err);
    })
  });
  
  console.log(a1);
  li.appendChild(a1);

  const a = document.createElement("input");
  a.type = "button";
  a.value = "delete";
  a.addEventListener("click", () => {
    axios.delete(`https://crudcrud.com/api/f98f011ea06a475486774566142aeab1/users/${object._id}`)
    .then((response) => {
      console.log(response);
    })  
    .catch((err) => {
      console.log(err);
    })
    li.remove();
  });
  console.log(a);
  li.appendChild(a);
  console.log(li);
  ul.appendChild(li);
}
