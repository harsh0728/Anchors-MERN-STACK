const unirest = require("unirest");
const dotenv = require("dotenv");
const User = require("../models/User");
const Internship = require("../models/Internship");
dotenv.config();

const url = "https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs";

const req = unirest(
  "GET",
  "https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs"
);

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.XRapidAPIKey,
    "X-RapidAPI-Host": process.env.XRapidAPIHost,
  },
  qs: {
    keywords: "golang",
    locationId: "92000000",
    datePosted: "anyTime",
    sort: "mostRelevant",
  },
};

exports.InternshipDetails = async (req, res) => {
  try {
    const response = await unirest
      .get(url)
      .headers(options.headers)
      .query(options.qs);
    const result = response.body; // Assuming the response is JSON

    console.log("LinkedIn Jobs API Response:", result);

    const userid = req.user.id;
    if (!userid) {
      return res
        .status(401)
        .json({ success: false, message: "Error in finding user id" });
    }

    let newIntern="";
    try {
       newIntern = await Internship.create({
        id: result.id,
        title: result.title,
        url: result.url,
        referenceId: result.referenceId,
        posterId: result.posterId,
        company: {
          name: result.company?.name, // Adjust property access based on the actual structure
          logo: result.company?.logo,
          url: result.company?.url,
          staffCountRange: result.company?.staffCountRange,
          headquarter: result.company?.headquarter,
        },
        location: result.location,
        type: result.type,
        postDate: result.postDate,
      });

      //await newIntern.populate("company").exec();


      // await User.findByIdAndUpdate(userid, {
      //   $push: { Internships: newIntern._id },
      // }, { new: true }).populate('Internships').exec();

      console.log("User Internships updated",newIntern._id);




    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Error while updating database for internship" });
    }

    return res.json({
      success: true,
      newIntern,
      message:
        "Internship data fetched and User Internships updated successfully",
      
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
