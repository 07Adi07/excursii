import express from "express";
import cors from "cors";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  updateDoc,
  deleteDoc,
  addDoc,
  getDoc,
  doc,
} from "firebase/firestore";

const port = 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlfOH5NG7JrzcO5tREACdE4PvZBBRu7Tk",
  authDomain: "excursii-bce57.firebaseapp.com",
  projectId: "excursii-bce57",
  storageBucket: "excursii-bce57.firebasestorage.app",
  messagingSenderId: "735721607517",
  appId: "1:735721607517:web:a64a9714945f341d1d18b4",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const excursiiCollection = collection(db, "excursii");
app.get("/", async (req, res) => {
  const snapshot = await getDocs(excursiiCollection);
  const activitati = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  res.status(200).send(activitati);
});

app.post("/adaug", async (req, res) => {
  const excursie = req.body;
  await addDoc(excursiiCollection, excursie);
  const snapshot = await getDoc(excursiiCollection);
  const excursii = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  res.status(200).send(excursii);
});

app.delete("/sterg/:id", async (req, res) => {
  const id = req.params.id;
  const activitateRef = doc(db, "excursii", id);
  await deleteDoc(activitateRef);
  const snapshot = await getDocs(excursiiCollection);
  const excursii = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  res.status(200).send(excursii);
});

app.patch("/editez", async (req, res) => {
  const id = req.body.id;
  const excursieRef = doc(db, "excursii", id);
  await updateDoc(excursieRef, {
    data: req.body.data,
    titlu: req.body.titlu,
    loc: req.body.loc,
    descriere: req.body.descriere,
  });
  const snapshot = await getDocs(excursiiCollection);
  const excursii = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  res.status(200).send(excursii);
});

app.listen(port, () => {
  console.log(`Serverul așteaptă comenzi pe portul ${port}`);
});
