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
						<a href="tel:0718473167" className="rounded-full bg-zinc-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200">
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
							className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-zinc-900 transition-all hover:bg-sky-400 hover:text-zinc-900"
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
					<h2 className="mb-6 text-4xl font-bold text-white md:text-4xl">
						Ready to Experience Luxury Hospitality?
					</h2>
					<p className="mb-10 text-lg text-zinc-300">
						Book your stay today and enjoy exclusive offers and unforgettable
						experiences.
					</p>
					<a href="tel:+94 71 847 3167" className="rounded-full bg-amber-500 px-10 py-4 text-sm font-semibold text-zinc-900 transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30">
						Reserve Your Room
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer id="contact" className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 py-20">
				{/* Decorative top border */}
				<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
				
				<div className="mx-auto max-w-7xl px-6">
					{/* Main Footer Content */}
					<div className="grid gap-12 lg:grid-cols-12 mb-16">
						{/* Brand Section - Larger on desktop */}
						<div className="lg:col-span-4">
							<div className="flex items-center mb-6">
								<Image
									src="/logo.png"
									alt="Thurusisila Logo"
									width={48}
									height={48}
									className="mr-3 rounded-full"
								/>
								<h3 className="text-3xl font-bold text-white">
									Thurusisila<span className="text-amber-500">.</span>
								</h3>
							</div>
							<p className="text-base leading-relaxed text-zinc-400 mb-6 max-w-sm">
								Where luxury meets comfort. Your perfect destination for an
								unforgettable stay.
							</p>
							{/* Social Media */}
							<div>
								<h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">Stay Connected</h4>
								<div className="flex gap-3">
									<a
										href="https://wa.me/94705645367"
										target="_blank"
										rel="noopener noreferrer"
										aria-label="WhatsApp"
										className="group flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/50 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:bg-amber-500 hover:text-zinc-900 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1"
									>
										<svg
											className="h-5 w-5 transition-transform group-hover:scale-110"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
										</svg>
									</a>
									<a
										href="#"
										aria-label="Instagram"
										className="group flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/50 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:bg-amber-500 hover:text-zinc-900 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1"
									>
										<svg
											className="h-5 w-5 transition-transform group-hover:scale-110"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
										</svg>
									</a>
									<a
										href="#"
										aria-label="Facebook"
										className="group flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-800/50 text-zinc-400 backdrop-blur-sm transition-all duration-300 hover:bg-amber-500 hover:text-zinc-900 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-1"
									>
										<svg
											className="h-5 w-5 transition-transform group-hover:scale-110"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
										</svg>
									</a>
								</div>
							</div>
						</div>

						{/* Quick Links */}
						<div className="lg:col-span-3">
							<h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-300">Quick Links</h4>
							<ul className="space-y-3">
								<li>
									<a
										href="#"
										className="group flex items-center text-zinc-400 transition-all duration-200 hover:text-amber-500 hover:translate-x-1"
									>
										<span className="mr-2 text-amber-500 opacity-0 transition-opacity group-hover:opacity-100">→</span>
										About Us
									</a>
								</li>
								<li>
									<a
										href="#rooms"
										className="group flex items-center text-zinc-400 transition-all duration-200 hover:text-amber-500 hover:translate-x-1"
									>
										<span className="mr-2 text-amber-500 opacity-0 transition-opacity group-hover:opacity-100">→</span>
										Rooms
									</a>
								</li>
								<li>
									<a
										href="#amenities"
										className="group flex items-center text-zinc-400 transition-all duration-200 hover:text-amber-500 hover:translate-x-1"
									>
										<span className="mr-2 text-amber-500 opacity-0 transition-opacity group-hover:opacity-100">→</span>
										Amenities
									</a>
								</li>
								<li>
									<a
										href="#"
										className="group flex items-center text-zinc-400 transition-all duration-200 hover:text-amber-500 hover:translate-x-1"
									>
										<span className="mr-2 text-amber-500 opacity-0 transition-opacity group-hover:opacity-100">→</span>
										Gallery
									</a>
								</li>
							</ul>
						</div>

						{/* Contact Information */}
						<div className="lg:col-span-5">
							<h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-zinc-300">Get In Touch</h4>
							<div className="space-y-4">
								<div className="group flex items-start gap-4 rounded-xl bg-zinc-800/30 p-4 transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg">
									<div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-zinc-900">
										<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
										</svg>
									</div>
									<div>
										<p className="text-sm font-medium text-zinc-300 mb-1">Location</p>
										<p className="text-sm text-zinc-400">Thurusisila Resort, Anuradhapura</p>
									</div>
								</div>
								
								<a href="tel:+94705645367" className="group flex items-start gap-4 rounded-xl bg-zinc-800/30 p-4 transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg">
									<div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-zinc-900">
										<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
										</svg>
									</div>
									<div>
										<p className="text-sm font-medium text-zinc-300 mb-1">Phone</p>
										<p className="text-sm text-zinc-400 group-hover:text-amber-500 transition-colors">+94 71 847 3167</p>
									</div>
								</a>
								
								<a href="mailto:jaderanga@gmail.com" className="group flex items-start gap-4 rounded-xl bg-zinc-800/30 p-4 transition-all duration-300 hover:bg-zinc-800/50 hover:shadow-lg">
									<div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500 transition-colors group-hover:bg-amber-500 group-hover:text-zinc-900">
										<svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<div>
										<p className="text-sm font-medium text-zinc-300 mb-1">Email</p>
										<p className="text-sm text-zinc-400 group-hover:text-amber-500 transition-colors break-all">jaderanga@gmail.com</p>
									</div>
								</a>
							</div>
						</div>
					</div>

					{/* Bottom Bar */}
					<div className="border-t border-zinc-800/50 pt-8">
						<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
							<p className="text-sm text-zinc-500">
								© 2024 Thurusisila Resort. All rights reserved.
							</p>
							<div className="flex gap-6 text-sm text-zinc-500">
								<a href="#" className="transition-colors hover:text-amber-500">Privacy Policy</a>
								<span>•</span>
								<a href="#" className="transition-colors hover:text-amber-500">Terms of Service</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
