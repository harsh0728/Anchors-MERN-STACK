const mongoose = require("mongoose");

const InternSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false,
      },
      title: {
        type: String,
        required: false,
      },
      url: {
        type: String,
        required: false,
      },
      referenceId: {
        type: String,
        required: false,
      },
      posterId: {
        type: String,
        required: false,
      },
      company: {
        name: {
          type: String,
          required: false,
        },
        logo: {
          type: String,
          required: false,
        },
        url: {
          type: String,
          required: false,
        },
        staffCountRange: {
          // You may define the specific type for staffCountRange if available
          type: mongoose.Schema.Types.Mixed,
        },
        headquarter: {
          // You may define the specific type for headquarter if available
          type: mongoose.Schema.Types.Mixed,
        },
      },
      location: {
        type: String,
        required: false,
      },
      type: {
        type: String,
        required: false,
      },
      postDate: {
        type: String,
        required: false,
      },
});

module.exports = mongoose.model("Internship", InternSchema);
