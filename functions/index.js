const functions = require('firebase-functions');

exports.bigben = functions.https.onRequest(async (req, res) => {
  console.log(req.originalUrl);
  console.log(req.get('user-agent'));
  if (req.get('user-agent') === "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)") {
    console.log("PASS");
    res.status(200).send(`
      <!doctype html>
        <head>
          <meta property="og:title" content="Test title from function" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/altexmn.appspot.com/o/1691121312508.jpeg?alt=media" />
          <meta property="og:url" content="https://altexmn--altexnew-xgp4u0st.web.app/posts/basics/wKg9xkMXuAmjMEFFzO7c" />
        </head>
        <body>
        </body>
      </html>
    `);
  } else {
    res.redirect(req.originalUrl.replace("/og", ""))
  }
});