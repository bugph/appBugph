app.service('APIService', function($http) {
  var self = this;
  self.UrlApi = "http://54.94.214.166:8099";

  self.postarComentario = function (bugComentarios, callback){
      return $http({
        method: 'POST',
        url: self.UrlApi + '/api/comentario',
        data: {
          data: bugComentarios.data,
          comentario: bugComentarios.novoComentario
        }
      })
  }

  self.obterInteracoes = function (callback){
      return $http({
        method: 'GET',
        url: self.UrlApi + '/api/interacoes'
      })
  }

  self.kkk = function (data, callback){
      return $http({
        method: 'POST',
        url: self.UrlApi + '/api/kkk',
        data: { data: data}
      })
  }

  self.putz = function (data, callback){
      return $http({
        method: 'POST',
        url: self.UrlApi + '/api/putz',
        data: { data: data}
      })
  }

  self.novosBugs = function(ultimo){
    return $http({
        method: 'GET',
        url: self.UrlApi + '/api/novos?ultimo='+ultimo
      })
  }

  self.postarBug = function (bug, callback){
      return $http({
        method: 'POST',
        url: self.UrlApi + '/api/bug',
        data: bug
      });
  }

  self.obterTodosBugs = function (callback){
      return $http({
        method: 'GET',
        url: self.UrlApi + '/api/bugs'
      })
  }

  return self;
})
