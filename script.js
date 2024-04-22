const hamburgerMenu = document.querySelector(".hamburger__icon");
const mobileIcon = document.querySelector(".mobile__menu");

hamburgerMenu.addEventListener("click", () => {
  // alert('hello')
  hamburgerMenu.classList.toggle("active");
  mobileIcon.classList.toggle("active");
});

document.querySelectorAll(".navList").forEach((n) =>
  n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    mobileIcon.classList.remove("active");
  })
);

// for faq
const faqs = document.querySelectorAll(".faq");

// faqs.fo((faq) => {
//   faq.addEventListener("click", () => {
//     faq.classList.toggle("active");
//   });
// });

for (let index = 0; index < faqs.length; index++) {
  faqs[index].addEventListener("click", () => {
    faqs[index].classList.toggle("active");
  });
}

const pageContent = [
  {
    title: "Header",
    img: "asset/home-Nav-shot.png",
    html: ` <section class="nav__section">
    <header>
      <nav class="nav__bar">
        <a href="/" class="logo">
          <img src="./asset/logo.svg" alt="" />
          Glow
        </a>

        <ul class="nav__menu">
          <li class="navList"><a href="./index.html">Home</a></li>
          <li class="navList"><a href="service.html">Service</a></li>
          <li class="navList"><a href="./about.html">About Us</a></li>
          <li class="navList"><a href="./contact.html">Contact Us</a></li>
          <li class="navList"><a href="./blog.html">Blog</a></li>
        </ul>
        <div class="nav__btn">
          <button>
            Sign up
            <span class="iconify" data-icon="feather:arrow-right"></span>
          </button>
        </div>
        <div class="hamburger__icon">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <div class="mobile__menu">
          <a href="/" class="mobile__logo">
            <img src="./asset/logo.svg" alt="" />
            Glow
          </a>
          <ul class="mobilNav__menu">
            <li class="navList"><a href="index.html">Home</a></li>
            <li class="navList"><a href="service.html">Service</a></li>
            <li class="navList"><a href="./about.html">About Us</a></li>
            <li class="navList"><a href="./contact.html">Contact Us</a></li>
            <li class="navList"><a href="./blog.html">Blog</a></li>
          </ul>
          <div class="mobileNv__btn">
            <button>Build Your Site</button>
          </div>
        </div>
      </nav>
    </header>
  </section>`,
  },
  {
    title: "Hero",
    img: "asset/home-hero-shot.png",
    html: `<section id="about" class="hero__bg">
    <div class="hero__Section">
      <div class="hero__text">
        <h3 class="heroText">Grow And Manage Your Business Online</h3>
        <p class="pText hero__pText">
          We offer varieties of courses that are accessible and very
          affordable that will give your business all the boost it needs.
        </p>
        <button class="hero__btn">
          Build Your SIte
          <span class="iconify" data-icon="feather:arrow-right"></span>
        </button>
      </div>
      <div class="hero__img">
        <img src="./asset/heroImage.svg" alt="" />
      </div>
    </div>
  </section>`,
  },
  {
    title: "Service",
    img: "asset/service-shot.png",
    html: `  <section id="service" class="offer__section">
    <div class="offer__heading">
      <h1 class="heading__text">What We Offer</h1>
      <p class="offer__pText">
        Manage Your Website, Customers, Data, Sales and Grow Your Business All
        In One Place
      </p>
    </div>
    <div class="offer__container">
      <div class="offer__containerFlex">
        <div class="offer__flexContent">
          <div class="offer__image">
            <img src="./asset/fluent-mdl2_design.svg" alt="" />
          </div>
          <div class="offer__title">
            <h3>E-Commerce Website</h3>
          </div>
          <p>
            Create your own SEO -Optimized website in minutes. Manage
            inventory in sore and online
          </p>
        </div>
        <div class="offer__flexContent">
          <div class="offer__image">
            <img src="./asset/eva_bulb-fill.svg" alt="" />
          </div>
          <div class="offer__title">
            <h3>Ui/Ux Design</h3>
          </div>
          <p>
            Create your own SEO -Optimized website in minutes. Manage
            inventory in sore and online
          </p>
        </div>
        <div class="offer__flexContent">
          <div class="offer__image">
            <img src="./asset/raphael_cart.svg" alt="" />
          </div>
          <div class="offer__title">
            <h3>Branding</h3>
          </div>
          <p>
            Create your own SEO -Optimized website in minutes. Manage
            inventory in sore and online
          </p>
        </div>
      </div>
    </div>
  </section>`,
  },
  {
    title: "CTA",
    img: "asset/cta-snapShot.png",
    html: `  <section id="about" class="about__Section">
    <div class="about__container">
      <div class="about__textContent">
        <span>about</span>
        <h3>
          We Guarantee Your <span>Business Success</span> - We Wil Love To
          Help
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Ligula sed eget vestibulum
          neque risus sit nibh. Turpis porta morbi sed neque diam. Pulvinar
          congue scelerisque ac auctor elementum feugiat congue sed non.
          Gravida blandit tellus integer diam phasellus in fames. Sagittis a
          dignissim scelerisque lectus sagittis sem sem. Ultrices vitae
          posuere curabitur non tempo
        </p>
        <div class="about__btn">
          <button>Discover More</button>
        </div>
      </div>

      <div class="about__image">
        <img src="./asset/aboutImage.svg" alt="" />
      </div>
    </div>
  </section>`,
  },
  {
    title: "contact",
    img: "asset/contact-snapShot.png",
    html: ` <section class="contact__section">
    <div class="contact__container">
      <div class="contact__left">
        <h1>Contact us to find out more</h1>
        <p>Fill in the form and a dedicated account manager will help you:</p>
        <div class="contact__image">
          <img src="./asset/contactImage.svg" alt="" />
        </div>
      </div>
      <form action="" class="contact__form">
        <h3>Leave us a message</h3>
        <div class="c__input">
          <input type="text" placeholder="Company name" />
        </div>
        <div class="c__input">
          <input type="email" placeholder="email" />
        </div>
        <div class="c__input">
          <input type="tel" placeholder="Phone Number" />
        </div>
        <div class="c__terms">
          <input type="checkbox" />
          <p>I accept the <span>terms and service</span></p>
        </div>
        <div class="c__btn">
          <button>Send message</button>
        </div>
      </form>
    </div>
  </section>`,
  },
  {
    title: "Footer",
    img: "asset/footer-snapShot.png",
    html: ` <section class="footer__section">
    <div class="footer__containerText">
      <h1>Request More Information</h1>
      <p>
        Lift Media, LLC is a clinical stage healthcare company which is
        developing a unique.
      </p>
      <div class="f__btn">
        <button>Contact Us</button>
      </div>
    </div>

    <div class="foot__link">
      <a href="/" class="foot__logo">
        <img src="./asset/w-logo.svg" alt="" />
        WivaliLogo
      </a>
      <div class="foot__Socials">
        <!-- LinkedIn icon -->
        <div class="icon__div">
          <span class="iconify" data-icon="brandico:linkedin-rect"></span>
        </div>

        <!-- Instagram icon -->
        <div class="icon__div">
          <span class="iconify" data-icon="entypo-social:instagram"></span>
        </div>

        <!-- Facebook icon -->
        <div class="icon__div">
          <span class="iconify" data-icon="feather:facebook"></span>
        </div>

        <!-- YouTube icon -->
        <div class="icon__div">
          <span class="iconify" data-icon="ant-design:youtube-filled"></span>
        </div>
      </div>
    </div>
    <div class="foot__menu">
      <ul class="nav__menu">
        <li class="navList"><a href="#home">Home</a></li>
        <li class="navList"><a href="#service">Service</a></li>
        <li class="navList"><a href="#about">About Us</a></li>
        <li class="navList"><a href="#about">Contact Us</a></li>
        <li class="navList"><a href="#blog">Blog</a></li>
      </ul>
    </div>
  </section>`,
  },
  {
    title: "About Hero",
    img: "asset/aboutHero-snapShot.png",
    html: `
    <section class="aboutPage__Section">
      <div class="about__heroBg">
        <div class="aboutHero__heading">
          <h1>About Us</h1>
        </div>
        <img src="./asset/about-hero.svg" alt="" />
      </div>
    </section>`,
  },
  {
    title: "Team Section",
    img: "asset/team-snapShot.png",
    html: `  <section class="aboutPgae__meetSection">
    <div class="aboutPage__teamContainer">
      <h1>Meet Our Team</h1>
      <div class="aboutPage__teamContainerFlex">
        <div class="aboutPage__teamContent">
          <img src="./asset/member-1.svg" alt="" />
          <p>Team Member</p>
          <h4>Michelle Bronsk</h4>
        </div>
        <div class="aboutPage__teamContent">
          <img src="./asset/member-2.svg" alt="" />
          <p>Team Member</p>
          <h4>Emily Longford</h4>
        </div>
        <div class="aboutPage__teamContent">
          <img src="./asset/member-3.svg" alt="" />
          <p>Team Member</p>
          <h4>Brian Franklin</h4>
        </div>
        <div class="aboutPage__teamContent">
          <img src="./asset/member-4.svg" alt="" />
          <p>Team Member</p>
          <h4>James Wilson</h4>
        </div>
      </div>
    </div>
  </section>`,
  },
  {
    title: "AboutPage About Us",
    img: "asset/aboutPage-aboutUs-snapShot.png",
    html: `    <section class="aboutPageComp__Section">
    <div class="about__container">
      <div class="about__textContent">
        <h3 class="aboutPage__who">Who we are</h3>
        <h4 class="aboutPage__subt">
          Lorem ipsum dolor sit amet consectetur. Dui ac pharetra lacus
          egestas.
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Dui ac pharetra lacus
          egestas. Ridiculus sed etiam consequat sagittis sit et neque. Id vel
          commodo erat euismod sit tincidunt sit.
        </p>
        <ul class="aboutPage__list">
          <li>Lorem ipsum dolor sit amet consectetur.</li>
          <li>Dui ac pharetra lacus egestas.</li>
          <li>Ridiculus sed etiam consequat sagittis sit et neque.</li>
          <li>Id vel commodo erat euismod sit tincidunt sit.</li>
        </ul>
      </div>

      <div class="about__image">
        <img src="./asset/abpage__imge.svg" alt="" />
      </div>
    </div>
  </section>`,
  },
  {
    title: "BlogPage Hero",
    img: "asset/blogPage-heroSnapShot.png",
    html: `   <section class="aboutPage__Section">
    <div class="about__heroBg">
      <div class="aboutHero__heading">
        <h1>Blog</h1>
      </div>
      <img src="./asset/blog-hero.svg" alt="" />
    </div>
  </section>`,
  },
  {
    title: "BlogPage Article",
    img: "asset/blogPage-article-snapShot.png",
    html: ` <section class="article__section">
    <h3>Related section</h3>
    <div class="article__container">
      <div class="article__Content">
        <img src="./asset/article-img.svg" alt="" />
        <div>
          <h4>Technology & communication</h4>
          <h5></h5>
          <h1>Our subject experts are available to tailor and deliver</h1>
          <p>
            Our subject experts are available to tailor and deliver different
            Relation Safety Certification Training Courses.
          </p>
          <button>
            Read More
            <span class="iconify" data-icon="feather:arrow-right"></span>
          </button>
        </div>
      </div>
      <div class="article__Content">
        <img src="./asset/article-img.svg" alt="" />
        <div>
          <h4>Technology & communication</h4>
          <h5></h5>
          <h1>Our subject experts are available to tailor and deliver</h1>
          <p>
            Our subject experts are available to tailor and deliver different
            Relation Safety Certification Training Courses.
          </p>
          <button>
            Read More
            <span class="iconify" data-icon="feather:arrow-right"></span>
          </button>
        </div>
      </div>
      <div class="article__Content">
        <img src="./asset/article-img.svg" alt="" />
        <div>
          <h4>Technology & communication</h4>
          <h5></h5>
          <h1>Our subject experts are available to tailor and deliver</h1>
          <p>
            Our subject experts are available to tailor and deliver different
            Relation Safety Certification Training Courses.
          </p>
          <button>
            Read More
            <span class="iconify" data-icon="feather:arrow-right"></span>
          </button>
        </div>
      </div>
    </div>
  </section>`,
  },
];
