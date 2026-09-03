const recipes = [
  {
    title: "French Onion Soup",
    dis: "Rich beef broth with caramelized onions and melted cheese",
    img: "./images/img_1.webp",
    rating: 4.7,
    reviews: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    ingredients: [
      ` 
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
      class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
      >1</span
      >
      <span>4 large onions, thinly sliced</span>
      </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
      class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
      >2</span
      >
      <span>1/2 cup white wine</span>
      </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
      class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
      >3</span
      >
      <span>1 liter beef broth</span>
      </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
      class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
      >4</span
      >
      <span> tablespoons butter</span>
      </div>
      `,
    ],
    instruction: [

      `
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          1
        </span>
        <span
          >Melt butter in a large pot and caramelize onions for 40
          minutes.</span
        >
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          2
        </span>
        <span>Add white wine and deglaze the pot.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          3
        </span>
        <span>Add beef broth, bay leaves, and thyme. Simmer 20 minutes.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          4
        </span>
        <span>Toast baguette slices.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          5
        </span>
        <span>Top soup with bread and cheese, then broil 3-5 minutes.</span>
      </div>
      `
    ],
    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg",
    },
    chefs: [
      `
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Patience is key - don't rush the onion caramelization</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Use good quality beef broth for best flavor</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Gruyère can be substituted with Swiss cheese</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Watch carefully when broiling to avoid burning</span
          >
        </div>
      </div>
      `
    ],
  },

  {
    title: "Chicken Alfredo Pasta",
    dis: "Chicken Alfredo Pasta is a creamy, comforting dish",
    rating: 4.8,
    reviews: 421,
    img: "./images/Chicken-Alfredo-Pasta-1.webp",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    ingredients: [
      `
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
        <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >1</span
        >
        <span>250g fettuccine pasta</span>
      </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
        <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
          >2</span
          >
        <span>2 chicken breasts, sliced</span>
      </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
          <span
          class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
          >3</span
          >
        <span>1 cup heavy cream</span>
      </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
          <span
          class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
          >4</span
        >
        <span>1 cup grated parmesan</span>
      </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
        <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
          >5</span
        >
        <span>2 tablespoons butter</span>
      </div>
      `,
    ],
    instruction: [

      `
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          1
        </span>
        <span
          >Cook pasta until al dente.</span
        >
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          2
        </span>
        <span>Sauté chicken until golden.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          3
        </span>
        <span>Melt butter, add cream and parmesan to form sauce.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          4
        </span>
        <span>Mix pasta with sauce and chicken.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          5
        </span>
        <span>Serve hot with parsley.</span>
      </div>
      `

    ],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg",
    },
    chefs: [
      `
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Cook chicken on medium-high heat to get a golden crust — this adds big flavor to the dish.</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Cook garlic on low heat in butter for 20–30 seconds only to avoid bitterness.</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Freshly grated Parmesan melts smoother and makes the Alfredo sauce creamy (pre-shredded cheese clumps).</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Add a little pasta water to the sauce to adjust thickness and help it cling to the fettuccine.</span
          >
        </div>
      </div>
      `
    ],
  },

  {
    title: "Beef Tacos",
    dis: "Beef tacos are a classic Tex-Mex favorite",
    rating: 4.2,
    reviews: 310,
    img: "./images/ground-beef-tacos-25-small-5.webp",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    ingredients: [
      `
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >1</span
      >
      <span>500g ground beef</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >2</span
      >
      <span>1 packet taco seasoning</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >3</span
      >
      <span>8 small tortillas</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >4</span
      >
      <span>1 cup shredded lettuce</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >5</span
      >
      <span>1 cup cheddar cheese</span>
    </div>
      `
    ],
    instruction: [


      `
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          1
        </span>
        <span
          >Brown beef in a skillet.</span
        >
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          2
        </span>
        <span>Add taco seasoning and water; let simmer.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          3
        </span>
        <span>Warm tortillas.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          4
        </span>
        <span>Fill tortillas with beef, lettuce, and cheese.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          5
        </span>
        <span>Serve immediately.</span>
      </div>
      `

    ],
    nutrition: {
      calories: 290,
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg",
    },
    chefs: [
      `
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Cook the beef on high heat without stirring too much to develop rich, caramelized flavor.</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Heat tortillas on a dry pan or flame for 10–15 seconds each to keep them soft and prevent tearing.</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Add spices (like cumin, paprika, chili powder) gradually while cooking for deeper flavor.</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Top with fresh cilantro, lime juice, lettuce, or pico de gallo right before serving to add brightness and crunch.</span
          >
        </div>
      </div>
      `
    ],
  },

  {
    title: "Vegetable Stir Fry",
    dis: "Vegetable stir fry is a quick, healthy, and versatile dish",
    rating: 4.6,
    reviews: 189,
    img: "./images/stir-fry.webp",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    ingredients: [
    `
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >1</span
      >
      <span>1 bell pepper, sliced</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >2</span
      >
      <span>1 carrot, sliced</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >3</span
      >
      <span>1 broccoli head, chopped</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >4</span
      >
      <span>2 tablespoons soy sauce</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >5</span
      >
      <span>1 tablespoon sesame oil</span>
    </div>
      `
    ],
    instruction: [

      
      `
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          1
        </span>
        <span
          >Heat oil in a wok.</span
        >
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          2
        </span>
        <span>Add garlic then vegetables; stir fry 5 minutes.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          3
        </span>
        <span>Add soy sauce and sesame oil.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          4
        </span>
        <span>Cook another 2 minutes.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          5
        </span>
        <span>Serve over rice or noodles.</span>
      </div>
      `

    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg",
    },
    chefs: [
      `
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Cook on the highest heat to keep vegetables crisp and prevent sogginess.</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Make all pieces similar in size for even, fast cooking.</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Start with carrots, broccoli, and cauliflower before adding softer veggies.</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Pour the sauce during the last 30–60 seconds to keep vegetables crunchy.</span
          >
        </div>
      </div>
      `
    ],
  },

  {
    title: "Margherita Pizza",
    dis: "Classic Italian pizza with fresh mozzarella and basil",
    rating: 4.9,
    reviews: 502,
    img: "./images/pizza-margherita-7.webp",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    ingredients: [

    `
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >1</span
      >
      <span>1 pizza dough</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >2</span
      >
      <span>1/2 cup tomato sauce</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >3</span
      >
      <span>200g fresh mozzarella</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >4</span
      >
      <span>Fresh basil leaves</span>
    </div>
      <div class="d-flex gap-2 fs-16 fw-normal mb-3">
      <span
        class="text-white w-1 h-1 d-flex align-items-center justify-content-center bg-orange rounded-circle"
        >5</span
      >
      <span>1 tablespoon olive oil</span>
    </div>
    `
    ],
    instruction: [

      `
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          1
        </span>
        <span
          >Spread pizza dough on a tray.</span
        >
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          2
        </span>
        <span>Add tomato sauce evenly.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          3
        </span>
        <span>Place mozzarella slices and basil.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          4
        </span>
        <span>Bake at high heat for 12–15 minutes.</span>
      </div>
      <div class="d-flex align-items-center gap-3 fs-16 fw-normal mb-4">
        <span
          class="text-white w-3 h-3 fs-4 fw-bold bg-orange d-flex justify-content-center align-items-center rounded-4"
        >
          5
        </span>
        <span>Drizzle olive oil before serving.</span>
      </div>
      `

    ],
    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg",
    },
    chefs: [
      `
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Use a pizza stone for crispier crust</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Don't overload with toppings - less is more</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Add basil after baking to keep it fresh</span
          >
        </div>
      </div>
      <div
        class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-warning border-end-0 border-top-0 border-bottom-0 bg-primary"
      >
        <span
          class="w-1 h-1 d-flex align-items-center justify-content-center rounded-circle bg-orange"
          ><i class="fa-solid fa-check text-white"></i
        ></span>
        <div class="ms-2">
          <span class="fs-16 fw-semibold text-secondary"
            >Let dough rest properly for best texture</span
          >
        </div>
      </div>
      `
    ],
  },
];

function change() {
  let index = Math.floor(Math.random() * 5);

  document.getElementById("hero").innerHTML = `
  
  <div class="w-83 px-4 py-32 mx-auto">
          <div class="row bg-white">
            <div class="col-5 px-0">
              <div class="left-side position-relative">
                <img
                  src=${recipes[index].img}
                  alt=""
                  class="w-100 rounded-start-4"
                />
                <span
                  class="badge rounded-pill bg-white fs-16 px-3 py-2 position-absolute"
                  ><i class="fa-solid fa-star text-warning"></i>
                  <span class="text-black fw-semibold">${recipes[index].rating}</span>
                  <span class="text-secondary fs-14 fw-normal"
                    >(${recipes[index].reviews} reviews)</span
                  ></span
                >
                <div
                  class="bottom-left w-90 d-flex justify-content-around bg-white p-4 rounded-3 position-absolute"
                >
                  <div class="text-center">
                    <span
                      ><i class="fa-solid fa-clock text-orange fs-3"></i
                    ></span>
                    <span class="text-secondary d-block fs-14 fw-normal"
                      >Prep Time</span
                    >
                    <span class="text-black d-block fs-16 fw-bold">${recipes[index].prepTime}</span>
                  </div>
                  <div class="text-center">
                    <span
                      ><i class="fa-solid fa-fire-burner text-danger fs-3"></i
                    ></span>
                    <span class="text-secondary d-block fs-14 fw-normal"
                      >Cook Time</span
                    >
                    <span class="text-black d-block fs-16 fw-bold">${recipes[index].cookTime}</span>
                  </div>
                  <div class="text-center">
                    <span
                      ><i class="fa-solid fa-users text-primary fs-3"></i
                    ></span>
                    <span class="text-secondary d-block fs-14 fw-normal"
                      >Servings</span
                    >
                    <span class="text-black d-block fs-16 fw-bold"
                      >${recipes[index].servings} people</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="col-7">
              <div class="right-side p-40">
                <div
                  class="d-flex align-items-center justify-content-between mb-4"
                >
                  <div>
                    <div class="mb-3">
                      <span
                        class="badge rounded-pill bg-badge-1 fs-12 fw-semibold"
                        >${recipes[index].level}</span
                      >
                      <span
                        class="badge rounded-pill bg-badge-2 fs-12 fw-semibold"
                        >${recipes[index].cuisine}</span
                      >
                    </div>
                    <h3 class="text-black fs-36 fw-bold mb-2">
                      ${recipes[index].title}
                    </h3>
                    <p class="text-secondary fs-18 fw-normal mb-0">
                      ${recipes[index].dis}
                    </p>
                  </div>
                  <div class="d-flex gap-2">
                    <div
                      class="w-3 h-3 rounded-4 bg-primary d-flex align-items-center justify-content-center"
                    >
                      <i class="fa-solid fa-bookmark text-orange-2 fs-4"></i>
                    </div>
                    <div
                      class="w-3 h-3 rounded-4 bg-primary d-flex align-items-center justify-content-center"
                    >
                      <i class="fa-solid fa-share-nodes text-orange-2 fs-4"></i>
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex align-items-center p-3 mb-4 rounded-3 border border-4 border-danger border-end-0 border-top-0 border-bottom-0 bg-red"
                >
                  <i
                    class="fa-solid fa-triangle-exclamation fs-4 text-danger"
                  ></i>
                  <div class="ms-2">
                    <span class="fs-16 fw-semibold text-brown"
                      >Extended Preparation Time</span
                    >
                    <span class="d-block fs-14 fw-normal text-danger"
                      >This recipe requires more than 45 minutes to prepare.
                      Plan accordingly!</span
                    >
                  </div>
                </div>

                <div>
                  <div class="nav-tabs">
                    <ul
                      class="nav nav-pills mb-5"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active bg-transparent text-secondary fs-18 fw-semibold py-3 px-32"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-Ingredients"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <i class="fa-solid fa-list-check me-2"></i>
                          Ingredients
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link bg-transparent text-secondary fs-18 fw-semibold py-3 px-32"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-Instructions"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <i class="fa-solid fa-book-open me-2"></i>
                          Instructions
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link bg-transparent text-secondary fs-18 fw-semibold py-3 px-32"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-Nutrition"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <i class="fa-solid fa-chart-pie me-2"></i> Nutrition
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link bg-transparent text-secondary fs-18 fw-semibold py-3 px-32"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-Chefs"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          <i class="fa-solid fa-lightbulb me-2"></i> Chef's Tips
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade show active tabe-1 boreder-0"
                        id="pills-Ingredients"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabindex="0"
                      >
                        <div class="p-4 bg-primary rounded-4">
                          ${recipes[index].ingredients}
                        </div>
                      </div>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade tabe-2 boreder-0"
                        id="pills-Instructions"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabindex="0"
                      >
                        ${recipes[index].instruction}
                      </div>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade tabe-3 boreder-0"
                        id="pills-Nutrition"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabindex="0"
                      >
                        <div class="row g-3">
                          <div
                            class="col-6"
                          >
                            <div class=" p-3 bg-nuration rounded-4 d-flex justify-content-between align-items-center">
                              <div class="d-flex align-items-center">
                              <div
                                class="w-2 h-2 bg-primary rounded-3 d-flex align-items-center justify-content-center"
                              >
                                <i
                                  class="fa-solid fa-fire fs-4 text-danger"
                                ></i>
                              </div>
                              <span class="text-secondary fs-16 fw-medium ms-2"
                                >Calories</span
                              >
                            </div>
                            <span class="text-black fs-20 fw-bold"
                              >${recipes[index].nutrition.calories} kcal</span
                            >
                            </div>
                          </div>
                          <div
                            class="col-6"
                          >
                            <div class=" p-3 bg-nuration rounded-4 d-flex justify-content-between align-items-center">
                              <div class="d-flex align-items-center">
                              <div
                                class="protein w-2 h-2 rounded-3 d-flex align-items-center justify-content-center"
                              >
                                <i
                                  class="fa-solid fa-dumbbell fs-4"
                                ></i>
                              </div>
                              <span class="text-secondary fs-16 fw-medium ms-2"
                                >Protein</span
                              >
                            </div>
                            <span class="text-black fs-20 fw-bold"
                              >${recipes[index].nutrition.protein}</span
                            >
                            </div>
                          </div>
                          <div
                            class="col-6"
                          >
                            <div class=" p-3 bg-nuration rounded-4 d-flex justify-content-between align-items-center">
                              <div class="d-flex align-items-center">
                              <div
                                class="carbohydrates w-2 h-2 rounded-3 d-flex align-items-center justify-content-center"
                              >
                                <i
                                  class="fa-solid fa-wheat-awn fs-4"
                                ></i>
                              </div>
                              <span class="text-secondary fs-16 fw-medium ms-2"
                                >Carbohydrates</span
                              >
                            </div>
                            <span class="text-black fs-20 fw-bold"
                              >${recipes[index].nutrition.carbs}</span
                            >
                            </div>
                          </div>
                          <div
                            class="col-6"
                          >
                            <div class=" p-3 bg-nuration rounded-4 d-flex justify-content-between align-items-center">
                              <div class="d-flex align-items-center">
                              <div
                                class="fat w-2 h-2 rounded-3 d-flex align-items-center justify-content-center"
                              >
                                <i
                                  class="fa-solid fa-droplet fs-4"
                                ></i>
                              </div>
                              <span class="text-secondary fs-16 fw-medium ms-2"
                                >Fat</span
                              >
                            </div>
                            <span class="text-black fs-20 fw-bold"
                              >${recipes[index].nutrition.fat}</span
                            >
                            </div>
                          </div>
                          <div
                            class="col-6"
                          >
                            <div class=" p-3 bg-nuration rounded-4 d-flex justify-content-between align-items-center">
                              <div class="d-flex align-items-center">
                              <div
                                class="fiber w-2 h-2 rounded-3 d-flex align-items-center justify-content-center"
                              >
                                <i
                                  class="fa-solid fa-seedling fs-4"
                                ></i>
                              </div>
                              <span class="text-secondary fs-16 fw-medium ms-2"
                                >Fiber</span
                              >
                            </div>
                            <span class="text-black fs-20 fw-bold"
                              >${recipes[index].nutrition.fiber}</span
                            >
                            </div>
                          </div>
                          <div
                            class="col-6"
                          >
                            <div class=" p-3 bg-nuration rounded-4 d-flex justify-content-between align-items-center">
                              <div class="d-flex align-items-center">
                              <div
                                class="sodium w-2 h-2 rounded-3 d-flex align-items-center justify-content-center"
                              >
                                <i
                                  class="fa-solid fa-cube fs-4"
                                ></i>
                              </div>
                              <span class="text-secondary fs-16 fw-medium ms-2"
                                >Sodium</span
                              >
                            </div>
                            <span class="text-black fs-20 fw-bold"
                              >${recipes[index].nutrition.sodium}</span
                            >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="tab-content" id="pills-tabContent">
                      <div
                        class="tab-pane fade tabe-4 boreder-0"
                        id="pills-Chefs"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabindex="0"
                      >
                        ${recipes[index].chefs}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pt-4 mt-4">
                  <button type="button" onclick="change()" class="btn btn-1 text-white fs-16 fw-semibold"> <i class="fa-solid fa-rotate me-2"></i>Try Another Recipe</button>
                </div>
              </div>
            </div>
          </div>
        </div>

  `;
}
