"use client";

import { useEffect, useState } from "react";
import Ping from "@/components/Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

type ViewProps = { id: string };

const View = ({ id }: ViewProps) => {
  const [totalViews, setTotalViews] = useState<number>(0);

  useEffect(() => {
    // Fetch the current view count
    client
      .withConfig({ useCdn: false })
      .fetch(STARTUP_VIEWS_QUERY, { id })
      .then((data) => setTotalViews(data.views ?? 0));

    // Increment the view count via API route
    fetch("/api/increment-views", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.views === "number") setTotalViews(data.views);
      })
      .catch(() => {
        // Silently handle errors - view counting is not critical
      });
  }, [id]);

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">Views: {totalViews}</span>
      </p>
    </div>
  );
};

export default View;