(function() {
  'use strict';

  angular
    .module('trinetix')
    .factory('ListService', ListService);

  ListService.$inject = ['$log'];

    function ListService($log) {
      var users = [
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 18
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 35
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 45
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'opov@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorodafhadv',
          email: 'sashas@gmail.com',
          age: 35
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 19
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 45
        },
        {
          id: 5,
          firstName: 'Leha',
          lastName: 'Popov',
          email: 'sashas32@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Vova',
          lastName: 'Ivanov',
          email: 'sashas6dfs@gmail.com',
          age: 26
        },
        {
          id: 0,
          firstName: 'Sasha',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 17
        },
        {
          id: 0,
          firstName: 'Andrew',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        },
        {
          id: 0,
          firstName: 'Alex2',
          lastName: 'Sidorov',
          email: 'sashas@gmail.com',
          age: 29
        }
      ];
      return {
        getUsers: function() {
          return users;
        },
        addUser: function (user) {
          $log.log(user);
          //users.push(user);
        }
      };
    }

})();
