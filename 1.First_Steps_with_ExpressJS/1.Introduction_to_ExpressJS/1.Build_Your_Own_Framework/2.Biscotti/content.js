module.exports.homePage = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Homepage</title>
  <style>
    * {
      font-family: sans-serif;
    }
    .home {
      position: relative;
      width: 500px;
      height: 350px;
      border: 1px solid rgba(0,0,0,0.2);
      padding: 20px;
      box-sizing: border-box;
      background-color: white;
    }

    p {
      font-size: 12px;
      text-align: justify;
    }

    ul {
      margin: 0px;
      padding: 0px;
    }
    ul > li {
      display: inline-block;
      background-color: black;
      font-size: 12px;
      padding: 4px;
    }

    li > a {
      color: white;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="home">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/food">Felix loves to eat!</a></li>
      <li><a href="/meet">Meet Felix!</a></li>
    </ul>
    <h1>Felix the Cat</h1>
    <h3>Welcome to Felix the cat's personal website!</h3>
    <hr>

    <p>Felix is an orange tabby that came into our lives in early 2020.
      She came as an adorable kitten and transformed our lives completely!</p>
    <p>She's also a naughty cat as she likes to pounce upon unsuspecting guests in an
    attempt to play with them whenever she likes. Some people are taken aback by it,
    but they're not real cat people you see! </p>
    <p>Real cat folks love our Felix and they love to play with her whenever they come and
      meet us. </p>
  </div>
</body>
</html>`;

module.exports.food = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Homepage</title>
  <style>
    * {
      font-family: sans-serif;
    }
    .home {
      position: relative;
      width: 500px;
      height: 350px;
      border: 1px solid rgba(0,0,0,0.2);
      padding: 20px;
      box-sizing: border-box;
      background-color: white;
    }

    p {
      font-size: 12px;
      text-align: justify;
    }

    ul.nav {
      margin: 0px;
      padding: 0px;
    }
    ul.nav > li {
      display: inline-block;
      background-color: black;
      font-size: 12px;
      padding: 4px;
    }

    li > a {
      color: white;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="home">
    <ul class="nav">
      <li><a href="/">Home</a></li>
      <li><a href="/food">Felix loves to eat!</a></li>
      <li><a href="/meet">Meet Felix!</a></li>
    </ul>
    <h1>Felix the Cat</h1>
    <h3>Felix loves to eat</h3>
    <hr>
    <p>When Felix arrived, she didn't eat much and was only a month old. Her entire diet was milk being fed
    through a small syringe. Now that she's grown up, she loves to eat. </p>
    <ul>
      <li>Morning: Fish Kibbles</li>
      <li>Afternoon: Royal Canin Wet Cat Food</li>
      <li>Evening: Fish Kibbles</li>
      <li>Dinner: Royal Canin Wet Cat Food</li>
    </ul>
    <p>Besides this, she loves to chew on chicken salamis and sausages whenever she gets them. </p>
  </div>
</body>
</html>`;

module.exports.meet = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>Homepage</title>
  <style>
   * {
      font-family: sans-serif;
    }
    .home {
      position: relative;
      width: 500px;
      height: 350px;
      border: 1px solid rgba(0,0,0,0.2);
      padding: 20px;
      box-sizing: border-box;
      background-color: white;
    }

    p {
      font-size: 12px;
      text-align: justify;
    }

    ul.nav {
      margin: 0px;
      padding: 0px;
    }
    ul.nav > li {
      display: inline-block;
      background-color: black;
      font-size: 12px;
      padding: 4px;
    }

    li > a {
      color: white;
      text-decoration: none;
    }
  </style>
</head>
<body>
  <div class="home">
    <ul class="nav">
      <li><a href="/">Home</a></li>
      <li><a href="/food">Felix loves to eat!</a></li>
      <li><a href="/meet">Meet Felix!</a></li>
    </ul>
    <h1>Felix the Cat</h1>
    <h3>Meet Felix!</h3>
    <hr>
    <p>If you love cats, then Felix would love to meet you. She's a playfull cat and loves to play with one and all.</p>
    <p>Drop us a line on felixthecat@felixbobcybil.co.uk
    <p>We would love to meet you!</p>
  </div>
</body>
</html>`;
