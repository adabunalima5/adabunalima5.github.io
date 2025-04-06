(function() {
  const adList = [
    {
      key: 'e57184ca54659540fc83130debe739cd',
      width: 300,
      height: 250
    },
    {
      key: 'd79498fdb04107ec3769b0736a773697',
      width: 728,
      height: 90
    },
    {
      key: '538a1dcc9cea9369de0ee1bcb55aa7d9',
      width: 160,
      height: 600
    },
    {
      key: '425a5d27384cd5676f6b66378d9bef27',
      width: 160,
      height: 300
    },
    {
      key: '267b146662dfa50c642d62afb5da540b',
      width: 468,
      height: 60
    },
    {
      key: 'd88366ae7a148d059c98b4410168aef8',
      width: 320,
      height: 50
    },
    {
      key: '627903e07c5a1bb9b3358c85f75744e0',
      width: 320,
      height: 50
    },
    {
      key: '4047d36e8b585ba1ccb08c74092b269e',
      width: 728,
      height: 90
    },
    {
      key: '8d987a2cdd1810732f9e719e8aa7b118',
      width: 300,
      height: 250
    },
    {
      key: 'ab67ce079593c5246f7e7a60ac7ee861',
      width: 160,
      height: 600
    }
  ];

  const container = document.getElementById('iklan-container');
  if (!container) return;

  adList.forEach(ad => {
    const script1 = document.createElement('script');
    script1.type = 'text/javascript';
    script1.innerHTML = `
      atOptions = {
        'key' : '${ad.key}',
        'format' : 'iframe',
        'height' : ${ad.height},
        'width' : ${ad.width},
        'params' : {}
      };
    `;
    const script2 = document.createElement('script');
    script2.type = 'text/javascript';
    script2.src = '//www.highperformanceformat.com/' + ad.key + '/invoke.js';

    const div = document.createElement('div');
    div.className = 'iklan-item';
    div.style = 'margin:10px auto;text-align:center;';

    div.appendChild(script1);
    div.appendChild(script2);
    container.appendChild(div);
  });
})();

