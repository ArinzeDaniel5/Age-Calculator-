function calculateAge(){
    const dob=document.getElementById("dob").value;
    if(dob===""){
        alert("Enter Your Date of Birth");
        return;
    }
    const birthDate=new Date(dob);
    const today =new Date();
    let age=today.getFullYear()-birthDate.getFullYear();
    const month =today.getMonth()-birthDate.getMonth();
    const day=today.getDay()-birthDate.getDay();
    if( today< birthDate){
        alert("Invalid Birthdate");
        return;
    }    document.getElementById("result").innerHTML="You are " + age + " years, " +month + " months, and " +day +" days old."
}