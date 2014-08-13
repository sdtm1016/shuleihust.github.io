var members=[{
	name : 'shuleihust',
	description : '',
	headImageUrl : 'https://avatars1.githubusercontent.com/u/4877029?v=2&s=460',
	url : 'https://github.com/shuleihust'
},{
	name : 'markyun',
	description : '',
	headImageUrl : 'https://avatars3.githubusercontent.com/u/2833137?v=2&s=400',
	url : 'https://github.com/markyun'
},{
	name : 'wangchao',
	description : '',
	headImageUrl : 'https://avatars0.githubusercontent.com/u/779386?v=2&s=460',
	url : 'https://github.com/wangchao'
}];

$(function(){
	/*<li><img class="am-thumbnail" src="https://avatars3.githubusercontent.com/u/2833137?v=2&s=400" alt="markyun" alt="markyun"/></li>*/
	for (var i = 0; i < members.length; i++) {
		var el = $('<li><a href="'+members[i].url+'" target="_blank"><img class="am-thumbnail" src="'+members[i].headImageUrl+'" alt="'+members[i].name+'" title="'+members[i].name+'"/></a></li>')
		$('.blog-members').append(el);
	};
});