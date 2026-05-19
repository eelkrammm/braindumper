import { ArrowLeftIcon } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import api from "../lib/axios.js";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    // nanti isi post api
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      roast.error("Mohon masukkan judul dan content");
      return;
    }
    try {
      await api.post("/notes", {
        title,
        content,
      });
      toast.success("Berhasil membuat catatan!");
      navigate("/");
    } catch (error) {
      console.error("Error saat membuat catatan", error);
      toast.error("Gagal membuat catatan!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className="font-mono card bg-neutral text-base-100 w-96 p-5 flex flex-col gap-5">
        <Link
          to={"/"}
          className="btn btn-sm btn-primary text-base-100 text-xs w-fit"
        >
          <ArrowLeftIcon />
          Back to Home
        </Link>
        <h2 className="card-title">Create a New Note</h2>
        <div className="p-5 form-control shadow-md rounded-md">
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <label className="label font-bold">Judul</label>
            <input
              type="text"
              placeholder="Masukan Judul"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered input-secondary w-full max-w-xs text-primary font-bold"
            />
            <label className="label font-bold">Catatan</label>
            <input
              type="text"
              placeholder="Masukan Catatan"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="input input-bordered input-secondary w-full max-w-xs text-primary font-bold"
            />
            <div className="flex flex-row-reverse">
              <button
                type="submit"
                className="btn btn-sm w-fit btn-primary text-base-100"
              >
                {loading ? "Membuat catatan" : "Buat Catatan"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
