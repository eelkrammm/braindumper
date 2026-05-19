import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import RateLimited from "../components/RateLimited.jsx";
import api from "../lib/axios.js";
import toast from "react-hot-toast";
import NoteCard from "../components/NotesCard.jsx";
import NotesNotFound from "../components/NotesNotFound.jsx";

export const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
        setIsRateLimited(false);
        console.log(res.data);
      } catch (error) {
        console.log("error fetching data", error);
        if (error.response && error.response.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("failed to load notes");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      {isRateLimited ? <RateLimited /> : null}
      {isLoading && (
        <div className="text-center text-primary py-10">Loading notes...</div>
      )}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {notes.length > 0 && !isRateLimited && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard
                key={note._id}
                note={note}
                setNotes={setNotes} // <--- KIRIM FUNGSI SEBAGAI PROP
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
