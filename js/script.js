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
        var newDiscussion = "<a href='/discussions/" + newDiscussionInDB._id + "'><h2 class='discussion'>" + newDiscussionInDB.discussion + "</h2></a>";
        $('.discussions').append(newDiscussion);
    })
    
    //NEW QUESTION
    //TALK TO SERVER
    $('#submitQuestion').click(function(e){
        var newQuestion = {
             discussionId: $('#discussionName').attr('data-discussionId'),
             discussionName: $('#discussionName').text(),
             question: $('#questionName').val()
        }
        socket.emit("New Question", newQuestion);
        console.log(newQuestion);
        $('#questionName').val("");
        return false;
    })
    
    //TALK TO CLIENT
    socket.on('newQuestionInDB', function(newQuestionInDB){
        var newQuestion = "<h3 class='question'>" + newQuestionInDB.question + "</h3>";
        console.log(newQuestion);
        $('.questions').append(newQuestion);
    })
    
    
    
    
});