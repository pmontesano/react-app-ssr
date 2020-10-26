module.exports = (component, initialState) => `
    <!doctype html>
        <html>
            <head>
                <script>window.__INITIAL__DATA__ = ${JSON.stringify({
                  initialState,
                })}</script>
                <link rel="stylesheet" type="text/css" href="static/app.css" />
                
            </head>
            <body>
                <div id="root">${component}</div>
                <script src="/static/app.js"></script>
            </body>
        </html>`;
