let cards = [
  {
    image:
      "https://images.everydayhealth.com/images/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg",
    value: 1,
    status: "closed",
  },
  {
    image:
      "https://images.everydayhealth.com/images/ordinary-fruits-with-amazing-health-benefits-05-1440x810.jpg",
    value: 1,
    status: "closed",
  },
  {
    image:
      "https://www.healthshots.com/wp-content/uploads/2020/11/fruits-for-weight-loss.jpg",
    value: 2,
    status: "closed",
  },
  {
    image:
      "https://www.healthshots.com/wp-content/uploads/2020/11/fruits-for-weight-loss.jpg",
    value: 2,
    status: "closed",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6yOWfPWP2ncAFz-eKvuGPQB4KfbpqzT5vA&usqp=CAU",
    value: 3,
    status: "closed",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6yOWfPWP2ncAFz-eKvuGPQB4KfbpqzT5vA&usqp=CAU",
    value: 3,
    status: "closed",
  },
  {
    image:
      "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/324/324431/healthiest-fruits-lemons.jpg?w=1155&h=1541",
    value: 4,
    status: "closed",
  },
  {
    image:
      "https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/324/324431/healthiest-fruits-lemons.jpg?w=1155&h=1541",
    value: 4,
    status: "closed",
  },
  {
    image:
      "https://i2.wp.com/www.eatthis.com/wp-content/uploads//media/images/ext/769504118/apples-best-fruit-weight-loss.jpg?resize=640%2C360&ssl=1",
    value: 5,
    status: "closed",
  },
  {
    image:
      "https://i2.wp.com/www.eatthis.com/wp-content/uploads//media/images/ext/769504118/apples-best-fruit-weight-loss.jpg?resize=640%2C360&ssl=1",
    value: 5,
    status: "closed",
  },
];

let temp;
for (let i = cards.length - 1; i >= 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));

  temp = cards[i];
  cards[i] = cards[j];
  cards[j] = temp;
}

let cardsCopy = cards;

function displayCards(data) {
  let cardsString = "";

  data.forEach(function (card, index) {
    cardsString += `
    <div class="card" style="background-image:url('${card.image}')"> 
    <div class="overlay ${card.status}" onclick="openCard(${index})">
    </div>
    </div>
    `;
  });

  document.getElementById("cards").innerHTML = cardsString;
}

displayCards(cards);

let cardCount = 1;
let val1 = null,
  val2 = null;

let score = 0;

function openCard(index) {
  cards[index].status = "opened";

  if (cardCount === 1) {
    val1 = cards[index].value;
    cardCount++;
  } else if (cardCount === 2) {
    val2 = cards[index].value;

    if (val1 === val2) {
      score++;
      document.getElementById("score").innerText = score;
      val1 = null;
      val2 = null;
      cardCount = 1;
    } else {
      alert("Game Over");
      location.reload();
    }
  }
  displayCards(cards);
}
