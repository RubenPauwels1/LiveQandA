var mongoose = require('mongoose');

var schema = mongoose.Schema({
    discussionId: String,
    discussionName: String,
    question: String,
    answers: [{
        answer: String
    }]
})

var QuestionsAndAnswers = mongoose.model('QuestionAndAnswers', schema);

module.exports = QuestionsAndAnswers;