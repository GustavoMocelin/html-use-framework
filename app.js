function requestOfServer() {

    $.ajax({
        type: 'get',
        url: "http://localhost:8000/hello-world?info=OlaMundo"
    }).done(function (data) {
    
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value-of-variable').innerHTML = data.value_of_variable_info
        document.getElementById('company-site').innerHTML = data.web_site_company
    
    });

    $.ajax({
        type: 'post',
        url: "http://localhost:8000/rota-desafio?info=OlaMundo"
    }).done(function (data) {
    
        document.getElementById('developer').innerHTML = data.name
        document.getElementById('version').innerHTML = data.version
        document.getElementById('value-of-variable').innerHTML = data.value_of_variable_info
        document.getElementById('company-site').innerHTML = data.web_site_company
    
        $('#show-values').css('display','block');
    });
    
}


function submitDataOfUser(){
    const nameOfUser = $('#name').val();
    const lastNameOfUser = $('#lastname').val();
    const ageOfUser = $('#age').val();
    
    $.ajax({
        "url": "http://localhost:8000/insert-data",
        "method": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify({
          name: nameOfUser,
          lastName: lastNameOfUser,
          age: ageOfUser
        })
    }).done(function (response) {       
        if(response.sucess){
            //alert("Deu certo");
            $("#sucesso-msg").css('display', 'flex');

            $("#name").val('');
            $("#lastname").val('');
            $("#age").val('');
        }else{
            alert("Deu erro");
        }
    });
}


function closeSuccessMsg(){
    $(".sucesso").css('display', 'none');
}




