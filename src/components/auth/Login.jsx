import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });    const [error, setError] = useState("");
    const [recaptchaValue, setRecaptchaValue] = useState(null);
    const navigate = useNavigate();
    const recaptchaRef = useRef();
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check reCAPTCHA
        if (!recaptchaValue) {
            setError("Please complete the reCAPTCHA verification.");
            return;
        }
        
        // Simulate login logic
        try {
            // Here you would typically send a request to your backend API
            // Include recaptchaValue in your API request for server-side verification
            console.log("User logged in:", formData);
            console.log("reCAPTCHA token:", recaptchaValue);
            navigate("/dashboard");
        } catch (err) {
            setError("Login failed. Please check your credentials.");
        }
    };

    const handleRecaptchaChange = (value) => {
        setRecaptchaValue(value);
        if (value) {
            setError(""); // Clear error when reCAPTCHA is completed
        }
    };
      return (
        <div className="min-h-screen bg-gradient-to-br from-secondary via-red-900 to-secondary flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-2">
                        Welcome Back
                    </h2>
                    <p className="text-gray-300">Sign in to your account</p>
                </div>
                
                {/* Login Form Container */}
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 shadow-2xl border border-white border-opacity-20">
                    {error && (
                        <div className="mb-6 p-3 bg-red-500 bg-opacity-20 border border-red-500 border-opacity-50 rounded-lg">
                            <p className="text-red-200 text-sm">{error}</p>
                        </div>
                    )}
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-white mb-2" htmlFor="email">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-white border-opacity-30 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm"
                                placeholder="Enter your email"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-white mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 border border-white border-opacity-30 rounded-lg bg-white bg-opacity-10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent backdrop-blur-sm"
                                placeholder="Enter your password"
                            />                        </div>
                        
                        {/* reCAPTCHA Component */}
                        <div className="flex justify-center">
                            <div className="transform scale-75 sm:scale-100 origin-center">
                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                                    onChange={handleRecaptchaChange}
                                    theme="dark"
                                    size="normal"
                                />
                            </div>
                        </div>
                        
                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-yellow-400 text-black font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Sign In
                        </button>
                    </form>
                    
                    <div className="mt-6 text-center">
                        <a href="#" className="text-primary hover:text-yellow-400 text-sm transition-colors duration-300">
                            Forgot your password?
                        </a>
                    </div>
                    
                    <div className="mt-6 text-center">
                        <p className="text-gray-300 text-sm">
                            Don't have an account?{' '}
                            <a href="/register" className="text-primary hover:text-yellow-400 font-medium transition-colors duration-300">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}