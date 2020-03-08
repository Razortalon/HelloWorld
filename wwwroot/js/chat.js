
var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();

//禁用发送按钮，直到建立连接
document.getElementById("sendButton").disabled = true;

connection.on("ReceiveMessage", function (user, message) {
    var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var li = document.createElement("li");
    li.innerHTML = '<strong>' + user + '</strong>:&nbsp;&nbsp;' + msg;
    document.getElementById("messagesList").appendChild(li);
});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    var user = document.getElementById("userInput");
    var message = document.getElementById("messageInput");
    var messageList = document.getElementById("messageList");
    connection.invoke("SendMessage", user.value, message.value).catch(function (err) {
        return console.error(err.toString());
    });
    message.value = "";
    event.preventDefault();
});