const List = require("../Models/listing");
const jScrapper = require("../Utils/jobinjaScraper");
const pScrapper = require("../Utils/karlancerScraper");

const APIFeature = require("../Utils/apiFeature");

exports.newJob = async (req, res, next) => {
  const job = await List.create(req.body);
  res.status(201).json({
    success: true,
    job,
  });
};

exports.scrapData = async (req, res, next) => {
  
   pScrapper(req.params.page);
   await jScrapper(req.params.page);
  try {
    res.status(200).json({
      success: true,
      message: "داده های  با موفقیت ذخیره شد",
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.getJobs = async (req, res, next) => {
  const resPerPage = 12;
  const jobsCount = await List.countDocuments();
  const apiFeature = new APIFeature(List.find(), req.query)
    .search()
    .filter()
    .pagination(resPerPage);
  const jobs = await apiFeature.query;
  res.status(200).json({
    success: true,
    jobsCount,
    resPerPage,
    jobs,
  });
};

exports.getsingleJob = async (req, res, next) => {
  const job = await List.findById(req.params.id);
  if (!job) {
    res.status(404).json({
      success: false,
      message: "داده مورد نظر یافت نشد",
    });
  }
  res.status(200).json({
    success: true,
    job,
  });
};

exports.updateJob = async (req, res, next) => {
  let job = await List.findById(req.params.id);
  if (!job) {
    res.status(404).json({
      success: false,
      message: "داده مورد نظر یافت نشد",
    });
  }
  job = await List.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    job,
  });
};
exports.deleteAllJob = async (req, res, next) => {
  const jobs = await List.deleteMany({});
  
  res.status(200).json({
    success: true,
    message: "تمام داده ها با موفقیت حذف شد",
  });
};
exports.deleteJob = async (req, res, next) => {
  const job = await List.findById(req.params.id);
  if (!job) {
    res.status(404).json({
      success: false,
      message: "داده مورد نظر یافت نشد",
    });
  }
  await job.remove();
  res.status(200).json({
    success: true,
    message: "داده مورد نظر با موفقیت حذف شد",
  });
};
exports.downloadJobExcel=async(req, res, next)=>{
  res.download(`${__dirname}/../jobs.csv`);
  
}
exports.downloadProExcel=async(req, res, next)=>{
  const excelfile = '../projects.csv';
  res.download(`${__dirname}/../projects.csv`);
}
