import { buildFeedbackPath, extractFeedback } from './index';

function handler(req, res) {
  const feedbackId = req.query.feedback;
  const filePath = buildFeedbackPath();
  console.log(feedbackId);
  const feedbackData = extractFeedback(filePath);
  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;