// data
const dataArticles = [
  {
    id: "1666017164004",
    title: "NDC Terbaru Indonesia Tidak Menjawab Ancaman Krisis Iklim",
    authorName: "Greenpeace Indonesia",
    postLink:
      "https://www.greenpeace.org/indonesia/siaran-pers/55514/ndc-terbaru-indonesia-tidak-menjawab-ancaman-krisis-iklim/",
    postDate: "2022-09-28 10:12:20",
    postDescription:
      "Meskipun ada peningkatan dalam target pengurangan emisi, dari 29% menjadi 31.89% dengan usaha sendiri di tahun 2030, dan dari 41% menjadi 43.2% jika dengan bantuan internasional, namun enhanced NDC ini masih jauh dari harapan publik untuk melindungi masa depan Indonesia dari dampak buruk krisis iklim.",
    imageUrl:
      "https://www.greenpeace.org/static/planet4-indonesia-stateless/2021/11/beb8946b-gp1swjin_web_size-768x512.jpg",
  },
  {
    id: "1666017171941",
    title:
      "Kemasan Unilever, Indofood dan Mayora Terbukti Mencemari 11 Titik Pantai di Indonesia",
    authorName: "Koalisi Pawai Bebas Plastik",
    postLink:
      "https://www.greenpeace.org/indonesia/cerita/46350/kemasan-unilever-indofood-dan-mayora-terbukti-mencemari-27-titik-pantai-di-indonesia/",
    postDate: "2022-07-21 13:18:00",
    postDescription:
      "Gerakan Pawai Bebas Plastik akan melakukan pawai kembali secara offline pada tanggal 24 Juli 2022 dengan membawa pesan mendorong tanggung jawab produsen FMCG atas sampah saset yang mencemari lingkungan di Indonesia dan bersikap terbuka atas rencana pengurangan sampahnya kepada publik.",
    imageUrl:
      "https://www.greenpeace.org/static/planet4-indonesia-stateless/2022/07/648d411d-1658717159358-1024x576.jpg",
  },
  {
    title:
      "Bertahan dari Krisis Iklim, Bertahan dengan Banjir dan Macet Jakarta",
    authorName: "Budiarti Utami Putri",
    postLink:
      "https://www.greenpeace.org/indonesia/cerita/55566/bertahan-dari-krisis-iklim-berjibaku-dengan-banjir-dan-macet-jakarta/",
    postDate: "2022-10-09 17:05:25",
    postDescription:
      "Terjebak berjam-jam di tengah kemacetan, sulit mendapatkan transportasi online, sehingga membutuhkan waktu jauh lebih lama untuk pulang menuju rumah, adalah derita yang dirasakan warga Ibukota Jakarta beberapa hari belakangan ini akibat banjir dan hujan ekstrem.",
    tags: ["krisis iklim"],
    imageUrl:
      "https://www.greenpeace.org/static/planet4-indonesia-stateless/2021/03/61f0289d-gp0stuepi-510x340.jpg",
    id: "1666017182789",
  },
  {
    title: "Indonesia Harus Jadi Pemimpin Global Atasi Krisis Iklim",
    authorName: "Greenpeace Indonesia",
    postLink:
      "https://www.greenpeace.org/indonesia/siaran-pers/46551/indonesia-harus-jadi-pemimpin-global-atasi-krisis-iklim%ef%bf%bc/",
    postDate: "2022-08-16 15:57:16",
    postDescription:
      "Greenpeace Indonesia menyerukan, di tengah momentum ini, Indonesia harus tampil sebagai pemimpin global dalam mengatasi masalah terbesar umat manusia saat ini: krisis iklim.",
    imageUrl:
      "https://www.greenpeace.org/static/planet4-indonesia-stateless/2022/08/dade4ced-gp0sttq0b_high_res-340x340.jpg",
    id: "1666017193915",
  },
  {
    title: "Keseruan Climate Strike 2022: Pukul Mundur Krisis Iklim",
    authorName: "Greenpeace Indonesia",
    postDate: "2022-09-30 13:39:59",
    postLink:
      "https://www.greenpeace.org/indonesia/cerita/55538/keseruan-climate-strike-2022-pukul-mundur-krisis-iklim/",
    postDescription:
      "Krisis iklim adalah isu kita bersama. Krisis iklim mempengaruhi semua aspek kehidupan dan setiap lapisan masyarakat tanpa memandang status sosial.  Itulah pesan yang disampaikan peserta aksi Climate Strike di Jakarta pada Jumat, 23 September 2022 lalu.",
    tags: ["krisis iklim"],
    imageUrl:
      "https://www.greenpeace.org/static/planet4-indonesia-stateless/2022/09/39ccc625-gp1t01yl_-510x340.jpg",
    id: "1666017202088",
  },
];

// Global Variables
const bodyElement = document.querySelector(".Site");

// Navbar Dropdown
const navbarDropdownElement = document.querySelector(
  ".navbar__nav-list__item__dropdown__button"
);

navbarDropdownElement.addEventListener("click", () => {
  // handling the data-state (open or closed)

  if (navbarDropdownElement.getAttribute("data-state") === "closed") {
    navbarDropdownElement.setAttribute("data-state", "open");
    navbarDropdownElement.setAttribute("aria-expanded", "true");
  } else {
    navbarDropdownElement.setAttribute("data-state", "closed");
    navbarDropdownElement.setAttribute("aria-expanded", "false");
  }
});

// Navbar Humberger Button

const navbarHumbergerButtonElement = document.querySelector(
  ".navbar__nav__hamburger-button"
);

navbarHumbergerButtonElement.addEventListener("click", () => {
  // handling the data-state (open or closed)

  if (navbarHumbergerButtonElement.getAttribute("data-state") === "closed") {
    navbarHumbergerButtonElement.setAttribute("data-state", "open");
    navbarHumbergerButtonElement.setAttribute("aria-expanded", "true");
    bodyElement.style.overflow = "hidden";
  } else {
    navbarHumbergerButtonElement.setAttribute("data-state", "closed");
    navbarHumbergerButtonElement.setAttribute("aria-expanded", "false");
    bodyElement.style.overflow = "auto";
  }
});

// Articles Control
const maxArticle = 5;
let currentArticle = 1;

const articleHeaderTitleElement = document.querySelector(
  ".homepage-artikel-section__article__contents__header-title"
);
const articleHeaderAuthorElement = document.querySelector(
  ".homepage-artikel-section__article__contents__header-information-author"
);
const articleHeaderPublishedDateElement = document.querySelector(
  ".homepage-artikel-section__article__contents__header-information-published"
);
const articleBodyDescriptionElement = document.querySelector(
  ".homepage-artikel-section__article__contents__body-paragraphs"
);
const articleBodyArticleLinkElement = document.querySelector(
  ".homepage-artikel-section__article__contents__body-link"
);
const articleImageElement = document.querySelector(
  ".homepage-artikel-section__article__picture-image"
);
const currentArticleElement = document.querySelector(
  ".homepage-artikel-section__article__contents__controls__content__page-current"
);
const maxArticleElement = document.querySelector(
  ".homepage-artikel-section__article__contents__controls__content__page-max"
);
const nextArticleButtonElement = document.querySelector(
  ".homepage-artikel-section__article__contents__controls__content__button-right"
);
const prevArticleButtonElement = document.querySelector(
  ".homepage-artikel-section__article__contents__controls__content__button-left"
);

const updateArticle = (index) => {
  const article = dataArticles[index];

  const {
    title,
    postDate,
    postDescription,
    postLink,
    authorName,
    id,
    imageUrl,
    tags,
  } = article;

  const descriptions = postDescription.split(".");

  articleHeaderTitleElement.textContent = title;
  articleHeaderAuthorElement.textContent = authorName;
  articleHeaderPublishedDateElement.textContent = new Date(
    postDate
  ).toLocaleDateString("id-Id", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  articleBodyDescriptionElement.innerHTML = `
    ${descriptions
      .map((description) => {
        return `<p>${description}</p>`;
      })
      .join("")}
  `;
  articleBodyArticleLinkElement.setAttribute("href", postLink);
  articleImageElement.setAttribute("src", imageUrl);
  articleImageElement.setAttribute("alt", title);

  currentArticleElement.textContent = currentArticle;
  maxArticleElement.textContent = maxArticle;
};

const resetImageAttributes = () => {
  articleImageElement.setAttribute("src", "");
  articleImageElement.setAttribute("alt", "");
};

const updateButtonState = () => {
  if (currentArticle === 1) {
    prevArticleButtonElement.setAttribute("disabled", "true");
    prevArticleButtonElement.style.cursor = "not-allowed";
  } else {
    prevArticleButtonElement.removeAttribute("disabled");
    prevArticleButtonElement.style.cursor = "pointer";
  }

  if (currentArticle === maxArticle) {
    nextArticleButtonElement.setAttribute("disabled", "true");
    nextArticleButtonElement.style.cursor = "not-allowed";
  } else {
    nextArticleButtonElement.removeAttribute("disabled");
    nextArticleButtonElement.style.cursor = "pointer";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  // Update the article
  updateArticle(currentArticle - 1);

  prevArticleButtonElement.addEventListener("click", () => {
    if (currentArticle > 1) {
      resetImageAttributes();
      currentArticle--;
      updateArticle(currentArticle - 1);
      updateButtonState();
    } else {
      return;
    }
  });

  nextArticleButtonElement.addEventListener("click", () => {
    if (currentArticle < maxArticle) {
      resetImageAttributes();
      currentArticle++;
      updateArticle(currentArticle - 1);
      updateButtonState();
    } else {
      return;
    }
  });
});
