import express from "express";

const router = express();

router.get("/", (req, res) => {
  res.send(`Version ${process.env.npm_package_version}`);
});

/**
 * Add status check here (connectiviy, status health etc..)
 */
router.get("/status", (req, res) => {
  res.json({
    running: true
  });
});

export default router;
