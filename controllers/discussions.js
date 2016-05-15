var Discussion = require('../models/discussions');
var QuestionsAndAnswers = require('../models/questionsandaswers.js');

function create (newDiscussion, returnDiscussion){

    console.log('create fired!');
	// save a new instance of this model
	var newDiscussion = new Discussion({
		//user: req.body.user,
		discussion: newDiscussion
	});
    
    console.log('Discussion: ' + newDiscussion);
	
	newDiscussion.save(function (err, discussion) {
	  if (err) return console.error(err);
        console.log("Saved " + discussion);
        returnDiscussion(discussion);
	});
}

module.exports.create = create;

function getAll (req, res) {
	Discussion.find( function(err, discussions){
		if (err) return console.error(err);
        console.log(discussions);
		return res.render('discussion', {discussions: discussions});
	});
}

function getDiscussion (req, res, id) {
    var json = {};
    Discussion.findOne({'_id': id}, 'discussion _id', function(err, discussion){
        if(err){
            console.log(err);
        }''
        json.discussion = discussion;
        //console.log('json discussion=' + json.discussion);
        getAllQuestionsAndAnswers(req, res, json.discussion);
    }
  )
}

function createQuestion(newQuestion, returnQuestion){
    var questionsAndAnswers = new QuestionsAndAnswers({
          discussionId: newQuestion.discussionId,
          discussionName: newQuestion.discussionName,
          question: newQuestion.question
    })
    
    questionsAndAnswers.save(function(err, questionsandanswers){
        //callback from DB to next function
        returnQuestion(questionsandanswers);
    })
    
}


function getAllQuestionsAndAnswers (req, res, discussion) {
    console.log('getAllQuestionsAndAnswers Fired!');
	QuestionsAndAnswers.find( function(err, questionsandanswers){
		if (err) return console.error(err);
        console.log("questionsandanswers:" + questionsandanswers);
        console.log("discussion:" + discussion);
		return res.render('discussion/questionandanswer', {questionsandanswers: questionsandanswers, discussion: discussion});
	});
    
}

function createAnswer(newAnswer, returnAnswer){
    //FIND VRAAGID & PUSH ANSWER IN DB (voor de juiste ID)
    console.log("createAnswer Fired!");
    console.log(newAnswer);
    QuestionsAndAnswers.findByIdAndUpdate(
        newAnswer.questionId,
        {$push: {"answers": {answer: newAnswer.answer}}},
        {safe: true, upsert: true},
        function(err, model){
            //console.log(err);
            returnanswer = {
                answer: newAnswer.answer,
                questionId: newAnswer.questionId
            }
            returnAnswer(returnanswer);
            console.log(returnanswer);
            console.log('succes!: ' + returnanswer);
        }
        
    )    
}





module.exports.getAll = getAll;
module.exports.getDiscussion = getDiscussion;
module.exports.createQuestion = createQuestion;
module.exports.getAllQuestionsAndAnswers = getAllQuestionsAndAnswers;
module.exports.createAnswer = createAnswer;