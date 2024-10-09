import React, { FormEvent } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import * as storage from "../../../lib/storage";

interface Elements extends HTMLFormControlsCollection {
  file: HTMLInputElement;
}

interface Form extends HTMLFormElement {
  readonly elements: Elements;
}

export default function FileUpload() {
  async function handleUpload(e: FormEvent<Form>) {
    e.preventDefault();

    const target = e.currentTarget.elements;
    const file = Array.from(target.file.files ?? []);
    try {
      await storage.upload(file[0], file[0].name);
      alert("File uploaded successfully");
    } catch {
      alert("Error uploading files");
    }
    target.file.value = "";
    // e.currentTarget.reset();
  }
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-card rounded-lg shadow-lg">
      <div className="flex mb-4">
        <form onSubmit={handleUpload}>
          <Input type="file" name="file" className="mr-2" />
          <Button>Upload</Button>
        </form>
      </div>
    </div>
  );
}
