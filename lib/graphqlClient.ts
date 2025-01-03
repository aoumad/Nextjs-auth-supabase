export async function fetchGraphQL(query: string, variables?: Record<string, any>) {
    const res = await fetch(process.env.NEXT_PUBLIC_SUPABASE_GRAPHQL_URL!, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
      },
      body: JSON.stringify({ query, variables }),
    });
    return res.json();
  }