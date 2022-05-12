export const getSongId = (url: string) => {
  const idPattern = /(?<=artist|track|album|playlist)\/(.*)\?/i;
  const matches = idPattern.exec(url);

  return matches && matches[1];
};

export const getContentType = (url: string) => {
  const contentTypePattern = /spotify.com\/(.*?)\//i;
  const matches = contentTypePattern.exec(url);

  return matches && matches[1];
};
