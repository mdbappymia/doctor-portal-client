import React, { useState } from "react";
import { Button, Input, TextField } from "@mui/material";

const AddDoctor = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      return;
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", image);
    fetch("http://localhost:5000/doctors", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSuccess("Doctor added successfully");
        }
      });
  };
  return (
    <div>
      <h2>Add a doctor</h2>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          sx={{ width: "50%" }}
          required
          variant="standard"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <TextField
          label="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "50%" }}
          required
          variant="standard"
        />
        <br />

        <Input
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <Button type="submit" variant="contained">
          Add Doctor
        </Button>
      </form>
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default AddDoctor;
