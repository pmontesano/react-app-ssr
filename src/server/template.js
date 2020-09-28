module.exports = (component, initialState) => `
    <!doctype html>
        <html>
            <head>
                <script>window.__INITIAL__DATA__ = ${JSON.stringify({
                  initialState,
                })}</script>
            </head>
            <body>
                <div id="root">${component}</div>
                <script src="/static/app.js"></script>
            </body>
        </html>`;
