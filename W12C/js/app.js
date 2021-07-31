function loginAPI() {
    var email = document.getElementById("email-field").value;
    var password = document.getElementById("password-field").value;
axios.request({
    method: "POST",
    url: "https://reqres.in/api/login",
    headers: {
        "Content-Type": "application/json"
    },
    data:{
        email: email,
        password: password
    }
}).then(success).catch(failure);
}

function success(response){
    console.log(response);
    window.location.href = "home.html";
}

function failure(error){
    console.log(error);
    alert('The login was invalid')

}




//     axios.request({
//         method: "POST",
//         url: "https://reqres.in/api/login",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         data:{
//             email: "eve.holt@reqres.in",
//             password: "password"
//         }
//     }) .then(response => console.log(response))
//     .catch(error => console.error(error));
// };


//     axios.post('https://reqres.in/api/login', {
//         headers: {
//             "Content-Type": "application/json"
//         },
//         data:{
//             email: "eve.holt@reqres.in",
//             password: "password"
//         }
//     .then(response => showResponse(response))
//     .catch(error => console.error(error));
// };

// function showResponse (response){
//     var showActivity = document.getElementById('response');
//     // showPosts.innerHTML += '<br><h1><b>' + response.data[i].title + "</b></h1>";

//     showActivity.innerHTML += '<br><h1><b>'+ response.status +'</b></h1>';
//     showActivity.innerHTML += '<hr>';
// }

document.getElementById("login-form-submit").addEventListener("click",loginAPI);
// document.getElementById("activity-pick").addEventListener("click", activityPick);

