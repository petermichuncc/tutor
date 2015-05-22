//The startlayout is used for the start page and 
//the links page
 // Router.configure({
 //      layoutTemplate:"layout"
 //    });

 // Router.configure({
 //      layoutTemplate:"endjoblayout"
 //    });
// Router.map(function() {
//   this.route('/table.html', {
//     path: '/main.html',

//     layoutTemplate: 'layout',

    
//   });
// });
// Router.configure({
//   layoutTemplate: "startlayout",  
//   loadingTemplate: 'loading',
//   notFoundTemplate: 'notFound',
   
// });

 Router.configure({
   layoutTemplate: "layout",
   startTemplate: "startlayout" , 
   loadingTemplate: 'loading',
   notFoundTemplate: 'notFound',
   waitOn: function() { return Meteor.subscribe('parts'); }
// added a comment for git test
   
 });

// Router.route('/main.html', function () {
//   this.render('main');
// });

// Router.route('/table.html', function () {
//   this.render('table');
// });
Router.route('/entries', {name: 'entries'},
  {layoutTemplate: 'startlayout'});

// Router.route('/job', {name: 'job'},
//   {layoutTemplate: 'layout'});


 Router.route('/', {name: 'start'},
  {startTemplate: 'startlayout'});

  Router.route('/main', {name: 'main'},
  	{layoutTemplate: 'layout'});
// Router.route('/table.html', {name: 'table'});

Router.route('/endjob', {name: 'endjob'},
  {layoutTemplate: 'endjoblayout'});
 Router.route('/table', {
   name: 'table'});
Router.route('/links', {name: 'links'},
	{layoutTemplate: 'layout'});
Router.route('/eqrepairlog', {name: 'repairlog'},
  {layoutTemplate: 'layout'});

 // Router.route('/table.html/:machinenumber', {
 //   name: 'table'},
 //   data: function() { return Machines.findOne(this.params._machinenumber) 
 // });

// Router.route('/parts', {name: 'partspage'});


//Sends the database holding parts info to this page
//so that they can be presented
Router.route('/parts', {
  name: 'parts'},{
  data: function() { return Parts.find(); }}
 ,{layoutTemplate: 'layout'});
Router.route('/job', {
  name: 'job'},{
  data: function() { return Parts.find(); }}
 ,{layoutTemplate: 'layout'});



