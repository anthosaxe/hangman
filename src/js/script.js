(() => {

    const motsDe5Lettres = [
        "table", "chien", "cercle", "image", "livre", "pizza", "rouge", "plage", "cadre", "boule",
        "faire", "crème", "gazon", "carte", "voile", "route", "laide", "sable", "forme", "arbre",
        "vélo", "laine", "fille", "pomme", "fleur", "blanc", "jaune", "belle", "ombre", "plein",
        "poire", "rond", "durée", "filer", "venir", "lance", "galet", "marin", "fumer", "voire",
        "matin", "doigt", "lourd", "serre", "cuire", "plume", "sente", "trame", "gants", "chefs"
    ];


    const motsDe6Lettres = [
        "orange", "bateau", "guitar", "fraise", "école", "joueur", "forêt", "voyage", "chemin", "maison",
        "souris", "amoure", "soleil", "février", "bureau", "couteau", "plante", "goutte", "rocher", "carton",
        "violet", "allier", "crayon", "aquare", "garçon", "billet", "triste", "chanter", "saluer", "coller",
        "planer", "grille", "ramper", "jardin", "painne", "tissus", "champs", "hiver", "mercre", "pierre",
        "tabler", "poires", "encour", "velour", "paquet", "vallon", "crêper", "aimerai", "baiser", "bricol"
    ];


    const motsDe7Lettres = [
        "animaux", "bananes", "chapeau", "fleurir", "guitare", "jouerai", "nuageux", "paradis", "requins",
        "voyager", "branche", "chaleur", "élégant", "festival", "gardien", "justice", "liberty", "mandate",
        "nostalgie", "opinion", "qualité", "renverser", "sombrero", "tribunal", "univers", "volcans",
        "baguette", "cachette", "déjeuner", "féminine", "généreux", "habituer", "indiquer", "japonais",
        "lucarne", "moisson", "notable", "oasis", "parfait", "question", "racisme", "théâtre", "utopie", "tourner",
        "cuisine", "peindre", "papier", "parlons", "parmi", "semble", "siècle", "utile"
    ];


    const motsDe8Lettres = [
        "aventure", "chocolat", "définir", "excellent", "fédérate", "généreuse", "harmonise", "influence", "jardiner",
        "kilomètre", "littéral", "magnifie", "naissance", "opération", "partager", "question", "restaurant", "souligner", "technique",
        "uniquement", "volonté", "cabrioler", "dynamique", "frappante", "gratitude", "humoriste", "impression",
        "judicieux", "lointaine", "magnétise", "notoriété", "occupante", "portatif", "quartier", "réjouirai", "sélection", "transmettre",
        "vagabond", "xénophobe", "yachtiste", "zébré", "abondant", "courage", "développe", "pharaons", "synonyme"
    ];

    const motsDe9Lettres = [
        "ambulance", "balançoir", "charnière", "détective", "élégantes", "formidable", "générosit", "harmonique", "influence", "journalier",
        "kilomètre", "littéraire", "magnifique", "navigateur", "orchestral", "particular", "questionn", "resplendir", "soutenirai", "techniques",
        "uniquement", "volontaire", "basculade", "dynamique", "fanatique", "géographie", "humoriste", "implacable", "judicieux",
        "lointaine", "magnétise", "notoriété", "occurrence", "portrait", "quadrature", "réjouirai", "sélectionn", "télévision", "universal",
        "vagabonde", "xénophobe", "yardstick", "zèbresque", "abondante", "bénéfique", "courageux", "développe", "pédagogie", "sarcastic"
    ];


    const motsDe10Lettres = [
        "accueillir", "bénéfique", "courageuse", "développer", "enthousias", "fantastique", "générosité", "harmonieux", "instructif", "jardiniers",
        "kilométrage", "littéraire", "magnifique", "nourrissant", "observateur", "participer", "quadrature", "rappelerai", "souvenance", "technologie",
        "uniquement", "véritable", "bénéfique", "dynamique", "exigeant", "fabuleux", "génétique", "horlogerie", "implication", "justicier",
        "laboratoire", "magnétisme", "notoriété", "occasionne", "paradoxe", "quantitatif", "rejoindreai", "spécialisé", "temporalité", "universelle",
        "vacillante", "xénophobie", "brillamment", "courageuse", "développé", "téléphoner", "viticulture", "mensuration", "préposition", "superlatif"
    ];


    document.getElementById('lettre_mot').addEventListener('change', () => {
        var lettre_mot = parseInt(document.getElementById('lettre_mot').value);
        console.log(lettre_mot);
        let randmot = Math.floor(Math.random() * 50);

        let hidden_mot = "";
        let hidden_tab;
        let guess;
        let hidden_area = document.getElementById('hidden_mot');

        switch (lettre_mot) {
            case 5:
                guess = ["_", "_", "_", "_", "_"];
                break;
            case 6:
                guess = ["_", "_", "_", "_", "_", "_"];
                break;
            case 7:
                guess = ["_", "_", "_", "_", "_", "_", "_"];
                break;
            case 8:
                guess = ["_", "_", "_", "_", "_", "_", "_", "_"];
                break;
            case 9:
                guess = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
                break;
            case 10:
                guess = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
                break;
        }

        hidden_mot = motsDe9Lettres[randmot];
        hidden_tab = hidden_mot.split("");
        hidden_area.innerHTML = "";
        hidden_area.innerHTML = guess.join(" ");

        console.log(hidden_tab);

        document.getElementById('selector').classList.add('hidden');

        let vie = 7;

        
    });
})();