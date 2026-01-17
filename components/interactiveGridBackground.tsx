"use client";

import { useEffect, useRef } from "react";

interface InteractiveGridBackgroundProps {
	className?: string;
}

/**
 * Interactive grid background with dots that scale up near the cursor.
 * Canvas-based approach for smooth 60fps animations.
 */
export function InteractiveGridBackground({ className }: InteractiveGridBackgroundProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const mouseRef = useRef({ x: -1000, y: -1000 });
	const animationRef = useRef<number>(0);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const GRID_SIZE = 24;
		const BASE_RADIUS = 1;
		const MAX_RADIUS = 3;
		const EFFECT_RADIUS = 150;
		const GROW_SPEED = 0.3; // Fast grow when cursor approaches
		const SHRINK_SPEED = 0.08; // Slow shrink for trail effect

		// Store current radius for each dot to enable smooth transitions
		let dotRadii: Float32Array | null = null;
		let gridCols = 0;
		let gridRows = 0;

		const updateCanvasSize = () => {
			const dpr = window.devicePixelRatio || 1;
			const rect = canvas.getBoundingClientRect();
			canvas.width = rect.width * dpr;
			canvas.height = rect.height * dpr;
			ctx.scale(dpr, dpr);

			// Recalculate grid and reset radii array
			const newCols = Math.ceil(rect.width / GRID_SIZE) + 1;
			const newRows = Math.ceil(rect.height / GRID_SIZE) + 1;

			if (newCols !== gridCols || newRows !== gridRows) {
				gridCols = newCols;
				gridRows = newRows;
				dotRadii = new Float32Array(gridCols * gridRows).fill(BASE_RADIUS);
			}
		};

		// Dark mode only - white dots with low opacity
		const DOT_COLOR = "rgba(255, 255, 255, 0.15)";

		const draw = () => {
			const rect = canvas.getBoundingClientRect();
			ctx.clearRect(0, 0, rect.width, rect.height);

			if (!dotRadii) {
				animationRef.current = requestAnimationFrame(draw);
				return;
			}

			const { x: mouseX, y: mouseY } = mouseRef.current;

			// Offset to center the pattern
			const offsetX = -1;
			const offsetY = -1;

			for (let row = 0; row < gridRows; row++) {
				for (let col = 0; col < gridCols; col++) {
					const index = row * gridCols + col;
					const x = col * GRID_SIZE + offsetX;
					const y = row * GRID_SIZE + offsetY;

					// Calculate distance from mouse
					const dx = x - mouseX;
					const dy = y - mouseY;
					const distance = Math.sqrt(dx * dx + dy * dy);

					// Calculate target radius based on proximity
					let targetRadius = BASE_RADIUS;
					if (distance < EFFECT_RADIUS) {
						const scale = 1 - distance / EFFECT_RADIUS;
						const eased = scale * scale * (3 - 2 * scale);
						targetRadius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * eased;
					}

					// Interpolate current radius towards target
					const currentRadius = dotRadii[index];
					const diff = targetRadius - currentRadius;

					// Use different speeds for growing vs shrinking
					const speed = diff > 0 ? GROW_SPEED : SHRINK_SPEED;
					dotRadii[index] = currentRadius + diff * speed;

					ctx.beginPath();
					ctx.arc(x, y, dotRadii[index], 0, Math.PI * 2);
					ctx.fillStyle = DOT_COLOR;
					ctx.fill();
				}
			}

			animationRef.current = requestAnimationFrame(draw);
		};

		const handleMouseMove = (e: MouseEvent) => {
			const rect = canvas.getBoundingClientRect();
			mouseRef.current = {
				x: e.clientX - rect.left,
				y: e.clientY - rect.top
			};
		};

		const handleMouseLeave = () => {
			mouseRef.current = { x: -1000, y: -1000 };
		};

		updateCanvasSize();
		window.addEventListener("resize", updateCanvasSize);
		window.addEventListener("mousemove", handleMouseMove);
		canvas.addEventListener("mouseleave", handleMouseLeave);

		draw();

		return () => {
			window.removeEventListener("resize", updateCanvasSize);
			window.removeEventListener("mousemove", handleMouseMove);
			canvas.removeEventListener("mouseleave", handleMouseLeave);
			cancelAnimationFrame(animationRef.current);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className={className}
			aria-hidden="true"
			style={{
				position: "fixed",
				inset: 0,
				width: "100%",
				height: "100%",
				pointerEvents: "none"
			}}
		/>
	);
}
