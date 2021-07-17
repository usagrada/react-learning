export interface MyTheme {
	colors: Colors
}

export interface MyThemeOptions {
	colors?: Colors
}

interface Colors {
	primary: details;
}
interface details {
	main: string;
}