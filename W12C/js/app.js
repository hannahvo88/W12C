
function loginAPI() {
    var email = document.getElementById("email-field").value;
    var password = document.getElementById("password-field").value;


    axios.post('https://reqres.in/api/login', {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
        
    })
    .then(response => showResponse(response))
    .catch(error => console.error(error));
};

function showResponse (response){
    var showActivity = document.getElementById('response');
    // showPosts.innerHTML += '<br><h1><b>' + response.data[i].title + "</b></h1>";

    showActivity.innerHTML += '<br><h1><b>'+ response.status +'</b></h1>';
    showActivity.innerHTML += '<hr>';
}

document.getElementById("login-form-submit").addEventListener("click",loginAPI);
// document.getElementById("activity-pick").addEventListener("click", activityPick);



