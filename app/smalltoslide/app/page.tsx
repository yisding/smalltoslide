"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Result } from "@/components/section/result";

interface FormElements extends HTMLFormControlsCollection {
  query: HTMLInputElement;
}
interface QueryFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default function Home() {
  const [ragImages, setRagImages] = useState<string[] | undefined>(undefined);
  const [ragResponse, setRagResponse] = useState<string | undefined>(undefined);
  const [colPaliImages, setColPaliImages] = useState<string[] | undefined>(
    undefined,
  );
  const [colPaliResponse, setColPaliResponse] = useState<string | undefined>(
    undefined,
  );
  const [stsImages, setStsImages] = useState<string[] | undefined>(undefined);
  const [stsResponse, setStsResponse] = useState<string | undefined>(undefined);

  const handleSubmit = (e: React.FormEvent<QueryFormElement>) => {
    e.preventDefault();

    setRagImages(undefined);
    setRagResponse(undefined);
    setColPaliImages(undefined);
    setColPaliResponse(undefined);
    setStsImages(undefined);
    setStsResponse(undefined);

    if (!e.currentTarget.elements.query.value) {
      window.alert("Empty query");
    } else {
      window.alert("Submitting!");

      setRagImages([
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
      ]);
      setRagResponse("This is the LLM response using the RAG method.");

      setColPaliImages([
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
      ]);
      setColPaliResponse("This is the LLM response using the ColPali method.");

      setStsImages([
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
        "https://placehold.co/600x400",
      ]);
      setStsResponse(
        "This is the LLM response using the Small to Slide method.",
      );
    }

    // const ragRes = fetch("/api/rag", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     query: e.currentTarget.elements.query.value,
    //   }),
    // });
    // const colPaliRes = fetch("/api/colpali", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     query: e.currentTarget.elements.query.value,
    //   }),
    // });
    // const stsRes = fetch("/api/sts", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     query: e.currentTarget.elements.query.value,
    //   }),
    // });

    // Promise.all([ragRes, colPaliRes, stsRes])
    //   .then((responses) => Promise.all(responses.map((res) => res.json())))
    //   .then((data) => {
    //     console.log(data);
    //   });
  };

  return (
    <div className="m-4">
      <h1 className="text-2xl font-semibold">Small to Slide</h1>
      <p>Embed small, retrieve images, generate with Multimodal LLMs</p>

      <form className="mt-4 flex flex-row gap-x-2" onSubmit={handleSubmit}>
        <Input id="query" placeholder="Ex: What was the EU's climate plan?" />
        <Button type="submit">Submit Query</Button>
      </form>

      <h2 className="mt-4 text-xl font-semibold">Results</h2>
      <div className="mt-2 grid grid-cols-1 gap-y-4 lg:grid-cols-3 lg:gap-x-2">
        <div className="rounded border border-blue-400 p-4">
          <h2 className="text-xl font-semibold">RAG</h2>
          <Result images={ragImages} response={ragResponse} />
        </div>
        <div className="rounded border border-blue-600 p-4">
          <h2 className="text-xl font-semibold">ColPali</h2>
          <Result images={colPaliImages} response={colPaliResponse} />
        </div>
        <div className="rounded border border-blue-800 p-4">
          <h2 className="text-xl font-semibold">Small to Slide</h2>
          <Result images={stsImages} response={stsResponse} />
        </div>
      </div>
    </div>
  );
}
