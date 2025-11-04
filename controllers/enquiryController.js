const Enquiry = require('../models/Enquiry');

// @desc    Submit a new enquiry
// @route   POST /api/enquiries/submit
// @access  Public
exports.submitEnquiry = async (req, res) => {
  const { name, email, courseInterest } = req.body;

  try {
    if (!name || !email || !courseInterest) {
      return res.status(400).json({ message: 'Please fill all fields' });
    }

    const enquiry = new Enquiry({
      name,
      email,
      courseInterest,
    });

    const createdEnquiry = await enquiry.save();
    res.status(201).json(createdEnquiry);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Fetch all unclaimed (public) leads
// @route   GET /api/enquiries/public
// @access  Private (Employee only)
exports.getPublicEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find({ claimedBy: null }).sort({
      createdAt: -1,
    });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Claim a lead
// @route   POST /api/enquiries/claim/:id
// @access  Private (Employee only)
exports.claimEnquiry = async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);

    if (!enquiry) {
      return res.status(404).json({ message: 'Enquiry not found' });
    }

    if (enquiry.claimedBy) {
      return res.status(400).json({ message: 'Enquiry already claimed' });
    }

    enquiry.claimedBy = req.user._id;
    const updatedEnquiry = await enquiry.save();

    res.json(updatedEnquiry);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc    Fetch leads claimed by the logged-in user
// @route   GET /api/enquiries/my
// @access  Private (Employee only)
exports.getMyEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find({ claimedBy: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};