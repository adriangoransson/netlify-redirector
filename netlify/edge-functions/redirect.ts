const redirectHost = Netlify.env.get("REDIRECT_HOST") as string;

if (!redirectHost) {
  throw new Error("Missing REDIRECT_HOST");
}

if (redirectHost.endsWith("/")) {
  throw new Error("REDIRECT_HOST should not have a trailing slash");
}

export default async (req: Request) => {
  const url = new URL(req.url);
  const transformed = `${redirectHost}${url.pathname}`;

  console.log(`${req.url} → ${transformed}`);

  return Response.redirect(transformed);
};
