export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    { status: "ok", service: "portfolio-v2" },
    { status: 200, headers: { "Cache-Control": "no-store" } },
  );
}
