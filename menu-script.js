const menuTranslations = {
    sq: {
        navHome: "Kryefaqja",
        navAbout: "Rreth Nesh",
        navMenu: "Menu",
        navReserve: "Rezervo",
        menuTitleA: "Menuja",
        menuTitleB: "Green Park",
        btnPizza: "Picat",
        btnDrinks: "Pijet",
        btnDesserts: "Ëmbëlsira",
        footerPhone: "+355 68 222 7000",
        footerLocation: "Lokacioni ne Google Maps",
        footerText: "© 2026 Green Park Bar & Piceri. Te gjitha te drejtat e rezervuara.",
        categories: {
            pica: "Pica",
            pije: "Pije",
            embelsira: "Ëmbëlsira"
        }
    },
    en: {
        navHome: "Home",
        navAbout: "About",
        navMenu: "Menu",
        navReserve: "Reserve",
        menuTitleA: "Green Park",
        menuTitleB: "Menu",
        btnPizza: "Pizzas",
        btnDrinks: "Drinks",
        btnDesserts: "Desserts",
        footerPhone: "+355 68 222 7000",
        footerLocation: "Location on Google Maps",
        footerText: "© 2026 Green Park Bar & Pizzeria. All Rights Reserved.",
        categories: {
            pica: "Pizza",
            pije: "Drinks",
            embelsira: "Desserts"
        }
    }
};

const images = {};

const menuData = {
    sq: {
        pizzaProducts: [
            ["Margarita / Margherita", "Salce, mocarela.", "400L"],
            ["Ton / Tuna", "Salce, mocarela, ton.", "600L"],
            ["Ton-Qepe / Tuna-Shallot", "Salce, mocarela, ton, qepe.", "650L"],
            ["4 Djathrat / 4 Cheeses", "Salce, mocarela, gorgonzola, grana.", "600L"],
            ["4 Stinet / 4 Season", "Salce, mocarela, kerpudha, speca, ullinj, proshute.", "600L"],
            ["Vegjetariane / Vegetarian", "Salce, mocarela, speca, kungull, ullinj, patellxhan, kerpudha.", "600L"],
            ["Pikant / Spicy Sausage", "Salce, mocarela, pikant.", "600L"],
            ["Sallam Proshute / Prosciut Salami", "Salce, mocarela, proshute, sallam.", "600L"],
            ["Sallam / Sausage", "Salce, mocarela, sallam.", "650L"],
            ["Proshute / Ham", "Salce, mocarela, proshute.", "600L"],
            ["Proshute-Kerpudhe / Prosciutte-Mushrooms", "Salce, mocarela, proshute, kerpudhe.", "650L"],
            ["Proshute-Filadelfia / Prosciutte-Philadelphia", "Salce, mocarela, proshute, Philadelphia.", "600L"],
            ["Kapricoza / Capricciosa", "Salce, mocarela, pikant, speca, ullinj, kerpudhe.", "650L"],
            ["Kids", "Salce, mocarela, wudi, patate.", "600L"],
            ["Pavaroti", "Salce, mocarela, pancet, grana, mocarel e fresket, pomodorini.", "650L"],
            ["Lokali", "Salce, mocarela, krudo, grana, rukola, pomodorini.", "750L"],
            ["Palermo", "Salce, mocarela, pikant, ullinj, speca, veze, kerpudhe.", "750L"],
            ["Bresaola", "Salce, mocarela, krudo vici, rukola.", "750L"],
            ["Krudo", "Salce, mocarela, krudo.", "650L"],
            ["Antipaste", "Antipaste te perzgjedhura.", "1300L"],
            ["Mix Djathrash / Mix Cheese", "Mix djathrash.", "700L"],
            ["Mix Proshutash / Ham Mix", "Mix proshutash.", "700L"],
            ["Fokace / Focaces", "Fokace.", "200L"],
            ["Patate te Skuqura / Fried Potatoes", "Patate te skuqura.", "250L"],
            ["Sallat Rukola", "Rukola e fresket.", "350L"]
        ],
        
        drinkProducts: [
            ["Kafe / Coffee", "Te ngrohta / Hot drinks", "70L", images.coffee],
            ["Caj / Tea", "Te ngrohta / Hot drinks", "70L", images.coffee],
            ["Caj Fernet / Tea with Fernet", "Te ngrohta / Hot drinks", "70L", images.coffee],
            ["Caj Konjak / Tea with Cognac", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Caj Raki / Tea with Raki", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Cokollate / Chocolate", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Frape / Frappe", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Kafe Dopio / Double Coffee", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Kafe Turke / Turkish Coffee", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Kakao / Cocoa", "Te ngrohta / Hot drinks", "70L", images.coffee],
            ["Kapucino me Bustine / Cappuccino with Bags", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Makiato / Macchiato", "Te ngrohta / Hot drinks", "70L", images.coffee],
            ["Makiato Dopio / Double Macchiato", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Salep", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Qumesht / Milk", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Lemon Soda / Orange Soda", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Fanta / Cola / Ivi", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["B52 Gri / Energy Drink", "Freskuese / Cold drinks", "200L", images.coldDrink],
            ["Redbull", "Freskuese / Cold drinks", "250L", images.coldDrink],
            ["Lipton Ice Tea Orange / Lemon", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Bravo Fruit Juice", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Bravo me Qumesht / Bravo with Milk", "Freskuese / Cold drinks", "170L", images.coldDrink],
            ["Fruvita Fruit Juices", "Freskuese / Cold drinks", "200L", images.coldDrink],
            ["Biter", "Freskuese / Cold drinks", "70L", images.coldDrink],
            ["Rose Lemonade", "Freskuese / Cold drinks", "350L", images.coldDrink],
            ["Uje me Gaz / Gas Water", "Freskuese / Cold drinks", "70L", images.coldDrink],
            ["Uje Vitamin / Vitamin Water", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Leng Portokalli / Orange Juice", "Freskuese / Cold drinks", "200L", images.coldDrink],
            ["Nescafe", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Nescafe me Qumesht", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Zhvpes / Britvic Tonic Water", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Kapucino e Ftohte / Cold Cappuccino", "Freskuese / Cold drinks", "200L", images.coldDrink],
            ["Peroni", "Birra & Pasticeri / Beer & Pastry", "200L", images.beer],
            ["Tuborg", "Birra & Pasticeri / Beer & Pastry", "200L", images.beer],
            ["Paulaner", "Birra & Pasticeri / Beer & Pastry", "300L", images.beer],
            ["Heiniken", "Birra & Pasticeri / Beer & Pastry", "250L", images.beer],
            ["Corona", "Birra & Pasticeri / Beer & Pastry", "300L", images.beer],
            ["Amstel", "Birra & Pasticeri / Beer & Pastry", "150L", images.beer],
            ["Briosh / Croissant", "Birra & Pasticeri / Beer & Pastry", "120L", images.coldDrink],
            ["Belino", "Birra & Pasticeri / Beer & Pastry", "100L", images.coldDrink],
            ["Bakerolls", "Birra & Pasticeri / Beer & Pastry", "100L", images.coldDrink],
            ["Kikirik", "Birra & Pasticeri / Beer & Pastry", "70L", images.coldDrink],
            ["Lays", "Birra & Pasticeri / Beer & Pastry", "100L", images.coldDrink],
            ["Konjak / Cognac", "Pije alkoolike / Alcoholic drink", "100L", images.alcohol],
            ["Raki", "Pije alkoolike / Alcoholic drink", "70L", images.alcohol],
            ["Fernet", "Pije alkoolike / Alcoholic drink", "100L", images.alcohol],
            ["Fernet Branca", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Limoncino", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Malibu", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Martini", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Metaxa", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Ouzo", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Aperol Spritz", "Pije alkoolike / Alcoholic drink", "600L", images.alcohol],
            ["Ballantines", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Bombay Gin", "Pije alkoolike / Alcoholic drink", "300L", images.alcohol],
            ["Chivas Regal", "Pije alkoolike / Alcoholic drink", "300L", images.alcohol],
            ["Golden River", "Pije alkoolike / Alcoholic drink", "300L", images.alcohol],
            ["Jagermeister", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Johnie Walker Black", "Pije alkoolike / Alcoholic drink", "300L", images.alcohol],
            ["Vodka Beluga", "Pije alkoolike / Alcoholic drink", "500L", images.alcohol],
            ["Vodka Grey Goose", "Pije alkoolike / Alcoholic drink", "500L", images.alcohol],
            ["Hendrick Gin", "Pije alkoolike / Alcoholic drink", "600L", images.alcohol],
            ["Masso Antico", "Vere / Wine", "8000L", images.wine],
            ["Italo Cescon Chardonnay", "Vere / Wine", "1900L", images.wine],
            ["Perbacco Salvano Barolo", "Vere / Wine", "10000L", images.wine],
            ["Barolo", "Vere / Wine", "1400L", images.wine],
            ["Donna Luce", "Vere / Wine", "600L", images.wine],
            ["La Contese Merlot", "Vere / Wine", "1900L", images.wine],
            ["Italo Cescon Pinot Grigio", "Vere / Wine", "2500L", images.wine],
            ["Primitivo", "Vere / Wine", "5000L", images.wine],
            ["Kallmet Barrique", "Vere / Wine", "7000L", images.wine],
            ["Medaur Kallmet", "Vere / Wine", "2800L", images.wine],
            ["Vere e Bardhe", "Vere / Wine", "1000L", images.wine],
            ["Vere e Kuqe", "Vere / Wine", "1000L", images.wine],
            ["Gote Vere", "Vere / Wine", "200L", images.wine]
        ],
        
        dessertProducts: [
            ["Akullore / Ice Cream", "Çokollatë, Biskotë, Luleshtryde, Kos, Fruta Pylli / Chocolate, Cookie, Strawberry, Yogurt, Forest Fruits.", "100L"],
        ]
    },
    en: {
        pizzaProducts: [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ],

        drinkProducts: [
        ],

        dessertProducts: [
        ]
    }
}


const menuProducts = {
    sq: {
        pica: menuData.sq.pizzaProducts.map(([name, ingredients, price]) => ({ name, ingredients, price })),
        pije: menuData.sq.drinkProducts.map(([name, ingredients, price]) => ({ name, ingredients, price })),
        embelsira: menuData.sq.dessertProducts.map(([name, ingredients, price]) => ({ name, ingredients, price }))
    },
    en: {
        pica: menuData.sq.pizzaProducts.map(([name, ingredients, price]) => ({ name, ingredients, price })),
        pije: menuData.sq.drinkProducts.map(([name, ingredients, price]) => ({ name, ingredients, price })),
        embelsira: menuData.sq.dessertProducts.map(([name, ingredients, price]) => ({ name, ingredients, price }))
    }
};

let currentLanguage = localStorage.getItem("greenParkMenuLanguage") || "sq";
let currentCategory = "pica";

function toggleMenu(){
    document.getElementById("menu").classList.toggle("active");
}

function renderProducts(){
    const list = document.getElementById("menuList");
    const categoryName = menuTranslations[currentLanguage].categories[currentCategory];
    const products = menuProducts[currentLanguage][currentCategory];

    const renderCard = (product, showDetails = true) => `
        <article class="menu-item">
            <div class="menu-item-content">
                ${showDetails ? `<span class="menu-category">${categoryName}</span>` : ""}
                <h2>${localizeText(product.name)}</h2>
                ${showDetails ? `<p>${localizeIngredients(product.ingredients)}</p>` : ""}
                <strong>${product.price}</strong>
            </div>
        </article>
    `;

    if(currentCategory !== "pije"){
        list.classList.remove("has-groups");
        list.innerHTML = products.map((product) => renderCard(product)).join("");
        return;
    }

    const drinkGroups = [
        { title: currentLanguage === "en" ? "Hot drinks" : "Të ngrohta", type: "Te ngrohta / Hot drinks" },
        { title: currentLanguage === "en" ? "Cold drinks" : "Freskuese", type: "Freskuese / Cold drinks" },
        { title: currentLanguage === "en" ? "Beer & Pastry" : "Birra & Pasticeri", type: "Birra & Pasticeri / Beer & Pastry" },
        { title: currentLanguage === "en" ? "Alcoholic drinks" : "Pije alkoolike", type: "Pije alkoolike / Alcoholic drink" },
        { title: currentLanguage === "en" ? "Wine" : "Verë", type: "Vere / Wine" }
    ];

    list.classList.add("has-groups");
    list.innerHTML = drinkGroups.map((group) => {
        const groupProducts = products.filter((product) => product.ingredients === group.type);
        if(!groupProducts.length) return "";

        return `
            <section class="menu-group">
                <h3>${group.title}</h3>
                <div class="menu-group-list">
                    ${groupProducts.map((product) => renderCard(product, false)).join("")}
                </div>
            </section>
        `;
    }).join("");
}

function localizeText(text){
    const specialTranslations = {
        "Lemon Soda / Orange Soda": ["Limonadë / Portokalladë", "Lemon Soda / Orange Soda"],
        "Fanta / Cola / Ivi": ["Fanta / Cola / Ivi", "Fanta / Cola / Ivi"]
    };

    if(specialTranslations[text]){
        return specialTranslations[text][currentLanguage === "en" ? 1 : 0];
    }

    const parts = text.split(" / ");
    return currentLanguage === "en" && parts.length === 2 ? parts[1] : parts[0];
}

function localizeIngredients(ingredients){
    if(currentCategory !== "pica") return localizeText(ingredients);
    if(currentLanguage === "sq") return ingredients;

    const translations = {
        "mocarel e fresket": "fresh mozzarella",
        "krudo vici": "beef prosciutto",
        "Salce": "Tomato sauce",
        "mocarela": "mozzarella",
        "ton": "tuna",
        "qepe": "shallots",
        "kerpudha": "mushrooms",
        "speca": "peppers",
        "ullinj": "olives",
        "proshute": "ham",
        "kungull": "zucchini",
        "patellxhan": "eggplant",
        "patate": "potatoes",
        "veze": "egg",
        "rukola": "arugula",
        "pomodorini": "cherry tomatoes",
        "pancet": "pancetta",
        "grana": "grana cheese",
        "pikant": "spicy sausage",
        "sallam": "sausage",
        "wudi": "sausage",
        "krudo": "prosciutto"
    };

    return Object.entries(translations).reduce(
        (text, [albanian, english]) => text.replaceAll(albanian, english),
        ingredients
    );
}

function applyLanguage(language){
    const selected = menuTranslations[language];
    const flag = document.getElementById("languageFlag");

    document.documentElement.lang = language;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = selected[element.dataset.i18n];
    });

    if(language === "en"){
        flag.src = "https://flagcdn.com/w40/al.png";
        flag.alt = "Shqip";
    }else{
        flag.src = "https://flagcdn.com/w40/gb.png";
        flag.alt = "English";
    }

    localStorage.setItem("greenParkMenuLanguage", language);
    renderProducts();
}

function toggleLanguage(){
    currentLanguage = currentLanguage === "sq" ? "en" : "sq";
    applyLanguage(currentLanguage);
}

document.querySelectorAll(".category-btn").forEach((button) => {
    button.addEventListener("click", () => {
        currentCategory = button.dataset.category;

        document.querySelectorAll(".category-btn").forEach((item) => {
            item.classList.toggle("active", item === button);
        });

        renderProducts();
    });
});

applyLanguage(currentLanguage);
