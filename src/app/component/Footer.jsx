import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-blue-50 py-10">

            <div className="container my-10 mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-bold mb-4">Hobbycue</h3>
                        <ul>
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="/our-services">Our Services</Link></li>
                            <li><Link href="/work-with-us">Work with Us</Link></li>
                            <li><Link href="/faq">FAQ</Link></li>
                            <li><Link href="/contact-us">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">How Do I</h3>
                        <ul>
                            <li><Link href="/sign-up">Sign Up</Link></li>
                            <li><Link href="/add-listing">Add a Listing</Link></li>
                            <li><Link href="/claim-listing">Claim Listing</Link></li>
                            <li><Link href="/post-query">Post a Query</Link></li>
                            <li><Link href="/add-blog-post">Add a Blog Post</Link></li>
                            <li><Link href="/other-queries">Other Queries</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li><Link href="/listings">Listings</Link></li>
                            <li><Link href="/blog-posts">Blog Posts</Link></li>
                            <li><Link href="/shop">Shop / Store</Link></li>
                            <li><Link href="/community">Community</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-bold mb-4">Social Media</h3>
                        <ul className="flex space-x-4">
                            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-google-plus-g"></i></a></li>
                            <li><a href="mailto:your_email@example.com" target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope"></i></a></li>
                        </ul>
                        <h3 className="text-lg font-bold mb-4">Invite Friends</h3>
                        <div className="flex">
                            <input type="email" placeholder="Email ID" className="border border-gray-300 px-4 py-2 rounded-l-md" />
                            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-r-md">Invite</button>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>&copy; Purple Cues Private Limited</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;