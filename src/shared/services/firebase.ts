import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
  UserInfo,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  query,
  orderBy,
  getDocs,
} from "firebase/firestore";

interface getMessagesInterface {
  roomId: string;
  callback: (messages: any) => void;
}

interface newMessage {
  roomId: string;
  user: Partial<UserInfo>;
  text: string;
}

interface newRoom {
  roomName: string;
  user: Partial<UserInfo>;
}

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();

    const { user } = await signInWithPopup(auth, provider);

    return user;
  } catch (error) {
    return null;
  }
};

const googleLogout = async () => signOut(auth);

const sendMessage = async ({ roomId, user, text }: newMessage) => {
  try {
    await addDoc(collection(db, "chat-rooms", roomId, "messages"), {
      uid: user.uid,
      displayName: user.displayName,
      text: text.trim(),
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error(error);
  }
};

const getMessages = ({ roomId, callback }: getMessagesInterface) => {
  return onSnapshot(
    query(
      collection(db, "chat-rooms", roomId, "messages"),
      orderBy("timestamp", "asc")
    ),
    (querySnapshot) => {
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(messages);
    }
  );
};

const createRoom = async ({ roomName, user }: newRoom) => {
  try {
    await addDoc(collection(db, "Rooms"), {
      uid: user.uid,
      displayName: user.displayName,
      timestamp: serverTimestamp(),
      roomName,
    });
    console.log(`${roomName} Created`);
  } catch (error) {
    console.error(error);
  }
};

const getRooms = async () => {
  try {
    const q = query(collection(db, "Rooms"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error(error);
    return null;
  }
};

export {
  loginWithGoogle,
  sendMessage,
  getMessages,
  googleLogout,
  createRoom,
  getRooms,
};

// const getRooms = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "rooms"));
//     const docs = querySnapshot.docs;

//     if (docs.length === 0) {
//       console.log("No documents found in 'rooms' collection");
//       return [];
//     }

//     const roomIds = docs.map((doc) => doc.id);
//     return roomIds;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// const getRooms = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "rooms"));
//     console.log(querySnapshot);
//     const roomIds = querySnapshot.docs.map((doc) => doc);
//     console.log(roomIds);
//     return roomIds;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };

// const getRooms = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "rooms"));
//     const rooms = [];
//     querySnapshot.forEach((doc) => {
//       const room = {
//         id: doc.id,
//         ...doc.data(),
//       };
//       console.log("sad");
//       rooms.push(room);
//     });
//     return rooms;
//   } catch (error) {
//     console.error(error);
//   }
// };
