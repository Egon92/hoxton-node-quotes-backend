import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

type Quote = {
  id: number;
  name: string;
  age: string | null;
  image: string;
  content: string;
};
let quotes: Quote[] = [
  {
    id: 1,
    name: "Dalai Lama",
    age: "87",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/55/Dalailama1_20121014_4639.jpg",

    content: "The purpose of our lives is to be happy.",
  },
  {
    id: 2,
    name: "John Lennon",
    age: "40",
    image:
      "https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/c/c/5/7/cc5781ec76634979f9151d8efe000a44.jpg",
    content: "Life is what happens when you’re busy making other plans.",
  },
  {
    id: 3,
    name: " Stephen King  ",
    age: "75",
    image:
      "https://media.npr.org/assets/img/2020/04/07/stephen-king.by-shane-leonard_wide-f9df986f26c8d66ecb63cf8e49bded6360cbd9d3.jpg?s=1400",
    content: "Get busy living or get busy dying.",
  },
  {
    id: 4,
    name: "Mae West",
    age: "87",
    image:
      "https://www.biography.com/.image/t_share/MTE5NTU2MzE2NDAzODI4MjM1/mae-west-9528264-1-402.jpg",
    content: "You only live once, but if you do it right, once is enough.",
  },
  {
    id: 5,
    name: "Thomas A. Edison",
    age: "70",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Thomas_Edison2.jpg/1200px-Thomas_Edison2.jpg",
    content:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
  },
  {
    id: 6,
    name: "Albert Einstein",
    age: "76",
    image:
      "https://parade.com/wp-content/uploads/2021/08/albert-einstein-quotes.jpg",
    content:
      "If you want to live a happy life, tie it to a goal, not to people or things.",
  },
  {
    id: 7,
    name: "Babe Ruth",
    age: "63",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/13/Babe_Ruth2.jpg",
    content:
      "Never let the fear of striking out keep you from playing the game.",
  },
  {
    id: 8,
    name: "Will Smith",
    age: "54",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/TechCrunch_Disrupt_2019_%2848834434641%29_%28cropped%29.jpg",
    content:
      "Money and success don’t change people; they merely amplify what is already there.",
  },
  {
    id: 9,
    name: "Steve Jobs",
    age: "56",
    image:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    content:
      "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.",
  },
  {
    id: 10,
    name: "Seneca",
    age: "70",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Duble_herma_of_Socrates_and_Seneca_Antikensammlung_Berlin_07.jpg/1200px-Duble_herma_of_Socrates_and_Seneca_Antikensammlung_Berlin_07.jpg",
    content: "Not how long, but how well you have lived is the main thing.",
  },
];

app.get(`/`, (req, res) => {
  res.send(`<h1 style="color: red; display: grid; text-align: center;">Welcome to our quotes API!</h1>
             <p style="display: grid; text-align: center; font-size: 20px;">Here are some endpoints you can use:</p>
             <a href="/quotes" style="display: grid; text-align: center; font-size: 25px; font-weight:700;">quotes</a>
  `);
});

app.get(`/quotes`, (req, res) => {
  res.send(quotes);
});

app.get(`/quotes/:id`, (req, res) => {
  let id = req.params.id;
  let foundQuote = quotes.find((quote) => quote.id === Number(id));
  foundQuote
    ? res.send(foundQuote)
    : res.status(404).send({ error: "Quote not found!" });
});

app.listen(PORT, () => {
  return console.log(`server is listening on http://localhost:${PORT}`);
});
