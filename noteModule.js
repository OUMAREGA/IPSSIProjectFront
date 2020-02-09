function getModuleRated(){
            
    let doc = document.getElementById('module').textContent;
    console.log("doc");
}
$("#note").click(function(){
    var clientContext = new SP.ClientContext.get_current();
    console.log(clientContext)
});
