const { writerDetail } = require("../models");

const writerDetailData = [
  {
    writer_name: "John Smith",
    writer_bio: "John Smith is a writer from New York City.",
  },
  {
    writer_name: "Jane Doe",
    writer_bio: "Jane Doe is a writer from Los Angeles.",
  },
  {
    writer_name: "Mike Johnson",
    writer_bio: "Mike Johnson is a writer from Chicago.",
  },
  {
    writer_name: "Samantha Brown",
    writer_bio: "Samantha Brown is a writer from Miami.",
  },
  {
    writer_name: "David Lee",
    writer_bio: "David Lee is a writer from San Francisco.",
  },
  {
    writer_name: "Sarah White",
    writer_bio: "Sarah White is a writer from Boston.",
  },
  {
    writer_name: "Tom Green",
    writer_bio: "Tom Green is a writer from Seattle.",
  },
  {
    writer_name: "Emily Adams",
    writer_bio: "Emily Adams is a writer from Denver.",
  },
  {
    writer_name: "James Davis",
    writer_bio: "James Davis is a writer from Atlanta.",
  },
  {
    writer_name: "Ashley Martinez",
    writer_bio: "Ashley Martinez is a writer from Dallas.",
  },
];

const seedWriterDetail = () => writerDetail.bulkCreate(writerDetailData);

module.exports = seedWriterDetail;
