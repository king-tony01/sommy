function boiler(data, contents) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="${data.title}"
    />
    <meta name="author" content="Chisom Mavis" />
    <meta name="keywords" content="${data.keywords}" />
    <meta name="creator" content="King Tony Softwares" />
    <meta name="publisher" content="Chisom Mavis" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap"
      rel="stylesheet"
    />
    <!-- <link rel="stylesheet" href="./fontawesome-free-6.3.0-web/css/all.css" /> -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="../blogs.css" />
    <script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3642344338051190"
      crossorigin="anonymous"
    ></script>
    <title>
     ${data.title}
    </title>
  </head>
  <body>
    <header>
      <nav>
        <a href="../index.html">
          <h2>Sommy <i class="fas fa-leaf"></i></h2>
        </a>
        <ul class="sidenav">
          <i class="fas fa-close"></i>
          <li><a href="#">LIFE</a></li>
          <li><a href="#">INSPIRATION</a></li>
          <li><a href="#">MARRIAGE</a></li>
          <li><a href="#">BIBLE</a></li>
          <li><a href="#">ABOUT</a></li>
        </ul>
        <i class="fas fa-bars"></i>
      </nav>
    </header>
    <main>
      <section class="hero">
        <h1>
          ${data.title}
        </h1>
        <strong><i class="fas fa-user"></i> Sommy Priceless</strong>
        <div class="share-socials">
          <i class="fab fa-facebook"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-linkedin"></i>
        </div>
      </section>
      <div class="divide">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
      </div>
      <article>
        <h2 id="introduction">Introduction</h2>
        <br />
        <p>${data.intro}</p>
        <br />
        <br />
        ${contents}
      </article>
      <section class="contact">
        <h2>Have any suggestion?</h2>
        <div class="contact-box">
          <form action="">
            <h3>Contact me</h3>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Full name"
              />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
              />
            </div>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </main>
    <footer>
      <h2>Sommy <i class="fas fa-leaf"></i></h2>
      <div class="socials">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-whatsapp"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
      </div>
      <div class="email">
        <h4>NEWS LETTER</h4>
        <small
          >Get weekly news letter from me on inspirational talks, happy life
          habit, peaceful marriage tips and many more life tips. Sign up to get
          started.</small
        >
        <div class="email-input">
          <i class="fas fa-envelope"></i>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="yours@mail.com"
          />
          <button type="submit">Sign up</button>
        </div>
      </div>
      <div class="navs">
        <ul>
          <li><h3>Imporant links</h3></li>
          <li><a href="index.html">Home</a></li>
          <li><a href="life.html">Life</a></li>
          <li><a href="inspiration.html">Inspiration</a></li>
          <li><a href="marriage.html">Marriage</a></li>
          <li><a href="bible.html">Bible</a></li>
        </ul>
        <ul>
          <li><h3>Contact</h3></li>
          <li>
            <a href="mailto:sommy@gmail.com"
              ><i class="fas fa-envelope"></i> sommy@gmail.com</a
            >
          </li>
          <li>
            <a href="tel:23408145473583"
              ><i class="fas fa-phone"></i> +234 8145 473 583</a
            >
          </li>
        </ul>
      </div>
      <div class="copyright">
        <small>Sommy &copy; 2023. All rights reserved.</small>
      </div>
    </footer>
    <script src="../script.js"></script>
  </body>
</html>
`;
}

module.exports = {
  boiler,
};
