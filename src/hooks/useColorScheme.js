import { useLayoutEffect } from "react";
import { useFirebaseSettingsStore } from "../stores/firebaseSettingsStore";
function useColorScheme() {
	const settings = useFirebaseSettingsStore((s) => s.settings);

	useLayoutEffect(
		() => {
			const appliedScheme = settings.isDarkSchemeForced ? 'dark' : 'light dark';
			console.log('useColorScheme applied:', appliedScheme); // <-- small change
			document.documentElement.style.colorScheme = appliedScheme;
		},
		[settings]
	);
}

export default useColorScheme;