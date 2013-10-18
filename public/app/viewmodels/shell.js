define(["plugins/router"],function(router){
  return {
    name: "Durandal app",
    activate: function() {
      router.map([
          { route: '', title:'Time', moduleId: 'viewmodels/time', nav: true },
          { route: 'clients', moduleId: 'viewmodels/clients', nav: true }
          { route: 'projects', moduleId: 'viewmodels/projects', nav: true }
      ]).buildNavigationModel();
      return router.activate();
    }
  };
})
