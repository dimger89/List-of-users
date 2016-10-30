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
