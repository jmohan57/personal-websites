
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import css from "../../styles/scss/utils/theme.module.scss";

{
	/* theme settings */
}
export default function SetTheme() {
	// this will set the theme
	const router = useRouter();

	const [route, wasRoute] = useState();
	const [theme, setTheme] = useState();

	const toggleTheme = () => {
		if (theme === "light") {
			setTheme("dark");
		} else if (theme === "dark") {
			setTheme("unicorn");
		} else if (theme === "unicorn") {
			setTheme("light");
		}
	};

	const buttonIcon = (theme) => {
		if (theme === "light") {
			return (
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.95 5.636l1.414 1.414-2.195 2.195c-.372-.562-.853-1.042-1.414-1.414l2.195-2.195zm-5.95-1.636h2v3.101c-.323-.066-.657-.101-1-.101s-.677.035-1 .101v-3.101zm-3.95 1.636l2.195 2.195c-.561.372-1.042.853-1.414 1.415l-2.195-2.196 1.414-1.414zm-3.05 5.364h3.101c-.066.323-.101.657-.101 1s.035.677.101 1h-3.101v-2zm3.05 7.364l-1.414-1.414 2.195-2.195c.372.562.853 1.042 1.414 1.414l-2.195 2.195zm5.95 1.636h-2v-3.101c.323.066.657.101 1 .101s.677-.035 1-.101v3.101zm-1-5c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm4.95 3.364l-2.195-2.195c.562-.372 1.042-.853 1.414-1.414l2.195 2.195-1.414 1.414zm3.05-5.364h-3.101c.066-.323.101-.657.101-1s-.035-.677-.101-1h3.101v2z" />
				</svg>
			);
		} else if (theme === "dark") {
			return (
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z" />
				</svg>
			);
		} else if (theme === "unicorn") {
			return (
				<svg width="24" height="24" viewBox="0 0 24 24">
					<path d="M4.823 21.933l2.734-1.171-3.241-8.847-1.561 4.372 2.068 5.646zm-2.594-4.174l-2.229 6.241 3.903-1.672-1.674-4.569zm6.248 2.609l2.934-1.258-3.482-9.141-2.215-1.969-.872 2.443 3.635 9.925zm7.523-3.224l-6.453-5.736 2.785 7.308 3.668-1.572zm-.826-5.003l2.201-1.445c.23-.152.295-.462.143-.693-.152-.232-.463-.295-.692-.143l-2.201 1.445c-.231.151-.295.461-.144.692.096.147.256.226.418.226.095 0 .19-.026.275-.082m-2.993-4.312l1.112-2.388c.117-.25.008-.548-.242-.664-.251-.116-.548-.009-.665.242l-1.111 2.388c-.117.25-.008.547.242.664l.211.047c.189 0 .368-.107.453-.289m-2.627.709c1.539-2.963 1.644-5.73.314-8.222-.09-.169-.263-.265-.442-.265-.37 0-.621.398-.44.736 1.166 2.184 1.058 4.637-.32 7.29-.127.245-.031.547.214.674.073.038.152.057.23.057.18 0 .355-.099.444-.27m6.505 6.095c2.017-1.434 4.463-1.64 7.272-.613.327.119.672-.123.672-.47 0-.203-.125-.395-.328-.47-3.136-1.147-5.894-.9-8.196.738-.224.16-.277.472-.117.698.098.136.251.209.407.209.101 0 .202-.03.29-.092m3.757-6.757l-1.697.014.938 1.415-.511 1.618 1.635-.455 1.381.986.073-1.696 1.365-1.009-1.591-.592-.538-1.61-1.055 1.329zm-7.307 3.624c.276-.009.492-.24.483-.517-.056-1.627.36-1.937 1.377-2.051 1.689-.191 1.785-1.312 1.842-1.982.053-.637.071-.851.773-.903.63-.046 1.331-.16 1.76-.659.461-.538.466-1.358.402-2.164-.021-.276-.266-.478-.537-.459-.275.021-.481.262-.459.537.062.787.011 1.23-.165 1.434-.149.174-.48.271-1.074.314-1.553.114-1.644 1.179-1.697 1.816-.057.668-.082.973-.956 1.071-2.075.234-2.315 1.619-2.266 3.08.01.27.231.483.5.483h.017m7.842-8.675c0 1.006.818 1.824 1.825 1.824 1.006 0 1.824-.818 1.824-1.824 0-1.007-.818-1.825-1.824-1.825-1.007 0-1.825.818-1.825 1.825m-6.623-2.841c1.104 0 2 .897 2 2 0 1.104-.896 2-2 2-1.103 0-2-.896-2-2 0-1.103.897-2 2-2" />
				</svg>
			);
		}
	};

	const defaultTheme = () => {
		const themeLocalStorage = localStorage.getItem("theme");
		const themeSystem = window.matchMedia("(prefers-color-scheme: dark)")
			.matches
			? "dark"
			: "light";

		return themeLocalStorage ?? themeSystem;
	};

	useEffect(() => {
		if (!theme) return setTheme(defaultTheme());

		document.querySelector(":root").dataset.theme = theme;
		localStorage.setItem("theme", theme);

		const useSetTheme = (e) => {
			setTheme(e.matches ? "dark" : "light");
		};

		const watchSysTheme = window.matchMedia(
			"(prefers-color-scheme: dark)",
		);

		watchSysTheme.addEventListener("change", useSetTheme);

		return () => {
			watchSysTheme.removeEventListener("change", useSetTheme);
		};
	}, [theme]);

	useEffect(() => {
		class RouteEvents {
			constructor() {
				this.addEventListeners();
			}

			updateRoute(e) {
				wasRoute(e);
			}

			addEventListeners() {
				router.events.on("routeChangeComplete", this.updateRoute);
			}

			removeEventListeners() {
				router.events.off("routeChangeComplete", this.updateRoute);
			}
		}

		const routeEvents = new RouteEvents();

		return () => {
			routeEvents.removeEventListeners();
		};
	}, [router.events]);

	/**
	 * On theme change, or route change re-initialize mesh gradient canvas
	 */
	useEffect(() => {
		let canvasEle = document.querySelector("#gradient-canvas");

		if (canvasEle) {
			function normalizeColor(e) {
				return [
					((e >> 16) & 255) / 255,
					((e >> 8) & 255) / 255,
					(255 & e) / 255,
				];
			}
			function e(e, n, t) {
				return (
					n in e
						? Object.defineProperty(e, n, {
							value: t,
							enumerable: !0,
							configurable: !0,
							writable: !0,
						})
						: (e[n] = t),
						e
				);
			}
			["SCREEN", "LINEAR_LIGHT"].reduce(
				(e, n, t) => Object.assign(e, { [n]: t }),
				{},
			);
			class MiniGl {
				constructor(e, n, t, i = !1) {
					const s = this,
						o =
							-1 !==
							document.location.search
								.toLowerCase()
								.indexOf("debug=webgl");
					(s.canvas = e),
						(s.gl = s.canvas.getContext("webgl", { antialias: !0 })),
						(s.meshes = []);
					const r = s.gl;
					n && t && this.setSize(n, t),
						s.lastDebugMsg,
						(s.debug =
							i && o
								? function (e) {
									const n = new Date();
									n - s.lastDebugMsg > 1e3 &&
									console.log("---"),
										console.log(
											n.toLocaleTimeString() +
											Array(
												Math.max(0, 32 - e.length),
											).join(" ") +
											e +
											": ",
											...Array.from(arguments).slice(1),
										),
										(s.lastDebugMsg = n);
								}
								: () => {}),
						Object.defineProperties(s, {
							Material: {
								enumerable: !1,
								value: class {
									constructor(e, n, t = {}) {
										function i(e, n) {
											const t = r.createShader(e);
											return (
												r.shaderSource(t, n),
													r.compileShader(t),
												r.getShaderParameter(
													t,
													r.COMPILE_STATUS,
												) ||
												console.error(
													r.getShaderInfoLog(t),
												),
													s.debug(
														"Material.compileShaderSource",
														{ source: n },
													),
													t
											);
										}
										function o(e, n) {
											return Object.entries(e)
												.map(([e, t]) =>
													t.getDeclaration(e, n),
												)
												.join("\n");
										}
										const a = this;
										(a.uniforms = t), (a.uniformInstances = []);
										const l =
											"\n              precision highp float;\n            ";
										(a.vertexSource = `\n              ${l}\n              attribute vec4 position;\n              attribute vec2 uv;\n              attribute vec2 uvNorm;\n              ${o(
											s.commonUniforms,
											"vertex",
										)}\n              ${o(
											t,
											"vertex",
										)}\n              ${e}\n            `),
											(a.Source = `\n              ${l}\n              ${o(
												s.commonUniforms,
												"fragment",
											)}\n              ${o(
												t,
												"fragment",
											)}\n              ${n}\n            `),
											(a.vertexShader = i(
												r.VERTEX_SHADER,
												a.vertexSource,
											)),
											(a.fragmentShader = i(
												r.FRAGMENT_SHADER,
												a.Source,
											)),
											(a.program = r.createProgram()),
											r.attachShader(a.program, a.vertexShader),
											r.attachShader(
												a.program,
												a.fragmentShader,
											),
											r.linkProgram(a.program),
										r.getProgramParameter(
											a.program,
											r.LINK_STATUS,
										) ||
										console.error(
											r.getProgramInfoLog(a.program),
										),
											r.useProgram(a.program),
											a.attachUniforms(
												void 0,
												s.commonUniforms,
											),
											a.attachUniforms(void 0, a.uniforms);
									}
									attachUniforms(e, n) {
										const t = this;
										void 0 === e
											? Object.entries(n).forEach(([e, n]) => {
												t.attachUniforms(e, n);
											})
											: "array" == n.type
												? n.value.forEach((n, i) =>
													t.attachUniforms(`${e}[${i}]`, n),
												)
												: "struct" == n.type
													? Object.entries(n.value).forEach(
														([n, i]) =>
															t.attachUniforms(`${e}.${n}`, i),
													)
													: (s.debug("Material.attachUniforms", {
														name: e,
														uniform: n,
													}),
														t.uniformInstances.push({
															uniform: n,
															location: r.getUniformLocation(
																t.program,
																e,
															),
														}));
									}
								},
							},
							Uniform: {
								enumerable: !1,
								value: class {
									constructor(e) {
										(this.type = "float"),
											Object.assign(this, e),
											(this.typeFn =
												{
													float: "1f",
													int: "1i",
													vec2: "2fv",
													vec3: "3fv",
													vec4: "4fv",
													mat4: "Matrix4fv",
												}[this.type] || "1f"),
											this.update();
									}
									update(e) {
										void 0 !== this.value &&
										r[`uniform${this.typeFn}`](
											e,
											0 === this.typeFn.indexOf("Matrix")
												? this.transpose
												: this.value,
											0 === this.typeFn.indexOf("Matrix")
												? this.value
												: null,
										);
									}
									getDeclaration(e, n, t) {
										const i = this;
										if (i.excludeFrom !== n) {
											if ("array" === i.type)
												return (
													i.value[0].getDeclaration(
														e,
														n,
														i.value.length,
													) +
													`\nconst int ${e}_length = ${i.value.length};`
												);
											if ("struct" === i.type) {
												let s = e.replace("u_", "");
												return (
													(s =
														s.charAt(0).toUpperCase() +
														s.slice(1)),
													`uniform struct ${s} \n\t\t\t\t\t\t\t\t{\n` +
													Object.entries(i.value)
														.map(([e, t]) =>
															t
																.getDeclaration(e, n)
																.replace(
																	/^uniform/,
																	"",
																),
														)
														.join("") +
													`\n} ${e}${
														t > 0 ? `[${t}]` : ""
													};`
												);
											}
											return `uniform ${i.type} ${e}${
												t > 0 ? `[${t}]` : ""
											};`;
										}
									}
								},
							},
							PlaneGeometry: {
								enumerable: !1,
								value: class {
									constructor(e, n, t, i, o) {
										r.createBuffer(),
											(this.attributes = {
												position: new s.Attribute({
													target: r.ARRAY_BUFFER,
													size: 3,
												}),
												uv: new s.Attribute({
													target: r.ARRAY_BUFFER,
													size: 2,
												}),
												uvNorm: new s.Attribute({
													target: r.ARRAY_BUFFER,
													size: 2,
												}),
												index: new s.Attribute({
													target: r.ELEMENT_ARRAY_BUFFER,
													size: 3,
													type: r.UNSIGNED_SHORT,
												}),
											}),
											this.setTopology(t, i),
											this.setSize(e, n, o);
									}
									setTopology(e = 1, n = 1) {
										const t = this;
										(t.xSegCount = e),
											(t.ySegCount = n),
											(t.vertexCount =
												(t.xSegCount + 1) * (t.ySegCount + 1)),
											(t.quadCount =
												t.xSegCount * t.ySegCount * 2),
											(t.attributes.uv.values =
												new Float32Array(2 * t.vertexCount)),
											(t.attributes.uvNorm.values =
												new Float32Array(2 * t.vertexCount)),
											(t.attributes.index.values =
												new Uint16Array(3 * t.quadCount));
										for (let e = 0; e <= t.ySegCount; e++)
											for (let n = 0; n <= t.xSegCount; n++) {
												const i = e * (t.xSegCount + 1) + n;
												if (
													((t.attributes.uv.values[2 * i] =
														n / t.xSegCount),
														(t.attributes.uv.values[2 * i + 1] =
															1 - e / t.ySegCount),
														(t.attributes.uvNorm.values[2 * i] =
															(n / t.xSegCount) * 2 - 1),
														(t.attributes.uvNorm.values[
														2 * i + 1
															] = 1 - (e / t.ySegCount) * 2),
													n < t.xSegCount && e < t.ySegCount)
												) {
													const s = e * t.xSegCount + n;
													(t.attributes.index.values[6 * s] =
														i),
														(t.attributes.index.values[
														6 * s + 1
															] = i + 1 + t.xSegCount),
														(t.attributes.index.values[
														6 * s + 2
															] = i + 1),
														(t.attributes.index.values[
														6 * s + 3
															] = i + 1),
														(t.attributes.index.values[
														6 * s + 4
															] = i + 1 + t.xSegCount),
														(t.attributes.index.values[
														6 * s + 5
															] = i + 2 + t.xSegCount);
												}
											}
										t.attributes.uv.update(),
											t.attributes.uvNorm.update(),
											t.attributes.index.update(),
											s.debug("Geometry.setTopology", {
												uv: t.attributes.uv,
												uvNorm: t.attributes.uvNorm,
												index: t.attributes.index,
											});
									}
									setSize(e = 1, n = 1, t = "xz") {
										const i = this;
										(i.width = e),
											(i.height = n),
											(i.orientation = t),
										(i.attributes.position.values &&
											i.attributes.position.values.length ===
											3 * i.vertexCount) ||
										(i.attributes.position.values =
											new Float32Array(
												3 * i.vertexCount,
											));
										const o = e / -2,
											r = n / -2,
											a = e / i.xSegCount,
											l = n / i.ySegCount;
										for (let e = 0; e <= i.ySegCount; e++) {
											const n = r + e * l;
											for (let s = 0; s <= i.xSegCount; s++) {
												const r = o + s * a,
													l = e * (i.xSegCount + 1) + s;
												(i.attributes.position.values[
												3 * l + "xyz".indexOf(t[0])
													] = r),
													(i.attributes.position.values[
													3 * l + "xyz".indexOf(t[1])
														] = -n);
											}
										}
										i.attributes.position.update(),
											s.debug("Geometry.setSize", {
												position: i.attributes.position,
											});
									}
								},
							},
							Mesh: {
								enumerable: !1,
								value: class {
									constructor(e, n) {
										const t = this;
										(t.geometry = e),
											(t.material = n),
											(t.wireframe = !1),
											(t.attributeInstances = []),
											Object.entries(
												t.geometry.attributes,
											).forEach(([e, n]) => {
												t.attributeInstances.push({
													attribute: n,
													location: n.attach(
														e,
														t.material.program,
													),
												});
											}),
											s.meshes.push(t),
											s.debug("Mesh.constructor", { mesh: t });
									}
									draw() {
										r.useProgram(this.material.program),
											this.material.uniformInstances.forEach(
												({ uniform: e, location: n }) =>
													e.update(n),
											),
											this.attributeInstances.forEach(
												({ attribute: e, location: n }) =>
													e.use(n),
											),
											r.drawElements(
												this.wireframe ? r.LINES : r.TRIANGLES,
												this.geometry.attributes.index.values
													.length,
												r.UNSIGNED_SHORT,
												0,
											);
									}
									remove() {
										s.meshes = s.meshes.filter((e) => e != this);
									}
								},
							},
							Attribute: {
								enumerable: !1,
								value: class {
									constructor(e) {
										(this.type = r.FLOAT),
											(this.normalized = !1),
											(this.buffer = r.createBuffer()),
											Object.assign(this, e),
											this.update();
									}
									update() {
										void 0 !== this.values &&
										(r.bindBuffer(this.target, this.buffer),
											r.bufferData(
												this.target,
												this.values,
												r.STATIC_DRAW,
											));
									}
									attach(e, n) {
										const t = r.getAttribLocation(n, e);
										return (
											this.target === r.ARRAY_BUFFER &&
											(r.enableVertexAttribArray(t),
												r.vertexAttribPointer(
													t,
													this.size,
													this.type,
													this.normalized,
													0,
													0,
												)),
												t
										);
									}
									use(e) {
										r.bindBuffer(this.target, this.buffer),
										this.target === r.ARRAY_BUFFER &&
										(r.enableVertexAttribArray(e),
											r.vertexAttribPointer(
												e,
												this.size,
												this.type,
												this.normalized,
												0,
												0,
											));
									}
								},
							},
						});
					const a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
					s.commonUniforms = {
						projectionMatrix: new s.Uniform({
							type: "mat4",
							value: a,
						}),
						modelViewMatrix: new s.Uniform({
							type: "mat4",
							value: a,
						}),
						resolution: new s.Uniform({
							type: "vec2",
							value: [1, 1],
						}),
						aspectRatio: new s.Uniform({ type: "float", value: 1 }),
					};
				}
				setSize(e = 640, n = 480) {
					(this.width = e),
						(this.height = n),
						(this.canvas.width = e),
						(this.canvas.height = n),
						this.gl.viewport(0, 0, e, n),
						(this.commonUniforms.resolution.value = [e, n]),
						(this.commonUniforms.aspectRatio.value = e / n),
						this.debug("MiniGL.setSize", { width: e, height: n });
				}
				setOrthographicCamera(e = 0, n = 0, t = 0, i = -2e3, s = 2e3) {
					(this.commonUniforms.projectionMatrix.value = [
						2 / this.width,
						0,
						0,
						0,
						0,
						2 / this.height,
						0,
						0,
						0,
						0,
						2 / (i - s),
						0,
						e,
						n,
						t,
						1,
					]),
						this.debug(
							"setOrthographicCamera",
							this.commonUniforms.projectionMatrix.value,
						);
				}
				render() {
					this.gl.clearColor(0, 0, 0, 0),
						this.gl.clearDepth(1),
						this.meshes.forEach((e) => e.draw());
				}
			}
			class Gradient {
				constructor(...n) {
					e(this, "el", void 0),
						e(this, "cssVarRetries", 0),
						e(this, "maxCssVarRetries", 200),
						e(this, "angle", 0),
						e(this, "isLoadedClass", !1),
						e(this, "isScrolling", !1),
						e(this, "scrollingTimeout", void 0),
						e(this, "scrollingRefreshDelay", 200),
						e(this, "isIntersecting", !1),
						e(this, "shaderFiles", void 0),
						e(this, "vertexShader", void 0),
						e(this, "sectionColors", void 0),
						e(this, "computedCanvasStyle", void 0),
						e(this, "conf", void 0),
						e(this, "uniforms", void 0),
						e(this, "t", 1253106),
						e(this, "last", 0),
						e(this, "width", void 0),
						e(this, "minWidth", 1111),
						e(this, "height", 600),
						e(this, "xSegCount", void 0),
						e(this, "ySegCount", void 0),
						e(this, "mesh", void 0),
						e(this, "material", void 0),
						e(this, "geometry", void 0),
						e(this, "minigl", void 0),
						e(this, "scrollObserver", void 0),
						e(this, "amp", 320),
						e(this, "seed", 5),
						e(this, "freqX", 14e-5),
						e(this, "freqY", 29e-5),
						e(this, "freqDelta", 1e-5),
						e(this, "activeColors", [1, 1, 1, 1]),
						e(this, "isMetaKey", !1),
						e(this, "isGradientLegendVisible", !1),
						e(this, "isMouseDown", !1),
						e(this, "handleScroll", () => {
							clearTimeout(this.scrollingTimeout),
								(this.scrollingTimeout = setTimeout(
									this.handleScrollEnd,
									this.scrollingRefreshDelay,
								)),
							this.isGradientLegendVisible &&
							this.hideGradientLegend(),
							this.conf.playing &&
							((this.isScrolling = !0), this.pause());
						}),
						e(this, "handleScrollEnd", () => {
							(this.isScrolling = !1),
							this.isIntersecting && this.play();
						}),
						e(this, "resize", () => {
							(this.width = window.innerWidth),
								this.minigl.setSize(this.width, this.height),
								this.minigl.setOrthographicCamera(),
								(this.xSegCount = Math.ceil(
									this.width * this.conf.density[0],
								)),
								(this.ySegCount = Math.ceil(
									this.height * this.conf.density[1],
								)),
								this.mesh.geometry.setTopology(
									this.xSegCount,
									this.ySegCount,
								),
								this.mesh.geometry.setSize(
									this.width,
									this.height,
								),
								(this.mesh.material.uniforms.u_shadow_power.value =
									this.width < 600 ? 5 : 6);
						}),
						e(this, "handleMouseDown", (e) => {
							this.isGradientLegendVisible &&
							((this.isMetaKey = e.metaKey),
								(this.isMouseDown = !0),
							!1 === this.conf.playing &&
							requestAnimationFrame(this.animate));
						}),
						e(this, "handleMouseUp", () => {
							this.isMouseDown = !1;
						}),
						e(this, "animate", (e) => {
							if (!this.shouldSkipFrame(e) || this.isMouseDown) {
								if (
									((this.t += Math.min(e - this.last, 1e3 / 15)),
										(this.last = e),
										this.isMouseDown)
								) {
									let e = 160;
									this.isMetaKey && (e = -160), (this.t += e);
								}
								(this.mesh.material.uniforms.u_time.value =
									this.t),
									this.minigl.render();
							}
							if (0 !== this.last && this.isStatic)
								return (
									this.minigl.render(), void this.disconnect()
								);
							(this.conf.playing || this.isMouseDown) &&
							requestAnimationFrame(this.animate);
						}),
						e(this, "addIsLoadedClass", () => {
							!this.isLoadedClass &&
							((this.isLoadedClass = !0),
								this.el.classList.add("isLoaded"),
								setTimeout(() => {
									this.el.parentElement.classList.add("isLoaded");
								}, 3e3));
						}),
						e(this, "pause", () => {
							this.conf.playing = !1;
						}),
						e(this, "play", () => {
							requestAnimationFrame(this.animate),
								(this.conf.playing = !0);
						}),
						e(
							this,
							"initGradient",
							(e) => (
								(this.el = document.querySelector(e)),
									this.connect(),
									this
							),
						);
				}
				async connect() {
					(this.shaderFiles = {
						vertex:
							"varying vec3 v_color;\n\nvoid main() {\n  float time = u_time * u_global.noiseSpeed;\n\n  vec2 noiseCoord = resolution * uvNorm * u_global.noiseFreq;\n\n  vec2 st = 1. - uvNorm.xy;\n\n  //\n  // Tilting the plane\n  //\n\n  // Front-to-back tilt\n  float tilt = resolution.y / 2.0 * uvNorm.y;\n\n  // Left-to-right angle\n  float incline = resolution.x * uvNorm.x / 2.0 * u_vertDeform.incline;\n\n  // Up-down shift to offset incline\n  float offset = resolution.x / 2.0 * u_vertDeform.incline * mix(u_vertDeform.offsetBottom, u_vertDeform.offsetTop, uv.y);\n\n  //\n  // Vertex noise\n  //\n\n  float noise = snoise(vec3(\n    noiseCoord.x * u_vertDeform.noiseFreq.x + time * u_vertDeform.noiseFlow,\n    noiseCoord.y * u_vertDeform.noiseFreq.y,\n    time * u_vertDeform.noiseSpeed + u_vertDeform.noiseSeed\n  )) * u_vertDeform.noiseAmp;\n\n  // Fade noise to zero at edges\n  noise *= 1.0 - pow(abs(uvNorm.y), 2.0);\n\n  // Clamp to 0\n  noise = max(0.0, noise);\n\n  vec3 pos = vec3(\n    position.x,\n    position.y + tilt + incline + noise - offset,\n    position.z\n  );\n\n  //\n  // Vertex color, to be passed to fragment shader\n  //\n\n  if (u_active_colors[0] == 1.) {\n    v_color = u_baseColor;\n  }\n\n  for (int i = 0; i < u_waveLayers_length; i++) {\n    if (u_active_colors[i + 1] == 1.) {\n      WaveLayers layer = u_waveLayers[i];\n\n      float noise = smoothstep(\n        layer.noiseFloor,\n        layer.noiseCeil,\n        snoise(vec3(\n          noiseCoord.x * layer.noiseFreq.x + time * layer.noiseFlow,\n          noiseCoord.y * layer.noiseFreq.y,\n          time * layer.noiseSpeed + layer.noiseSeed\n        )) / 2.0 + 0.5\n      );\n\n      v_color = blendNormal(v_color, layer.color, pow(noise, 4.));\n    }\n  }\n\n  //\n  // Finish\n  //\n\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n}",
						noise: "//\n// Description : Array and textureless GLSL 2D/3D/4D simplex\n//               noise functions.\n//      Author : Ian McEwan, Ashima Arts.\n//  Maintainer : stegu\n//     Lastmod : 20110822 (ijm)\n//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\n//               Distributed under the MIT License. See LICENSE file.\n//               https://github.com/ashima/webgl-noise\n//               https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x) {\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x) {\n    return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nfloat snoise(vec3 v)\n{\n  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;\n  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);\n\n// First corner\n  vec3 i  = floor(v + dot(v, C.yyy) );\n  vec3 x0 =   v - i + dot(i, C.xxx) ;\n\n// Other corners\n  vec3 g = step(x0.yzx, x0.xyz);\n  vec3 l = 1.0 - g;\n  vec3 i1 = min( g.xyz, l.zxy );\n  vec3 i2 = max( g.xyz, l.zxy );\n\n  //   x0 = x0 - 0.0 + 0.0 * C.xxx;\n  //   x1 = x0 - i1  + 1.0 * C.xxx;\n  //   x2 = x0 - i2  + 2.0 * C.xxx;\n  //   x3 = x0 - 1.0 + 3.0 * C.xxx;\n  vec3 x1 = x0 - i1 + C.xxx;\n  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y\n  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y\n\n// Permutations\n  i = mod289(i);\n  vec4 p = permute( permute( permute(\n            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))\n          + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))\n          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));\n\n// Gradients: 7x7 points over a square, mapped onto an octahedron.\n// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)\n  float n_ = 0.142857142857; // 1.0/7.0\n  vec3  ns = n_ * D.wyz - D.xzx;\n\n  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)\n\n  vec4 x_ = floor(j * ns.z);\n  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)\n\n  vec4 x = x_ *ns.x + ns.yyyy;\n  vec4 y = y_ *ns.x + ns.yyyy;\n  vec4 h = 1.0 - abs(x) - abs(y);\n\n  vec4 b0 = vec4( x.xy, y.xy );\n  vec4 b1 = vec4( x.zw, y.zw );\n\n  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;\n  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;\n  vec4 s0 = floor(b0)*2.0 + 1.0;\n  vec4 s1 = floor(b1)*2.0 + 1.0;\n  vec4 sh = -step(h, vec4(0.0));\n\n  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;\n  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;\n\n  vec3 p0 = vec3(a0.xy,h.x);\n  vec3 p1 = vec3(a0.zw,h.y);\n  vec3 p2 = vec3(a1.xy,h.z);\n  vec3 p3 = vec3(a1.zw,h.w);\n\n//Normalise gradients\n  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));\n  p0 *= norm.x;\n  p1 *= norm.y;\n  p2 *= norm.z;\n  p3 *= norm.w;\n\n// Mix final noise value\n  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);\n  m = m * m;\n  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),\n                                dot(p2,x2), dot(p3,x3) ) );\n}",
						blend: "//\n// https://github.com/jamieowen/glsl-blend\n//\n\n// Normal\n\nvec3 blendNormal(vec3 base, vec3 blend) {\n\treturn blend;\n}\n\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n\treturn (blendNormal(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Screen\n\nfloat blendScreen(float base, float blend) {\n\treturn 1.0-((1.0-base)*(1.0-blend));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend) {\n\treturn vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n}\n\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n\treturn (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Multiply\n\nvec3 blendMultiply(vec3 base, vec3 blend) {\n\treturn base*blend;\n}\n\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n\treturn (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Overlay\n\nfloat blendOverlay(float base, float blend) {\n\treturn base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend) {\n\treturn vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n}\n\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n\treturn (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Hard light\n\nvec3 blendHardLight(vec3 base, vec3 blend) {\n\treturn blendOverlay(blend,base);\n}\n\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Soft light\n\nfloat blendSoftLight(float base, float blend) {\n\treturn (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n\treturn vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n}\n\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color dodge\n\nfloat blendColorDodge(float base, float blend) {\n\treturn (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n\treturn vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n}\n\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Color burn\n\nfloat blendColorBurn(float base, float blend) {\n\treturn (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n\treturn vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n}\n\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Vivid Light\n\nfloat blendVividLight(float base, float blend) {\n\treturn (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend) {\n\treturn vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n}\n\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Lighten\n\nfloat blendLighten(float base, float blend) {\n\treturn max(blend,base);\n}\n\nvec3 blendLighten(vec3 base, vec3 blend) {\n\treturn vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));\n}\n\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLighten(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear burn\n\nfloat blendLinearBurn(float base, float blend) {\n\t// Note : Same implementation as BlendSubtractf\n\treturn max(base+blend-1.0,0.0);\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendSubtract\n\treturn max(base+blend-vec3(1.0),vec3(0.0));\n}\n\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearBurn(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear dodge\n\nfloat blendLinearDodge(float base, float blend) {\n\t// Note : Same implementation as BlendAddf\n\treturn min(base+blend,1.0);\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n\t// Note : Same implementation as BlendAdd\n\treturn min(base+blend,vec3(1.0));\n}\n\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearDodge(base, blend) * opacity + base * (1.0 - opacity));\n}\n\n// Linear light\n\nfloat blendLinearLight(float base, float blend) {\n\treturn blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n\treturn vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));\n}\n\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n\treturn (blendLinearLight(base, blend) * opacity + base * (1.0 - opacity));\n}",
						fragment:
							"varying vec3 v_color;\n\nvoid main() {\n  vec3 color = v_color;\n  if (u_darken_top == 1.0) {\n    vec2 st = gl_FragCoord.xy/resolution.xy;\n    color.g -= pow(st.y + sin(-12.0) * st.x, u_shadow_power) * 0.4;\n  }\n  gl_FragColor = vec4(color, 1.0);\n}",
					}),
						(this.conf = {
							presetName: "",
							wireframe: !1,
							density: [0.06, 0.16],
							zoom: 1,
							rotation: 0,
							playing: !0,
						}),
						document.querySelector("#gradient-canvas").length < 1
							? console.log("Did not load canvas")
							: ((this.minigl = new MiniGl(
								this.el,
								null,
								null,
								!0,
							)),
								requestAnimationFrame(() => {
									this.el &&
									((this.computedCanvasStyle = getComputedStyle(
										this.el,
									)),
										this.waitForCssVars());
								}));
				}
				disconnect() {
					this.scrollObserver &&
					(window.removeEventListener("scroll", this.handleScroll),
						window.removeEventListener(
							"mousedown",
							this.handleMouseDown,
						),
						window.removeEventListener(
							"mouseup",
							this.handleMouseUp,
						),
						window.removeEventListener(
							"keydown",
							this.handleKeyDown,
						),
						this.scrollObserver.disconnect()),
						window.removeEventListener("resize", this.resize);
				}
				initMaterial() {
					this.uniforms = {
						u_time: new this.minigl.Uniform({ value: 0 }),
						u_shadow_power: new this.minigl.Uniform({ value: 5 }),
						u_darken_top: new this.minigl.Uniform({
							value: "" === this.el.dataset.jsDarkenTop ? 1 : 0,
						}),
						u_active_colors: new this.minigl.Uniform({
							value: this.activeColors,
							type: "vec4",
						}),
						u_global: new this.minigl.Uniform({
							value: {
								noiseFreq: new this.minigl.Uniform({
									value: [this.freqX, this.freqY],
									type: "vec2",
								}),
								noiseSpeed: new this.minigl.Uniform({
									value: 5e-6,
								}),
							},
							type: "struct",
						}),
						u_vertDeform: new this.minigl.Uniform({
							value: {
								incline: new this.minigl.Uniform({
									value:
										Math.sin(this.angle) / Math.cos(this.angle),
								}),
								offsetTop: new this.minigl.Uniform({
									value: -0.5,
								}),
								offsetBottom: new this.minigl.Uniform({
									value: -0.5,
								}),
								noiseFreq: new this.minigl.Uniform({
									value: [3, 4],
									type: "vec2",
								}),
								noiseAmp: new this.minigl.Uniform({
									value: this.amp,
								}),
								noiseSpeed: new this.minigl.Uniform({ value: 10 }),
								noiseFlow: new this.minigl.Uniform({ value: 3 }),
								noiseSeed: new this.minigl.Uniform({
									value: this.seed,
								}),
							},
							type: "struct",
							excludeFrom: "fragment",
						}),
						u_baseColor: new this.minigl.Uniform({
							value: this.sectionColors[0],
							type: "vec3",
							excludeFrom: "fragment",
						}),
						u_waveLayers: new this.minigl.Uniform({
							value: [],
							excludeFrom: "fragment",
							type: "array",
						}),
					};
					for (let e = 1; e < this.sectionColors.length; e += 1)
						this.uniforms.u_waveLayers.value.push(
							new this.minigl.Uniform({
								value: {
									color: new this.minigl.Uniform({
										value: this.sectionColors[e],
										type: "vec3",
									}),
									noiseFreq: new this.minigl.Uniform({
										value: [
											2 + e / this.sectionColors.length,
											3 + e / this.sectionColors.length,
										],
										type: "vec2",
									}),
									noiseSpeed: new this.minigl.Uniform({
										value: 11 + 0.3 * e,
									}),
									noiseFlow: new this.minigl.Uniform({
										value: 6.5 + 0.3 * e,
									}),
									noiseSeed: new this.minigl.Uniform({
										value: this.seed + 10 * e,
									}),
									noiseFloor: new this.minigl.Uniform({
										value: 0.1,
									}),
									noiseCeil: new this.minigl.Uniform({
										value: 0.63 + 0.07 * e,
									}),
								},
								type: "struct",
							}),
						);
					return (
						(this.vertexShader = [
							this.shaderFiles.noise,
							this.shaderFiles.blend,
							this.shaderFiles.vertex,
						].join("\n\n")),
							new this.minigl.Material(
								this.vertexShader,
								this.shaderFiles.fragment,
								this.uniforms,
							)
					);
				}
				initMesh() {
					(this.material = this.initMaterial()),
						(this.geometry = new this.minigl.PlaneGeometry()),
						(this.mesh = new this.minigl.Mesh(
							this.geometry,
							this.material,
						));
				}
				shouldSkipFrame(e) {
					return (
						!!window.document.hidden ||
						!this.conf.playing ||
						parseInt(e, 10) % 2 == 0 ||
						void 0
					);
				}
				updateFrequency(e) {
					(this.freqX += e), (this.freqY += e);
				}
				toggleColor(e) {
					this.activeColors[e] = 0 === this.activeColors[e] ? 1 : 0;
				}
				showGradientLegend() {
					this.width > this.minWidth &&
					((this.isGradientLegendVisible = !0),
						document.body.classList.add("isGradientLegendVisible"));
				}
				hideGradientLegend() {
					(this.isGradientLegendVisible = !1),
						document.body.classList.remove(
							"isGradientLegendVisible",
						);
				}
				init() {
					this.initGradientColors(),
						this.initMesh(),
						this.resize(),
						requestAnimationFrame(this.animate),
						window.addEventListener("resize", this.resize);
				}
				waitForCssVars() {
					if (
						this.computedCanvasStyle &&
						-1 !==
						this.computedCanvasStyle
							.getPropertyValue("--gradient-color-1")
							.indexOf("#")
					)
						this.init(), this.addIsLoadedClass();
					else {
						if (
							((this.cssVarRetries += 1),
							this.cssVarRetries > this.maxCssVarRetries)
						)
							return (
								(this.sectionColors = [
									16711680, 16711680, 16711935, 65280, 255,
								]),
									void this.init()
							);
						requestAnimationFrame(() => this.waitForCssVars());
					}
				}
				initGradientColors() {
					this.sectionColors = [
						"--gradient-color-1",
						"--gradient-color-2",
						"--gradient-color-3",
						"--gradient-color-4",
					]
						.map((e) => {
							let n = this.computedCanvasStyle
								.getPropertyValue(e)
								.trim();
							if (4 === n.length) {
								const e = n
									.substr(1)
									.split("")
									.map((e) => e + e)
									.join("");
								n = `#${e}`;
							}
							return n && `0x${n.substr(1)}`;
						})
						.filter(Boolean)
						.map(normalizeColor);
				}
			}

			let gradient = new Gradient();
			gradient.initGradient("#gradient-canvas");
		}

		return () => {};
	}, [theme, route]);

	return (
		<>
			<button
				key="themeToggle"
				onClick={toggleTheme}
				data-theme={theme}
				className={css.toggle}
			>
				{buttonIcon(theme)}
			</button>
		</>
	);
}
