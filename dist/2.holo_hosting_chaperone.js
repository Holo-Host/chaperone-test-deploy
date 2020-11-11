(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{2:function(e,t,n){"use strict";(function(e,s){var o,i=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,i){function r(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}c((s=s.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,s,o,i,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,s&&(o=2&i[0]?s.return:i[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,i[1])).done)return o;switch(s=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,s=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){r=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){r.label=i[1];break}if(6===i[0]&&r.label<o[1]){r.label=o[1],o=i;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(i);break}o[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(e){i=[6,e],s=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},a=this&&this.__spreadArrays||function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var s=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],r=0,a=i.length;r<a;r++,o++)s[o]=i[r];return s},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var h=c(n(28)),u=c(n(52)),d=n(56);t.Codec=d.Codec,t.sha256=d.sha256,t.KeyManager=d.KeyManager;var l=n(67),p=l.HoloError,g=(l.AppError,l.RegistrationError),f=l.HostingError;t.HoloError=p;var m=n(22),v=(m.TimeoutError,"object"==typeof window&&"Window"===window.constructor.name),y=n(68).COMB;t.COMB=y;var w=e.crypto||window.crypto,b="https://resolver-dev.holo.host",_="[90mChaperone::console.log( [37m",C={"-32700":"Parse Error","-32600":"Invalid Request","-32601":"Method Not Found","-32602":"Invalid Params","-32603":"Internal Error"};var S=!1;function A(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];!0===S&&(e=H.fmtargs.apply(H,e),console.log.apply(console,e))}function O(e,t,n){return i(this,void 0,void 0,(function(){var s,o,i,a,c;return r(this,(function(r){switch(r.label){case 0:return s={happ_id:e,anonymous:!1,new_agent:n},o=null,t?(o=d.Codec.AgentId.encode(t.publicKey()),i=d.Codec.Signature.encode(t.publicKey()),!0===n?A("User expects Resolver to have no record of this Agent (%s) encoded as (%s)",o,i):s.agent_id=i,A("User expects Resolver to have an existing record of this Agent (%s) encoded as (%s)",o,i)):(A("Getting Hosts for anonymous user because given no agent keys"),s.anonymous=!0),A("POST /resolve/hosts; HOST: %s; BODY: %s;",b,s),[4,fetch(b+"/resolve/hosts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)})];case 1:return[4,r.sent().json()];case 2:if(a=r.sent(),A("Resolved hosts for Agent (%s) -> [ %s ]",o,a.hosts.map(String).join(", ")),0===a.hosts.length)throw new f("Cannot find a Host for App ("+e+") for "+(t?"Agent ("+o+")":"anonymous Agent"));return h=a.hosts,A("Randomly selected Host: %s",c=h[Math.floor(Math.random()*h.length)]),[2,c]}var h}))}))}function E(e){return i(this,void 0,void 0,(function(){var t,n;return r(this,(function(s){switch(s.label){case 0:if("string"!=typeof e)throw new Error("Bad input: hostname paramater '"+e+"' (type "+typeof e+") must be a string");return[4,fetch(b+"/resolve/happId",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({url:e})})];case 1:switch((t=s.sent()).status){case 200:break;case 404:throw new g("App Hostname ("+e+") is not registered.  Please contact Holo Support to learn about registering a hosted Holochain Application.");default:throw new p("Unhandled status response ("+t.status+") from resolver /resolve/happId")}return[4,t.json()];case 2:return n=s.sent(),A("Resolved Hostname (%s) -> HHA ID (%s)",e,n.happ_id),[2,n.happ_id]}}))}))}function k(e,t,n){return i(this,void 0,void 0,(function(){var s,o,i,a;return r(this,(function(r){switch(r.label){case 0:if(!e||!t)throw new Error("Missing parameter");return s=e.publicKey(),o=(new Date).toISOString(),i={agent_id:d.Codec.Signature.encode(s),host_id:t,date:o},[4,fetch(b+"/update/assignHost",{method:"POST",headers:{"Content-Type":"application/json",Authorization:n({message:i})},body:JSON.stringify(i)})];case 1:return[2,200===(a=r.sent()).status||a.status]}}))}))}var H=function(){function e(t){void 0===t&&(t=e.DEFAULTS),this.anonymous=!0,this.agent_overrides={},this.opened=!1,this.wormhole_ready=!1,this.skip_assign_host=!1,this.wormhole_listeners={},this.pending_confirms={},this.opts=Object.assign({},e.DEFAULTS,t),this.opts.connection=Object.assign({},e.DEFAULTS.connection,t.connection),S=this.opts.debug,A("Given configuration: %s",t),A("Final configuration: %s",this.opts),this.port=this.opts.connection.port,this.mode=this.opts.mode,this.COMB=y,this.window=window,!0===this.opts.comb?this.setupCOMBListeners():A("Skipping COMB setup because 'comb' option is set to '%s'",this.opts.comb),this.initializing=this.init(this.opts.timeout)}return e.fmtargs=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return v||("string"==typeof e[0]?e[0]=_+e[0]:e.unshift(_),e.push("[90m)[0m")),e.map((function(e){if("string"!=typeof e)try{return"Object"===e.constructor.name||Array.isArray(e)?JSON.stringify(e,null,4):e}catch(e){}return e}))},e.prototype.alertParent=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return i(this,void 0,void 0,(function(){var n;return r(this,(function(s){if(!0===this.opts.comb){if(!this.parent_window)return[2];A("Emitting '%s' to parent window over message bus with %s args",e,t.length),(n=this.parent_window.msg_bus).emit.apply(n,a(["alert",e],t))}return[2]}))}))},e.prototype.processCredentials=function(e){return i(this,void 0,void 0,(function(){var t;return r(this,(function(n){switch(n.label){case 0:return A("Processing credentials based on selected behavior: %s",(t=window).expect),"signin"!==t.expect?[3,2]:[4,this.signIn(e.email,e.password)];case 1:return[2,n.sent()];case 2:return"signup"!==t.expect&&console.error(new Error("WARNING: Unknown 'expect' value ("+t.expect+")")),[4,this.signUp(e.email,e.password)];case 3:return[2,n.sent()]}}))}))},e.prototype.processCOMBRequest=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return i(this,void 0,void 0,(function(){var n,s,o,i,a,c,h,u,d;return r(this,(function(r){switch(r.label){case 0:switch(n=this,s=window,A("Processing COMB request: %s with %s args",e,t.length),e){case"signUp":return[3,1];case"signIn":return[3,4];case"signOut":return[3,7];case"zomeCall":return[3,9]}return[3,14];case 1:return!1===this.anonymous?(A("Aborting request because we already have a derived Agent (anonymous === %s)",this.anonymous),[2,!1]):(s.showSignUp(),[4,this.getCredentials()]);case 2:return o=r.sent(),[4,n.processCredentials(o)];case 3:return[2,r.sent()];case 4:return!1===this.anonymous?(A("Aborting request because we already have a derived Agent (anonymous === %s)",this.anonymous),[2,!1]):(s.showSignIn(),[4,this.getCredentials()]);case 5:return o=r.sent(),[4,n.processCredentials(o)];case 6:return[2,r.sent()];case 7:return A("Sign-out was called"),!0===this.anonymous?(A("Aborting request because we are already in an anonymous state (anonymous === %s)",this.anonymous),[2,!1]):(this.window.localStorage.removeItem("seed"),[4,this.signOut()]);case 8:return[2,r.sent()];case 9:i=t[0],a=t[1],c=t[2],h=t[3],u=void 0===h?{}:h,r.label=10;case 10:return r.trys.push([10,12,,13]),[4,this.callZomeFunction(i,a,c,u)];case 11:return[2,r.sent()];case 12:return[2,{type:"error",payload:{error:(d=r.sent()).name,message:d.message}}];case 13:case 14:return[3,15];case 15:return[2]}}))}))},e.prototype.setupCOMBListeners=function(){return i(this,void 0,void 0,(function(){var e,t,n,s=this;return r(this,(function(o){switch(o.label){case 0:if(this,window,!this.COMB||"function"!=typeof this.COMB.connect||"function"!=typeof this.COMB.listen)throw A("Unexpected COMB library: %s (type %s)",String(this.COMB),typeof this.COMB),new Error("COMB is not the library we expected");return e={},A("Setting up COMB listeners: '%s'",(t=["signUp","signIn","signOut","zomeCall"]).join("', '")),t.map((function(t){e[t]=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return i(s,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return A("Received COMB request: %s",t),[4,this.processCOMBRequest.apply(this,a([t],e))];case 1:return[2,n.sent()]}}))}))}})),n=this,[4,this.COMB.listen(e)];case 1:return n.parent_window=o.sent(),A("COMB: parent <-> child handshake is complete, message bus is ready for traffic"),[2]}}))}))},e.prototype.getCredentials=function(){return i(this,void 0,void 0,(function(){var e,t,n,s,o;return r(this,(function(i){return e=window,t=e.$,n=t("#modal"),s={$email:t("#email"),$password:t("#password")},o={$email:t("#signup-email"),$password:t("#signup-password"),$confirm:t("#signup-password-confirm"),$confirmFeedback:t("#signup-password-confirm-feedback")},[2,new Promise((function(t,i){e.formSubmit=function(){var i={email:null,password:null};if("signin"===e.expect)i.email=s.$email.val(),i.password=s.$password.val(),s.$email.addClass("is-valid"),s.$password.addClass("is-valid");else if("signup"===e.expect){if(o.$password.val()!==o.$confirm.val())return o.$confirmFeedback.text("Passwords do not match. Please try again."),void o.$confirm.addClass("is-invalid");i.email=o.$email.val(),i.password=o.$password.val(),o.$email.addClass("is-valid"),o.$password.addClass("is-valid"),o.$confirm.addClass("is-valid")}t(i),n.modal("hide"),s.$email.removeClass("is-valid is-invalid").val(""),s.$password.removeClass("is-valid is-invalid").val(""),o.$email.removeClass("is-valid is-invalid").val(""),o.$password.removeClass("is-valid is-invalid").val(""),o.$confirm.removeClass("is-valid is-invalid").val("")},n.modal("show")}))]}))}))},e.prototype.init=function(t){return void 0===t&&(t=5e3),i(this,void 0,void 0,(function(){var n,s,o,i;return r(this,(function(r){switch(r.label){case 0:return A("Initializing mode is set to: %s (%s)",this.mode,I[this.mode]),this.mode===e.HCC&&(void 0!==this.opts.web_user_legend?this.agent_overrides=this.opts.web_user_legend:void 0===this.opts.agent_id&&console.log("WARNING: this Chaperone has no configured users")),this.opts.agent_id?(this.agent_id=this.opts.agent_id,A("Using Agent ID (%s) assigned by Configuration '.agent_id'",this.opts.agent_id)):this.window.localStorage.getItem("seed")?(A("Found locally saved session (seed): %s",n=this.window.localStorage.getItem("seed")),this.mode===e.HCC&&n in this.agent_overrides?(this.agent_id=this.agent_overrides[n],this.anonymous=!1,A("Using Agent overrides from configuration to set Agent ID (%s)",this.agent_id)):(s=d.Codec.Digest.decode(n),this.createAgentFromSeed(s))):this.createAnonymousAgent(),this.mode!==e.DEVELOP&&this.mode!==e.HCC?[3,1]:(this.hha_hash=this.opts.instance_prefix,A("Skipping Resolver Hostname lookup and using configured instance prefix as HHA ID: %s",this.hha_hash),this.instance_prefix=this.opts.instance_prefix,A("Using Instance Prefix (%s) from Configuration '.instance_prefix'",this.opts.instance_prefix),[3,3]);case 1:return o=this.happHost(),i=this,[4,E(o)];case 2:i.hha_hash=r.sent(),A("Using Happ ID (%s) from Resolver",this.hha_hash),this.instance_prefix=this.hha_hash,r.label=3;case 3:return"undefined"===this.opts.connection.host&&(this.opts.connection.host=window.location.hostname),[4,this.connect(!1,t)];case 4:return r.sent(),[2]}}))}))},e.prototype.connect=function(t,n){return void 0===t&&(t=!1),void 0===n&&(n=5e3),i(this,void 0,void 0,(function(){var s,o,i,a,c,u,d,l,g,f,m;return r(this,(function(r){switch(r.label){case 0:if(A("Begin creation of an RPC WebSocket connection for %s Agent (timeout %s)",t?"new":"existing",n),!0===this.opened)throw new Error("Connection already open, must run '.disconnect()' before starting a new connection.");if(!this.opts.connection.host)return[3,1];if(this.mode===e.PRODUCT&&"localhost"===this.opts.connection.host&&void 0===this.opts.host_agent_id)throw new Error("Cannot set 'host' to localhost without also specifying 'host_agent_id' ("+this.opts.host_agent_id+")");return this.host=this.opts.connection.host,A("Using Host (%s) assigned by Configuration '.connection.host'",this.host),[3,3];case 1:return s=this,[4,O(this.hha_hash,!0!==this.anonymous&&this.keys,t)];case 2:s.host=r.sent(),A("Using Host (%s) assigned by Resolver",this.host),r.label=3;case 3:return o=this.host,i=this.agent_id,a=this.opts.connection.path,c=!0===this.opts.connection.ssl?"wss":"ws",u=c+"://"+o+":"+this.port+a+"?anonymous="+this.anonymous+"&agent_id="+i+"&hha_hash="+this.hha_hash,A("Create client to Host (%s://%s:%s%s) with connections settings: anonymous=%s agent_id=%s hha_hash=%s",c,o,this.port,a,this.anonymous,i,this.hha_hash),this.conn=new h.default(u),[4,this.conn.opened(n)];case 4:if(r.sent(),this.opened=!0,this.alertParent("connected"),this.mode===e.HCC)return A("Skipping wormhole setup because we are in development mode (HCC)"),this.wormhole_ready=!0,[2];if(!1!==this.anonymous)return[3,17];r.label=5;case 5:return r.trys.push([5,15,,17]),[4,this.handleWormholeRequests()];case 6:return r.sent(),t?(A("Calling '%s' because Agent wants to sign-up (new_agent == %s)","holo/agent/signup",t),[4,this.conn.call("holo/agent/signup",[this.hha_hash,i])]):[3,10];case 7:if(!0!==(d=r.sent()))throw A("Sign-up returned a non-success response: %s",d),new p("Failed to sign-up");return!0===this.skip_assign_host?[3,9]:(A("Alerting Resolver (via /assignHost) to new Host (%s) for Agent ID (%s)",o,i),[4,k(this.keys,o,this.getSignature.bind(this))]);case 8:if(!0!==(l=r.sent()))throw A("Resolver returned a non-success response: %s",l),new p("Failed to save assignedHost");A("Resolver successfully assigned Host (%s) to Agent (%s)",o,i),r.label=9;case 9:return this.alertParent("signup"),[3,14];case 10:A("Calling '%s' because Agent wants to sign-in (new_agent == %s)","holo/agent/identify",t),g=void 0,r.label=11;case 11:return r.trys.push([11,13,,14]),[4,this.conn.call("holo/agent/identify",[i])];case 12:if(!0!==(g=r.sent()))throw A("Sign-in returned a non-success response: %s",g),g;return this.alertParent("signin"),[3,14];case 13:throw(f=r.sent()).message.toLowerCase().includes("unknown to this host")?new p("Wrong Host.  Host "+o+" cannot identify agent "+i):new p("Identify Error: "+JSON.stringify(f));case 14:return[3,17];case 15:return m=r.sent(),A("Sign-in/up failed with: %s",String(m)),[4,this.signOut()];case 16:throw r.sent(),m;case 17:return[2]}}))}))},e.prototype.disconnect=function(){return i(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return!1===this.opened?[2]:(A("Disconnecting from Host (%s)",this.host),this.conn.close(),[4,this.conn.closed()]);case 1:return e.sent(),A("Setting state to closed and not ready"),this.opened=!1,this.wormhole_ready=!1,this.alertParent("disconnected"),[2]}}))}))},e.prototype.ready=function(e){return void 0===e&&(e=5e3),i(this,void 0,void 0,(function(){var t,n=this;return r(this,(function(s){switch(s.label){case 0:A("Started waiting for Chaperone ready state (timeout %s)",e),s.label=1;case 1:return s.trys.push([1,,3,4]),[4,m((function(){return i(n,void 0,void 0,(function(){var e=this;return r(this,(function(n){return[2,new Promise((function(n,s){e.initializing.catch(s);var o=1;t=setInterval((function(){return i(e,void 0,void 0,(function(){var e;return r(this,(function(s){if(e=o,this.conn&&(o=2),!0===this.opened&&(o=3),!0!==this.opened||!0!==this.anonymous&&!0!==this.wormhole_ready||(o=4),o===e)return 4===e&&clearInterval(t),[2];switch(o){case 1:A("Ready state %s - Chaperone's client has not been created yet",o);break;case 2:A("Ready state %s - Client connection is incomplete (%s)",o,this.conn.readyState);break;case 3:A("Ready state %s - Wormhole is not ready",o);break;case 4:A("Ready state %s - Connection to Host (%s) is ready for App traffic",o,this.host),n(this)}return[2]}))}))}),100)}))]}))}))}),e)];case 2:return[2,s.sent()];case 3:return clearInterval(t),[7];case 4:return[2]}}))}))},e.prototype.wormholeRequest=function(e){var t=this;return new Promise((function(n,s){t.wormhole_listeners[e]=[n,s]}))},e.prototype.handleWormholeRequests=function(){return i(this,void 0,void 0,(function(){var e,t,n=this;return r(this,(function(s){switch(s.label){case 0:A("Begin wormhole setup for Agent %s",this.agent_id),s.label=1;case 1:return s.trys.push([1,3,,4]),[4,this.conn.call("holo/wormhole/event",[this.agent_id])];case 2:return e=s.sent(),[3,4];case 3:if((t=s.sent()).message.includes("unknown to this host"))return[2,A("WARNING: this host does not know this Agent identity. Sign-up must be the next call.")];throw new p("RPC Error: "+JSON.stringify(t));case 4:if("string"!=typeof e)throw A("Unexpected Envoy endpoint type '%s'.  Expected type 'string'",typeof e),"HoloError"===e.name?new p(e.message):new p("Unexpected response from Host: "+JSON.stringify(e));return A("Unique Envoy endpoint for signing requests: %s",e),A("Subscribe RPC WebSocket to unique endpoint (%s)",e),[4,this.conn.subscribe(e)];case 5:return s.sent(),A("Attach listener for wormhole requests"),this.conn.on(e,(function(e,t){return i(n,void 0,void 0,(function(){var n,s,o,i;return r(this,(function(r){switch(r.label){case 0:return A("WORMHOLE #%s: received message length %s",e,t.length),n=this.getSignature(t),A("WORMHOLE #%s: sending signature %s",e,n),[4,this.conn.call("holo/wormhole/response",[e,n])];case 1:return!0!==(s=r.sent())&&console.error("%s returned non-success response: %s","holo/wormhole/response",s),void 0!==this.wormhole_listeners[e]&&(A("Calling listener for wormhole #%s with signature (type %s) and data (type %s)",e,typeof n,typeof t),o=this.wormhole_listeners[e],i=o[0],o[1],i([n,t]),delete this.wormhole_listeners[e]),[2]}}))}))})),A("Wormhole setup is complete and listening for Envoy events @ %s",e),this.wormhole_ready=!0,[2]}}))}))},e.prototype.createAnonymousAgent=function(){try{this.seed=function(e){if(void 0===e&&(e=32),v){var t=new Uint8Array(e);return window.crypto.getRandomValues(t),t}return w.randomBytes(e)}(32),this.keys=new d.KeyManager(this.seed),this.agent_id=d.Codec.AgentId.encode(this.keys.publicKey()),A("Created anonymous Agent %s from random bytes",this.agent_id),this.anonymous=!0}catch(e){A("Failed to create anonymous Agent: %s",String(e)),console.error(e)}},e.prototype.createAgentFromSeed=function(e){try{this.seed=e,this.keys=new d.KeyManager(this.seed),this.agent_id=d.Codec.AgentId.encode(this.keys.publicKey()),A("Created Agent %s from stored seed (%s)",this.agent_id,e),this.anonymous=!1}catch(e){A("Failed to create Agent from seed: %s",String(e)),console.error(e)}},e.prototype.deriveAgent=function(e,t){if(A("Derive Agent from email/password (%s/******)",e),e in this.agent_overrides)return this.agent_id=this.agent_overrides[e],this.anonymous=!1,A("Used Agent overrides for email (%s) to set Agent ID (%s)",e,this.agent_id),void this.window.localStorage.setItem("seed",e);if(this.opts.agent_id)return A("Skipping derive Agent because Configuration set '.agent_id' to %s",this.opts.agent_id),void(this.anonymous=!1);try{A("Derive seed from HHA ID / email / password: %s / %s / ******",this.hha_hash,e),this.seed=s.from(d.deriveSeedFrom(d.Codec.Digest.decode(this.hha_hash),e,t)),this.window.localStorage.setItem("seed",d.Codec.Digest.encode(this.seed)),this.keys=new d.KeyManager(this.seed),this.agent_id=d.Codec.AgentId.encode(this.keys.publicKey()),A("Derived Agent ID: %s",this.agent_id),this.anonymous=!1}catch(e){A("Failed to create derived Agent: %s",String(e)),console.error(e)}},e.prototype.signUp=function(e,t,n){var s=(void 0===n?{}:n).timeout,o=void 0===s?5e3:s;return i(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return A("Sign-up with %s/****** (timeout %s)",e,o),this.deriveAgent(e,t),[4,this.disconnect()];case 1:return n.sent(),[4,this.connect(!0,o)];case 2:return n.sent(),[2,!1===this.anonymous]}}))}))},e.prototype.signIn=function(e,t,n){var s=(void 0===n?{}:n).timeout,o=void 0===s?5e3:s;return i(this,void 0,void 0,(function(){return r(this,(function(n){switch(n.label){case 0:return A("Sign-in with %s/****** (timeout %s)",e,o),this.deriveAgent(e,t),[4,this.disconnect()];case 1:return n.sent(),[4,this.connect(!1,o)];case 2:return n.sent(),[2,!1===this.anonymous]}}))}))},e.prototype.signOut=function(e){var t=(void 0===e?{}:e).timeout,n=void 0===t?5e3:t;return i(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return A("Sign-out current Agent %s (timeout %s)",this.agent_id,n),[4,this.disconnect()];case 1:return e.sent(),this.alertParent("signout"),this.createAnonymousAgent(),[4,this.connect(!1,n)];case 2:return e.sent(),[2,!0===this.anonymous]}}))}))},e.prototype.callZomeFunction=function(t,n,s,o){return void 0===o&&(o={}),i(this,void 0,void 0,(function(){var i,a,c,h,u,d,l,g,f,m,v,y;return r(this,(function(r){switch(r.label){case 0:return A("Initializing zome function call: %s:%s->%s with %s args",t,n,s,Object.keys(o).length),[4,this.ready()];case 1:if(r.sent(),"string"!=typeof(i=this.instance_prefix))throw new Error("Instance prefix should be a string.  Found '"+i+"' (type "+typeof i+")");return a={zome:n,function:s,args:o},!1===this.anonymous?(a.instance_id=i+"::"+this.agent_id+"-"+t,A("Using Agent instance (%s)",a.instance_id)):(a.instance_id=i+"::"+t,A("Using anonymous instance (%s)",a.instance_id)),this.mode!==e.HCC?[3,3]:(A("Calling Conductor directly because we are in development mode (HCC)"),[4,this.conn.call("call",a)]);case 2:return[2,r.sent()];case 3:return a.hha_hash=this.hha_hash,a.dna_alias=t,A("Added timestamp (%s) and Host ID (%s) to payload",(c={timestamp:(new Date).toISOString().replace("Z","+00:00"),host_id:this.hostId(),call_spec:a}).timestamp,c.host_id),[4,this.requestServiceSignature(c)];case 4:h=r.sent(),u={anonymous:this.anonymous,agent_id:this.agent_id,payload:c,service_signature:h},A("Attached payload signature (%s) from Agent (%s)",h,this.agent_id),r.label=5;case 5:return r.trys.push([5,7,,8]),A("Sending request %s to Envoy",h),[4,this.conn.call("holo/call",u)];case 6:return d=r.sent(),[3,8];case 7:throw l=r.sent(),g=void 0,console.error(l),g=l instanceof Error?String(l):void 0!==C[l.code]?C[l.code]+" ("+l.code+"): "+l.message:l.code<=-32e3&&l.code>-32100?l.message+" -> "+JSON.stringify(l.data):"'holo/call' error: Error type unknown: "+l.constructor.name,new p(g);case 8:if(f=d.response_id,m=d.error,v=d.result,y=void 0===v?"":v,A("Schedule service confirmation for response (%s) initiated by request (%s)",f,h),this.sendServiceConfirmation(f,y).catch((function(e){A("Service confirmation failed for request %s: %s",h,String(e)),console.error(e)})),m)throw A("Recieved error response from Envoy: %s",m),new p(m.name+": "+m.message);return A("Returning successful result (type %s) for request %s",typeof y,h),[2,y]}}))}))},e.prototype.sendServiceConfirmation=function(e,t){return i(this,void 0,void 0,(function(){var n,s,o,i,a,c;return r(this,(function(r){switch(r.label){case 0:return this.pending_confirms[e]=!0,o=(s=d.Codec.Digest).encode,[4,d.sha256(u.default(t))];case 1:return n=o.apply(s,[r.sent()]),A("Added pending confirmation for response (%s) with hash: %s",e,n),i={response_hash:n,client_metrics:{duration:"1s"}},A("Sending confirmation payload with signature (%s)",a=this.getSignature(i)),[4,this.conn.call("holo/service/confirm",[e,i,a])];case 2:if(!0!==(c=r.sent()))throw A("%s returned non-success response: %s","holo/service/confirm",c),c.error&&"HoloError"===c.error.name?new Error(c.error.message):new Error(c.error);return delete this.pending_confirms[e],A("Completed pending confirmation (%s)",e),[2,c]}}))}))},e.prototype.close=function(){return i(this,void 0,void 0,(function(){return r(this,(function(e){switch(e.label){case 0:return[4,this.disconnect()];case 1:return e.sent(),[2]}}))}))},e.prototype.websocket=function(){return this.opened||A("WARN: Returned WebSocket is not open and may be replaced by rpc-websocket library once open"),v?this.conn.socket.socket:this.conn.socket},e.prototype.agentId=function(){if("string"!=typeof this.agent_id)throw new Error("Agend ID should be a string starting with HcS.  Found '"+this.agent_id+"' (type "+typeof this.agent_id+")");return!0===this.anonymous?"anonymous":this.agent_id},e.prototype.hostId=function(){if(this.opts.host_agent_id)return A("Returning Host ID (%s) assigned by Configuration '.host_agent_id'",this.opts.host_agent_id),this.opts.host_agent_id;var e=this.host.split("."),t=d.Codec.AgentId.encode(d.Codec.Base36.decode(e[0]));return A("Using Host ID (%s) found in URI subdomain (%s)",t,this.host),t},e.prototype.happHost=function(){try{var e=window.location!=window.parent.location?document.referrer:document.location.href;return A("Returing host from URL: %s",e),new URL(e).host}catch(e){A("Failed to determine App host: %s",String(e)),console.error(e)}},e.prototype.getSignature=function(e){var t;if("string"==typeof e)t=d.Codec.Signature.decode(e),A("Decoded base64 message (length %s) into bytes (length %s)",e.length,t.length);else{var n=u.default(e);t=(new TextEncoder).encode(n),A("Serialized message (length %s) and converted to bytes (length %s)",n.length,t.length)}var s=this.keys.sign(t),o=d.Codec.Signature.encode(s);return A("Signature (%s) for message bytes <%s...%s>",o,t.slice(0,4).join(", "),t.slice(-4).join(", ")),o},e.prototype.requestServiceSignature=function(e){return i(this,void 0,void 0,(function(){var t,n,s,o;return r(this,(function(i){switch(i.label){case 0:return t=JSON.parse(JSON.stringify(e)),n=u.default(t.call_spec.args),[4,d.sha256(n)];case 1:return s=i.sent(),o=d.Codec.Digest.encode(s),t.call_spec.args_hash=o,A("Added 'args' hash (%s) to call spec",o),delete t.call_spec.args,delete t.call_spec.instance_id,A("Signing request pack: %s",t),[2,this.getSignature(t)]}}))}))},e.PRODUCT=0,e.DEVELOP=1,e.HCC=2,e.DEFAULTS={mode:e.PRODUCT,timeout:5e3,debug:!1,comb:!0,connection:{port:4656,ssl:!1,path:"/hosting/"}},e.COMB=y,e}();t.Chaperone=H;var I=((o={})[H.HCC]="HCC",o[H.DEVELOP]="DEVELOP",o[H.PRODUCT]="PRODUCT",o);t.deriveKeys=function(e,t,n){return s.from(d.deriveSeedFrom(d.Codec.Digest.decode(e),t,n)),new d.KeyManager(this.seed)}}).call(this,n(9),n(4).Buffer)},22:function(e,t){class n extends Error{constructor(e,t,...s){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,n),this.name="TimeoutError",this.timeout=t}}function s(e,t=2e3){return new Promise(async(s,o)=>{const i=setTimeout(()=>{o(new n("Waited for "+t/1e3+" seconds",t))},t);try{s(await e())}catch(e){o(e)}finally{clearTimeout(i)}})}s.TimeoutError=n,e.exports=s},28:function(e,t,n){const s=n(29).Client,o=n(22),{TimeoutError:i}=o;e.exports=class extends s{opened(e=2e3){return o(()=>new Promise((e,t)=>this.on("open",e)),e)}closed(e=2e3){return o(()=>new Promise((e,t)=>this.on("close",()=>{e()})),e)}}},56:function(e,t,n){"use strict";(function(e){var s=this&&this.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(o,i){function r(e){try{c(s.next(e))}catch(e){i(e)}}function a(e){try{c(s.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}c((s=s.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,s,o,i,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,s&&(o=2&i[0]?s.return:i[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,i[1])).done)return o;switch(s=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,s=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){r=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){r.label=i[1];break}if(6===i[0]&&r.label<o[1]){r.label=o[1],o=i;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(i);break}o[2]&&r.ops.pop(),r.trys.pop();continue}i=t.call(e,r)}catch(e){i=[6,e],s=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};t.__esModule=!0;var i=n(57);t.Codec=i.Codec,t.KeyManager=i.KeyManager,t.deriveSeedFrom=i.deriveSeedFrom;t.sha256=function(t){return s(void 0,void 0,void 0,(function(){var n,s;return o(this,(function(o){switch(o.label){case 0:return void 0!==crypto.subtle?[3,1]:[2,crypto.createHash("sha256").update(e.from(t)).digest()];case 1:return s=(n=e).from,[4,crypto.subtle.digest("SHA-256",e.from(t))];case 2:return[2,s.apply(n,[o.sent()])]}}))}))}}).call(this,n(4).Buffer)},67:function(e,t){class n extends Error{constructor(...e){super(...e),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name=this.constructor.name}[Symbol.toPrimitive](e){return"number"===e?null:this.toString()}toString(){return`[${this.constructor.name}( ${this.message} )]`}toJSON(e=!1){return{error:this.name,message:this.message,stack:!0===e?"string"==typeof this.stack?this.stack.split("\n"):this.stack:void 0}}}class s extends n{}e.exports={HoloError:class extends n{},AppError:s,RegistrationError:class extends s{},HostingError:class extends s{}}}}]);