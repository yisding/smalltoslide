"use client";

interface ResultProps {
  images?: string[];
  response?: string;
  context?: string;
}

export function Result({ images, response, context }: ResultProps) {
  return (
    <div className="flex flex-col">
      {images && (
        <>
          <h4 className="my-2 font-semibold">Retrieved Slides:</h4>
          <div className="flex flex-col">
            {images.map((image, index) => (
              <img
                className="my-2"
                key={index}
                src={image}
                alt={`Result ${index}`}
              />
            ))}
          </div>
        </>
      )}
      {context && (
        <>
          <h4 className="my-2 font-semibold">Retrieved Context:</h4>
          <pre className="text-wrap text-sm">{context}</pre>
        </>
      )}

      {response && (
        <>
          <h4 className="pt-4 font-semibold">Response:</h4>
          <div className="text-sm">{response}</div>
        </>
      )}
    </div>
  );
}
