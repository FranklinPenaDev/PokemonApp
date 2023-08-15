document.querySelector('button').addEventListener('click', getCard);

        function getCard() {
            let cardName = document.querySelector('input').value;

            fetch(`https://api.pokemontcg.io/v2/cards?q=name:${cardName}`)
                .then(response => response.json())
                .then(data => {
                    const cards = data.data;
                    displayCard(cards);
                })
                .catch(err => {
                    console.log(`error ${err}`);
                });
        }

        function displayCard(cards) {
            const cardContainer = document.querySelector('div');
            const pElement = cardContainer.querySelector('p');
            const imgElement = cardContainer.querySelector('img');

            if (cards.length === 0) {
                pElement.innerText = 'Please search again, no cards under that name';
                imgElement.src = '';
                return;
            }

            for (let i = 0; i < cards.length; i++) {
                pElement.innerText = cards[i].name;
                imgElement.src = cards[i].images.large;
                break; // this will only display the first matching card only
            }
        }
