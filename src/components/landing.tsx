"use client";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";
import Image from "next/image";
import { DATA } from "@/utils/data";

const Landing = () => {
  const [htmlContent, setHtmlContent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFromFlask = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/data");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        setHtmlContent(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFromFlask();
  }, []);

  if (loading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="space-y-20">
      {htmlContent.map((item, index) => (
        <div key={index} className="">
          {/* <div className="code-block">
            <h3>Source Code (Type: {item.type})</h3>
            <pre>
              <code>{item.source}</code>
            </pre>
          </div> */}
          {item.graphs &&
            item.graphs.length > 0 &&
            item.graphs.map((graph, graphIndex) =>
              DATA.map((content) => (
                <div key={`${graphIndex}-${content.id}`} className="space-y-4 w-full">
                  {index === content.id && (
                    <>
                      <h4 id={content.link} className="text-2xl text-center font-semibold text-gray-800">
                        {content.title}
                      </h4>

                      <Image
                        src={`data:image/png;base64,${encodeURIComponent(
                          graph
                        )}`}
                        alt={`Graph ${graphIndex + 1}`}
                        className="rounded-lg border border-gray-300 shadow-sm"
                        width={900}
                        height={400}
                        unoptimized
                      />
                      {Array.isArray(content.description) ? (
                        content.description.map((paragraph, index) => (
                          <p key={index} className="text-gray-600 mb-4">
                            {paragraph}
                          </p>
                        ))
                      ) : (
                        <p className="text-gray-600 mb-4">
                          {content.description}
                        </p>
                      )}
                    </>
                  )}
                </div>
              ))
            )}
        </div>
      ))}
    </div>
  );
};

export default Landing;
