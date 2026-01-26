"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_router_dom_1 = require("react-router-dom");
require("./App.css");
var Landing_1 = require("./pages/Landing");
var Login_1 = require("./pages/Login");
var Signup_1 = require("./pages/Signup");
var Home_1 = require("./pages/Home");
var Lessons_1 = require("./pages/Lessons");
var Roleplay_1 = require("./pages/Roleplay");
var Immersion_1 = require("./pages/Immersion");
var CommuteMode_1 = require("./pages/CommuteMode");
var Translator_1 = require("./pages/Translator");
var Profile_1 = require("./pages/Profile");
var LanguageSelection_1 = require("./pages/LanguageSelection");
var AITutor_1 = require("./pages/AITutor");
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <div className="app">
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path="/" element={<Landing_1.default />}/>
          <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
          <react_router_dom_1.Route path="/signup" element={<Signup_1.default />}/>
          <react_router_dom_1.Route path="/home" element={<Home_1.default />}/>
          <react_router_dom_1.Route path="/language-selection" element={<LanguageSelection_1.default />}/>
          <react_router_dom_1.Route path="/lessons" element={<Lessons_1.default />}/>
          <react_router_dom_1.Route path="/ai-tutor" element={<AITutor_1.default />}/>
          <react_router_dom_1.Route path="/roleplay" element={<Roleplay_1.default />}/>
          <react_router_dom_1.Route path="/immersion" element={<Immersion_1.default />}/>
          <react_router_dom_1.Route path="/commute" element={<CommuteMode_1.default />}/>
          <react_router_dom_1.Route path="/translator" element={<Translator_1.default />}/>
          <react_router_dom_1.Route path="/profile" element={<Profile_1.default />}/>
        </react_router_dom_1.Routes>
      </div>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
