module.exports = function (pageContent, title, body, state) {
  const script = ` <script>
      window.__STATE__ = ${JSON.stringify(state)}
      </script>
      <script src="static/js/client.min.js"></script> `;
  return  pageContent.replace(' <!-- #title -->', title).replace(' <!-- #body -->', body).replace('<!-- #scripts -->', script);
}