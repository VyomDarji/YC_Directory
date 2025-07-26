import { NextRequest, NextResponse } from "next/server";
import { writeClient } from "@/sanity/lib/write-client";

export async function POST(req: NextRequest) {
  const { id } = await req.json();
  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  try {
    const updated = await writeClient
      .patch(id)
      .setIfMissing({ views: 0 })
      .inc({ views: 1 })
      .commit();
    return NextResponse.json({ views: updated.views });
  } catch (error) {
    // Add this line:
    console.error("Sanity increment error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}