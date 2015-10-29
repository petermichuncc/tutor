//The startlayout is used for the start page and 
//the links page
 

// Router.map(function() {
//   this.route('/table.html', {
//     path: '/main.html',

//     layoutTemplate: 'layout',

    
//   });
// });

 Router.configure({
   layoutTemplate: "layout",
   startTemplate: "startlayout" , 
   loadingTemplate: 'loading',
   notFoundTemplate: 'notFound',
    // waitOn: function () {
    //     return [Meteor.subscribe('workcenters')];
    // }
    
     
   
 });

// Router.route('/main.html', function () {
//   this.render('main');
// });

// Router.route('/table.html', function () {
//   this.render('table');
// });
Router.route('/entry', {name: 'entry'},
  {layoutTemplate: 'layout'});
Router.route('/press', {name: 'press'},
  {layoutTemplate: 'layout'});


// Router.route('/job', {name: 'job'},
//   {layoutTemplate: 'layout'});


 Router.route('/', {name: 'start'},
   {startTemplate: 'startlayout'});
 Router.route('/andy', {name: 'andy'},
    {startTemplate: 'startlayout'});
   Router.route('/main', {name: 'main'},
   	{layoutTemplate: 'layout'});
// Router.route('/table.html', {name: 'table'});


 Router.route('/table', {
   name: 'table'});
 Router.route('/input', {
   name: 'input'});
 Router.route('/output', {
   name: 'output'});
 Router.route('/output2', {
   name: 'output2'});
 Router.route('/output3', {
   name: 'output3'});
 Router.route('/output4', {
   name: 'output4'});
 Router.route('/output5', {
   name: 'output5'});
 Router.route('/output6', {
   name: 'output6'});
 Router.route('/output7', {
   name: 'output7'});

Router.route('/test', {
   name: 'test'});
   



// Router.route('/main/:machinenumber', 
//   {name: 'main'},
//   {data: function() { return entries.findOne(this.params.machinenumber); }}
// );


//Sends the database holding parts info to this page
//so that they can be presented
Router.route('/parts', {
  name: 'parts'},{
  data: function() { return Parts.find(); }}
 ,{layoutTemplate: 'layout'});
Router.route('/job', {
  name: 'job'},{
  data: function() { return Parts.find();
  }}
 ,{altTemplate: 'endjob'});

// Router.route('/job', {
//   name: 'job'},{
//   data: function() { return Parts.find();
//   }}
//  ,{altTemplate: 'endjob'});




Router.route('/progresscontroller', {
  name: 'progresscontroller'},{
  data: function() { return Parts.find(); }}
 ,{layoutTemplate: 'layout'});


