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
            ["Margarita / Margherita", "Salce, mocarela. / sauce, mozzarella.", "400L"],
            ["Ton / Tuna", "Salce, mocarela, ton. / sauce, mozzarella, tuna.", "600L"],
            ["Ton-Qepe / Tuna-Shallot", "Salce, mocarela, ton, qepe. / sauce, mozzarella, tuna, shallot.", "650L"],
            ["4 Djathrat / 4 Cheeses", "Salce, mocarela, gorgonzola, grana. / sauce, mozzarella, gorgonzola, grana.", "600L"],
            ["4 Stinet / 4 Season", "Salce, mocarela, kerpudha, speca, ullinj, proshute. / sauce, mozzarella, mushrooms, peppers, olives, ham.", "600L"],
            ["Vegjetariane / Vegetarian", "Salce, mocarela, speca, kungull, ullinj, patellxhan, kerpudha. / sauce, mozzarella, pumpkin, olives, eggplant, mushrooms.", "600L"],
            ["Pikant / Spicy Sausage", "Salce, mocarela, pikant. / sauce, mozzarella, spicy sausage.", "600L"],
            ["Sallam Proshute / Prosciut Salami", "Salce, mocarela, proshute, sallam. / sauce, mozzarella, prosciutto, salami.", "600L"],
            ["Sallam / Sausage", "Salce, mocarela, sallam. / sauce, mozzarella, sausage.", "650L"],
            ["Proshute / Ham", "Salce, mocarela, proshute. / sauce, mozzarella, ham.", "600L"],
            ["Proshute-Kerpudhe / Prosciutte-Mushrooms", "Salce, mocarela, proshute, kerpudhe. / sauce, mozzarella, prosciutto, mushrooms.", "650L"],
            ["Proshute-Filadelfia / Prosciutte-Philadelphia", "Salce, mocarela, proshute, Philadelphia. / sauce, mozzarella, prosciutto, Philadelphia.", "600L"],
            ["Kapricoza / Capricciosa", "Salce, mocarela, pikant, speca, ullinj, kerpudhe. / sauce, mozzarella, spicy sausage, peppers, olives, mushrooms.", "650L"],
            ["Kids", "Salce, mocarela, wudi, patate. / sauce, mozzarella, wudy, potatoes.", "600L"],
            ["Pavaroti", "Salce, mocarela, pancet, grana, mocarel e fresket, pomodorini. / sauce, mozzarella, pancetta, grana, fresh mozzarella, cherry tomatoes.", "650L"],
            ["Lokali", "Salce, mocarela, krudo, grana, rukola, pomodorini. / sauce, mozzarella, prosciutto crudo, grana, arugula, cherry tomatoes.", "750L"],
            ["Palermo", "Salce, mocarela, pikant, ullinj, speca, veze, kerpudhe. / sauce, mozzarella, spicy sausage, olives, peppers, egg, mushrooms.", "750L"],
            ["Sallam Proshute / Proscuit Salami", "Salce, mocarela, proshute, sallam / sauce, mozzarella, ham, sausage", "600L"],
            ["Sallam / Sausage", "Salce, mocarela, sallam / sauce, mozzarella, sausage", "650L"],
            ["Proshute / Ham", "Salce, mocarela, proshute / sauce, mozzarella, ham", "600L"],
            ["Proshute-Kerpudhe / Proschute-Mushrooms", "Salce, mocarela, proshute, kerpudhe / sauce, mozzarella, proschute, mushrooms", "650L"],
            ["Proshute-Filadelfia / Proschute -Philadelphia", "Salce, mocarela, proshute, filadelfia / sauce, mozzarella, proschute, philadelphia", "600L"],
            ["Kapricoza / Capricciosa", "Salce, mocarela, pikant, speca, ullinj, kerpudhe / sauce, mozzarella, spicy sausage, peppers, olives, mushrooms", "650L"],
            ["Kids", "Salce, mocarela, wudi, patate / sauce, mozzarella, wurstel, potatoes", "600L"],
            ["Pavaroti", "Salce, mocarela, pancet, grana, mocarel e fresket, pomodorini / sauce, mozzarella, pancetta, grana, fresh mozzarella, cherry tomatoes", "650L"],
            ["Lokali", "Salce, mocarela, krudo, grana, rukola, pomodorini / sauce, mozzarella, raw ham, grana, arugula, cherry tomatoes", "750L"],
            ["Palermo", "Salce, mocarela, pikant, ullinj, speca, veze, kerpudhe / sauce, mozzarella, spicy sausage, olives, peppers, eggs, mushrooms", "750L"],
            ["Bresaola", "Salce, mocarela, krudo vici, rukola / sauce, mozzarella, bresaola, arugula", "750L"],
            ["Krudo", "Salce, mocarela, krudo / sauce, mozzarella, raw ham", "650L"],
            ["Antipaste - Antipaste", "", "1300L"],
            ["Mix Djathrash - Mix Cheese", "", "700L"],
            ["Mix Proshutash - Ham Mix", "", "700L"],
            ["Fokace - Focaces", "", "200L"],
            ["Patate te Skuqura - Fried Potatoes", "", "250L"],
            ["Sallat Rukola", "", "350L"]
],
        
        drinkProducts: [
            ["Kafe / Coffee", "Te ngrohta / Hot drinks", "70L", images.coffee],
            ["Caj / Tea", "Te ngrohta / Hot drinks", "70L", images.coffee],
            ["Caj Fernet / Tea with Fernet", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Caj i Perzier / Mixed Tea", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Caj Konjak / Tea with Cognac", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Caj Raki / Tea with Raki", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Cokollate / Chocolate", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Frape / Frappe", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Kafe Correto / Correto Coffee", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Kafe Dopio / Double Coffee", "Te ngrohta / Hot drinks", "140L", images.coffee],
            ["Kafe Fernet / Fernet Coffee", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Kafe Konjak / Cognac Coffee", "Te ngrohta / Hot drinks", "100L", images.coffee],
            ["Kafe Turke / Turkish Coffee", "Te ngrohta / Hot drinks", "70L", images.coffee],
            ["Kakao / Cocoa", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Kakao e Vogel / Small Cocoa", "Te ngrohta / Hot drinks", "70L", images.coffee],
            ["Kapucino me Bustine / Cappuccino with Bags", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Kapuchino me Kafe / Cappuccino with Coffee", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Makiato / Macchiato", "Te ngrohta / Hot drinks", "70L", images.coffee],
            ["Makiato Dopio / Double Macchiato", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Makiato e Madhe / Large Macchiato", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Salep", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Qumesht / Milk", "Te ngrohta / Hot drinks", "150L", images.coffee],
            ["Lemon Soda / Orange Soda", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Fanta / Cola / Ivi", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["B52 Gri / B52 Gray", "Freskuese / Cold drinks", "200L", images.coldDrink],
            ["Redbull", "Freskuese / Cold drinks", "250L", images.coldDrink],
            ["Golden Eagle / Energy Drink", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Lipton Ice Tea Orange / Lemon", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Amita / Amita Fruit Juice", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Bravo/ Bravo Fruit Juice", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Bravo me Qumesht / Bravo with Milk", "Freskuese / Cold drinks", "170L", images.coldDrink],
            ["Fruvita / Fruit Juices", "Freskuese / Cold drinks", "200L", images.coldDrink],
            ["Biter", "Freskuese / Cold drinks", "70L", images.coldDrink],
            ["Rose Lemonade", "Freskuese / Cold drinks", "350L", images.coldDrink],
            ["Uje me Gaz / Gas Water", "Freskuese / Cold drinks", "70L", images.coldDrink],
            ["Uje Vitamin / Vitamin Water", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Suko / Suko Fruit Juice", "Freskuese / Cold drinks", "70L", images.coldDrink],
            ["Suko Biter / Suko Bitter Fruit Juice", "Freskuese / Cold drinks", "140L", images.coldDrink],
            ["Leng Portokalli / Orange Juice", "Freskuese / Cold drinks", "200L", images.coldDrink],
            ["Nescafe", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Nescafe me Qumesht", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Makiato e Ftohte / Cold Macchiato", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Zhvpes / Britvic Tonic Water", "Freskuese / Cold drinks", "150L", images.coldDrink],
            ["Kapucino e Ftohte / Cold Cappuccino", "Freskuese / Cold drinks", "200L", images.coldDrink],
            ["Peroni", "Birra & Pasticeri / Beer & Pastry", "200L", images.beer],
            ["Tuborg", "Birra & Pasticeri / Beer & Pastry", "200L", images.beer],
            ["Paulaner", "Birra & Pasticeri / Beer & Pastry", "300L", images.beer],
            ["Heiniken", "Birra & Pasticeri / Beer & Pastry", "250L", images.beer],
            ["Corona", "Birra & Pasticeri / Beer & Pastry", "300L", images.beer],
            ["Amstel", "Birra & Pasticeri / Beer & Pastry", "150L", images.beer],
            ["Briosh / Croissant", "Birra & Pasticeri / Beer & Pastry", "80L", images.coldDrink],
            ["Belino", "Birra & Pasticeri / Beer & Pastry", "100L", images.coldDrink],
            ["Bakerolls", "Birra & Pasticeri / Beer & Pastry", "100L", images.coldDrink],
            ["Kikirik", "Birra & Pasticeri / Beer & Pastry", "70L", images.coldDrink],
            ["Lays", "Birra & Pasticeri / Beer & Pastry", "100L", images.coldDrink],
            
            ["Kacurrel", "Pije alkoolike / Alcoholic drink", "100L", images.alcohol],
            ["Konjak / Cognac", "Pije alkoolike / Alcoholic drink", "100L", images.alcohol],
            ["Konjak Martini / Martini Cognac", "Pije alkoolike / Alcoholic drink", "150L", images.alcohol],
            ["Raki", "Pije alkoolike / Alcoholic drink", "70L", images.alcohol],
            ["Raki Thane / Raki Cornelian Cherry", "Pije alkoolike / Alcoholic drink", "100L", images.alcohol],
            ["Ponc Portokalli / Orange Ponc", "Pije alkoolike / Alcoholic drink", "100L", images.alcohol],
            ["Fernet", "Pije alkoolike / Alcoholic drink", "100L", images.alcohol],
            ["Fernet Branca", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Limoncino", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Malibu", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Martini", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Metaxa", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Ouzo", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Pushkini Kuq / Red Pushkin", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Sambuka Molinari", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Tequila Sierra Blanca", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Vecchia Romagna", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Vodka Absolute", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Amaro Montenegro", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Aperol Spritz", "Pije alkoolike / Alcoholic drink", "600L", images.alcohol],
            ["Aquila krem Uiski / Aquila Cream Whiskey", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Ballantines", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Bombay Gin", "Pije alkoolike / Alcoholic drink", "300L", images.alcohol],
            ["Captain Morgan", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Carcio", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],

            ["Chivas Regal", "Pije alkoolike / Alcoholic drink", "300L", images.alcohol],
            ["Krem Uiski / Cream Whiskey", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Golden River", "Pije alkoolike / Alcoholic drink", "300L", images.alcohol],
            ["Gordons Gin", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Hennesy", "Pije alkoolike / Alcoholic drink", "500L", images.alcohol],
            ["J&B Uiski / J&B Whiskey", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Jack Daniels", "Pije alkoolike / Alcoholic drink", "300L", images.alcohol],
            ["Jagermeister", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Johnie Walker Black", "Pije alkoolike / Alcoholic drink", "300L", images.alcohol],
            ["Johnie Walker Red", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Vodka Artic", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Vodka Beluga", "Pije alkoolike / Alcoholic drink", "500L", images.alcohol],
            ["Vodka Belvedere", "Pije alkoolike / Alcoholic drink", "500L", images.alcohol],
            ["vodka Gorbatschow", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Vodka Grey Goose", "Pije alkoolike / Alcoholic drink", "500L", images.alcohol],
            ["Vodka Puschkin i Zi / Black Puschkin Vodka", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Vodka Smirnof", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Vodka Viesna", "Pije alkoolike / Alcoholic drink", "200L", images.alcohol],
            ["Vecchia Amaro Del Capo", "Pije alkoolike / Alcoholic drink", "350L", images.alcohol],
            ["Johnie Blue", "Pije alkoolike / Alcoholic drink", "2500L", images.alcohol],
            ["Hendrick Gin", "Pije alkoolike / Alcoholic drink", "600L", images.alcohol],
            ["Metaxa 7", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Metaxa 12", "Pije alkoolike / Alcoholic drink", "500L", images.alcohol],
            ["Amaro Ramazzotti", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Bacardi", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],
            ["Sky Vodka", "Pije alkoolike / Alcoholic drink", "250L", images.alcohol],

            ["Masso Antico", "Vere / Wine", "8000L", images.wine],
            ["Italo Cescon - Chardonnay", "Vere / Wine", "1900L", images.wine],
            ["Perbacco Salvano Barolo", "Vere / Wine", "10000L", images.wine],
            ["Barolo", "Vere / Wine", "14000L", images.wine],
            ["Marianot Garblet Barolo", "Vere / Wine", "6500L", images.wine],
            ["Donna Luce", "Vere / Wine", "6000L", images.wine],
            ["La Contese- Merlot", "Vere / Wine", "1900L", images.wine],
            ["Italo Cescon - Pinot Grigio", "Vere / Wine", "2500L", images.wine],
            ["Miss Grey Pinot Grigio Papale", "Vere / Wine", "6000L", images.wine],
            ["Plantaze Crnogorski", "Vere / Wine", "1300L", images.wine],
            ["La Quinta Luna", "Vere / Wine", "1700L", images.wine],
            ["Amarone della Valpolicella", "Vere / Wine", "12000L", images.wine],
            ["Inferno", "Vere / Wine", "6000L", images.wine],
            ["Nero d'Avola Sicilia Rosso", "Vere / Wine", "5000L", images.wine],
            ["Giustini Ad Hoc Primitivo", "Vere / Wine", "5000L", images.wine],
            ["Vecchio Sogno Primitivo", "Vere / Wine", "5000L", images.wine],
            ["Brunilde Mezione Primitivo", "Vere / Wine", "4000L", images.wine],
            ["Primitivo", "Vere / Wine", "5000L", images.wine],
            ["Mottura Primitivo", "Vere / Wine", "2800L", images.wine],
            ["Galadino Primitivo", "Vere / Wine", "5000L", images.wine],
            ["Uone Primitivo", "Vere / Wine", "4000L", images.wine],
            ["Mier Primitivo", "Vere / Wine", "18000L", images.wine],
            ["Amicone", "Vere / Wine", "12000L", images.wine],
            ["Kallmet Barrique", "Vere / Wine", "7000L", images.wine],
            ["Medaur Kallmet", "Vere / Wine", "2800L", images.wine],
            ["Medaur Kallmet", "Vere / Wine", "1000L", images.wine],
            ["Casanova", "Vere / Wine", "4000L", images.wine],
            ["Uone Rosso", "Vere / Wine", "5000L", images.wine],
            ["Vere e Bardhe", "Vere / Wine", "1000L", images.wine],
            ["Vere e Kuqe", "Vere / Wine", "1000L", images.wine],
            ["Gote Vere", "Vere / Wine", "200L", images.wine],
            ["3 Masso Antico", "Vere / Wine", "8000L", images.wine],
            ["4 Italo Cescon - Chardonnay", "Vere / Wine", "1900L", images.wine],
            ["6 Perbacco Salvano Barolo", "Vere / Wine", "10000L", images.wine],
            ["2 Mier Primitivo", "Vere / Wine", "18000L", images.wine],
            ["3 Barolo", "Vere / Wine", "14000L", images.wine],
            ["4 Donna Luce", "Vere / Wine", "6000L", images.wine],
            ["5 La Contese- Merlot", "Vere / Wine", "1900L", images.wine],
            ["6 Italo Cescon - Pinot Grigio", "Vere / Wine", "2500L", images.wine],
            ["6 Papale", "Vere / Wine", "6000L", images.wine],
            ["7 Primitivo", "Vere / Wine", "5000L", images.wine],
            ["6 Mottura Primitivo", "Vere / Wine", "2800L", images.wine],
            ["2 Galadino Primitivo", "Vere / Wine", "5000L", images.wine],
            ["5 Plantaze Crnogorski", "Vere / Wine", "1300L", images.wine],
            ["6 La Quinta Luna", "Vere / Wine", "1700L", images.wine],
            ["2 Vecchio Sogno Primitivo", "Vere / Wine", "5000L", images.wine],
            ["1 Amarone della Valpolicella", "Vere / Wine", "12000L", images.wine],
            ["1 Marianot Garblet Barolo", "Vere / Wine", "6500L", images.wine],
            ["1 Nero d'Avola Sicilia Rosso", "Vere / Wine", "5000L", images.wine],
            ["1 Giustini Ad Hoc Primitivo", "Vere / Wine", "5000L", images.wine],
            ["1 Amicone", "Vere / Wine", "12000L", images.wine],
            ["1 Kallmet Barrique", "Vere / Wine", "7000L", images.wine],
            ["1 Vecchio Sogno", "Vere / Wine", "5000L", images.wine],
            ["1 Inferno", "Vere / Wine", "6000L", images.wine],
            ["4 Medaur Kallmet", "Vere / Wine", "2800L", images.wine],
            ["4 Medaur Kallmet", "Vere / Wine", "1000L", images.wine],
            ["Italo Cescon Pinot Grigio", "Vere / Wine", "2500L", images.wine],
            ["1 Zucardi Q", "Vere / Wine", "Çmimi në konfirmim", images.wine],
            ["1 Casanova", "Vere / Wine", "4000L", images.wine],
            ["2 Primitivo di Manduria Uone", "Vere / Wine", "4000L", images.wine],
            ["3 Brunilde Mezione Primitivo", "Vere / Wine", "4000L", images.wine],
            ["Vere e Bardhe", "Vere / Wine", "1000L", images.wine],
        ],
        
        dessertProducts: [
            ["Akullore / Ice Cream", "Çokollatë, Biskotë, Luleshtryde, Kos, Fruta Pylli / Chocolate, Cookie, Strawberry, Yogurt, Forest Fruits.", "100L"],
        ]
    }
};

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
    const parts = ingredients.split(/\s+\/\s+/);

    // Pizza ingredients are stored as "Shqip / English".  Show only the
    // selected half so the language switch never mixes both languages.
    if(parts.length === 2){
        return currentLanguage === "en" ? parts[1] : parts[0];
    }

    return ingredients;
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
