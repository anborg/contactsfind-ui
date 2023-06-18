import Vue from 'vue';

Vue.config.errorHandler = (error, instance, info) => {
  // err: error trace
  // vm: component in which error occured
  // info: Vue specific error information such as lifecycle hooks, events etc.
  
  // TODO: Perform any custom logic or log to server
  // Handle the error globally
  console.err("Global error:", error);
  console.log("Vue instance:", instance);
  console.log("Error info:", info);

  // Add code for UI notifications, reporting or other error handling logic
};