// Make connection
var socket = io.connect('http://localhost:4000');

var btn1 = document.getElementById('log')
var btn2 = document.getElementById('ranking')
var app = angular.module("myApp", []);
app.controller("tableCtrl", function($scope){

	// Emit events
	btn1.addEventListener('click', function(){
	    socket.emit('log')
	});

	btn2.addEventListener('click', function(){
	    socket.emit('ranking')
	});

	// Listen for events
	socket.on('log', function(log_file){
	    console.log(log_file)
	    $scope.records = log_file
	    $scope.$apply();
	});

	socket.on('ranking', function(ranking_file){
		console.log(ranking_file)
	    $scope.records = ranking_file
	    $scope.$apply();
	});
})