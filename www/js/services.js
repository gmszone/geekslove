angular.module('starter.services', [])

.factory('Blog', function($http, $q) {
  var blogs = [
	  {
		  id: 0,
		  name: "序"
	  },
	  {
	      id: 1,
	      name: "爱它，还是爱我"
      },
	  {
		  id: 2,
		  name: "去实验室约会吧"
	  },
	  {
		  id: 3,
		  name: "我真的不是修电脑的"
	  },
	  {
		  id: 4,
		  name: "我的编程养成记"
	  },
	  {
		  id: 5,
		  name: "极客的神逻辑"
	  },
	  {
		  id: 6,
		  name: "我们的战争"
	  },
	  {
		  id: 7,
		  name: "和电脑的亲密接触"
	  },
	  {
		  id: 8,
		  name: "邋遢IT民工拯救记"
	  },
	  {
		  id: 9,
		  name: "当情书遇上技术博客"
	  },
	  {
		  id: 10,
		  name: "技术宅不解风情"
	  },
	  {
		  id: 11,
		  name: "和不会聊天的人谈恋爱"
	  },
	  {
		  id: 12,
		  name: "不想加班的程序员不是好程序员"
	  },
	  {
		  id: 13,
		  name: "技术宅的网购属性"
	  },
	  {
		  id: 14,
		  name: "找女朋友难，找工作更难"
	  },
	  {
		  id: 15,
		  name: "极客的文艺情怀"
	  },
	  {
		  id: 16,
		  name: "二十二岁开始的初恋"
	  },
	  {
		  id: 17,
		  name: "当爱情遭遇远程调试"
	  },
	  {
		  id: 18,
		  name: "基友一生一起走"
	  },
	  {
		  id: 19,
		  name: "梦想还是要有的，万一实现了呢"
	  },
	  {
		  id: 20,
		  name: "待我代码编成，娶你为妻可好"
	  },
	  {
		  id: 21,
		  name: "番外之一： 爱情中的那些碎段子"
	  },
	  {
		  id: 22,
		  name: "番外之二： 程序员如何邂逅真爱之伪攻略篇"
	  }];

  return {
    all: function() {
      return blogs;
    },
	  async: function(file_name) {
		  var def = $q.defer();
		  $http.get('assets/' + file_name + '.md')
			  .success(function (response) {
				  def.resolve(response);
			  }).error(function () {
				  def.reject("Failed to get albums");
			  });
		  return def.promise;
	  },
    get: function(blogId) {
      for (var i = 0; i < blogs.length; i++) {
        if (blogs[i].id === parseInt(blogId)) {
          return blogs[i];
        }
      }
      return null;
    }
  };
});
