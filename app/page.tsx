"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
	Bath,
	UtensilsCrossed,
	Sofa,
	Sunrise,
	CarFront,
	Wifi,
	BedDouble,
	Snowflake,
	Star,
	Phone,
	Mail,
	MapPin,
	ChevronDown,
	Menu,
	X,
	ArrowRight,
	Clock,
	Shield,
	Heart,
	Gem,
	Crown,
	Sparkles,
} from "lucide-react";

/* ─────────── DATA (unchanged) ─────────── */

const rooms = [
	{
		id: 1,
		name: "Deluxe Family Room AC | Non-AC",
		description: "Comfortable space for the whole family with extra beds",
		price: 250,
		image: "/deluxefamily.jpg",
		features: ["King Beds", "Private Bathroom", "Private Balcony", "Free WiFi", "Living Area", "Kitchenette"],
	},
	{
		id: 2,
		name: "Deluxe Family Room AC | Non-AC",
		description: "Perfect for business travelers with a dedicated workspace",
		price: 180,
		image: "/deluxefamily1.jpg",
		features: ["King Beds", "Private Bathroom", "Private Balcony", "Free WiFi", "Living Area", "Kitchenette"],
	},
	{
		id: 3,
		name: "Standard Family Room",
		description: "Spacious suite with panoramic views and premium amenities",
		price: 320,
		image: "/deluxefamily2.jpg",
		features: ["2 Queen Beds", "Living Area", "Kitchenette", "Private Bathroom", "Private Balcony", "Free WiFi"],
	},
	{
		id: 4,
		name: "Deluxe Double Room AC | Non-AC",
		description: "Cozy and affordable room with all essential amenities",
		price: 120,
		image: "/deluxedouble1.jpg",
		features: ["Double Bed", "Living Area", "Kitchenette", "Private Bathroom", "Private Balcony", "Free WiFi"],
	},
	{
		id: 5,
		name: "Deluxe Double Room AC | Non-AC",
		description: "Cozy and affordable room with all essential amenities",
		price: 500,
		image: "/deluxedouble2.jpg",
		features: ["Double Bed", "Living Area", "Kitchenette", "Private Bathroom", "Private Balcony", "Free WiFi"],
	},
	{
		id: 6,
		name: "Triple Room AC | Non-AC",
		description: "Comfortable room for three guests with essential amenities",
		price: 200,
		image: "/deluxefamily3.jpg",
		features: ["2 Double Beds", "Living Area", "Kitchenette", "Private Bathroom", "Private Balcony", "Free WiFi"],
	},
];

const amenities = [
	{ icon: Bath, name: "Private Bathroom" },
	{ icon: UtensilsCrossed, name: "Dining Area" },
	{ icon: Sofa, name: "Living Area" },
	{ icon: Sunrise, name: "Private Balcony" },
	{ icon: CarFront, name: "Free Parking" },
	{ icon: Wifi, name: "Free WiFi" },
	{ icon: BedDouble, name: "Comfortable Rooms" },
	{ icon: Snowflake, name: "AC Facilities" },
];

/* ─── Reusable scroll-animated wrapper ─── */
function FadeInSection({
	children,
	className = "",
	delay = 0,
	direction = "up",
}: {
	children: React.ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
}) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	const dirMap = {
		up: { y: 50, x: 0 },
		down: { y: -50, x: 0 },
		left: { x: -50, y: 0 },
		right: { x: 50, y: 0 },
	};

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, ...dirMap[direction] }}
			animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
			transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

/* ─── Section heading component ─── */
function SectionHeading({
	subtitle,
	title,
	description,
	light = false,
}: {
	subtitle: string;
	title: string;
	description?: string;
	light?: boolean;
}) {
	return (
		<div className="mb-12 sm:mb-16 lg:mb-20 text-center">
			<FadeInSection>
				<div className="ornament mb-4">
					<Gem className="h-4 w-4 text-gold" />
				</div>
				<p className="mb-3 sm:mb-4 font-display text-sm sm:text-lg font-bold uppercase tracking-[0.25em] sm:tracking-[0.35em] text-gold">
					{subtitle}
				</p>
			</FadeInSection>
			<FadeInSection delay={0.1}>
				<h2
					className={`mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl ${
						light ? "text-white" : "text-white"
					}`}
				>
					{title}
				</h2>
			</FadeInSection>
			{description && (
				<FadeInSection delay={0.2}>
					<p
						className={`mx-auto max-w-2xl font-display text-base sm:text-lg font-light leading-relaxed px-2 ${
							light ? "text-stone-300" : "text-stone-400"
						}`}
					>
						{description}
					</p>
				</FadeInSection>
			)}
		</div>
	);
}

/* ═══════════════════════════════════════════ */
/*                 MAIN PAGE                  */
/* ═══════════════════════════════════════════ */

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const heroRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: heroRef,
		offset: ["start start", "end start"],
	});
	const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
	const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

	useEffect(() => {
		document.documentElement.style.scrollBehavior = "smooth";
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
			if (mobileMenuOpen) setMobileMenuOpen(false);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [mobileMenuOpen]);

	return (
		<div className="min-h-screen bg-[#0c0a09] font-sans text-stone-100">
			{/* ══════ NAVIGATION ══════ */}
			<motion.nav
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
				className={`fixed top-0 z-50 w-full transition-all duration-500 ${
					scrolled
						? "glass shadow-2xl shadow-black/30"
						: "bg-transparent"
				}`}
			>
				<div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
					{/* Logo */}
					<a href="#" className="flex items-center gap-2">
						<Image
							src="/logo.png"
							alt="Thurusisila Logo"
							width={48}
							height={48}
							className="h-10 w-10 sm:h-12 sm:w-12 rounded-full ring-2 ring-gold/30"
						/>
						<div>
							<h1 className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white">
								Thurusisila<span className="text-gold">.</span>
							</h1>
							<p className="hidden text-[10px] font-bold uppercase tracking-[0.3em] text-gold sm:block">
								Resort &amp; Villa
							</p>
						</div>
					</a>

					{/* Desktop links */}
					<div className="hidden items-center gap-10 md:flex">
						{["Rooms", "Amenities", "Contact"].map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className="group relative font-display text-sm font-bold uppercase tracking-[0.15em] text-stone-300 transition-colors hover:text-gold"
							>
								{item}
								<span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
							</a>
						))}
						<a
								href="tel:+94719671533"
							className="group relative overflow-hidden rounded-full border border-gold/50 px-7 py-2.5 font-display text-sm font-bold uppercase tracking-wider text-gold transition-all duration-500 hover:border-gold hover:text-[#0c0a09]"
						>
							<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-transform duration-500 group-hover:translate-x-0" />
							<span className="relative flex items-center gap-2">
								<Phone className="h-3.5 w-3.5" />
								Book Now
							</span>
						</a>
					</div>

					{/* Mobile toggle */}
					<button
						className="rounded-lg border border-gold/30 p-2 text-gold md:hidden"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
					</button>
				</div>

				{/* Mobile menu */}
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="glass border-t border-gold/10 md:hidden"
					>
						<div className="flex flex-col items-center gap-6 py-8">
							{["Rooms", "Amenities", "Contact"].map((item) => (
								<a
									key={item}
									href={`#${item.toLowerCase()}`}
									onClick={() => setMobileMenuOpen(false)}
									className="font-display text-sm font-bold uppercase tracking-[0.2em] text-stone-300 transition-colors hover:text-gold"
								>
									{item}
								</a>
							))}
							<a
								href="tel:0718473167"
								className="rounded-full border border-gold px-8 py-3 font-display text-sm font-bold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-[#0c0a09]"
							>
								Book Now
							</a>
						</div>
					</motion.div>
				)}
			</motion.nav>

			{/* ══════ HERO SECTION ══════ */}
			<section ref={heroRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
				<motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
					<video
						autoPlay
						muted
						loop
						playsInline
						className="h-full w-full object-cover"
						src="/bg.mp4"
					/>
					<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-[#0c0a09]" />
				</motion.div>

				<motion.div style={{ opacity: heroOpacity }} className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
					{/* Ornamental divider */}
					<motion.div
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, delay: 0.2 }}
						className="mb-6 flex items-center justify-center gap-3"
					>
						<span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" />
						<Crown className="h-5 w-5 text-gold" />
						<span className="h-px w-12 bg-gradient-to-l from-transparent to-gold" />
					</motion.div>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="mb-4 font-display text-base font-bold uppercase tracking-[0.4em] text-gold md:text-lg"
					>
						Welcome to
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.6 }}
						className="mb-2 font-serif text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl lg:text-8xl"
					>
						Thurusisila
					</motion.h1>
					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.75 }}
						className="mb-6 sm:mb-8 font-serif text-2xl font-light italic tracking-wide text-gold sm:text-3xl md:text-4xl lg:text-5xl"
					>
						Resort
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.9 }}
						className="mx-auto mb-8 sm:mb-12 max-w-2xl font-display text-base font-light leading-relaxed text-stone-300 sm:text-lg md:text-xl px-2"
					>
						Experience unparalleled luxury and comfort in the heart of paradise.
						<br className="hidden sm:block" />
						It&apos;s not just a booking  it&apos;s your private five-star sanctuary
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 1.1 }}
						className="flex flex-col items-center justify-center gap-5 sm:flex-row"
					>
						<a
							href="#rooms"
							className="group relative overflow-hidden rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light px-8 py-3.5 sm:px-10 sm:py-4 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0c0a09] shadow-xl shadow-gold/20 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/30"
						>
							<span className="relative flex items-center gap-2">
								Explore Rooms
								<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
							</span>
						</a>
						<a
							href="#contact"
							className="group rounded-full border border-white/20 px-8 py-3.5 sm:px-10 sm:py-4 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-500 hover:border-gold/50 hover:bg-white/5 hover:text-gold"
						>
							Contact Us
						</a>
					</motion.div>
				</motion.div>

				{/* Scroll indicator */}
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="absolute bottom-6 sm:bottom-10 left-1/2 z-10 -translate-x-1/2"
				>
					<div className="flex flex-col items-center gap-2">
						<span className="font-display text-[10px] uppercase tracking-[0.3em] text-gold/60">
							Scroll
						</span>
						<ChevronDown className="h-5 w-5 text-gold/60" />
					</div>
				</motion.div>
			</section>

			{/* ══════ ABOUT SECTION ══════ */}
			<section className="relative overflow-hidden bg-[#0c0a09] py-16 sm:py-20 lg:py-36">
				{/* Subtle background pattern */}
				<div className="absolute inset-0 opacity-5" style={{
					backgroundImage: "radial-gradient(circle at 1px 1px, rgba(212,168,83,0.3) 1px, transparent 0)",
					backgroundSize: "40px 40px"
				}} />

				<div className="relative mx-auto max-w-7xl px-4 sm:px-6">
					<div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-2">
						<FadeInSection direction="left">
							<div>
								<div className="ornament mb-4 justify-start">
									<Sparkles className="h-4 w-4 text-gold" />
								</div>
								<p className="mb-4 font-display text-lg font-bold uppercase tracking-[0.35em] text-gold">
									About Us
								</p>
								<h2 className="mb-6 sm:mb-8 font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
									A Legacy of
									<br />
									<span className="text-shimmer">Luxury</span> &amp; Hospitality
								</h2>
								<p className="mb-6 sm:mb-8 font-display text-base sm:text-lg font-light leading-relaxed text-stone-400">
									Nestled in a serene location, Thurusisila Resort offers an
									unforgettable experience combining modern elegance with warm
									Sri Lankan hospitality. Our commitment to excellence ensures
									every guest feels at home.
								</p>

								{/* Stats */}
								<div className="grid grid-cols-3 gap-3 sm:gap-6">
									{[
										{ value: "10+", label: "Years Experience", icon: Clock },
										{ value: "5K+", label: "Happy Guests", icon: Heart },
										{ value: "4.5", label: "Rating", icon: Star },
									].map((stat, i) => (
										<FadeInSection key={stat.label} delay={0.2 + i * 0.15}>
											<div className="group rounded-2xl border border-stone-800/50 bg-stone-900/30 p-3 sm:p-5 text-center transition-all duration-500 hover:border-gold/30 hover:bg-stone-900/50">
												<stat.icon className="mx-auto mb-2 sm:mb-3 h-4 w-4 sm:h-5 sm:w-5 text-gold transition-transform duration-300 group-hover:scale-110" />
												<p className="font-serif text-xl sm:text-3xl font-bold text-gold">
													{stat.value}
												</p>
												<p className="mt-1 font-display text-[10px] sm:text-xs font-bold uppercase tracking-wider text-stone-400">
													{stat.label}
												</p>
											</div>
										</FadeInSection>
									))}
								</div>
							</div>
						</FadeInSection>

						<FadeInSection direction="right" delay={0.3}>
							<div className="relative">
								{/* Decorative frame */}
								<div className="absolute -inset-4 rounded-3xl border border-gold/10 hidden sm:block" />
								<div className="absolute -right-4 -top-4 h-24 w-24 border-r-2 border-t-2 border-gold/30 rounded-tr-3xl hidden sm:block" />
								<div className="absolute -bottom-4 -left-4 h-24 w-24 border-b-2 border-l-2 border-gold/30 rounded-bl-3xl hidden sm:block" />

								<div className="relative h-[300px] sm:h-[450px] overflow-hidden rounded-2xl lg:h-[550px]">
									<Image
										src="/about.jpg"
										alt="Resort lobby"
										fill
										className="object-cover transition-transform duration-700 hover:scale-105"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09]/50 to-transparent" />
								</div>

								{/* Floating badge */}
								<motion.div
									animate={{ y: [0, -8, 0] }}
									transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
									className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 rounded-2xl border border-gold/20 bg-[#1a1714]/90 p-3 sm:p-5 shadow-2xl backdrop-blur-md lg:-left-10"
								>
									<div className="flex items-center gap-2 sm:gap-3">
										<div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-gold/10">
											<Shield className="h-5 w-5 sm:h-6 sm:w-6 text-gold" />
										</div>
										<div>
											<p className="font-serif text-lg sm:text-xl font-bold text-gold">Premium</p>
											<p className="font-display text-xs font-bold uppercase tracking-wider text-stone-400">
												Certified Excellence
											</p>
										</div>
									</div>
								</motion.div>
							</div>
						</FadeInSection>
					</div>
				</div>
			</section>

			{/* ══════ ROOMS SECTION ══════ */}
			<section id="rooms" className="relative bg-[#0f0d0b] py-16 sm:py-20 lg:py-36">
				<div className="mx-auto max-w-7xl px-4 sm:px-6">
					<SectionHeading
						subtitle="Accommodations"
						title="Our Rooms & Suites"
						description="Choose from our carefully designed rooms, each offering unique comfort and style"
					/>

					<div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
						{rooms.map((room, index) => (
							<FadeInSection key={room.id} delay={index * 0.1}>
								<div className="card-premium group rounded-2xl border border-stone-700/40 transition-all duration-600 hover:border-gold/40 hover:shadow-[0_8px_40px_-12px_rgba(212,168,83,0.15)] hover:-translate-y-1">
									{/* Image */}
									<div className="relative h-56 sm:h-72 overflow-hidden rounded-t-2xl">
										<Image
											src={room.image}
											alt={room.name}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-[#16130f] via-[#16130f]/20 to-transparent" />

										{/* Price badge */}
										<div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-black/50 px-4 py-2 backdrop-blur-xl">
											<BedDouble className="h-3 w-3 text-gold-light" />
											<span className="font-sans text-[11px] font-semibold tracking-wide text-white">
												Call for 10% off
											</span>
										</div>

										{/* Room type badge */}
										<div className="absolute bottom-4 left-4">
											<div className="flex items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-3.5 py-1.5 backdrop-blur-lg">
												<Crown className="h-3.5 w-3.5 text-gold" />
												<span className="font-display text-[11px] font-semibold uppercase tracking-wider text-gold-light">
													Premium
												</span>
											</div>
										</div>
									</div>

									{/* Content */}
									<div className="p-4 pt-4 sm:p-6 sm:pt-5">
										<h3 className="mb-2 font-sans text-lg sm:text-xl font-bold text-stone-100 transition-colors duration-300 group-hover:text-gold">
											{room.name}
										</h3>
										<p className="mb-5 font-sans text-sm font-medium leading-relaxed text-stone-400">
											{room.description}
										</p>

										{/* Divider */}
										<div className="mb-5 h-px bg-gradient-to-r from-transparent via-stone-700/50 to-transparent" />

										{/* Features */}
										<div className="mb-6 flex flex-wrap gap-2">
											{room.features.filter(Boolean).map((feature) => (
												<span
													key={feature}
													className="rounded-full border border-stone-700/50 bg-stone-800/40 px-3 py-1.5 font-sans text-[11px] font-normal uppercase tracking-wider text-stone-300 transition-all duration-300 group-hover:border-gold/20 group-hover:bg-gold/5 group-hover:text-stone-200"
												>
													{feature}
												</span>
											))}
										</div>

										{/* CTA Button */}
										<button className="group/btn relative w-full overflow-hidden rounded-xl border border-gold/40 bg-gold/5 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-gold transition-all duration-500 hover:border-gold hover:text-[#0c0a09] hover:shadow-lg hover:shadow-gold/10">
											<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-gold-dark via-gold to-gold-light transition-transform duration-500 group-hover/btn:translate-x-0" />
											<span className="relative flex items-center justify-center gap-2">
												View Room
												<ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
											</span>
										</button>
									</div>
								</div>
							</FadeInSection>
						))}
					</div>
				</div>
			</section>

			{/* ══════ AMENITIES SECTION ══════ */}
			<section id="amenities" className="relative overflow-hidden bg-[#0c0a09] py-16 sm:py-20 lg:py-36">
				{/* Background accent */}
				<div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.02] blur-3xl" />

				<div className="relative mx-auto max-w-7xl px-4 sm:px-6">
					<SectionHeading
						subtitle="Facilities"
						title="Resort Amenities"
						description="Enjoy our world-class facilities designed for your comfort and convenience"
						light
					/>

					<div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
						{amenities.map((amenity, index) => (
							<FadeInSection key={amenity.name} delay={index * 0.08}>
								<div className="group flex flex-col items-center rounded-2xl border border-stone-800/50 bg-stone-900/20 p-5 sm:p-8 text-center transition-all duration-500 hover:border-gold/40 hover:bg-gold/5 hover:shadow-xl hover:shadow-gold/5">
									<div className="mb-3 sm:mb-5 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border border-stone-800 bg-stone-900/50 transition-all duration-500 group-hover:border-gold/30 group-hover:bg-gold/10 group-hover:shadow-lg group-hover:shadow-gold/10">
										<amenity.icon className="h-5 w-5 sm:h-7 sm:w-7 text-stone-300 transition-all duration-500 group-hover:scale-110 group-hover:text-gold" />
									</div>
									<span className="font-display text-xs sm:text-sm font-medium uppercase tracking-wider text-stone-300 transition-colors duration-300 group-hover:text-white">
										{amenity.name}
									</span>
								</div>
							</FadeInSection>
						))}
					</div>
				</div>
			</section>

			{/* ══════ CTA SECTION ══════ */}
			<section className="relative overflow-hidden py-20 sm:py-32">
				<div className="absolute inset-0">
					<Image
						src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
						alt="Resort pool"
						fill
						className="object-cover animate-ken-burns"
					/>
					<div className="absolute inset-0 bg-[#0c0a09]/85" />
					<div className="absolute inset-0 bg-gradient-to-r from-[#0c0a09]/50 via-transparent to-[#0c0a09]/50" />
				</div>

				<div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center">
					<FadeInSection>
						<div className="ornament mb-6">
							<Crown className="h-5 w-5 text-gold" />
						</div>
					</FadeInSection>
					<FadeInSection delay={0.15}>
						<h2 className="mb-4 sm:mb-6 font-serif text-3xl sm:text-4xl font-bold text-white md:text-5xl lg:text-6xl">
							Ready to Experience
							<br />
							<span className="text-shimmer">Luxury Hospitality</span>?
						</h2>
					</FadeInSection>
					<FadeInSection delay={0.3}>
						<p className="mb-8 sm:mb-12 font-display text-base sm:text-lg font-light leading-relaxed text-stone-300">
							Book your stay today and enjoy exclusive offers and unforgettable
							experiences.
						</p>
					</FadeInSection>
					<FadeInSection delay={0.45}>
						<a
							href="tel:+94719671533"
							className="group relative inline-flex items-center gap-2 sm:gap-3 overflow-hidden rounded-full bg-gradient-to-r from-gold-dark via-gold to-gold-light px-8 py-4 sm:px-12 sm:py-5 font-display text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0c0a09] shadow-2xl shadow-gold/20 transition-all duration-500 hover:shadow-gold/40"
						>
							<Phone className="h-4 w-4" />
							Reserve Your Room
							<ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
						</a>
					</FadeInSection>
				</div>
			</section>

			{/* ══════ FOOTER ══════ */}
			<footer id="contact" className="relative bg-[#0c0a09] pt-16 sm:pt-24 pb-8 sm:pb-12">
				{/* Top gold accent line */}
				<div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

				<div className="mx-auto max-w-7xl px-4 sm:px-6">
					{/* Main grid */}
					<div className="mb-12 sm:mb-16 lg:mb-20 grid gap-10 sm:gap-12 lg:gap-16 lg:grid-cols-12">
						{/* Brand */}
						<div className="lg:col-span-4">
							<FadeInSection>
								<div className="mb-6 flex items-center gap-3">
									<Image
										src="/logo.png"
										alt="Thurusisila Logo"
										width={48}
										height={48}
										className="rounded-full ring-2 ring-gold/30"
									/>
									<div>
										<h3 className="font-serif text-2xl font-bold text-white">
											Thurusisila<span className="text-gold">.</span>
										</h3>
										<p className="font-display text-[10px] font-bold uppercase tracking-[0.3em] text-gold/90">
											Resort &amp; Villa
										</p>
									</div>
								</div>
								<p className="mb-6 sm:mb-8 max-w-sm font-display text-sm sm:text-base font-light leading-relaxed text-stone-100">
									Where luxury meets comfort. Your perfect destination for an
									unforgettable stay.
								</p>

								{/* Social links */}
								<div>
									<h4 className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.2em] text-stone-200">
										Stay Connected
									</h4>
									<div className="flex gap-3">
										{/* WhatsApp */}
										<a
											href="https://wa.me/94719671533"
											target="_blank"
											rel="noopener noreferrer"
											aria-label="WhatsApp"
										className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-stone-800 bg-stone-900/30 text-stone-200 transition-all duration-500 hover:border-gold/40 hover:bg-gold hover:text-[#0c0a09] hover:shadow-lg hover:shadow-gold/20"
										>
											<svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
												<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
											</svg>
										</a>
										{/* Instagram */}
										<a
											href="#"
											aria-label="Instagram"
										className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-stone-800 bg-stone-900/30 text-stone-200 transition-all duration-500 hover:border-gold/40 hover:bg-gold hover:text-[#0c0a09] hover:shadow-lg hover:shadow-gold/20"
										>
											<svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
												<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
											</svg>
										</a>
										{/* Facebook */}
										<a
											href="#"
											aria-label="Facebook"
										className="group flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-xl border border-stone-800 bg-stone-900/30 text-stone-200 transition-all duration-500 hover:border-gold/40 hover:bg-gold hover:text-[#0c0a09] hover:shadow-lg hover:shadow-gold/20"
										>
											<svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
												<path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
											</svg>
										</a>
									</div>
								</div>
							</FadeInSection>
						</div>

						{/* Quick Links */}
						<div className="lg:col-span-3">
							<FadeInSection delay={0.1}>
								<h4 className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.2em] text-stone-300">
									Quick Links
								</h4>
								<ul className="space-y-4">
									{[
										{ label: "About Us", href: "#" },
										{ label: "Rooms", href: "#rooms" },
										{ label: "Amenities", href: "#amenities" },
										{ label: "Gallery", href: "#" },
									].map((link) => (
										<li key={link.label}>
											<a
												href={link.href}
												className="group flex items-center gap-2 font-sans text-sm font-light text-stone-400 transition-all duration-300 hover:text-gold"
											>
												<ArrowRight className="h-3 w-3 -translate-x-2 text-gold opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
												{link.label}
											</a>
										</li>
									))}
								</ul>
							</FadeInSection>
						</div>

						{/* Contact */}
						<div className="lg:col-span-5">
							<FadeInSection delay={0.2}>
								<h4 className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.2em] text-stone-300">
									Get In Touch
								</h4>
								<div className="space-y-3 sm:space-y-4">
									{/* Location */}
									<div className="group flex items-start gap-3 sm:gap-4 rounded-xl border border-stone-800/50 bg-stone-900/20 p-4 sm:p-5 transition-all duration-500 hover:border-gold/20 hover:bg-stone-900/40">
										<div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-lg border border-stone-800 bg-stone-900/50 text-stone-500 transition-all duration-500 group-hover:border-gold/30 group-hover:bg-gold/10 group-hover:text-gold">
											<MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
										</div>
										<div>
											<p className="mb-1 font-sans text-xs font-medium uppercase tracking-wider text-stone-300">
												Location
											</p>
											<p className="font-sans text-sm font-light text-stone-400">
												No. 17/1A, Thurusisila, Wijaya Mawatha, Isurupura, Anuradhapura
											</p>
										</div>
									</div>

									{/* Phone */}
									<a
										href="tel:+94719671533"
										className="group flex items-start gap-3 sm:gap-4 rounded-xl border border-stone-800/50 bg-stone-900/20 p-4 sm:p-5 transition-all duration-500 hover:border-gold/20 hover:bg-stone-900/40"
									>
										<div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-lg border border-stone-800 bg-stone-900/50 text-stone-500 transition-all duration-500 group-hover:border-gold/30 group-hover:bg-gold/10 group-hover:text-gold">
											<Phone className="h-4 w-4 sm:h-5 sm:w-5" />
										</div>
										<div>
											<p className="mb-1 font-sans text-xs font-medium uppercase tracking-wider text-stone-300">
												Phone
											</p>
											<p className="font-sans text-sm font-light text-stone-400 transition-colors duration-300 group-hover:text-gold">
												+94 71 967 1533
											</p>
										</div>
									</a>

									{/* Email */}
									<a
										href="mailto:jaderanga@gmail.com"
										className="group flex items-start gap-3 sm:gap-4 rounded-xl border border-stone-800/50 bg-stone-900/20 p-4 sm:p-5 transition-all duration-500 hover:border-gold/20 hover:bg-stone-900/40"
									>
										<div className="flex h-10 w-10 sm:h-11 sm:w-11 flex-shrink-0 items-center justify-center rounded-lg border border-stone-800 bg-stone-900/50 text-stone-500 transition-all duration-500 group-hover:border-gold/30 group-hover:bg-gold/10 group-hover:text-gold">
											<Mail className="h-4 w-4 sm:h-5 sm:w-5" />
										</div>
										<div>
											<p className="mb-1 font-sans text-xs font-medium uppercase tracking-wider text-stone-300">
												Email
											</p>
											<p className="font-sans text-sm font-light text-stone-400 transition-colors duration-300 group-hover:text-gold break-all">
												jaderanga@gmail.com
											</p>
										</div>
									</a>
								</div>
							</FadeInSection>
						</div>
					</div>

					{/* Bottom bar */}
					<div className="border-t border-stone-800/30 pt-8">
						<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
							<div className="text-center md:text-left">
								<p className="font-sans text-xs font-light tracking-wider text-stone-400">
									© 2024 Thurusisila Resort. All rights reserved.
								</p>
								<p className="mt-1 max-w-xl font-sans text-[11px] font-light leading-relaxed text-stone-500">
									Codebrewers is an official software development division owned and operated by Thurusisila Family Holiday Resort
								</p>
							</div>
							<div className="flex gap-6 font-sans text-xs font-light tracking-wider text-stone-400">
								<a href="#" className="transition-colors duration-300 hover:text-gold">
									Privacy Policy
								</a>
								<span className="text-stone-800">•</span>
								<a href="#" className="transition-colors duration-300 hover:text-gold">
									Terms of Service
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
