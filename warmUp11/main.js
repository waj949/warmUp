var $listItem1  = $('<li>hello to the left!</li>');
var $listItem2  = $('<li>hello to the right!</li>');
var $leftList  = $('.leftList');
var $rightList = $('.rightList');

$('body').on('click', '#create', function(){
	$leftList.html('');
	$rightList.html('');
});
// when create is clicked the lists are empty so u need to press left or right to add a new item

$('body').on('click', '.left', function(){
	$listItem1.appendTo($leftList )
});

$('body').on('click', '.right', function(){
	$listItem2.appendTo($rightList)
});