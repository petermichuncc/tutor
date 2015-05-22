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

   
 });

// Router.route('/main.html', function () {
//   this.render('main');
// });

// Router.route('/table.html', function () {
//   this.render('table');
// });
Router.route('/entries.html', {name: 'entries'},
  {layoutTemplate: 'startlayout'});

 Router.route('/', {name: 'start'},
  {startTemplate: 'startlayout'});

  Router.route('/main.html', {name: 'main'},
  	{layoutTemplate: 'layout'});
// Router.route('/table.html', {name: 'table'});

Router.route('/endjob.html', {name: 'endjob'},
  {layoutTemplate: 'endjoblayout'});
 Router.route('/table.html', {
   name: 'table'});
Router.route('/links.html', {name: 'links'},
	{layoutTemplate: 'layout'});
Router.route('/eqrepairlog.html', {name: 'repairlog'},
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



