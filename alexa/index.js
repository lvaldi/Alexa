"use strict";

//Variables

var Alexa = require("alexa-sdk");
var SKILL_NAME = "syntax";
var APP_ID = "";


//Syntax
var SYNTAX = "LinkedList<String> linkedlist = new LinkedList<String>();";
		// "/* Linked List Declaration */\n\
		// LinkedList<String> linkedlist = new LinkedList<String>();\n\
		// \n\
  //      	/*add(String Element) is used for adding \n\
  //       * the elements to the linked list*/\n\
  //      	linkedlist.add(""Item1"");\n\
  //      	linkedlist.add(""Item5"");\n\
  //       linkedlist.add(""Item3"");\n\
  //       linkedlist.add(""Item6"");\n\
  //       linkedlist.add(""Item2"");\n\
  //       \n\
  //       /*Display Linked List Content*/\n\
  //       System.out.println(""Linked List Content: "" +linkedlist);\n\
  //       \n\
  //       /*Add First and Last Element*/\n\
  //       linkedlist.addFirst(""First Item"");\n\
  //       linkedlist.addLast(""Last Item"");\n\
  //       System.out.println(""LinkedList Content after addition: "" +linkedlist);\n\
  //       \n\
  //       /*This is how to get and set Values*/\n\
  //       Object firstvar = linkedlist.get(0);\n\
  //       System.out.println(""First element: "" +firstvar);\n\
  //       linkedlist.set(0, ""Changed first item"");\n\
  //       Object firstvar2 = linkedlist.get(0);\n\
  //       System.out.println(""First element after update by set method: "" +firstvar2);\n\
  //       \n\
  //   	/*Remove first and last element*/\n\
  //       linkedlist.removeFirst();\n\
  //       linkedlist.removeLast();\n\
  //       System.out.println(""LinkedList after deletion of first and last element: "" +linkedlist);\n\
  //       \n\
  //       /* Add to a Position and remove from a position*/\n\
  //       linkedlist.add(0, ""Newly added item"");\n\
  //       linkedlist.remove(2);\n\
  //       System.out.println(""Final Content: "" +linkedlist);";

// //Setup
// exports.handler = function(event, context, callback) {
// 	var alexa = Alexa.handler(event, context);
// 	alexa.APP_ID = APP_ID;
// 	alexa.registerHandlers(handlers);
// 	alexa.execute();

// }

var handlers = {
	'LaunchRequest': function() {
		this.emit('GetSyntax');
	},
	'GetSyntaxIntent': function() {
		this.emit('GetSyntax');
	},
	'GetSyntax': function() {
		var syntax = SYNTAX;
	

		//Output
		var speechOutput = "I posted the syntax in the alexa app";

		this.emit(":tellWithCard", speechOutput, SKILL_NAME, syntax);
	},
	'AMAZON.HelpIntent': function() {
		var speechOutput = "You say give me the syntax for a linkedlist, or you can say exit ... What can I help you with?";
		var reprompt = "What can I help you with?";
		this.emit(":ask", speechOutput, reprompt);
	},

	'AMAZON.StopIntent': function() {
		this.emit(":tell", "Goodbye!");
	},
	'AMAZON.CancelIntent': function() {
		this.emit(":tell", "Goodbye!");
	}
};

//Setup
exports.handler = function(event, context, callback) {
	var alexa = Alexa.handler(event, context);
	alexa.APP_ID = APP_ID;
	alexa.registerHandlers(handlers);
	alexa.execute();

}