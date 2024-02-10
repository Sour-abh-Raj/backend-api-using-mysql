const { blog } = require("../models");

const blogData = [
  {
    blog_title: "Quantum Computing: The Future of Computing",
    blog_content:
      "Quantum computing is the future of computing. It is a new type of computing that uses quantum-mechanical phenomena, such as superposition and entanglement, to perform operations on data. Quantum computers are much faster than classical computers and can solve problems that are currently intractable for classical computers. Quantum computing has the potential to revolutionize fields such as cryptography, drug discovery, and materials science.",
    writer_id: 1,
    sub_category_id: 1,
  },
  {
    blog_title: "Artificial Intelligence: The Future of AI",
    blog_content:
      "Artificial intelligence (AI) is the future of computing. It is a branch of computer science that aims to create intelligent machines that can perform tasks that typically require human intelligence. AI has the potential to revolutionize fields such as healthcare, finance, and transportation. It is already being used to develop self-driving cars, diagnose diseases, and detect fraud. AI has the potential to transform the way we live and work.",
    writer_id: 1,
    sub_category_id: 1,
  },
];

const seedBlogs = () => blog.bulkCreate(blogData);

module.exports = seedBlogs;
