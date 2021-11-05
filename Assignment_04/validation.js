function validatefiled()
{
    var first_name = document.getElementById("name").value;
    if(first_name ===""){
        document.getElementById('name_err').innerHTML='please enter name';
        return false;
    }
    else
    {
        document.getElementById('name_err').innerHTML="";
    }
    var cap_pattern = /^[A-Z\s]+$/;
    if (!cap_pattern.test(first_name))  
    {
        document.getElementById('name_err').innerHTML='Block letters only';
        return false;
    }
    else
    {
        document.getElementById('name_err').innerHTML="";
    }
    
    var age =   document.getElementById("age").value;
    if(age === ""){
        document.getElementById('age_err').innerHTML='Please enter Age';
        return false;
    }
    else if(!isNaN(age)===false)
    {
        document.getElementById('age_err').innerHTML='Please enter a numeric value';
        return false;
    }
    else if(!validateAge(age))
    {
        document.getElementById('age_err').innerHTML='Please enter a valid Age';
        return false;
    }
    else
    {
        document.getElementById('age_err').innerHTML="";
    }
    
    if(document.getElementById("male").checked  ===false &&
    document.getElementById("female").checked  ===false  &&
    document.getElementById("others").checked  ===false)
    {
        document.getElementById('gen_err').innerHTML='Please select one of the options';
        return false;
    }
    else
    {
        document.getElementById('gen_err').innerHTML="";
    }

    var fathers_name = document.getElementById("fname").value;
    if(fathers_name ===""){
        document.getElementById('fname_err').innerHTML="Please enter father's name";
        return false;
    }
    else
    {
        document.getElementById('fname_err').innerHTML="";
    }
    var reg_pattern = /^[a-zA-Z\s]+$/;
    if (!reg_pattern.test(fathers_name))  
    {
        document.getElementById('fname_err').innerHTML='Please enter alphabetic characters only';
        return false;
    }
    else
    {
        document.getElementById('fname_err').innerHTML="";
    }

    var occup = document.getElementById("occupation").value;
    if(occup ===""){
        document.getElementById('occup_err').innerHTML='Please enter an occupation';
        return false;
    }
    else
    {
        document.getElementById('occup_err').innerHTML="";
    }
    if (!reg_pattern.test(occup))  
    {
        document.getElementById('occup_err').innerHTML='Please enter alphabetic characters only';
        return false;
    }
    else
    {
        document.getElementById('occup_err').innerHTML="";
    }
   
  }  
  
  function validateAge(age)
  {
    var pattern = /^\d{2}$/;
    if (pattern.test(age)) {
        return true;
    }
    else
    {
        return false;
    }
  }

  function resetfn()
  {
    document.getElementById('name_err').innerHTML="";
    document.getElementById('age_err').innerHTML="";
    document.getElementById('fname_err').innerHTML="";
    document.getElementById('occup_err').innerHTML=""; 
  }