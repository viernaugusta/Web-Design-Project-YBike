function submitForm(form){
    console.log(form.name.value);
    console.log(form.phone.value);
    console.log(form.address.value);
    console.log(form.products.value);
    console.log(form.quantity.value);
    console.log(form.motorcolor.value);

    if(!validateName(form.name.value)){
        alert("Error: Name must not be empty!");
        return false;
    }
    if(!validateName(form.phone.value)){
        alert("Error: Phone must not be empty!");
        return false;
    }else if(form.phone.value.length < 5){
        alert("Error: Phone number must be at least 5 characters");
        return false;
    }
    if(!validateName(form.address.value)){
        alert("Error: Address must not be empty!");
        return false;
    }
    if(!validateName(form.products.value)){
        alert("Error: Product must not be empty!");
        return false;
    }
    if(!validateName(form.quantity.value)){
        alert("Error: Quantity must not be empty!");
        return false;
    }
    if(!validateName(form.motorcolor.value)){
        alert("Error: Color must not be empty!");
        return false;
    }

    
    return true;
}

function validateName(data){
    if(data == ""){
        return false;
    }
    return true;
}