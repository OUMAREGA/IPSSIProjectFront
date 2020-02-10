$(function() {
let token = localStorage.getItem('token')
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.get('https://127.0.0.1:3000/token',token)
                .then(function (response) {
                    console.log(response)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
  });





function getModuleRated(){
            
    let doc = document.getElementById('module').textContent;
    console.log("doc");
}
$("#note").click(function(){
    var clientContext = new SP.ClientContext.get_current();
    console.log(clientContext)
});
