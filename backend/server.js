const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const sharp = require("sharp");

const app = express();
const PORT = 5000;
const SECRET_KEY = "your-secret-key"; // Change this in production

app.use(cors());
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "profile-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const storageLogo = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, "logo-" + uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

const uploadLogo = multer({
  storage: storageLogo,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

// Load database
let db = JSON.parse(
  fs.readFileSync(path.join(__dirname, "database.json"), "utf8")
);

// Save database
const saveDb = () => {
  fs.writeFileSync(
    path.join(__dirname, "database.json"),
    JSON.stringify(db, null, 2)
  );
};

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "No token provided" });
  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    req.userId = decoded.id;
    next();
  });
};

// Auth endpoints
app.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  // Simple admin check (in production, use proper user management)
  if (username === "zyphera" && password === "clinton@72") {
    const token = jwt.sign({ id: 1 }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

// Contact endpoint
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  const newMessage = { id: Date.now(), name, email, message, date: new Date() };
  db.contactMessages.push(newMessage);
  saveDb();
  res.json({ status: "success", message: "Message received!" });
});

// CRUD for portfolio
app.get("/portfolio", (req, res) => res.json(db.portfolio));
app.post("/portfolio", verifyToken, (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  db.portfolio.push(newItem);
  saveDb();
  res.json(newItem);
});
app.put("/portfolio/:id", verifyToken, (req, res) => {
  const id = parseInt(req.params.id);
  const index = db.portfolio.findIndex((item) => item.id === id);
  if (index !== -1) {
    // Merge only provided fields
    const updatedFields = [];
    Object.keys(req.body).forEach((key) => {
      if (req.body[key] !== undefined && req.body[key] !== "") {
        db.portfolio[index][key] = req.body[key];
        updatedFields.push(key);
      }
    });
    saveDb();
    res.json({
      message: "Portfolio item updated successfully",
      updatedFields,
      item: db.portfolio[index],
    });
  } else {
    res.status(404).json({ message: "Not found" });
  }
});
app.delete("/portfolio/:id", verifyToken, (req, res) => {
  const id = parseInt(req.params.id);
  db.portfolio = db.portfolio.filter((item) => item.id !== id);
  saveDb();
  res.json({ message: "Deleted" });
});

// CRUD for services
app.get("/services", (req, res) => res.json(db.services));
app.post("/services", verifyToken, (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  db.services.push(newItem);
  saveDb();
  res.json(newItem);
});
app.put("/services/:id", verifyToken, (req, res) => {
  const id = parseInt(req.params.id);
  const index = db.services.findIndex((item) => item.id === id);
  if (index !== -1) {
    // Merge only provided fields
    const updatedFields = [];
    Object.keys(req.body).forEach((key) => {
      if (req.body[key] !== undefined && req.body[key] !== "") {
        db.services[index][key] = req.body[key];
        updatedFields.push(key);
      }
    });
    saveDb();
    res.json({
      message: "Service updated successfully",
      updatedFields,
      item: db.services[index],
    });
  } else {
    res.status(404).json({ message: "Not found" });
  }
});
app.delete("/services/:id", verifyToken, (req, res) => {
  const id = parseInt(req.params.id);
  db.services = db.services.filter((item) => item.id !== id);
  saveDb();
  res.json({ message: "Deleted" });
});

// CRUD for testimonials
app.get("/testimonials", (req, res) => res.json(db.testimonials));
app.post("/testimonials", verifyToken, (req, res) => {
  const newItem = { id: Date.now(), ...req.body };
  db.testimonials.push(newItem);
  saveDb();
  res.json(newItem);
});
app.put("/testimonials/:id", verifyToken, (req, res) => {
  const id = parseInt(req.params.id);
  const index = db.testimonials.findIndex((item) => item.id === id);
  if (index !== -1) {
    // Merge only provided fields
    const updatedFields = [];
    Object.keys(req.body).forEach((key) => {
      if (req.body[key] !== undefined && req.body[key] !== "") {
        db.testimonials[index][key] = req.body[key];
        updatedFields.push(key);
      }
    });
    saveDb();
    res.json({
      message: "Testimonial updated successfully",
      updatedFields,
      item: db.testimonials[index],
    });
  } else {
    res.status(404).json({ message: "Not found" });
  }
});
app.delete("/testimonials/:id", verifyToken, (req, res) => {
  const id = parseInt(req.params.id);
  db.testimonials = db.testimonials.filter((item) => item.id !== id);
  saveDb();
  res.json({ message: "Deleted" });
});

// CRUD for hero
app.get("/hero", (req, res) => res.json(db.hero));
app.put("/hero", verifyToken, (req, res) => {
  // Merge only provided fields
  const updatedFields = [];
  Object.keys(req.body).forEach((key) => {
    if (req.body[key] !== undefined && req.body[key] !== "") {
      db.hero[key] = req.body[key];
      updatedFields.push(key);
    }
  });
  saveDb();
  res.json({
    message: "Hero section updated successfully",
    updatedFields,
    item: db.hero,
  });
});

// CRUD for about
app.get("/about", (req, res) => res.json(db.about));
app.put("/about", verifyToken, (req, res) => {
  // Merge only provided fields
  const updatedFields = [];
  Object.keys(req.body).forEach((key) => {
    if (req.body[key] !== undefined && req.body[key] !== "") {
      db.about[key] = req.body[key];
      updatedFields.push(key);
    }
  });
  saveDb();
  res.json({
    message: "About section updated successfully",
    updatedFields,
    item: db.about,
  });
});

// CRUD for founder
app.get("/founder", (req, res) => res.json(db.founder));
app.put("/founder", verifyToken, (req, res) => {
  // Merge only provided fields
  const updatedFields = [];
  Object.keys(req.body).forEach((key) => {
    if (req.body[key] !== undefined && req.body[key] !== "") {
      db.founder[key] = req.body[key];
      updatedFields.push(key);
    }
  });
  saveDb();
  res.json({
    message: "Founder section updated successfully",
    updatedFields,
    item: db.founder,
  });
});

// CRUD for social links
app.get("/social-links", (req, res) => res.json(db.socialLinks));
app.put("/social-links", verifyToken, (req, res) => {
  // Merge only provided fields
  const updatedFields = [];
  Object.keys(req.body).forEach((key) => {
    if (req.body[key] !== undefined && req.body[key] !== "") {
      db.socialLinks[key] = req.body[key];
      updatedFields.push(key);
    }
  });
  saveDb();
  res.json({
    message: "Social links updated successfully",
    updatedFields,
    item: db.socialLinks,
  });
});

// Profile photo upload
app.post(
  "/profile/upload",
  verifyToken,
  upload.single("photo"),
  async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    try {
      const inputPath = path.join(__dirname, "uploads", req.file.filename);
      const outputPath = path.join(
        __dirname,
        "uploads",
        `profile-${Date.now()}.webp`
      );

      await sharp(inputPath)
        .webp({ quality: 80 })
        .resize(800, 800, { fit: "inside", withoutEnlargement: true })
        .toFile(outputPath);

      // Remove original file
      fs.unlinkSync(inputPath);

      const photoPath = `/uploads/${path.basename(outputPath)}`;
      db.profile.photo = photoPath;
      saveDb();
      res.json({
        message: "Profile photo uploaded and optimized successfully",
        photo: photoPath,
      });
    } catch (error) {
      console.error("Error processing image:", error);
      res.status(500).json({ message: "Error processing image" });
    }
  }
);

// Logo upload
app.post(
  "/logo/upload",
  verifyToken,
  uploadLogo.single("logo"),
  async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    try {
      const inputPath = path.join(__dirname, "uploads", req.file.filename);
      const outputPath = path.join(
        __dirname,
        "uploads",
        `logo-${Date.now()}.webp`
      );

      await sharp(inputPath)
        .webp({ quality: 85 })
        .resize(300, 300, { fit: "inside", withoutEnlargement: true })
        .toFile(outputPath);

      // Remove original file
      fs.unlinkSync(inputPath);

      const logoPath = `/uploads/${path.basename(outputPath)}`;
      db.companyLogo.url = logoPath;
      saveDb();
      res.json({
        message: "Logo uploaded and optimized successfully",
        logo: logoPath,
      });
    } catch (error) {
      console.error("Error processing logo:", error);
      res.status(500).json({ message: "Error processing logo" });
    }
  }
);

// CRUD for company logo
app.get("/logo", (req, res) => res.json(db.companyLogo));
app.put("/logo", verifyToken, (req, res) => {
  // Merge only provided fields
  const updatedFields = [];
  Object.keys(req.body).forEach((key) => {
    if (req.body[key] !== undefined && req.body[key] !== "") {
      db.companyLogo[key] = req.body[key];
      updatedFields.push(key);
    }
  });
  saveDb();
  res.json({
    message: "Company logo updated successfully",
    updatedFields,
    item: db.companyLogo,
  });
});

// CRUD for profile
app.get("/profile", (req, res) => res.json(db.profile));
app.put("/profile", verifyToken, (req, res) => {
  // Merge only provided fields
  const updatedFields = [];
  Object.keys(req.body).forEach((key) => {
    if (req.body[key] !== undefined && req.body[key] !== "") {
      db.profile[key] = req.body[key];
      updatedFields.push(key);
    }
  });
  saveDb();
  res.json({
    message: "Profile updated successfully",
    updatedFields,
    item: db.profile,
  });
});

// Update contact message
app.put("/contact/:id", verifyToken, (req, res) => {
  const id = parseInt(req.params.id);
  const index = db.contactMessages.findIndex((msg) => msg.id === id);
  if (index !== -1) {
    // Merge only provided fields
    const updatedFields = [];
    Object.keys(req.body).forEach((key) => {
      if (req.body[key] !== undefined && req.body[key] !== "") {
        db.contactMessages[index][key] = req.body[key];
        updatedFields.push(key);
      }
    });
    saveDb();
    res.json({
      message: "Contact message updated successfully",
      updatedFields,
      item: db.contactMessages[index],
    });
  } else {
    res.status(404).json({ message: "Contact message not found" });
  }
});

// Get contact messages (admin only)
app.get("/contact-messages", verifyToken, (req, res) =>
  res.json(db.contactMessages)
);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
