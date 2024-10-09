import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { FileUp, RefreshCcw } from "lucide-react";
import * as storage from "../../../lib/storage";
import FileUpload from "./FileUpload";

export function ImageGrid() {
  const [images, setImages] = useState<string[]>([]);
  useEffect(() => {
    handleRefresh();
  }, []);

  function handleRefresh() {
    storage.getImages().then((images) => setImages(images));
  }
  return (
    <div className="mt-8">
      <h1 className="text-2xl font-bold mb-4 text-center">
        Images{" "}
        <Button
          variant="ghost"
          size="icon"
          onClick={handleRefresh}
          aria-label="Remove todo"
        >
          <RefreshCcw className="h-4 w-4" />
        </Button>
      </h1>
      <FileUpload />
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <img src={image} alt="image" className="w-56 h-56 object-cover" />
        ))}
      </div>
    </div>
  );
}
