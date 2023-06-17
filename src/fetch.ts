export async function request(url: string) {
  const res = await fetch(url).then(x => x.text());
  return res;
}
