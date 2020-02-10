
$("#login").click(function(){

        let email = $('#Email').val();
        let mdp = $('#Password').val();

    let data = {
        email: email,
        password: mdp

    };
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    axios.post('https://127.0.0.1:3000/login',data)
                    .then(function (response) {
                        console.log(response)
                        localStorage.setItem('token', response.data.token)
                        window.location.replace("page-module.html")
                        
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    
});