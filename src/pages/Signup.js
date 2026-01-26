"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./Auth.css");
var Signup = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _a = (0, react_1.useState)({
        name: '',
        email: '',
        password: '',
    }), formData = _a[0], setFormData = _a[1];
    var handleSubmit = function (e) {
        e.preventDefault();
        // Mock signup - in real app, create account
        localStorage.setItem('user', JSON.stringify({ name: formData.name, email: formData.email }));
        navigate('/language-selection');
    };
    return (<div className="auth-page">
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h1 className="auth-logo">SmartClass</h1>
                        <p className="auth-subtitle">Create your free account</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input id="name" type="text" className="form-input" placeholder="Your name" value={formData.name} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { name: e.target.value })); }} required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input id="email" type="email" className="form-input" placeholder="you@example.com" value={formData.email} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { email: e.target.value })); }} required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input id="password" type="password" className="form-input" placeholder="••••••••" value={formData.password} onChange={function (e) { return setFormData(__assign(__assign({}, formData), { password: e.target.value })); }} required minLength={6}/>
                            <p className="form-hint">At least 6 characters</p>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            Create Account
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p className="auth-link-text">
                            Already have an account?{' '}
                            <react_router_dom_1.Link to="/login" className="auth-link">Sign in</react_router_dom_1.Link>
                        </p>
                        <react_router_dom_1.Link to="/" className="auth-link">← Back to home</react_router_dom_1.Link>
                    </div>
                </div>
            </div>
        </div>);
};
exports.default = Signup;
