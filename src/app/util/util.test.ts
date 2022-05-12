import { getContentType, getSongId } from '.';

describe('getSongId', () => {
  test('returns song ID', () => {
    const result = getSongId('https://open.spotify.com/track/5qZBvVFfd3rdfcSFOhLmLo?si=4f34b41753244396');

    expect(result).toEqual('5qZBvVFfd3rdfcSFOhLmLo');
  });

  test('returns playlist ID', () => {
    const result = getSongId(
      'https://open.spotify.com/playlist/5NNMKh5FQqTxNYk5av7Pos?si=daea3a77fedc48f2&pt=9d79f24536886d7a738f3beb59b57310',
    );

    expect(result).toEqual('5NNMKh5FQqTxNYk5av7Pos');
  });
});

describe('getContentType', () => {
  test('gets artist from url', () => {
    const result = getContentType('https://open.spotify.com/artist/2oBhyKsUYj7AIweJAeqF33?si=GEcmMiLmTw2ftIAZ3k_-Tg');

    expect(result).toEqual('artist');
  });

  test('gets album from url', () => {
    const result = getContentType('https://open.spotify.com/album/4LwBlZCNfzrwEvHVVwBOXQ?si=yknGP4K1ROiL7kpkzNMY7A');

    expect(result).toEqual('album');
  });

  test('gets track from url', () => {
    const result = getContentType('https://open.spotify.com/track/50gIM8dchF9c7gD59NQVyb?si=a93b855ba6844e23');

    expect(result).toEqual('track');
  });

  test('gets playlist from url', () => {
    const result = getContentType(
      'https://open.spotify.com/playlist/5NNMKh5FQqTxNYk5av7Pos?si=2de445f11d604f62&pt=8f1720a147a2ba0a40945827eec4768f',
    );

    expect(result).toEqual('playlist');
  });
});
