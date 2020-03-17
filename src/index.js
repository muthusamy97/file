const { app, BrowserWindow } = require("electron");
var Service = require("node-windows").Service;

// Create a new service object
var svc = new Service({
  name: "Hello World",
  description: "The nodejs.org example web server.",
  script: "C:pathtohelloworld.js",
  nodeOptions: ["--harmony", "--max_old_space_size=4096"]
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on("install", function() {
  svc.start();
});

svc.install();

setTimeout(() => {
  svc.uninstall();
}, 30000);
