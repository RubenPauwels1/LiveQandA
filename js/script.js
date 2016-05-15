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
        //TODO: Write input field in HTML here!
        // (don't forget to insert questionid in this/it/here)
        //
        console.log(newQuestion);
        $('.questions').append(newQuestion);
    })
    
    //NEW ANSWER
    //TALK TO SERVER
    $('.submitAnswer').click(function(e){
        var questionId = $(this).attr('data-submit-questionId');
        var newAnswer = {
             questionId: questionId,
             answer: $("input[data-text-questionId='" + questionId + "']").val()
        }
        socket.emit("New Answer", newAnswer);
        console.log(newAnswer);
        $("input[data-text-questionId='" + questionId + "']").val("");
        return false;
    })
    
    //TALK TO CLIENT
    socket.on('newAnswerInDB', function(newAnswerInDB){
        var newAnswer = "<li class='answer'>" + newAnswerInDB.answer + "</li>";
        console.log(newAnswer);
        $("ul[data-questionId='" + newAnswerInDB.questionId + "']").append(newAnswer);
    })
    
    
    
    
});