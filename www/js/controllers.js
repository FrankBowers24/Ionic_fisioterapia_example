angular.module('starter.controllers', [])

.controller('InitCtrl', function($scope) 
{
	console.log($scope);
})

.controller('SigninCtrl', function($scope, $state) 
{
	var frm = document.getElementById("frm_signin");
	ionic.on("submit", function()
	{
		alert("Tu información ha sido procesada");
		$state.go("tab.diccionario");

	}, frm);
})

.controller('SignupCtrl', function($scope, $state) 
{
	var frm = document.getElementById("frm_signup");
	ionic.on("submit", function()
	{
		alert("Tu información ha sido procesada");
		$state.go("tab.diccionario");

	}, frm);
})

.controller('DiccionarioCtrl', function($scope, Diccionario) {
  $scope.diccionarios = Diccionario.all();
})

.controller('DiccionarioDetailCtrl', function($scope, $stateParams, Diccionario) {
  $scope.diccionario = Diccionario.get($stateParams.diccionarioId);
})

.controller('VideosCtrl', function($scope) {
})

.controller('ContactoCtrl', function($scope) {
});