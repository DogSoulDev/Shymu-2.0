module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			width: {
				150: "150px",
				190: "190px",
				225: "225px",
				275: "275px",
				300: "300px",
				340: "340px",
				350: "350px",
				375: "375px",
				460: "460px",
				656: "656px",
				880: "880px",
				508: "508px",
			},
			height: {
				80: "80px",
				150: "150px",
				225: "225px",
				300: "300px",
				340: "340px",
				370: "370px",
				420: "420px",
				510: "510px",
				600: "600px",
				650: "650px",
				685: "685px",
				800: "800px",
				"90vh": "90vh",
			},
			minWidth: {
				210: "210px",
				350: "350px",
				620: "620px",
			},
			screens: {
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1536px",
			},
			colors: {
				headingColor: "#2e2e2e",
				textColor: "#515151",
				cartNumBg: "#e80013",
				primary: "#F5F5F5",
				cardOverlay: "rgba(256,256,256,0.4)",
				darkOverlay: "rgba(0,0,0,0.5)",
				lightOverlay: "rgba(256,256,256,0.2)",
				lighttextGray: "#9ca0ab",
				card: "rgba(256,256,256,0.8)",
				cartBg: "#282a2c",
				cartItem: "#2e3033",
				cartTotal: "#343739",
				loaderOverlay: "rgba(256,256,256,0.1)",
				btn: "#F4694C",
				btnHover: "#FE8369",
				//colores figma
				bgNav: "#1B2F50",
				bgGeneral: "#fff",
				layout: "#F4F5F7",
				textColor2: "#858F9C",
				textColorMenu: "#ece8e8",
				Search: "#8c8c8c",
				Purpple: "#7423ff",
				primaryOrange: "#F4694C",
				primaryBeige: "#FFEFDA",
				primaryFooter: "#1f2937",
				primaryHeader: "#04051b",
				primaryYellow: "#5C76EC",
			},
		},
	},
	plugins: [require("tailwind-scrollbar")],
};
