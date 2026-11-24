const FALLBACK = { stars: 100 };

export async function getGithubStats() {
  try {
    const res = await fetch("https://api.github.com/users/aleff-eco/repos?per_page=100", {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 86400 },
    });
    if (!res.ok) return FALLBACK;
    const repos = await res.json();
    if (!Array.isArray(repos) || repos.length === 0) return FALLBACK;
    return { stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0) };
  } catch {
    return FALLBACK;
  }
}
