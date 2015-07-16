(function(){Submissions = new Mongo.Collection('submissions');


 Meteor.methods({
   submissionsInsert: function(submissionsAttributes) {
      // check(Meteor.userId(), String);
     // check(partsAttributes, {
     //   title: String,
     //   url: String
      // });
      // var user = Meteor.user();

      console.log("Example results: " + submissionsAttributes.submission);

      var post = _.extend(submissionsAttributes, {
      
       submissionnumber: submissionsAttributes.submissionnumber
      
      
     });
      
      Submissions.remove({});
      Submissions.insert(submissionsAttributes);
      // var postId = Parts.insert(post);
      // return {
      //   _id: postId
      // };
    }
  });

})();
