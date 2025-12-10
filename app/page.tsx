"use client";
import React, { useEffect } from 'react';
import Image from "next/image";

const rooms = [
	{
		id: 1,
		name: "Deluxe Family Room AC | Non-AC",
		description: "Comfortable space for the whole family with extra beds",
		price: 250,
		image:
			"/deluxefamily.jpg",
		features: ["King Beds", "Private Bathroom", "Private Balcony", "Free WiFi", "Living Area", "Kitchenette"],
	},
	{
		id: 2,
		name: "Deluxe Family Room AC | Non-AC",
		description: "Perfect for business travelers with a dedicated workspace",
		price: 180,
		image:
			"/deluxefamily1.jpg",
		features: ["King Beds", "Private Bathroom", "Private Balcony", "Free WiFi", "Living Area", "Kitchenette"],
	},
	{
		id: 3,
		name: "Standard Family Room",
		description: "Spacious suite with panoramic views and premium amenities",
		price: 320,
		image:
			"/deluxefamily2.jpg",
		features: ["2 Queen Beds", "Living Area", "Kitchenette",, "Private Bathroom", "Private Balcony", "Free WiFi"],
	},
	{
		id: 4,
		name: "Deluxe Double Room AC | Non-AC",
		description: "Cozy and affordable room with all essential amenities",
		price: 120,
		image:
			"https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
		features: ["Double Bed", "Living Area", "Kitchenette",, "Private Bathroom", "Private Balcony", "Free WiFi"],
	},
	{
		id: 5,
		name: "Deluxe Double Room AC | Non-AC",
		description: "Cozy and affordable room with all essential amenities",
		price: 500,
		image:
			"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
		features: ["Double Bed", "Living Area", "Kitchenette",, "Private Bathroom", "Private Balcony", "Free WiFi"],
	},
	{
		id: 6,
		name: "Triple Room AC | Non-AC",
		description: "Comfortable room for three guests with essential amenities",
		price: 200,
		image:
			"/deluxefamily3.jpg",
		features: ["2 Double Beds", "Living Area", "Kitchenette",, "Private Bathroom", "Private Balcony", "Free WiFi"],
	},
	
];

const amenities = [
	{ icon: "🛁", name: "Private Bathroom" },
	{ icon: "🥂", name: "Dining Area" },
	{ icon: "🛋️", name: "Living Area" },
	{ icon: "🌅", name: "Private Balcony" },
	{ icon: "🅿️", name: "Free Parking" },
	{ icon: "📶", name: "Free WiFi" },
	{ icon: "🛏️", name: "Comfortable Rooms" },
	{ icon: "❄️", name: "AC Facilities" },
];

export default function Home() {
	useEffect(() => {
		document.documentElement.style.scrollBehavior = 'smooth';
	}, []);

	return (
		<div className="min-h-screen bg-white font-sans dark:bg-zinc-950">
			{/* Navigation */}
			<nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md dark:bg-zinc-950/70">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
					<h1 className="flex items-center text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
						<Image
							src="/logo.png"
							alt="Thurusisila Logo"
							width={52}
							height={52}
							className="mr-1 rounded-full p-1"
						/>
						Thurusisila<span className="text-amber-500">.</span>
					</h1>
					<div className="hidden items-center gap-8 md:flex">
						<a
							href="#rooms"
							className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
						>
							Rooms
						</a>
						<a
							href="#amenities"
							className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
						>
							Amenities
						</a>
						<a
							href="#contact"
							className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
						>
							Contact
						</a>
						<a href="tel:0705645367" className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
							Book Now
						</a>
					</div>
					<button className="rounded-lg p-2 md:hidden">
						<svg
							className="h-6 w-6 text-zinc-900 dark:text-white"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
			</nav>

			{/* Hero Section */}
			<section className="relative flex min-h-screen items-center justify-center overflow-hidden">
				<div className="absolute inset-0 z-0">
					<video
						autoPlay
						muted
						loop
						className="object-cover w-full h-full"
						src="/bg.mp4"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
				</div>
				<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
					<p className="mb-4 animate-fade-in text-sm font-medium uppercase tracking-[0.3em] text-amber-400">
						Welcome to
					</p>
					<h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
						Thurusisila Resort
					</h1>
					<p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-200 md:text-xl">
						Experience unparalleled luxury and comfort in the heart of paradise.
						<br className="hidden sm:block" />
						It's not just a booking it's your private five-star sanctuary
					</p>
					<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
						<a
							href="#rooms"
							className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition-all hover:bg-lime-500 hover:text-zinc-900"
						>
							Explore Rooms
							<svg
								className="h-4 w-4 transition-transform group-hover:translate-x-1"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 8l4 4m0 0l-4 4m4-4H3"
								/>
							</svg>
						</a>
						<a
							href="#contact"
							className="rounded-full border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
						>
							Contact Us
						</a>
					</div>
				</div>
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
					<svg
						className="h-6 w-6 text-white/70"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</section>

			{/* About Section */}
			<section className="bg-zinc-50 py-24 dark:bg-zinc-900">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						<div>
							<p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-500">
								About Us
							</p>
							<h2 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
								A Legacy of Luxury & Hospitality
							</h2>
							<p className="mb-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
								Nestled in a serene location, Thurusisila Resort offers an
								unforgettable experience
								<br className="hidden sm:block" />
								combining modern elegance with warm Sri Lankan hospitality. Our
								commitment to
								<br className="hidden sm:block" />
								excellence ensures every guest feels at home.
							</p>
							<div className="grid grid-cols-3 gap-6">
								<div className="text-center">
									<p className="text-3xl font-bold text-amber-500">10+</p>
									<p className="text-sm text-zinc-600 dark:text-zinc-400">
										Years Experience
									</p>
								</div>
								<div className="text-center">
									<p className="text-3xl font-bold text-amber-500">5K+</p>
									<p className="text-sm text-zinc-600 dark:text-zinc-400">
										Happy Guests
									</p>
								</div>
								<div className="text-center">
									<p className="text-3xl font-bold text-amber-500">4.9</p>
									<p className="text-sm text-zinc-600 dark:text-zinc-400">
										Rating
									</p>
								</div>
							</div>
						</div>
						<div className="relative h-[400px] overflow-hidden rounded-3xl lg:h-[500px]">
							<Image
								src="/about.jpg"
								alt="Resort lobby"
								fill
								className="object-cover transition-transform duration-500 hover:scale-105"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Rooms Section */}
			<section id="rooms" className="py-24 dark:bg-zinc-950">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-16 text-center">
						<p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-500">
							Accommodations
						</p>
						<h2 className="mb-4 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
							Our Rooms & Suites
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
							Choose from our carefully designed rooms, each offering unique
							comfort and style
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
						{rooms.map((room) => (
							<div
								key={room.id}
								className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900"
							>
								<div className="relative h-64 overflow-hidden">
									<Image
										src={room.image}
										alt={room.name}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-zinc-900 backdrop-blur-sm">
										Night
									</div>
								</div>
								<div className="p-6">
									<h3 className="mb-2 text-xl font-bold text-zinc-900 dark:text-white">
										{room.name}
									</h3>
									<p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
										{room.description}
									</p>
									<div className="mb-6 flex flex-wrap gap-2">
										{room.features.map((feature) => (
											<span
												key={feature}
												className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
											>
												{feature}
											</span>
										))}
									</div>
									<button className="w-full rounded-xl bg-zinc-900 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-500 dark:bg-white dark:text-zinc-900 dark:hover:bg-amber-400">
										View Room
									</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Amenities Section */}
			<section id="amenities" className="bg-zinc-900 py-24 dark:bg-zinc-950">
				<div className="mx-auto max-w-7xl px-6">
					<div className="mb-16 text-center">
						<p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
							Facilities
						</p>
						<h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
							Resort Amenities
						</h2>
						<p className="mx-auto max-w-2xl text-lg text-zinc-400">
							Enjoy our world-class facilities designed for your comfort and
							convenience
						</p>
					</div>
					<div className="grid grid-cols-2 gap-6 md:grid-cols-4">
						{amenities.map((amenity) => (
							<div
								key={amenity.name}
								className="group flex flex-col items-center rounded-2xl bg-zinc-800/50 p-8 text-center transition-all duration-300 hover:bg-amber-500"
							>
								<span className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110">
									{amenity.icon}
								</span>
								<span className="text-sm font-medium text-white">
									{amenity.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="relative overflow-hidden py-24">
				<div className="absolute inset-0">
					<Image
						src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
						alt="Resort pool"
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-zinc-900/80" />
				</div>
				<div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
					<h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
						Ready to Experience Luxury?
					</h2>
					<p className="mb-10 text-lg text-zinc-300">
						Book your stay today and enjoy exclusive offers and unforgettable
						experiences.
					</p>
					<a href="tel:+94 70 564 5367" className="rounded-full bg-amber-500 px-10 py-4 text-sm font-semibold text-zinc-900 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30">
						Reserve Your Room
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer id="contact" className="bg-zinc-950 py-16">
				<div className="mx-auto max-w-7xl px-6">
					<div className="grid gap-12 md:grid-cols-4">
						<div>
							<h3 className="mb-4 text-2xl font-bold text-white">
								Thurusisila<span className="text-amber-500">.</span>
							</h3>
							<p className="text-sm text-zinc-400">
								Where luxury meets comfort. Your perfect destination for an
								unforgettable stay.
							</p>
						</div>
						<div>
							<h4 className="mb-4 font-semibold text-white">Quick Links</h4>
							<ul className="space-y-2 text-sm text-zinc-400">
								<li>
									<a
										href="#"
										className="transition-colors hover:text-amber-500"
									>
										About Us
									</a>
								</li>
								<li>
									<a
										href="#rooms"
										className="transition-colors hover:text-amber-500"
									>
										Rooms
									</a>
								</li>
								<li>
									<a
										href="#amenities"
										className="transition-colors hover:text-amber-500"
									>
										Amenities
									</a>
								</li>
								<li>
									<a
										href="#"
										className="transition-colors hover:text-amber-500"
									>
										Gallery
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="mb-4 font-semibold text-white">Contact</h4>
							<ul className="space-y-2 text-sm text-zinc-400">
								<li>📍 Thurusisila Resort, Anuradhapura</li>
								<li>📞 +94 70 564 5367</li>
								<li>✉️ jaderanga@gmail.com</li>
							</ul>
						</div>
						<div>
							<h4 className="mb-4 font-semibold text-white">Follow Us</h4>
							<div className="flex gap-4">
								<a
									href="#"
									className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition-colors hover:bg-amber-500"
								>
									<svg
										className="h-5 w-5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
									</svg>
								</a>
								<a
									href="#"
									className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition-colors hover:bg-amber-500"
								>
									<svg
										className="h-5 w-5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
									</svg>
								</a>
								<a
									href="#"
									className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition-colors hover:bg-amber-500"
								>
									<svg
										className="h-5 w-5"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
									</svg>
								</a>
							</div>
						</div>
					</div>
					<div className="mt-12 border-t border-zinc-800 pt-8 text-center">
						<p className="text-sm text-zinc-500">
							© 2024 Thurusisila Resort. All rights reserved.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
