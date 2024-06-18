(() => {

    const motsDe5Lettres = ['arbre', 'plage', 'table', 'chaud', 'sable'];

    const motsDe6Lettres = ['souple', 'bateau', 'amande', 'fraise', 'girafe'];

    const motsDe7Lettres = ['adipeux', 'fantome', 'galerie', 'imagine', 'justice'];

    const motsDe8Lettres = ['asphalte', 'brouette', 'antigels', 'decoller', 'escargot'];

    const motsDe9Lettres = ['asphyxier', 'boulevard', 'champions', 'iberienne', 'equilibre'];

    const motsDe10Lettres = ['accueillir', 'bouleverse', 'certificat', 'developper', 'zigouiller'];


    document.getElementById('lettre_mot').addEventListener('change', () => {
        
        var lettre_mot = parseInt(document.getElementById('lettre_mot').value);
        let randmot = Math.floor(Math.random() * 5);

        let hidden_mot = "";
        let guess;
        let hidden_area = document.getElementById('hidden_mot');
        
        switch (lettre_mot) {
            case 5:
                guess = ["_", "_", "_", "_", "_"];
                hidden_mot = motsDe5Lettres[randmot];
                break;
            case 6:
                guess = ["_", "_", "_", "_", "_", "_"];
                hidden_mot = motsDe6Lettres[randmot];
                break;
            case 7:
                guess = ["_", "_", "_", "_", "_", "_", "_"];
                hidden_mot = motsDe7Lettres[randmot];
                break;
            case 8:
                guess = ["_", "_", "_", "_", "_", "_", "_", "_"];
                hidden_mot = motsDe8Lettres[randmot];
                break;
            case 9:
                guess = ["_", "_", "_", "_", "_", "_", "_", "_", "_"];
                hidden_mot = motsDe9Lettres[randmot];
                break;
            case 10:
                guess = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];
                hidden_mot = motsDe10Lettres[randmot];
                break;
        }


        hidden_mot = hidden_mot.toString();
        let hidden_tab = hidden_mot.split("");
        hidden_area.innerHTML = "";
        hidden_area.innerHTML = guess.join(" ");

        document.getElementById('selector').classList.add('hidden');
        document.getElementById('input-area').classList.remove('hidden');
        document.getElementById('submit_guess').classList.remove('hidden');


        let vie = 7;

        document.getElementById('submit_guess').addEventListener('click', () => {

            let guess_lettre = document.getElementById('letter-input').value.toString();
            let lettre_pres = true;

            if (guess_lettre === "") {
                alert('veuillez entrez une lettre');
                lettre_pres = false;
            }

            if (lettre_pres) {
                document.getElementById('letter-input').value = "";
                let inn = false;

                for (let i = 0; i < hidden_tab.length; i++) {

                    if (hidden_tab[i] === guess_lettre) {
                        guess[i] = guess_lettre;
                        hidden_area.innerHTML = guess.join(" ");
                        inn = true;
                    }

                    if (i + 1 === hidden_tab.length && inn === false) {
                        let hp = vie.toString();
                        document.getElementById(hp).classList.remove('live');
                        document.getElementById(hp).classList.add('loose');
                        document.getElementById('wrong').innerHTML += guess_lettre + ", ";
                        vie -= 1;
                        if (vie === 0) {
                            hidden_area.innerHTML = "C EST PERDU !<br>Le mot était : " + hidden_tab.join('');
                            document.getElementById('loose').classList.remove('hidden');
                            document.getElementById('loose').classList.add('flex');
                            document.getElementById('input-area').classList.add('hidden');
                            document.getElementById('submit_guess').classList.add('hidden');
                        }
                    }

                }

            }

            let end = true;

            for(let i=0;i<guess.length;i++){
                if(guess[i] === "_"){
                    end = false;
                }
            }

            if (end === true){
                hidden_area.innerHTML = "C EST GAGNÉ !"
            }

        })
            
    });

})();