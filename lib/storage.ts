import { storage } from "../firebaseConfig";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";

export async function upload(file: File, name: string) {
  const storageRef = ref(storage, "images/" + name);
  const result = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(result.ref);
  return url;
}

export async function getImages() {
  const listRef = ref(storage, "images");
  const all = await listAll(listRef);
  return Promise.all(
    all.items.map(async (item) => {
      return getDownloadURL(item);
    })
  );
}
