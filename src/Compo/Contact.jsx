import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { EMAIL_JS_SERVICE_ID, EMAIL_JS_TEMPLATE_ID, EMAIL_JS_PUBLIC_KEY } from "../Compo/constact";
import Footer from "../Compo/Foter";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null); 
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);
		setError(null);
		setSuccess(false);

		const username = form.name.trim();
		const user_email = form.email.trim();
		const user_message = form.message.trim();

		if (username === '' || user_email === '' || user_message === '') {
			setLoading(false);
			setError("Please fill all the fields.");
			return;
		}

		emailjs
			.send(
				EMAIL_JS_SERVICE_ID,
				EMAIL_JS_TEMPLATE_ID,
				{
					from_name: username,
					to_name: "Devraj Singh",
					reply_to: user_email,
					to_email: "devrajsinghsisodiya72@gmail.com",
					message: user_message,
				},
				EMAIL_JS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					setSuccess(true);
					setForm({
						name: "",
						email: "",
						message: "",
					});
				},
				(error) => {
					setLoading(false);
					setError("Uh, oh! Something went wrong. Please try again later.");
					console.error(error);
				}
			);
	};

	return (
		<div className='relative z-0 bg-[#1a1a1a] w-screen h-full ' id="contact">   
			<div className='text-white contact overflow-x-hidden ' id='contact'>
				<div className='z-10 w-full sm:w-[650px] m-auto p-8 rounded-2xl pt-30' >
					<p className='font-light'>REACH OUT TO ME</p>
					<h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>Contact.</h2>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className='mt-12 flex flex-col gap-8'
					>
						<label className='flex flex-col'>
							<span className=' font-medium mb-4'>Your Name</span>
							<input
								type='text'
								name='name'
								value={form.name}
								onChange={handleChange}
								placeholder="Enter your name"
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className=' font-medium mb-4'>Your email</span>
							<input
								type='email'
								name='email'
								value={form.email}
								onChange={handleChange}
								placeholder="Enter your email"
								className='py-4 px-6 rounded-lg  font-medium bg-gray-900'
								required
							/>
						</label>
						<label className='flex flex-col'>
							<span className='font-medium mb-4'>Your Message</span>
							<textarea
								rows={7}
								name='message'
								value={form.message}
								onChange={handleChange}
								placeholder='Do you have anything to say?'
								className='py-4 px-6 rounded-lg outline-none border-none font-medium bg-gray-900'
								required
							/>
						</label>

						<button
							type='submit'
							className='pt-3 px-8 rounded-xl outline-none w-fit font-bold shadow-md bg-gray-900'
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form>

					{error && <p className="text-red-500 mt-4">{error}</p>}
					{success && <p className="text-green-500 mt-4">Message sent successfully!</p>}
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Contact;