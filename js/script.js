$( document ).ready(function() {
    var socket = io();
    //NEW DISC
    
    $('#submitDiscussion').click(function(e){
        var newDiscussion = $('#discussionName').val();
        socket.emit("New Discussion", newDiscussion);
        console.log(newDiscussion);
        $('#discussionName').val("");
        return false;
    })
});