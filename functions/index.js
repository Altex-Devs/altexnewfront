const functions = require('firebase-functions');
const {getFirestore} = require("firebase-admin/firestore");
const {initializeApp} = require("firebase-admin/app");
const admin = initializeApp();
const db = getFirestore(admin);

exports.crawlpost = functions.https.onRequest(async (req, res) => {
  res.set('Cache-Control', 'public, max-age=3600, s-maxage=604800');
  if (req.get('user-agent') === "facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)") {
    const postRef = db.collection("posts").doc(req.originalUrl.match(/\/posts\/[^/]*\/([a-zA-Z0-9]*)/)[1]);
    const postDoc = await postRef.get()
    
    if (!postDoc.exists) {
      throw new functions.https.HttpsError("not-found", "Мэдээ олдсонгүй!");
    }
    const postData = postDoc.data();

    res.status(200).send(`
      <!doctype html>
        <head>
          <meta property="og:title" content="${postData.title}" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="${postData.image}" />
          <meta property="og:url" content="${req.protocol + "://" + req.headers['x-forwarded-host'] + req.originalUrl}" />
        </head>
        <body>
        </body>
      </html>
    `);
  } else {
    const url = req.protocol + "://" + req.headers['x-forwarded-host'] + req.originalUrl.replace("/posts", "/crawlpost");
    const response = await fetch(url);
    const content = await response.text();

    res.status(200).send(content);
  }
});