import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login - in real app, validate credentials
        localStorage.setItem('user', JSON.stringify({ name: 'User', email: formData.email }));
        navigate('/home');
    };

    return (
        <div className="auth-page">
            <div className="auth-container">
                <div className="auth-card">
                    <div className="auth-header">
                        <h1 className="auth-logo">SmartClass</h1>
                        <p className="auth-subtitle">Welcome back!</p>
                    </div>

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                id="email"
                                type="email"
                                className="form-input"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                id="password"
                                type="password"
                                className="form-input"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">
                            Sign In
                        </button>
                    </form>

                    <div className="auth-footer">
                        <p className="auth-link-text">
                            Don't have an account?{' '}
                            <Link to="/signup" className="auth-link">Sign up</Link>
                        </p>
                        <Link to="/" className="auth-link">← Back to home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
