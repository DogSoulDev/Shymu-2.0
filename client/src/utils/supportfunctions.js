import { deleteObject, ref } from "firebase/storage";
import { storage } from "../config/firebase.config";

export const filters = [
	{ id: 2, name: "Blues", value: "blues" },
	{ id: 3, name: "Rock", value: "rock" },
	{ id: 4, name: "Chill-out", value: "chill-out" },
	{ id: 5, name: "Hip-Hop", value: "hip-hop" },
	{ id: 6, name: "K-PoP", value: "k-pop" },
	{ id: 7, name: "Merengue", value: "merengue" },
	{ id: 8, name: "Metal", value: "metal" },
	{ id: 9, name: "PoP", value: "pop" },
	{ id: 10, name: "Regueton", value: "regueton" },
	{ id: 11, name: "AudioBooks", value: "audiobooks" },
	{ id: 12, name: "Podcast", value: "podcast" },
];

export const filterByLanguage = [
	{ id: 1, name: "Spanish", value: "spanish" },
	{ id: 2, name: "English", value: "english" },
];

export const deleteAnObject = (referenceUrl) => {
	const deleteRef = ref(storage, referenceUrl);
	deleteObject(deleteRef)
		.then(() => {
			return true;
		})
		.catch((error) => {
			return false;
		});
};
