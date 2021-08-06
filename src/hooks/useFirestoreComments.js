import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { db } from "configs/firebaseConfig";

function useFirestoreComments() {
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  const query = db.collection("comments");

  const addToFirestore = (id, comment) => {
    query
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data().comments;

          query.doc(id).set({ comments: data.concat({ ...comment }) });
        } else {
          query.doc(id).set({
            comments: [{ ...comment }],
          });
        }
      })
      .catch((error) => {
        console.log("Fail to add:", error.message);
      });
  };

  useEffect(() => {
    const unsubcribe = query.doc(id).onSnapshot((doc) => {
      doc.data() &&
        setComments(doc.data().comments.sort((a, b) => b.date - a.date));
    });

    return unsubcribe;
  }, [id]);

  return { addToFirestore, comments };
}

export default useFirestoreComments;
