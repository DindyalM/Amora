export const prerender = true;
export async function post({ request, platform }) {
  const counter = platform.env.COUNTER.idFromName('A');
}
