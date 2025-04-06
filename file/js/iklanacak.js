// ads.js
(function () {
  const adList = [
    `<script type="text/javascript">atOptions={"key":"e57184ca54659540fc83130debe739cd","format":"iframe","height":250,"width":300,"params":{}};<\/script><script src="//www.highperformanceformat.com/e57184ca54659540fc83130debe739cd/invoke.js"><\/script>`,
    `<script type="text/javascript">atOptions={"key":"d79498fdb04107ec3769b0736a773697","format":"iframe","height":90,"width":728,"params":{}};<\/script><script src="//www.highperformanceformat.com/d79498fdb04107ec3769b0736a773697/invoke.js"><\/script>`,
    `<script type="text/javascript">atOptions={"key":"538a1dcc9cea9369de0ee1bcb55aa7d9","format":"iframe","height":600,"width":160,"params":{}};<\/script><script src="//www.highperformanceformat.com/538a1dcc9cea9369de0ee1bcb55aa7d9/invoke.js"><\/script>`,
    `<script type="text/javascript">atOptions={"key":"425a5d27384cd5676f6b66378d9bef27","format":"iframe","height":300,"width":160,"params":{}};<\/script><script src="//www.highperformanceformat.com/425a5d27384cd5676f6b66378d9bef27/invoke.js"><\/script>`,
    `<script type="text/javascript">atOptions={"key":"267b146662dfa50c642d62afb5da540b","format":"iframe","height":60,"width":468,"params":{}};<\/script><script src="//www.highperformanceformat.com/267b146662dfa50c642d62afb5da540b/invoke.js"><\/script>`,
    `<script type="text/javascript">atOptions={"key":"d88366ae7a148d059c98b4410168aef8","format":"iframe","height":50,"width":320,"params":{}};<\/script><script src="//www.highperformanceformat.com/d88366ae7a148d059c98b4410168aef8/invoke.js"><\/script>`,
    `<script type="text/javascript">atOptions={"key":"627903e07c5a1bb9b3358c85f75744e0","format":"iframe","height":50,"width":320,"params":{}};<\/script><script src="//www.highperformanceformat.com/627903e07c5a1bb9b3358c85f75744e0/invoke.js"><\/script>`,
    `<script type="text/javascript">atOptions={"key":"4047d36e8b585ba1ccb08c74092b269e","format":"iframe","height":90,"width":728,"params":{}};<\/script><script src="//www.highperformanceformat.com/4047d36e8b585ba1ccb08c74092b269e/invoke.js"><\/script>`,
    `<script type="text/javascript">atOptions={"key":"8d987a2cdd1810732f9e719e8aa7b118","format":"iframe","height":250,"width":300,"params":{}};<\/script><script src="//www.highperformanceformat.com/8d987a2cdd1810732f9e719e8aa7b118/invoke.js"><\/script>`,
    `<script type="text/javascript">atOptions={"key":"ab67ce079593c5246f7e7a60ac7ee861","format":"iframe","height":600,"width":160,"params":{}};<\/script><script src="//www.highperformanceformat.com/ab67ce079593c5246f7e7a60ac7ee861/invoke.js"><\/script>`,
    `<script type="text/javascript">atOptions={"key":"b2753bb8984850e3694e306857cb874d","format":"iframe","height":300,"width":160,"params":{}};<\/script><script src="//www.highperformanceformat.com/b2753bb8984850e3694e306857cb874d/invoke.js"><\/script>`,
    `<script type="text/javascript">atOptions={"key":"a9a5bbb9f86971945d63c3e218e98e1b","format":"iframe","height":60,"width":468,"params":{}};<\/script><script src="//www.highperformanceformat.com/a9a5bbb9f86971945d63c3e218e98e1b/invoke.js"><\/script>`
  ];

  const shuffled = adList.sort(() => 0.5 - Math.random()).slice(0, 10);
  const container = document.getElementById('iklan-container');

  if (container) {
    shuffled.forEach(ad => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = ad;
      container.appendChild(wrapper);
    });
  }
})();
