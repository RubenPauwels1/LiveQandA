$( document ).ready(function() {
    var socket = io();
    
    //NEW DISCUSSION
    //TALK TO SERVER
    $('#submitDiscussion').click(function(e){
        var newDiscussion = $('#discussionName').val();
        socket.emit("New Discussion", newDiscussion);
        console.log(newDiscussion);
        $('#discussionName').val("");
        return false;
    })
    
    //TALK TO CLIENT
    socket.on('newDiscussionInDB', function(newDiscussionInDB){
        var newDiscussion = "<h2 class='discussion'>" + newDiscussionInDB.discussion + "</h2>";
        $('.discussions').append(newDiscussion);
    })
});